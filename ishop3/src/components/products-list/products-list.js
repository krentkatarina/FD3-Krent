import React, { Component } from 'react';
import './products-list.css';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addingNewProduct: false,
      newProduct: {
        id: '',
        name: '',
        url: '',
        stock: ''
      }
    };
  }

  handleCreateNewProduct = () => {
    this.setState({ addingNewProduct: true });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      newProduct: {
        ...prevState.newProduct,
        [name]: value
      }
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { newProduct } = this.state;
    // Вызовите функцию для добавления нового товара с данными из newProduct
    // Например: this.props.onAddProduct(newProduct);
    // После добавления товара сбросьте значения нового товара и закройте форму
    this.setState({
      newProduct: {
        id: '',
        name: '',
        url: '',
        stock: ''
      },
      addingNewProduct: false
    });
  };

  render() {
    const { products, selectedProductId, onSelectProduct, onDeleteProduct } = this.props;
    const { addingNewProduct, newProduct } = this.state;
    return (
      <div>
        <table className="product-list">
          <thead>
            <tr>
              <th>Название</th>
              <th>Цена</th>
              <th>Остаток</th>
              <th>URL</th>
              <th>Удалить</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr
                key={product.id}
                className={selectedProductId === product.id ? 'selected' : ''}
                onClick={() => onSelectProduct(product.id)}
              >
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td><p>{product.image}</p></td>
                <td>
                <button 
                  >Редактировать</button>
                  <button onClick={(e) => {
                    e.stopPropagation();
                    onDeleteProduct(product.id);
                  }}>Удалить</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!addingNewProduct && <button onClick={this.handleCreateNewProduct}>Новый</button>}
        {addingNewProduct && (
          <div>
            <h3>Добавление нового товара</h3>
            <form onSubmit={this.handleSubmit}>
              <label>
                ID:
                <input type="text" name="id" value={newProduct.id} onChange={this.handleChange} />
              </label>
              <label>
                Название:
                <input type="text" name="name" value={newProduct.name} onChange={this.handleChange} />
              </label>
              <label>
                URL:
                <input type="text" name="url" value={newProduct.url} onChange={this.handleChange} />
              </label>
              <label>
                Остаток:
                <input type="text" name="stock" value={newProduct.stock} onChange={this.handleChange} />
              </label>
              <button type="submit">Добавить</button>
              <button onClick={() => this.setState({ addingNewProduct: false })}>Отмена</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default ProductList;