import React from 'react';
import ProductList from './components/product-list/product-list'; 

import products from './components/data/produckts.json'


function App() {
  return (
    <div>
      <ProductList  storeName="Sweet candys" 
                    products={products} />
  </div>
  );
}

export default App;
