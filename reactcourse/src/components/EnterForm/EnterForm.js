import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import Form from '../Form/Form'


function EnterForm ()  {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector(state => state.users.usersMessages);
  let user = useSelector(state => state.user.activeUser);
  let message;
  useEffect(() => {if(user !== null) {
    navigate("/active")
  }}, [user] )
  if (user === null) {
    message = 'Введите имя'
    return(
      <div>
          <h1>Enter {message}</h1>
          <Form action = {changeUser}></Form>
      </div>
    )
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

  export default EnterForm