import React, { ChangeEvent, useState } from 'react';

interface TodoFormProps {
  addTodo: (todo: any) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const handlerTodo = () => {
    addTodo(inputValue)
    setInputValue('')
  }

  return (
    <div>
      <input
        className='w-2/3 h-10 p-2 border border-gray-300'
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <button className='w-1/3 h-10 bg-green-500 text-white hover:bg-green-600' onClick={handlerTodo}>Создать</button>
    </div>
  );
}

export default TodoForm;
