import React from 'react';
import {connect} from 'react-redux';
import {setAuthName, setAuthPassword} from '../../redux/actions/auth';
import Auth from '../../components/auth';

const AuthContainer = (props) => {
  return <Auth {...props}/>
};

const mapStateToProps = (state) => ({
  name: state.authReducer.name,
  password: state.authReducer.password
});

const mapDispatchToProps = {
  setAuthName,
  setAuthPassword
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
