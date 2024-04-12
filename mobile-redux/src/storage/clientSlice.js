import { createSlice } from '@reduxjs/toolkit';
const initialState = 
 [ 
    {
      id: 1,
      surname:"Крент",
      name:"Катарина",
      pathname:"Сергеевна",
      balance: 100
    }, 
    {
      id: 2,
      surname:"Грицкевич",
      name:"Наталья",
      pathname:"Иосифовна",
      balance: 200
    }, 
    {
      id: 3,
      surname:"Максимов",
      name:"Юрий", 
      pathname:"Владимирович", 
      balance: 300
    },
    {
      id: 4,
      surname:"Кучура",
      name:"Максим", 
      pathname:"Владимирович",
      balance: -1000
    },
    {
      id: 5,
      surname:"Мохарт",
      name:"Владислав", 
      pathname:"Дмитриевич",
      balance: -5000
    }
  
  ];

  export const clientsSlice = createSlice({
    name: "persons",
    initialState,
    reducers: {
        savePerson: (state, action) => {
        state.forEach((person) => {
          if (person.id === action.payload.id) {
            person.surname = action.payload.surname;
            person.name = action.payload.name;
            person.pathname = action.payload.pathname;
            person.balance = action.payload.balance;
          }
        });
      },
      addPerson: (state) => {
        const max = state.reduce((maxId, person) => Math.max(maxId, person.id), 0);
        state.push({
          id: max + 1,
          surname: "",
          name: "",
          pathname: "",
          balance: 0,
        });
      },
      deletePerson: (state, action) => {
        const index = state.findIndex((person) => person.id === action.payload);
        if (index !== -1) {
          state.splice(index, 1);
        }
      },
    },
  });
  
  export const { savePerson, addPerson, deletePerson } = clientsSlice.actions;
  
  export default clientsSlice.reducer;