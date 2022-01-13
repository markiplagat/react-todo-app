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

  handleChange = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo;
      }),
    }));
  };

  deleteTodo = id => {
    this.setState({
      todos: [
        // Grab all todos items at every point
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    })
  };

  render() {
    return (
      <div>
        <Header />
        <TodoList
          todos={this.state.todos}
          handleChange={this.handleChange}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default TodoContainer;

