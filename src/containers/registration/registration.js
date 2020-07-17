import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Registration from '../../components/registration';

const RegistrationContainer = () => {
  const name = useSelector(state => state.registrationReducer.name);
  const password = useSelector(state => state.registrationReducer.password);
  const dispatch = useDispatch();

  return <Registration name={name} password={password} dispatch={dispatch} />;
};

export default RegistrationContainer;
