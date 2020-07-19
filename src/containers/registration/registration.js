import React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setRegistrationName, setRegistrationPassword} from '../../redux/actions/registration';
import {fetchUserData} from '../../redux/actions/user';
import Registration from '../../components/registration';

const RegistrationContainer = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.registrationReducer.name);
  const password = useSelector(state => state.registrationReducer.password);
  const user = useSelector(state => state.userReducer);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return <Registration
    name={name}
    password={password}
    dispatch={dispatch}
    fetchUserData={fetchUserData}
    setName={setRegistrationName}
    setPassword={setRegistrationPassword}
  />;
};

export default RegistrationContainer;
