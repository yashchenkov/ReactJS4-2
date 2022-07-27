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
        setArr(prevArr => {
          let isChanged = false;
          let newArr = prevArr.map(el => {
            if(el.date.isSame(elem.date)) {
              const kmm = parseInt(el.km) + parseInt(elem.km);
              el.km = kmm;
              isChanged = true;
            }
            return el;
          });
          if(isChanged) {
            return [...newArr];
          } else {
            return [...newArr, elem];
          }
        });
        //setArr([...arr, elem]);
      }}
      />
      <DataViewer data={prepareArr(arr)} remove={(id) => {
        setArr(arr.filter(o => o.id !== id));
      }}/>
    </div>
  );
}

export default App;
