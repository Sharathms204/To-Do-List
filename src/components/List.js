import React, { useState } from 'react'

const List = (props) => {
    const [edit, setEdit] = useState(false);
    const [text, setText] = useState(props.text);
    function notSave(){
        if(text.length!=0){
            setEdit(false);
        }
    }
    return (
      <li className="list">
        {edit ? (
          <>
            {" "}
            <input class='editTask'
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <button class='saveTask '
              onClick={(e) => {
                props.editTodo(e, props.index, text);
                notSave();
              }}
            >
              save
            </button>
          </>
        ) : (
          props.text
        )}
        <button class='edit ' onClick={() => props.deleteTask(props.index)}>delete</button>
        <button class='delete ' onClick={() => setEdit(true)}>edit</button>
      </li>
    );
  };
  
  export default List;
