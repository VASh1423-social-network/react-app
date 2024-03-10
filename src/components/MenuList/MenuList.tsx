import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuListInterface from './interface';

const list: MenuListInterface[] = [
  { id: 1, title: 'Главная', src: '/' },
  { id: 2, title: 'Список дел', src: '/todo' },
]

const MenuList: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (item: MenuListInterface) => {
    navigate(item.src);
  }
  return (
    <div className="col-span-1 p-10">
      {list.map((item: MenuListInterface) => (
        <div 
          key={item.id} 
          className='hover:text-blue-700 cursor-pointer' 
          onClick={() => handleClick(item)}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
}

export default MenuList;
