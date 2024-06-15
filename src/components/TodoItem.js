import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <div className="flex justify-between items-center  shadow-md rounded-lg p-4 mt-2 bg-pink-50">
        <span className="text-lg">{this.props.task}</span>
      </div>
    );
  }
}

export default TodoItem;
