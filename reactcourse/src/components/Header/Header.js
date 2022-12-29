import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import Form from '../Form/Form'


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector(state => state.users.usersMessages);
  let user = useSelector(state => state.user.activeUser);
  let message;
  if (user === null) {
    message = 'Введите имя'
    return(
      <header className="App-header">
        <Form action = {changeUser}></Form>
      </header>
    )
  }
  else {
    <header className="App-header">
        {user.name}
        <button onClick={() => changeUser()}>Выход</button>
      </header>
  }
      

    function changeUser (name) {
      const user = users.find(item => item.name === name)
      if(typeof user === 'undefined') {
        let newUser = {
          name: name,
          tasks: []
        }
        dispatch({type: 'ADD_USER', payLoad: newUser})
        dispatch({type: 'ACTIVATE_USER', payLoad: newUser})
      }
      else {
        dispatch({type: 'ACTIVATE_USER', payLoad: user})
      }
    }
}

  export default Header