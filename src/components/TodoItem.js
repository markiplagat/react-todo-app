import React, {useEffect, useState} from "react";
import styles from "./TodoItem.module.css";
import {FaTrash} from "react-icons/fa";

const TodoItem = ({handleChange, deleteTodo, todo, setUpdate}) => {

  const [editing, setEditing] = useState(false);

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  const { completed, id, title } = todo;

  useEffect(() =>{
    return () => {
      console.log("Cleaning up")
    }
  },[])

  const handleEditing = () => {
    setEditing(true);
  };

  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }

 const handleUpdateDone = e => {
    if (e.key === "Enter") {
      setEditing(false);
    }
  }

  return(
    <div>
      <li className={styles.item}>
        <div onDoubleClick={handleEditing} style={viewMode}>
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={completed}
            onChange={() => handleChange(id)}
          />
          <span style={completed ? completedStyle : null }>
          {title}
        </span>
          <button onClick={() => deleteTodo(id)}>
            <FaTrash 
              style={{ color: "orangered", fontSize: "16px"}}
            />
          </button>
        </div>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title}
          onChange={e => {
            setUpdate(e.target.value, id);
          }}
          onKeyDown={handleUpdateDone}
        />
      </li>
    </div>
  );
}

export default TodoItem;
