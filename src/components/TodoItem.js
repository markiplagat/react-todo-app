import React from "react";

class TodoItem extends React.Component {

  completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  render() {
    return(
      <div>
        <li>
          <input
            type="checkbox"
            checked={this.props.todo.completed}
            onChange={() => this.props.handleChange(this.props.todo.id)}
          />
          <span style={this.props.todo.completed ? this.completedStyle : null }>
            {this.props.todo.title}
          </span>
          <button onClick={() => this.props.deleteTodo(this.props.todo.id)}>
            Delete
          </button>
        </li>
      </div>
    );
  }
}

export default TodoItem;
