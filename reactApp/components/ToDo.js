import React from 'react';
import ReactDOM from 'react-dom';

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

export default ToDo
