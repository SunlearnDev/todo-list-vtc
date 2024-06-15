import React, { Component } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  addTodo = (task) => {
    if (task) {
      this.setState((prevState) => ({
        todos: [...prevState.todos, task]
      }));
    }
  }

  render() {
    return (
      <div className="w-full max-w-md mx-auto mt-8">
        <AddTodo AddTodo={this.addTodo} />

        {this.state.todos.map((task, index) => (
          <TodoItem key={index} task={task} />
        ))}
      </div>
    );
  }
}

export default TodoList;
