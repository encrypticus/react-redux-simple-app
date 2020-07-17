import React from 'react';

const Console = (props) => {
  const {
    authName,
    regName,
    authPassword,
    regPassword
  } = props;

  return (
    <div className="console">
      <ul>
        <li><h1>Auth</h1></li>
        <li>Name: {authName}</li>
        <li>Password: {authPassword}</li>
      </ul>

      <ul>
        <li><h1>Registration</h1></li>
        <li>Name: {regName}</li>
        <li>Password: {regPassword}</li>
      </ul>
    </div>
  );
};

export default Console;
