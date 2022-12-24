import React, { useEffect, useRef, useState } from 'react';

const Date = (props) => {
  let [state, setStates] = useState(['',''])
  let [status, setStatus] = useState(['valid',''])
  const nameField = useRef(null);
  let statusAction = function componentActions(status) {
    if(status === 'valid') {
      setStatus(['valid', ''])
    }
    else if (status === 'notValid'){
      setStatus(['notValid', 'Поле должно быть заполнено'])
    }
    else {
      setStatus(['valid', ''])
      nameField.current.value = '';
    }
  }
  useEffect(() => {props.changeState('dateBirth', state, statusAction)}, [state])
  return(
      <>
        <label htmlFor='birthDate'>{'Дата рождения:'}</label>
        <input ref={nameField} itemRef='dateB' className={status[0]} type="date" id = 'birthDate' defaultValue={''} onBlur = {(e) => setStates(e.target.value)} />
        <div>{status[1]}</div>
      </>
    )
  }

  export default Date
