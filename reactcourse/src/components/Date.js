import React from 'react';

class Date extends React.Component {
    render() {
      return(
        <>
            <label htmlFor='birthDate'>{'Дата рождения:'}</label>
            <input className={this.props.isValid} type="date" id = 'birthDate' onBlur = {(e) => this.props.changeState('dateBirth', e.target.value)}></input>
            <div>{this.props.message}</div>
        </>
      )
    }
  }

  export default Date
