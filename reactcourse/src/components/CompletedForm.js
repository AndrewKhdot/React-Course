import React from 'react';

class CompletedForm extends React.Component {
    render() {
      return(
        <> 
          <h1>Анкета</h1>
          <h2> {this.createResult(this.props.al)}</h2>
        </>
      )
    }
    createResult(user) {
      let result = [];
      for (const key in user) {
        if (Object.hasOwnProperty.call(user, key)) {
          result.push(<>
          <h2>{key}:</h2>
          <h3>{user[key]}</h3>
          </>)
        }
      }
      return result;
    }
  }

  export default CompletedForm