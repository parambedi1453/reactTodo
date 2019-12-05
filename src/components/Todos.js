import React,{ Component } from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';

class Todos extends Component {

    // markComplete = () => {
    //     console.log('hello')
    // again sending it to App.js thaat is climbing the ladder
    // }
  render(){
    //   console.log(this.props.todos)
    return this.props.todos.map((todo) => (
    <TodoItem key={todo.id} todo = {todo} markComplete = {this.props.markComplete} delTodo={this.props.delTodo}/> 
    ));
  }
}


// Good practoce  as it checks that props have been aquired
Todos.propTypes = {
    // array since todos is array
    todos : PropTypes.array.isRequired
}
export default Todos;