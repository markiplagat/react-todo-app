import React, {useState} from "react";
import { FaPlusCircle } from "react-icons/fa";

const InputTodo = (props) => {

  const [title, setTitle] = useState('')

  const onChange = e => {
    setTitle([e.target.name] = e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (title.trim()) {
      props.addTodoItem(title);
      setTitle("")
    } else {
      alert("Cannot Be blank");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        placeholder="Add Todo.."
        value={title}
        name="title"
        onChange={onChange}
        className="input-text"
      />
      <button className="input-submit">
        <FaPlusCircle
          style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px"}}
        />
      </button>
    </form>
  )
}

export default InputTodo;
