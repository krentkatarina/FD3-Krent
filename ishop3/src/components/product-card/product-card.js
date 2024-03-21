import React, { Component } from 'react';

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="product-card">
        <h2>{product.name}</h2>
        <p>Цена: {product.price}</p>
        <p>Остаток: {product.stock}</p>
        <img src={product.image} alt={product.name} />
      </div>
    );
  }
}

export default ProductCard;