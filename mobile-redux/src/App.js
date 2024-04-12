import React from 'react';
import Mobile from './components/Mobile/Mobile';
import { Provider } from "react-redux";
import { store } from "./storage/storage";

function App() {
  return (
    <Provider store={store}>
      <Mobile />
    </Provider>
  );
}

export default App;
