import React, { useState } from 'react';

import TodoList from '../components/TodoList/TodoList';
import TodoForm from '../components/TodoForm/TodoForm';

const Todo: React.FC = () => {
  const [todoList, setTodoList]: any = useState([]);

  const addTodo = (todo: any) => {
    setTodoList([todo, ...todoList])
  }

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex-grow">
        <TodoList todoList={todoList}/>
      </div>
      <div>
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  );
}

export default Todo;
