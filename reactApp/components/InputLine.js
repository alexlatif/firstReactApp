import React from 'react';
import ReactDOM from 'react-dom';

function InputLine(props) {
  return(
    <form>

      <input type="text" value={props.text} placeholder="Add item" onChange={(e)=>
        (props.updateText(e.target.value))}></input>

        <button id="add" onClick={(e)=> {
          e.preventDefault()
          props.submit()
        }}>Send</button>

      </form>
    )
  }

export default InputLine
