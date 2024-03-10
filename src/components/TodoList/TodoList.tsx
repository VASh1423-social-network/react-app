import React from 'react';

interface TodoListProps {
  todoList: string[]
}

const TodoList: React.FC<TodoListProps> = ({ todoList }) => {
  return (
    <>
      {todoList.map((item: string) => (
        <div>{item}</div>
      ))
      }
    </>
  );
}

export default TodoList;
