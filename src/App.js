import logo from './logo.svg';
import './App.css';
import DataSetter from './Components/DataSetter';
import DataViewer from './Components/DataViewer';
import React, { useState } from 'react';

function App() {
  const [ arr, setArr ] = useState([]);
  return (
    <div className="App">
      <DataSetter 
      arr={(elem) => {
        setArr([...arr, elem]);
      }}
      />
      <DataViewer data={arr} remove={(id) => {
        setArr(prev => prev.filter(o => o.id !== id))
      }}/>
    </div>
  );
}

export default App;
