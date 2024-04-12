import React, { useState, useEffect } from "react";
import { personsEvents } from "../ebents.js";
import Person from "../Person/Person.js";
import { useDispatch, useSelector } from "react-redux";
import './Mobile.css';
import { savePerson, addPerson, deletePerson } from '../../storage/clientSlice.js'

const Mobile = (props) => {
    const filterType = {
      all: 0,
      active: 1,
      blocked: 2,
    };

    const [filter, setFilter] = useState(filterType.all);
    const clients = useSelector((state) => state.clients);
    const dispatch = useDispatch();
  
    useEffect(() => {
        personsEvents.addListener("save", save);
        personsEvents.addListener("delete", deleteCl);
      return () => {
        personsEvents.removeListener("save", save);
        personsEvents.removeListener("delete", deleteCl);
      };
    }, []);
  
    const showAll = () => {
      setFilter(filterType.all);
    };
    const showActive = () => {
      setFilter(filterType.active);
    };
    const showBlocked = () => {
      setFilter(filterType.blocked);
    };
    const save = (th) => {
      dispatch(savePerson(th));
    };
    const deleteCl = (id) => {
      dispatch(deletePerson(id));
    };
  
    const add = () => {
      dispatch(addPerson());
    };
  
    let filteredClients = [];
    switch (filter) {
      case filterType.all: {
        filteredClients = clients;
        break;
      }
      case filterType.active: {
        filteredClients = clients.filter((client) => client.balance >= 0);
        break;
      }
      default: {
        filteredClients = clients.filter((client) => client.balance < 0);
        break;
      }
    }
  
    const personsArray = filteredClients.map((client) => {
      return <Person client={client} key={client.id} />;
    });
  
    return (
      <div>
        <input type="button" value=" Все" onClick={showAll} />
        <input type="button" value="Активные" onClick={showActive} />
        <input type="button" value="Заблокированные" onClick={showBlocked} />
        <table>
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
  
          <tbody>{personsArray}</tbody>
        </table>
        <input type="button" value="Добавить клиента" onClick={add} />
      </div>
    );
  };
  
export default Mobile;