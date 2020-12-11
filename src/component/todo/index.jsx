import React from 'react';
import './todo.css';
import Todorow from '../todorow';
import Button from '../button';

const Todo = () => {
  return(
    <div className = 'todo-container'>
      <div className = 'todo-container__header'>
        Upcoming tasks
      </div>
      <div className = "todo-container__contents">
        <Todorow/>
        <Todorow/>
        <Todorow/>
        <Todorow/>
        <Todorow/>
        <Todorow/>
        <Todorow/>
      </div>
      <div className = "todo-container__footer">
        <Button label={"+"}  className = {'button--add-rounded'}/>
      </div>
    </div>
  );
}

export default Todo;