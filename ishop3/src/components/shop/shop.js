import React from "react";

import ProductItem from "../products-item/products-item";
import ProductCard from "../product-card/product-card";
import ProductsList from "../products-list/products-list";
import './shop.css'

const modelState = {
  view: 0,
  edit: 1,
  add: 2,
};

class Shop extends React.Component {
  state = {
    checkedItemKey: this.props.goods.length > 0 ? this.props.goods[0].key : null,
    goods: this.props.goods,
    checkedItem: this.props.goods.length > 0 ? this.props.goods[0] : null,
    modelState: modelState.view,
  };

  checkItem = (key) => {
    this.setState({ checkedItemKey: key });
    this.setState({
      checkedItem: this.state.goods.filter((item) => item.key == key)[0],
    });
  };

  deleteItem = (key) => {
    const goods = this.state.goods.filter((item) => item.key != key);
 
    if (this.state.checkedItemKey == key){
      const newKey= goods.length > 0 ? goods[0].key : null
      this.setState({ checkedItemKey: newKey });
      if (newKey)
      this.setState({
        checkedItem: this.state.goods.filter((item) => item.key == newKey)[0],
      });
      else  this.setState({
        checkedItem: {},
      });
    }
    this.setState({ goods: goods });
  };

  editItem = (key) => {
    this.setState({ checkedItemKey: key });
    this.setState({
      checkedItem: this.state.goods.filter((item) => item.key == key)[0],
    });
    this.setState({ modelState: modelState.edit });
  };

  cancelEdit = () => {
    this.setState({ modelState: modelState.view });
    this.setState({
      checkedItem: this.state.goods.filter((item) => item.key == this.state.checkedItemKey)[0],
    });
  };

  saveEdit = (product) => {
    this.setState({ modelState: modelState.view });
    if (this.state.modelState == modelState.edit) {
      let currItem =this.state.goods.filter((item) => item.key == product.key)[0];
      currItem.productName = product.productName;
      currItem.price = product.price;
      currItem.picture = product.picture;
      currItem.quantity = product.quantity;
      this.setState({ checkedItem: currItem });
    } else {
      this.state.goods.push(product);
      this.setState({ checkedItemKey: product.key });
      this.setState({ goods: this.state.goods });
      let currItem =this.state.goods.filter((item) => item.key == product.key)[0];
      this.setState({ checkedItem: currItem });
    }
  };

  addItem = () => {
    let newKey = this.getRandomInt(this.state.goods.length + 20);
    while (
      this.state.goods.filter((item) => item.key == newKey).length > 0 ||
      newKey < 1
    ) {
      newKey = this.getRandomInt(this.state.goods.length + 20);
    }
    let newGood = {
      key: newKey,
      productName: "",
      price: "",
      picture: "",
      quantity: "",
    };
    this.setState({ modelState: modelState.add });
    this.setState({ checkedItem: newGood });
  };
  getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };
  render() {
    const products = this.state.goods.map((v, i) => (
      <ProductItem
        key={v.key}
        index={v.key}
        checked={this.state.checkedItemKey == v.key}
        productName={v.productName}
        price={v.price}
        quantity={v.quantity}
        picture={v.picture}
        checkItem={this.checkItem}
        deleteItem={this.deleteItem}
        editItem={this.editItem}
        disableBtn={this.state.modelState!=modelState.view}
      />
    ));
    const addButton =
      this.state.modelState == modelState.view ? (
        <input  type="button" 
                value="Добавить" 
                className="add-button"
                onClick={this.addItem} />
      ) : (
        ""
      );
    const buttomBlock =
      this.state.modelState == modelState.view ? (
        <ProductCard checkedItem={this.state.checkedItem}></ProductCard>
      ) : (
        <ProductsList
          stateModel={this.state.modelState}
          currentItem={this.state.checkedItem}
          cancelEdit={this.cancelEdit}
          saveEdit={this.saveEdit}>
        </ProductsList>
      );

    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Sweet candys</h1>
        <table>
          <thead>
            <tr>
              <th>Название</th>
              <th>Изображение</th>
              <th>Цена</th>
              <th>Количество</th>
              <th>Управление</th>
            </tr>
          </thead>
          <tbody>{products}</tbody>
        </table>
        {addButton}
        {buttomBlock}
      </div>
    );
  }
}

export default Shop;