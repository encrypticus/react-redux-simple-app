import React from 'react';
import {connect} from 'react-redux';
import Console from '../../components/console';

const ConsoleContainer = (props) => {
  return <Console {...props}/>;
};

const mapStateToProps = (state) => ({
  authName: state.authReducer.name,
  authPassword: state.authReducer.password,
  regName: state.registrationReducer.name,
  regPassword: state.registrationReducer.password
});

export default connect(mapStateToProps)(ConsoleContainer);
