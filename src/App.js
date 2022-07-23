import logo from './logo.svg';
import './App.css';
import DataSetter from './Components/DataSetter';
import DataViewer from './Components/DataViewer';
import React, { useState } from 'react';
import moment from 'moment';

function App() {
  const [ arr, setArr ] = useState([]);

  const prepareArr = (arr) => {
    return arr.sort((a, b) => {
      if(a.date < b.date) {
        return 1;
      } else if(a.date > b.date) {
        return -1;
      } 
    });
  }
  return (
    <div className="App">
      <DataSetter 
      arr={(elem) => {
        let newArr = [];
        let isValid = false;
        /*if(arr.length > 0){
          newArr = arr.map((el, index) => {
            if(el.data === elem.data){
              el.km += elem.km
              isValid = true;
            }
          })
        }*/
        if(!isValid){
          setArr([...arr, elem]);
        } else {
          setArr([...newArr, elem])
        }
      }}
      />
      <DataViewer data={prepareArr(arr)} remove={(id) => {
        setArr(arr.filter(o => o.id !== id));
      }}/>
    </div>
  );
}

export default App;
