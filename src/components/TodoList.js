import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  render() {
    return(
      <div>
        <ul>
          {this.props.todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleChange={this.props.handleChange}
              deleteTodo={this.props.deleteTodo}
              setUpdate={this.props.setUpdate}
            />
          ))}
        </ul>
      </div>
    );
  }
};

export default TodoList;
