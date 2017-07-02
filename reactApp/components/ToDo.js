
import React from 'react';
import ReactDOM from 'react-dom';

function ToDo(props){
  return (
    props.completed ?

    <strike>
      <li onClick={()=> {props.toggleCompletion()}}>
        <button onClick={props.xClick} type="submit">X</button>
        {props.item}
      </li>
    </strike>

    :

    <li onClick={()=> {props.toggleCompletion()}}>
      <button onClick={()=>{props.xClick()}} type="submit">X</button>
      {props.item}
    </li>
  )
}

export default ToDo
