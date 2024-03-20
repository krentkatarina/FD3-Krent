

const ProductItem = ({ product }) => (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.stock}</td>
      <td><img src={product.image} alt={product.name} /></td>
    </tr>
);

export default ProductItem;