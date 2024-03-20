
import ProductItem from "../product-item/product-item"; 
import './produckt-list.css';


const ProductList = ({ storeName, products }) => (
    <div>
      <h2>{storeName}</h2>
      <table>
        <thead>
          <tr>
            <th>Название</th>
            <th>Цена</th>
            <th>Остаток</th>
            <th>Фото</th>
          </tr>
        </thead>
        <tbody>
          {products.map((productsData, index) => (
            <ProductItem key={index} product={productsData} />
          ))}
        </tbody>
      </table>
    </div>
  );

  export default ProductList
