import React from 'react';
import { styleli } from './tailwindstyle'; 
import {TbTrashOff} from 'react-icons/tb';

export const Todo = ({todo, completeAlternate , cancelTodo}) => {
  
    return (
   
    <li className={todo.completed ? styleli.completeList : styleli.list}>
        <div className={styleli.row}>
            <input className={styleli.checkbox} onChange={() => completeAlternate(todo)} type="checkbox" checked={todo.completed ? 'checked' : ''} />
            <p onClick={() => completeAlternate(todo)} className={todo.completed ? styleli.completeText : styleli.text}>{todo.text}</p>
        </div>
        <button onClick={() => cancelTodo(todo.id)}>{<TbTrashOff size={20}/>}</button>
    </li>
  
    );
};
