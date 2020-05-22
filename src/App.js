import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentToDo: "",
      todos: [
        {name: 'Consume warm water', createdAt: '01-01-2020', priorty: 'High'},
        // "Consume warm water",
        // "Take some fresh air",
        // "Do some exercise",
        // "Have your breakfast",
      ],
    };
  }

  setValue = () => {
    let { currentToDo, todos } = this.state;
    let newTodo = todos;
    if (currentToDo == "") {
      alert("It is an Empty value please enter your task");
    } else if (newTodo.includes(currentToDo)) {
      alert("Todo already exist");
    } else {
      newTodo.unshift(currentToDo);
    }

    this.setState({ todos: newTodo, currentToDo: "" });
  };

  getValue = (event) => {
    this.setState({ currentToDo: event.target.value });
    console.log(event.target.value);
  };

  removeValue = () => {
    let { currentToDo, todos } = this.state;

    let deleteTodo = todos;

    // let removeItem = currentToDo;
    // console.log(todos.indexOf(currentToDo));
    if (currentToDo) {
      let deleteItem = deleteTodo.indexOf(currentToDo);
      if (deleteItem != -1) {
        todos.splice(deleteItem, 1);
        this.setState({ todos: deleteTodo, currentToDo: "" });
      } else alert("Item not present yet to delete");
    } else {
      alert("Enter task to delete");
    }
  };

  handleRemove = (index) => {
    let { todos } = this.state;
    todos.splice(index, 1);
    this.setState({todos});
    // console.log('inside')
  }

  render() {
    const { currentToDo, todos } = this.state;
    return (
      <div className="main">
        <h1>My To Do List</h1>
        <input
          onChange={this.getValue}
          value={currentToDo}
          type="text"
          className="input"
          placeholder="TYPE YOUR TASK"
        ></input>
        <div>
          <button onClick={this.setValue}>Add</button>
          <button onClick={this.removeValue}>Remove</button>
        </div>
        <p>Your Todo list is here add some more : {currentToDo}</p>
        {todos.map((v, i) => (
          <div className='single-item'>
            <span key={i}>{v.name} -> {v.priorty}</span>
            <button onClick={()=>this.handleRemove(i)}>x</button>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
