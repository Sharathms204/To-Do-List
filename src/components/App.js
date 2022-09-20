import React from "react";
import "./../styles/App.css";
import List from "./List";
import {useState} from 'react';

function App() 
{
	let [text, setText] = useState("");
  let [list, setList] = useState([]);
  let addTodo = () => {
    if (text.length > 0) {
      let newList = list;
      newList.push(text);
      setList([...newList]);
      setText("");
      console.log(newList);
    }
  };

  let deleteTodo = (index) => {
    let newList = list;
    newList.splice(index, 1);
    setList([...newList]);
    console.log(newList);
  };
  const editTodo = (e, index, text) => {
	if (text.length > 0){
    let newList = list;
    newList[index] = text;
    setList([...newList]);
    console.log(newList);
}
  };
	return (
	<div id="main">
	
	<input id="task" value={text} onChange={(event) => setText(event.target.value)} />
      <button id="btn" onClick={addTodo}>add</button>
      <ul>
        {list.map((items, index) => {
          return (
            <List
              text={items}
              index={index}
              deleteTask={deleteTodo}
              editTodo={editTodo}
            />
          );
        })}
      </ul>

	</div>
	);
}


export default App;