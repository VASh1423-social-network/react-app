import React from 'react';
import Login from '../../images/Login.png'
import './style.scss'

const LoginForm: React.FC = () => {
  return (
    <div className='flex h-screen'>
      <div className='w-1/2'>
        <img className='h-screen w-screen' src={Login} />
      </div>
      <div className='w-1/2 p-10 flex items-center'>
        <div className='loginContainer'>
          <div className='title'>Вход</div>
          <input className='input' type="text"/>
          <div>Забыли пароль?</div>
          <input className='input' type="text"/>
          <button className='button'>Вход</button>
          <div>Еще нет аккаунта? Зарегистрироваться</div>
          <div>или</div>
          <div>войти с помощью:</div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
