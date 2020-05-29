import React from "react";
import "./App.css";
import Demo from './components/demo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentToDo: "",
      todos: [
        {name: 'todo1', createdAt: '01-01-2020', Priority: 'Medium'},
        {name: 'todo2', createdAt: '01-01-2020', Priority: 'High'}
      ],
      currentPriority : "Please select Priority"
    };
  }

  setValue = () => {
    let { currentToDo, todos } = this.state;
    let newTodo = todos;
    if (currentToDo.trim() == "") {
      alert("It is an Empty value please enter your task");
    }else{
      let index = newTodo.findIndex((singleTodo)=>singleTodo.name == currentToDo);
      if(index == -1){
        if(this.state.currentPriority != 'Please select Priority'){
          newTodo.unshift({name: currentToDo, createdAt: new Date().toLocaleTimeString(), Priority: this.state.currentPriority});
          this.setState({ todos: newTodo, currentToDo: "" });
        }else{
          alert("Please Select Priority First");  
        }
      }else{
        alert("Todo already exist");
      }
    }
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
  }
  
  handleOnSelect = (e) => {
    let {currentPriority} = this.state;
    currentPriority = e.target.value;
    this.setState({currentPriority});
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
        <select className="input" value={this.state.currentPriority} onChange={this.handleOnSelect}>
          <option disabled>Please select Priority</option>
          {['High', 'Medium', 'Low'].map((opt, i)=><option key={i} value={opt}>{opt}</option>)}
        </select>
        <div>
          <button className='action-btn' onClick={this.setValue}>Add</button>
          {/* <button className='action-btn' onClick={this.removeValue}>Remove</button> */}
          <button className='action-btn' onClick={this.handleOnSearch}>Search</button>
        </div>
        <p>Your Todo list is here add some more : {currentToDo}</p>
        {/* {todos.map((v, i) => (
          <div className={`single-item single-item-${(v.Priority=='High'?'high':(v.Priority=='Medium')?'medium':'low')}`}>
            <span key={i}> {v.name} -> {v.createdAt}</span>
            <button onClick={()=>this.handleRemove(i)}>x</button>
          </div>
        ))} */}
        <Demo allTodos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
