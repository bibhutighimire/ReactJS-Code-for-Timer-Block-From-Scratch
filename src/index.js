import React from 'react';
import ReactDOM from 'react-dom';
import AddNewTimer from './components/AddNewTimer';


ReactDOM.render(
  <React.StrictMode>
    
    <AddNewTimer isOpen={false}/>
  </React.StrictMode>,
  document.getElementById('root')
);

