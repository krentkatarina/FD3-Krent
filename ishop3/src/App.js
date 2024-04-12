import React from 'react';
import Shop from './components/shop/shop';

import productData from './components/data/products.json'

function App() {
return(
  <Shop goods={productData}
  />
)
  
}
  
export default App;