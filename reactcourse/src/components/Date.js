import React from 'react';

const Date = (props) => {
  return(
      <>
        <label htmlFor='birthDate'>{'Дата рождения:'}</label>
        <input className={props.isValid} type="date" id = 'birthDate' onBlur = {(e) => props.changeState('dateBirth', e.target.value)}></input>
        <div>{props.message}</div>
      </>
    )
  }

  export default Date
