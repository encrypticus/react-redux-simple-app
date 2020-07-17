import React from 'react';
import {Provider} from 'react-redux';
import store from '../../redux/store';
import Auth from '../../containers/auth/';
import Registration from '../../containers/registration';
import Console from '../../containers/console';

const App = (props) => {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="app__forms">
          <Auth/>
          <Registration/>
        </div>
        <Console/>
      </div>
    </Provider>
  );
};

export default App;