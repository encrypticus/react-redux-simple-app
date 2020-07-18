import React from 'react';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import {setRegistrationName, setRegistrationPassword} from '../../redux/actions/registration';
import {fetchUserData} from '../../redux/actions/user';
import Registration from '../../components/registration';

const RegistrationContainer = (props) => {

  useEffect(() => {
    console.log(props.user);
  }, [props.user]);

  return <Registration {...props} />;
};

const mapStateToProps = (state) => ({
  name: state.registrationReducer.name,
  password: state.registrationReducer.password,
  user: state.userReducer
});

const mapDispatchToProps = {
  setRegistrationName,
  setRegistrationPassword,
  fetchUserData
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);
