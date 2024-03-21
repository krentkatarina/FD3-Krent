import React, { Component } from 'react';
import ProductList from '../products-list/products-list';
import productsData from '../data/products.json';
import ProductCard from '../product-card/product-card';

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productsData,
      selectedProductId: null,
    };
  }

  handleSelectProduct = (productId) => {
    this.setState({ selectedProductId: productId });
  };

  handleDeleteProduct = (productId) => {
    if (window.confirm('Вы уверены, что хотите удалить товар?')) {
      this.setState(prevState => ({
        products: prevState.products.filter(product => product.id !== productId),
        selectedProductId: prevState.selectedProductId === productId ? null : prevState.selectedProductId
      }));
    }
  };

  handleAddProduct = (newProduct) => {
    // Добавление нового товара в список товаров
    const updatedProducts = [...this.state.products, newProduct];
    this.setState({ products: updatedProducts });
  };

  render() {
    const { products, selectedProductId } = this.state;

    return (
      <div>
        <ProductList
          products={products}
          selectedProductId={selectedProductId}
          onSelectProduct={this.handleSelectProduct}
          onDeleteProduct={this.handleDeleteProduct}
          onAddProduct={this.handleAddProduct} 
        />
        {selectedProductId && <ProductCard product={products.find(product => product.id === selectedProductId)} />} 
      </div>
    );
  }
}

export default Shop;