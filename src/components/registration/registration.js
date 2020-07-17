import React from 'react';
import {setRegistrationName, setRegistrationPassword} from '../../redux/actions/registration';

const Registration = (props) => {
  const {
    name,
    password,
    dispatch
  } = props;

  const onChangeName = (event) => {
    dispatch(setRegistrationName(event.target.value));
  };

  const onChangePassword = (event) => {
    dispatch(setRegistrationPassword(event.target.value));
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
        <button>Sign up</button>
      </div>
    </form>
  );
};

export default Registration;
