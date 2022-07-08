import logo from './logo.svg';
import './App.css';
import DataSetter from './Components/DataSetter';
import DataViewer from './Components/DataViewer';
import React, { useState } from 'react';

function App() {
  const [ arr, setArr ] = useState([]);

  const prepareArr = (arr) => {
    return arr.sort((a, b) => {
      return a - b;
    });
  }
  return (
    <div className="App">
      <DataSetter 
      arr={(elem) => {
        setArr([...arr, elem]);
      }}
      />
      <DataViewer data={prepareArr(arr)} remove={(id) => {
        setArr(arr.filter(o => o.id !== id));
      }}/>
    </div>
  );
}

export default App;
