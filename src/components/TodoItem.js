import React ,{Component} from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component{

    getStyle = () => {
        return {
            textDecoration : this.props.todo.completed ? 'line-through':'none',
            backgroundColor : '#f4f4f4',
            padding : '10px',
            borderBottom : '1px #ccc dotted'
        }
    }

    // markComplete =  (e) => {
    //     console.log(this.props)
    // not calling this markcomplete but climbing the ladder to App.js file to change the state of the todo
    // }
    render(){
        // object destructuriing 
        const {id,title} = this.props.todo;
        return (
            // <div style={{ backgroundColor :'#f4f4f4'}}>
            // <div style={itemStyle}>
            <div style={this.getStyle()}>
                <p>
                    {/* <input type="checkbox" onChange={this.markComplete}/>{' '} */}
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>{' '}
                        {/* {this.props.todo.title} */}
                         {title}
                     <button style={btnStye} onClick={this.props.delTodo.bind(this,id)}>x</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    // array since todos is array
    todo : PropTypes.object.isRequired
}

const btnStye = {
    background :' #ff0000',
    color : '#fff',
    border :'none',
    padding:'5px 10px',
    borderRadius : '50%',
    cursor : 'pointer',
    float:'right'
}
// const itemStyle = {
//     backgroundColor :'#f4f4f4'
// }

export default TodoItem