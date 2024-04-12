import React, { useState, useMemo } from "react";
import { personsEvents } from "../ebents";
import './Person.css';

const Person = (props) => {
    const clientMode = {
      view: 1,
      edit: 2,
    };
    const [mode, setChecked] = useState(
      !(
        props.client.surname &&
        props.client.name &&
        props.client.pathname &&
        props.client.balance
      )
        ? clientMode.edit
        : clientMode.view
    );
  
    let surnameRef = React.createRef();
    let nameRef = React.createRef();
    let pathnameRef = React.createRef();
    let balanceRef = React.createRef();
    const edit = () => {
      setChecked(clientMode.edit);
    };
    const save = () => {
        personsEvents.emit("save", {
        id: props.client.id,
        surname: surnameRef.current.value,
        name: nameRef.current.value,
        pathname: pathnameRef.current.value,
        balance: balanceRef.current.value,
      });
      setChecked(clientMode.view);
    };
    const deleteClient = () => {
        personsEvents.emit("delete", props.client.id);
    };
    const cancel = () => {
      setChecked(clientMode.view);
    };
  
    const memoizeedRenderResult = useMemo(() => {
      console.log("Клиент с id =" + props.client.id + " render");
      return (
        <tr>
          <td>
            {mode == clientMode.view ? (
              props.client.surname
            ) : (
              <input type="text" defaultValue={props.client.surname} ref={surnameRef} />
            )}
          </td>
          <td>
            {mode == clientMode.view ? (
              props.client.name
            ) : (
              <input type="text" defaultValue={props.client.name} ref={nameRef} />
            )}
          </td>
          <td>
            {mode == clientMode.view ? (
              props.client.pathname
            ) : (
              <input type="text" defaultValue={props.client.pathname} ref={pathnameRef} />
            )}
          </td>
          <td>
            {mode == clientMode.view ? (
              props.client.balance
            ) : (
              <input
                type="number"
                defaultValue={props.client.balance}
                ref={balanceRef}
              />
            )}
          </td>
          <td className={props.client.balance >= 0 ? "active" : "blocked"}>
            {props.client.balance >= 0 ? "active" : "blocked"}
          </td>
          <td>
            {mode == clientMode.view ? (
              <input type="button" value="Редактировать" onClick={edit} />
            ) : (
              <div>
                <input type="button" value="Сохранить" onClick={save} />
                <input type="button" value="Отменить" onClick={cancel} />
              </div>
            )}
          </td>
          <td>
            <input type="button" value="Удалить" onClick={deleteClient} />
          </td>
        </tr>
      );
    }, [
      props.client.surname,
      props.client.name,
      props.client.pathname,
      props.client.balance,
      mode,
    ]);
  
    return memoizeedRenderResult;
  };
  
  
  export default Person;