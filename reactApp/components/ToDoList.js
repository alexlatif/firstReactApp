import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './ToDo.js'

class ToDoList extends React.Component {

  list(){
    return this.props.todos.map((item, index) => (
      <ToDo key={item._id} xClick={()=>(this.props.xClick(item._id))} item={item.task}
        completed={item.completed} toggleCompletion={()=>this.props.toggleCompletion(item._id)}/>
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
