import React from 'react';

class TitelResult extends React.Component {
    render() {
      return(
          <h1>{this.props.name} {this.props.surname}</h1>
      )
    }
  }

  export default TitelResult