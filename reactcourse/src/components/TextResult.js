import React from 'react';

class TextResult extends React.Component {
    render() {
      return(
        <>
          <h2>{this.props.descprition}:</h2>
          <h3>{this.props.value}</h3>
        </>
      )
    }
  }

  export default TextResult
