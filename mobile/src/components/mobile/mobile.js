import React from "react";
import { personsEvents } from "../event.js";
import Person from "../persons/pesons.js";
import './mobile.css';
import { v4 as uuidv4 } from 'uuid';


const generateRandomId = () => {
  return uuidv4();
};


class Mobile extends React.PureComponent  {
    filter = {
      allPersons: 0,
      activePersons: 1,
      blockedPersons: 2,
    };
  
    state = {
      persons: this.props.persons,
      filter: this.filter.allPersons,
    };
  
    componentDidMount() {
      personsEvents.addListener("save", this.save);
      personsEvents.addListener("delete", this.delete);
    }
  
    componentWillUnmount() {
      personsEvents.removeListener("save", this.save);
      personsEvents.removeListener("delete", this.delete);
    }
  
   
    save = (update) => {
      this.setState(prev => ({
        persons: prev.persons.map(person => 
          person.id === update.id ? update : person
        )
      }));
    };
  
    delete = (id) => {
      this.setState(prev => ({
        persons: prev.persons.filter(person => person.id !== id)
      }));
    };
  
    addPeson = () => {
      const newPerson = {
        id: generateRandomId(),
        surname: "",
        name: "",
        pathname: "",
        balance: 0,
      };
      this.setState(prev => ({
        persons: [...prev.persons, newPerson]
      }));
    };

    handleFilterChange = (filter) => {
      this.setState({ filter: filter });
    };
  
    render() {
      console.log("Mobile");

      let filteredPersons = [];
      switch (this.state.filter) {
        case this.filter.allPersons: {
          filteredPersons = this.state.persons;
          break;
        }
        case this.filter.active: {
          filteredPersons = this.state.persons.filter(
            (person) => person.balance >= 0
          );
          break;
        }
        default: {
          filteredPersons = this.state.persons.filter(
            (person) => person.balance < 0
          );
          break;
        }
      }
  
      const persons = filteredPersons.map(person => (
        <Person person={person} key={person.id} />
      ));
  
      return (
        <div>
            <div>
                <input  type="button" 
                        value="Все" 
                        className="allButton"
                        onClick={() => this.handleFilterChange(this.filter.allPersons)} />
                
                <input  type="button" 
                        value="Активные"
                        className="activeButton" 
                        onClick={() => this.handleFilterChange(this.filter.activePersons)} />
                
                <input  type="button" 
                        value="Заблокированные" 
                        className="disabledButton"
                        onClick={() => this.handleFilterChange(this.filter.blockedPersons)} />
            </div>
         
          <table className="mobileTable">
            <thead>
              <tr>
                <th>Фамилия</th>
                <th>Имя</th>
                <th>Отчество</th>
                <th>Баланс</th>
                <th>Статус</th>
                <th>Редактировать</th>
                <th>Удалить</th>
              </tr>
            </thead>
            <tbody>{persons}</tbody>
          </table>

            <input  type="button" 
                    value="Добавить клиента" 
                    onClick={this.addPeson} />

        </div>
      );
    }
  }
  
  export default Mobile;