import React from "react";
import { personsEvents } from "../event.js";
import './persons.css';


class Person extends React.PureComponent {

  personsState = {
    show: 1,
    edit: 2,
  };

  state = {
    mode: !(this.props.person.surname && this.props.person.name && this.props.person.pathname && this.props.person.balance) ? this.personsState.edit : this.personsState.show 
  }


  surnameRef = React.createRef();
  nameRef = React.createRef();
  pathnameRef = React.createRef();
  balanceRef = React.createRef();


  save = () => {
    personsEvents.emit("save", {
      id: this.props.person.id,
      surname: this.surnameRef.current.value,
      name: this.nameRef.current.value,
      pathname: this.pathnameRef.current.value,
      balance: this.balanceRef.current.value,
    });
    this.setState({ 
      mode: this.personsState.show 
    });
  };

  cancel = () => {
    this.setState({ 
      mode: this.personsState.show 
    });
  };


  edit = () => {
    this.setState({ 
      mode: this.personsState.edit 
    });
  };
  

  delete = () => {
    personsEvents.emit("delete", this.props.person.id);
  };
  
  
  
  render() {
    
    return (
      <tr>
        <td>
          {this.state.mode == this.personsState.show ? (
            this.props.person.surname) : (
            <input
              type="text"
              placeholder="Фамилия"
              defaultValue={this.props.person.surname}
              ref={this.surnameRef}
            />
          )}
        </td>
        <td>
          {this.state.mode == this.personsState.show ? (
            this.props.person.name) : (
            <input
              type="text"
              placeholder="Имя"
              defaultValue={this.props.person.name}
              ref={this.nameRef}
            />
          )}
        </td>
        <td>
          {this.state.mode == this.personsState.show ? (
            this.props.person.pathname) : (
            <input
              type="text"
              placeholder="Отчество"
              defaultValue={this.props.person.pathname}
              ref={this.pathnameRef}
            />
          )}
        </td>
        <td>
          {this.state.mode == this.personsState.show ? (
            this.props.person.balance) : (
            <input
              type="number"
              defaultValue={this.props.person.balance}
              ref={this.balanceRef}
            />
          )}
        </td>
        <td className={this.props.person.balance >= 0 ? "active" : "blocked"}>
          {this.props.person.balance >= 0 ? "active" : "blocked"}
        </td>
        <td>
            {this.state.mode == this.personsState.show ? (
                <input type="button" 
                       value="Редактировать" 
                       onClick={this.edit} />
            ) : (
                <div>
                <input  type="button" 
                        value="Сохранить" 
                        onClick={this.save} />

                <input  type="button" 
                        value="Отменить" 
                        onClick={this.cancel} />
                </div>
            )}
        </td>
        <td>
            <input type="button" value="Удалить" onClick={this.delete} />
        </td>
      </tr>
    );
  }
}

export default Person;