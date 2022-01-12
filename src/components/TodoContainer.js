import React from "react";
import TodoList from "./TodoList";

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Plan the day",
        completed: true
      },
      {
        id: 2,
        title: "Update ReadME of my repos",
        completed: false
      },
      {
        id: 3,
        title: "Keep upto date with tech",
        completed: false
      }
    ],
  }
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default TodoContainer;

