import React from "react";

class TodoItem extends React.Component {
  render() {
    return(
      <div>
        <li>
          <input
            type="checkbox"
            checked={this.props.todo.completed}
            onChange={() => this.props.handleChange(this.props.todo.id)}
          />{this.props.todo.title}
        </li>
      </div>
    );
  }
}

export default TodoItem;
