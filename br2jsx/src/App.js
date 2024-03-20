import React from 'react';
import BR2JSX  from './components/br2jsx/br2jsx'


function App() {
  let text = "первый<br>второй<br/>третий<br />последний";
    return (
        <BR2JSX text={text} />
    ) 
}

export default App;
