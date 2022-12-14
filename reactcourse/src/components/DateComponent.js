import React from 'react';

class DateComponent extends React.Component {
    render() {
      return(
        <React.Fragment>
            <label htmlFor='BirthDate'>{'Дата рождения:'}</label>
            <input type="date" id = 'BirthDate'></input>
        </React.Fragment>
      )
    }
  }

  export default DateComponent