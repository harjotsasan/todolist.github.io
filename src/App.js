import React, { useState } from 'react';
import List from "./List";

import './App.css';

function App() {

  const [toDoInputValue, setToDoInputValue] = useState('');
  const [toDoItem, setToDoItem] = useState([]);

  const onChangeHandler = (event) => {
    setToDoInputValue(event.target.value);
  }

  const onClickEvent = (event) => {
    setToDoItem( (OldInfo)=>{
      return ( [...OldInfo, toDoInputValue] );
    });
    setToDoInputValue('');
    event.preventDefault();
    toDoItem.map((arr,id)=>0)
    
  }

  const deleteSelected = (id) => {
    console.log(`Deleted ${id}`);
    setToDoItem( (OldInfo) => {
      return(
        OldInfo.filter( (arr, index) => {
          return index !== id
        })
      );
    })
  }
  
  return (
    <>
      <div className="container">
      <div>
        <header> TO-DO List </header>
        <form>
          <input type='text' placeholder='Enter To-Do Items.' value={toDoInputValue} name='todo-item' onChange={onChangeHandler}/>
          <button onClick={onClickEvent}>
            <i className="fas fa-plus"></i>
          </button>
        </form>
      </div>
      
      <div>
        <ol>
          {toDoItem.map( (currArrElem, id) => {
            return (
              <div>
                  <List key={id} id={id} onSelect={deleteSelected} currArrElem={currArrElem} />
              </div>
            );
          })}
        </ol>
        </div>
        </div>
    </>
  );
}

export default App;
