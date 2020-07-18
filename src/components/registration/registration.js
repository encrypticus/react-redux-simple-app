import React from 'react';

const Registration = (props) => {
  const {
    name,
    password,
    setRegistrationName,
    setRegistrationPassword,
    setUser
  } = props;

  const onChangeName = (event) => {
    setRegistrationName(event.target.value);
  };

  const onChangePassword = (event) => {
    setRegistrationPassword(event.target.value);
  };

  const onFetchData = (event) => {
    event.preventDefault();
    setUser();
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
        <button style={{marginBottom: '10px'}}>Sign up</button>
        <button onClick={onFetchData}>Fetch data</button>
      </div>
    </form>
  );
};

export default Registration;
