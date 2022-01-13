import React from "react";
import TodoList from "./TodoList";
import Header from "./Header";

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
  };

  handleChange = (id) => {
    console.log("clicked", id);
  };

  render() {
    return (
      <div>
        <Header />
        <TodoList todos={this.state.todos} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default TodoContainer;

