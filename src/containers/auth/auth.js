import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Auth from '../../components/auth';

const AuthContainer = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.authReducer.name);
  const password = useSelector(state => state.authReducer.password);

  return <Auth name={name} password={password} dispatch={dispatch}/>
};

export default AuthContainer;
