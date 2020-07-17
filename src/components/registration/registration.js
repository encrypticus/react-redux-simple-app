import React from 'react';

const Registration = (props) => {
  const {
    name,
    password,
    setRegistrationName,
    setRegistrationPassword
  } = props;

  const onChangeName = (event) => {
    setRegistrationName(event.target.value);
  };

  const onChangePassword = (event) => {
    setRegistrationPassword(event.target.value);
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
