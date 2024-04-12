import React, { memo, useRef, useState } from "react";
import { personsEvents } from "../events";
import './persons.css';

const Person = memo(({ person }) => {
    const personsState = {
      show: 1,
      edit: 2,
    };
  
    const [mode, setMode] = useState(!(person.surname && person.name && person.pathname && person.balance) ? personsState.edit : personsState.show);
    const surnameRef = useRef(person.surname);
    const nameRef = useRef(person.name);
    const pathnameRef = useRef(person.pathname);
    const balanceRef = useRef(person.balance);
  
    const save = () => {
      personsEvents.emit("save", {
        id: person.id,
        surname: surnameRef.current.value,
        name: nameRef.current.value,
        pathname: pathnameRef.current.value,
        balance: balanceRef.current.value,
      });
      setMode(personsState.show);
    };
  
    const cancel = () => {
      setMode(personsState.show);
      surnameRef.current.value = person.surname;
      nameRef.current.value = person.name;
      pathnameRef.current.value = person.pathname;
      balanceRef.current.value = person.balance;
    };
  
    const edit = () => {
      setMode(personsState.edit);
    };
  
    const deletePerson = () => {
      personsEvents.emit("delete", person.id);
    };
    console.log("Рендер клиента:", person.id);
    return (
      
      <tr>
        <td>
          {mode === personsState.show ? (
            person.surname
          ) : (
            <input
              type="text"
              placeholder="Фамилия"
              defaultValue={person.surname}
              ref={surnameRef}
            />
          )}
        </td>
        <td>
          {mode === personsState.show ? (
            person.name
          ) : (
            <input
              type="text"
              placeholder="Имя"
              defaultValue={person.name}
              ref={nameRef}
            />
          )}
        </td>
        <td>
          {mode === personsState.show ? (
            person.pathname
          ) : (
            <input
              type="text"
              placeholder="Отчество"
              defaultValue={person.pathname}
              ref={pathnameRef}
            />
          )}
        </td>
        <td>
          {mode === personsState.show ? (
            person.balance
          ) : (
            <input
              type="number"
              defaultValue={person.balance}
              ref={balanceRef}
            />
          )}
        </td>
        <td className={person.balance >= 0 ? "active" : "blocked"}>
          {person.balance >= 0 ? "active" : "blocked"}
        </td>
        <td>
          {mode === personsState.show ? (
            <input
              type="button"
              value="Редактировать"
              onClick={edit}
            />
          ) : (
            <div>
              <input
                type="button"
                value="Сохранить"
                onClick={save}
              />
              <input
                type="button"
                value="Отменить"
                onClick={cancel}
              />
            </div>
          )}
        </td>
        <td>
          <input
            type="button"
            value="Удалить"
            onClick={deletePerson}
          />
        </td>
      </tr>
    );
  });
  
  export default Person;