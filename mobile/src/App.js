import React from 'react';
import Mobile from './components/mobile/mobile.js';
import { v4 as uuidv4 } from 'uuid';


const generateRandomId = () => {
  return uuidv4();
};


let personsArray = [ 
  {
    id: generateRandomId(),
    surname:"Крент",
    name:"Катарина",
    pathname:"Сергеевна",
    balance: 100
  }, 
  {
    id: generateRandomId(),
    surname:"Грицкевич",
    name:"Наталья",
    pathname:"Иосифовна",
    balance: 200
  }, 
  {
    id: generateRandomId(),
    surname:"Максимов",
    name:"Юрий", 
    pathname:"Владимирович", 
    balance: 300
  },
  {
    id: generateRandomId(),
    surname:"Кучура",
    name:"Максим", 
    pathname:"Владимирович",
    balance: -1000
  },
  {
    id: generateRandomId(),
    surname:"Мохарт",
    name:"Владислав", 
    pathname:"Дмитриевич",
    balance: -5000
  }

];


function App() {
  return (
    <Mobile persons={personsArray}/>
  )
}

export default App;