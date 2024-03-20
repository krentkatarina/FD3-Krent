import React from 'react';
import './produckts-list.css'

const ProductList = ({ products, selectedProductId, onSelectProduct, onDeleteProduct }) => {
  return (
    <table className="product-list">
      <thead>
        <tr>
          <th>Название</th>
          <th>Цена</th>
          <th>Остаток</th>
          <th>Фотография</th>
          <th>Удалить</th>
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
            <td><img src={product.image} alt={product.name} /></td>
            <td>
              <button onClick={(e) => {
                e.stopPropagation();
                onDeleteProduct(product.id); }}>Удалить</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductList;