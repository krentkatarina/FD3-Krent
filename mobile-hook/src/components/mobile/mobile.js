import React, { useState, useEffect } from "react";
import { personsEvents } from "../events.js";
import Person from "../persons/persons.js";
import './mobile.css';
import { v4 as uuidv4 } from 'uuid';

const generateRandomId = () => {
  return uuidv4();
};

const Mobile = ({ persons }) => {
  const [filteredPersons, setFilteredPersons] = useState(persons);
  const [filter, setFilter] = useState(0); 

  useEffect(() => {
    personsEvents.addListener("save", save);
    personsEvents.addListener("delete", deletePerson);

    return () => {
      personsEvents.removeListener("save", save);
      personsEvents.removeListener("delete", deletePerson);
    };
  }, []);

  const save = (update) => {
    setFilteredPersons(prevPersons =>
      prevPersons.map(person =>
        person.id === update.id ? update : person
      )
    );
  };

  const deletePerson = (id) => {
    setFilteredPersons(prevPersons =>
      prevPersons.filter(person => person.id !== id)
    );
  };

  const addPerson = () => {
    const newPerson = {
      id: generateRandomId(),
      surname: "",
      name: "",
      pathname: "",
      balance: 0,
    };
    setFilteredPersons(prevPersons => [...prevPersons, newPerson]);
  };

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
  };

  useEffect(() => {
    let filteredPersons = [];
    switch (filter) {
      case 0:
        filteredPersons = persons;
        break;
      case 1:
        filteredPersons = persons.filter(person => person.balance >= 0);
        break;
      case 2:
        filteredPersons = persons.filter(person => person.balance < 0);
        break;
      default:
        filteredPersons = persons;
    }
    setFilteredPersons(filteredPersons);
  }, [filter, persons]);

  const personsList = filteredPersons.map(person => (
    <Person person={person} key={person.id} />
  ));

  
  console.log("Mobile");
  return (
    <div>
      <div>
        <input
          type="button"
          value="Все"
          className="allButton"
          onClick={() => handleFilterChange(0)}
        />

        <input
          type="button"
          value="Активные"
          className="activeButton"
          onClick={() => handleFilterChange(1)}
        />

        <input
          type="button"
          value="Заблокированные"
          className="disabledButton"
          onClick={() => handleFilterChange(2)}
        />
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
        <tbody>{personsList}</tbody>
      </table>

      <input
        type="button"
        value="Добавить клиента"
        onClick={addPerson}
      />
    </div>
  );
};

export default Mobile;