import React from 'react';

class DateComponent extends React.Component {
    render() {
      return(
        <>
            <label htmlFor='BirthDate'>{'Дата рождения:'}</label>
            <input type="date" id = 'BirthDate'></input>
        </>
      )
    }
  }

  export default DateComponent
