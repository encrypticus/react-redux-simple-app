import React from 'react';
import {useReducer} from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_TITLE':
      return {
        ...state,
        title: action.payload
      };

    case 'TOGGLE_CLASS':
      return {
        ...state,
        isClassToggle: action.payload
      };

    default:
      return state;
  }
};

const Registration = (props) => {
  const {
    name,
    password,
    setRegistrationName,
    setRegistrationPassword
  } = props;

  const [state, dispatch] = useReducer(reducer, { title: 'Press me for change', isClassToggle: false });

  const onChangeName = (event) => {
    setRegistrationName(event.target.value);
  };

  const onChangePassword = (event) => {
    setRegistrationPassword(event.target.value);
  };

  const onChangeBtnName = (event) => {
    event.preventDefault();

    dispatch({
      type: 'CHANGE_TITLE',
      payload: 'My new name'
    });

    dispatch({
      type: 'TOGGLE_CLASS',
      payload: !state.isClassToggle
    });
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
        <button>Sign up</button>
        <button
          onClick={onChangeBtnName}
          className={state.isClassToggle ? 'btn-title_color_violet' : ''}
        >{state.title}
        </button>
      </div>
    </form>
  );
};

export default Registration;
