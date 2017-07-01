import React from 'react';
import ReactDOM from 'react-dom';
import InputLine from './InputLine.js'
import ToDoList from './ToDoList.js'

const dummyData = [{ taskText: "Catch", completed: false }, { taskText: "Catch 'em", completed: true }, { taskText: "Catch 'em all", completed: false }]

class ToDoApp extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      todos: [],
    }
  }

  componentDidMount(){
    var arr=[];
    dummyData.forEach((i)=>{arr.push(i)})
    this.setState({todos: arr})
  }

  cross (completed){

  }

  render(){
    return (
      <div>
        <form>
          <InputLine/>
        </form>
        <ToDoList todos={this.state.todos} onClick={(completed)=>(this.cross(completed))} />
      </div>
    )
  }
}


export default ToDoApp
