import React from "react";
import styles from "./TodoItem.module.css";

const TodoItem = ({handleChange, deleteTodo, todo}) => {

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  const { completed, id, title } = todo;

  return(
    <div>
      <li className={styles.item}>
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
          Delete
        </button>
      </li>
    </div>
  );
}

export default TodoItem;
