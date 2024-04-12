import React from "react";
import './products-list.css'

const modelState = {
  view: 0,
  edit: 1,
  add: 2,
};

class ProductsList extends React.Component {
  state = {
      id: this.props.currentItem.key || "",
      productName: this.props.currentItem.productName || "",
      productPrice: this.props.currentItem.price || "",
      productPicture: this.props.currentItem.picture || "",
      productQuantity: this.props.currentItem.quantity || "",
      nameValid: true,
      priceValid: true,
      pictureValid: true,
      quantityValid: true,
  };

  changeName = (eo) => {
    const newName = eo.target.value;
    this.setState({ productName: newName });
    this.setState({
      nameValid: this.checkText(newName),
    });
  };
  changePrice = (eo) => {
    const newPrice = eo.target.value;
    this.setState({ productPrice: newPrice });
    this.setState({
      priceValid: this.checkRationalNumber(newPrice),
    });
  };
  changePicture = (eo) => {
    const newPicture = eo.target.value;
    this.setState({ productPicture: newPicture });
    this.setState({
      pictureValid: this.checkPicture(newPicture),
    });
  };
  changeQuantity = (eo) => {
    const newQuantity = eo.target.value;
    this.setState({ productQuantity: newQuantity });
    this.setState({
      quantityValid: this.checkPositiveInteger(newQuantity),
    });
  };
  componentDidMount = () => {
    this.setState({
      nameValid: this.checkText(this.state.productName),
      priceValid: this.checkRationalNumber(this.state.productPrice),
      pictureValid: this.checkPicture(this.state.productPicture),
      quantityValid: this.checkPositiveInteger(this.state.productQuantity),
    });
  };
  checkText = (text) => {
    return text && text.length > 0;
  };
  checkRationalNumber = (num) => {
    return num > 0;
  };
  checkPositiveInteger = (num) => {
    return num > 0;
  };
  checkPicture = (url) => {
    var objRE = /(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;
    return objRE.test(url);
  };
  save = () => {
    this.props.saveEdit({
      key: this.state.id,
      productName: this.state.productName,
      price: this.state.productPrice,
      picture: this.state.productPicture,
      quantity: this.state.productQuantity,
    });
  };
  cancel = () => {
    this.props.cancelEdit();
  };

  doNothing = () => {};

  render() {
    const title = (
      <div>
        {this.props.stateModel == modelState.edit
          ? "Редактирование "
          : "Добавление "}
        продукта
      </div>
    );

    return (
      <div>
        {title}
        <div>
          <div className="label">Название:</div>
          <input
            type="text"
            value={this.state.productName}
            onChange={this.changeName}
            required
          />

          <span
            style={{ display: !this.state.nameValid ? "inline" : "none" }}
          >
          Значение должно быть хотя бы 1 символ
          </span>
        </div>
        <div>
          <div>Цена:</div>
          <input
            type="number"
            value={this.state.productPrice}
            onChange={this.changePrice}
            required
          />
          <span
            style={{ display: !this.state.priceValid ? "inline" : "none" }}
          >
            Значение должно быть больше нуля!
          </span>
        </div>
        <div>
          <div>Ссылка на изображение:</div>
          <input
            type="url"
            value={this.state.productPicture}
            onChange={this.changePicture}
            required
          />
          <span
            style={{ display: !this.state.pictureValid ? "inline" : "none" }}
          >
          Значение должно быть ссылкой (Например, https://chat.openai.com/)
          </span>
        </div>
        <div>
          <div>Количество:</div>
          <input
            type="number"
            value={this.state.productQuantity}
            onChange={this.changeQuantity}
            required
          />
          <span
            style={{ display: !this.state.quantityValid ? "inline" : "none" }}
          >
          Значение должно быть больше нуля
          </span>
        </div>
        <input
          type="button"
          value="Сохранить"
          onClick={this.save}
          disabled={
            !this.state.nameValid ||
            !this.state.priceValid ||
            !this.state.pictureValid ||
            !this.state.quantityValid
          }
        />
        <input type="button" value="Отмена" onClick={this.cancel} />
      </div>
    );
  }
}
export default ProductsList;