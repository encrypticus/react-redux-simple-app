import React from 'react';
import {connect} from 'react-redux';
import {setRegistrationName, setRegistrationPassword} from '../../redux/actions/registration';
import Registration from '../../components/registration';

const RegistrationContainer = (props) => {
  return <Registration {...props} />;
};

const mapStateToProps = (state) => ({
  name: state.registrationReducer.name,
  password: state.registrationReducer.password
});

const mapDispatchToProps = {
  setRegistrationName,
  setRegistrationPassword
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);
