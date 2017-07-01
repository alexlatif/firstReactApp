import React from 'react';
import ReactDOM from 'react-dom';

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

export default InputLine
