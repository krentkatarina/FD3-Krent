import React, { useState } from 'react';

import ProductList from '../products-list/produckts-list';
import productsData from '../data/products.json';

function Shop() {
  const [products, setProducts] = useState(productsData);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleSelectProduct = (productId) => {
    setSelectedProductId(productId);
  };

  const handleDeleteProduct = (productId) => {
    if (window.confirm('Вы уверены, что хотите удалить товар?')) {
      setProducts(products.filter(product => product.id !== productId));
      setSelectedProductId(selectedProductId === productId ? null : selectedProductId);
    }
  };

  // const nameShop = 'Маазин';

  return (
    <div>
    
      <ProductList
        products={products}
        selectedProductId={selectedProductId}
        onSelectProduct={handleSelectProduct}
        onDeleteProduct={handleDeleteProduct}
      />
    </div>
  );
}

export default Shop;