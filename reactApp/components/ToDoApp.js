import React from 'react';
import ReactDOM from 'react-dom';
import InputLine from './InputLine.js';
import ToDoList from './ToDoList.js';
import axios from 'axios';
const dbUrl = "http://localhost:3001/db/";

class ToDoApp extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      todos: [],
      text: '',
    }
  }

  componentDidMount(){
    axios.get(dbUrl + '/all')
      .then(response => {
        this.setState({todos: response.data})
      })
      .catch(error => {
        console.log(error)
      })
  }

  cross (id){
    axios.post(dbUrl + 'toggle', {id: id})
      .then(response => {
        this.componentDidMount()
      })
      .catch(error => {
        console.log(error)
      })
  }

  remove(id){
    axios.post(dbUrl + 'remove', {id: id})
      .then(response => {
        this.componentDidMount()
      })
      .catch(error => {
        console.log(error)
      })
  }

  addToDo(string){
    var task = {
      task: string,
      completed: false
    }
    axios.post(dbUrl + 'add', task)
      .then(function (response) {
      this.setState({todos: [...this.state.todos, ...[response.data]], text: ''})
    }.bind(this))
      .catch(function (error) {
        console.log(error);
    });
  }

  updateText(string){
    this.setState({text: string})
  }

  render(){
    return (
      <div>

        <InputLine text={this.state.text} submit={()=>{this.addToDo(this.state.text)}}
          updateText={(string)=>this.updateText(string)}/>

        <ToDoList todos={this.state.todos} xClick={(id)=>(this.remove(id))}
          toggleCompletion={(id)=>(this.cross(id))} />
      </div>
    )
  }
}


export default ToDoApp
