import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './ToDo.js'

class ToDoList extends React.Component {

  list(){
    return this.props.todos.map((item) => (
      <ToDo key={item.taskText} item={item.taskText} completed={item.completed} onClick={()=>this.props.onClick(item.completed)}/>
    ))
  }

  render(){
    let list = this.list()
    return (
    <div>
      <ul>
        {list}
      </ul>
    </div>
    )
  }
}

export default ToDoList
