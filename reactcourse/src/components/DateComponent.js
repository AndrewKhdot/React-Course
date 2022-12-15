import React from 'react';

class DateComponent extends React.Component {
    render() {
      return(
        <>
            <label htmlFor='birthDate'>{'Дата рождения:'}</label>
            <input type="date" id = 'birthDate'></input>
        </>
      )
    }
  }

  export default DateComponent
