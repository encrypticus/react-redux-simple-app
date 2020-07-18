import React from 'react';
import {useEffect, useState, useRef} from 'react';
import './auth.scss';

const Auth = ({ name, password, setAuthName, setAuthPassword }) => {

  const [count, setCount] = useState(0);

  const btn = useRef(null);

  const onChangeName = (event) => {
    setAuthName(event.target.value);
  };

  const onChangePassword = (event) => {
    setAuthPassword(event.target.value);
  };

  const onChangeTitle = (event) => {
    event.preventDefault();
    setCount(count + 1);

    const btnChangeTitle = btn.current;
    btnChangeTitle.classList.toggle('btn-title_color_violet');
  };

  // вызывается при монтировании, размонтировании компонента и при изменении свойства count
  // аналог componentDidMount, componentDidUpdate и componentWillUnmount
  useEffect(() => {
    document.title = `Вы нажали ${count} раз!`;

    return () => {
      console.log('компонент был удалён');
    }
  }, [count]);

  // вызывается при монтировании компонента и при изменении свойства name
  // аналог componentDidMount и componentDidUpdate
  useEffect(() => {
    console.log(`Ваше новое имя авторизации: ${name}`);
  }, [name]);

  // вызывается при монтировании компонента и при изменении свойства password
  // аналог componentDidMount и componentDidUpdate
  useEffect(() => {
    console.log(`Ваш новый пароль авторизации: ${password}`);
  }, [password]);

  return (
    <form>
      <div>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={onChangeName}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={onChangePassword}
        />
      </div>
      <div>
        <button>Sign in</button>
      </div>
      <div>
        <button
          className="btn-title"
          ref={btn}
          onClick={onChangeTitle}>
          Change title
        </button>
      </div>
    </form>
  );
};

export default Auth;
