import React from 'react';

const Auth = (props) => {
  const {
    name,
    password,
    setAuthName,
    setAuthPassword
  } = props;

  const onChangeName = (event) => {
    setAuthName(event.target.value);
  };

  const onChangePassword = (event) => {
    setAuthPassword(event.target.value);
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
