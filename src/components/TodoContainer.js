import React from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./TodoList";
import Header from "./Header";
import InputTodo from "./InputTodo";

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

  addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoItem={this.addTodoItem} />
          <TodoList
            todos={this.state.todos}
            handleChange={this.handleChange}
            deleteTodo={this.deleteTodo}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;

