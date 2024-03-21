import React from "react";



class ProductsItem extends React.Component {
  render() {
    return (
        <div >
            <div>{this.props.checkedItem.productName}</div>
            <div>Цена: <span  >{this.props.checkedItem.price}</span></div>
            <div>Количество: <span >{this.props.checkedItem.quantity}</span></div>
            <div>Изображение: <img  src={this.props.checkedItem.pictureUrl} alt={this.props.checkedItem.productName} /></div>
      
      </div>
    );
  }
}

export default ProductsItem;