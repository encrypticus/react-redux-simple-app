import React from 'react';
import {setAuthName, setAuthPassword} from '../../redux/actions/auth';

const Auth = (props) => {
  const {
    name,
    password,
    dispatch
  } = props;

  const onChangeName = (event) => {
    dispatch(setAuthName(event.target.value));
  };

  const onChangePassword = (event) => {
    dispatch(setAuthPassword(event.target.value));
  };

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
    </form>
  );
};

export default Auth;
