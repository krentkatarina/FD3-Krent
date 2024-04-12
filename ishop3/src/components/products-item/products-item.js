import React from "react";

import './productItem.css'

class ProductItem extends React.Component {
  checkItem = () => {
    this.props.checkItem(this.props.index);
  };
  deleteItem = (eo) => {
    eo.stopPropagation();
    if (window.confirm("Точно хотите удалить " + this.props.productName + "?"))
      this.props.deleteItem(this.props.index);
  };
  changeItem = (eo) => {
    eo.stopPropagation();
    this.props.editItem(this.props.index);
  };
  render() {
    return (
      <tr
        onClick={this.checkItem}
        className={this.props.checked == true ? "checked" : ""}
      >
        <td>{this.props.productName}</td>
        <td>
          <img src={this.props.picture} alt={this.props.productName} />
        </td>
        <td>{this.props.price}</td>
        <td>{this.props.quantity}</td>
        <td>
          <input
            type="button"
            value={"Редактировать"}
            onClick={this.changeItem}
            disabled={this.props.disableBtn}
          />
          <input
            type="button"
            value={"Удалить"}
            onClick={this.deleteItem}
            disabled={this.props.disableBtn}
          />
        </td>
      </tr>
    );
  }
}

export default ProductItem;