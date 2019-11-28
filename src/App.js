import React from 'react';
import  FormSelectBox from './components/FormSelectBox';
import './App.css';

function App() {
  return (
    <div className="App">
           <div>
          <FormSelectBox items={[{value: 'Settings', id: 1},{ value: 'LogOut', id: 2}]}/>
        </div>
    </div>
  );
}

export default App;
