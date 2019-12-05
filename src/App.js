import React,{ Component } from 'react';
import Header from './components/layout/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import uuid from 'uuid'
import './App.css';

class App extends Component {
  // in state we are making a todo array of objects

  state = {
    todos : [
      {
        // ussing uuid to generate ids
        id : uuid.v4(),
        title : 'take out the trash',
        completed : true
      },
      {
        id : uuid.v4(),
        title : 'Dinner with wife',
        completed : false
      },
      {
        id : uuid.v4(),
        title : 'Meeting with boss',
        completed : false
      }

    ]
  }

  // toggle commplete
  markComplete = (id) => {
    console.log(id);
    console.log("from app .js")
    this.setState({todos : this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  delTodo = (id) =>
  { 
      console.log(id+" id deleted ")
      // spread operator used to copy the complete  todos and then using filter to delete tht todo
      this.setState({ todos : [...this.state.todos.filter(todo => todo.id!== id)]});

  }
  addTodo = (title) => {
    console.log(title)

    const newTodo = {
      id : uuid.v4(),
      title : title,
      commpleted : false
    }
    this.setState({ todos : [...this.state.todos ,newTodo]})
  }
  render(){

    // console.log(this.state.todos)
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo = {this.delTodo} />
        </div>
      </div>
    );

  }
}

export default App;
