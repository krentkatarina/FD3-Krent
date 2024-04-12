import React from "react";
import './product-card.css'


class ProductCard extends React.Component {
  render() {
    return (
        <div className="card">
            <div>{this.props.checkedItem.productName}</div>
            <div>Цена: <span>{this.props.checkedItem.price}</span></div>
            <div>Количество: <span >{this.props.checkedItem.quantity}</span></div>
            <div>Изображение: <img src={this.props.checkedItem.picture} alt={this.props.checkedItem.productName} /></div>
      
      </div>
    );
  }
}

export default ProductCard;