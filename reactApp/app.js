//react
import React from 'react';
import ReactDOM from 'react-dom';

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

  cross (){

  }

  render(){
    return (
      <div>
        <form>
          <InputLine/>
        </form>
        <ToDoList todos={this.state.todos} onClick={()=>(this.cross())} />
      </div>
    )
  }
}


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


class ToDo extends React.Component {
  render(){
    return (
      this.props.completed?
        <strike>
          <li onClick={()=>this.props.onClick()}>
            <button type="submit">X</button>
              {this.props.item}
          </li>
        </strike>:
      <li onClick={()=>this.props.onClick()}>
        <button type="submit">X</button>
        {this.props.item}
      </li>
    )
  }
}


class InputLine extends React.Component {
  render(){
    return(
      <div>
        <input type="text" placeholder="Add item"></input>
          <button id="add" type="submit">Send</button>
        </div>
      )
    }
  }

ReactDOM.render(
  <ToDoApp />,
  document.getElementById('root')
);
