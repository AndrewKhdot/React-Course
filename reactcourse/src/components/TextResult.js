import React from 'react';

const TextResult = (props) => {
      return(
        <>
          <h2>{props.description}:</h2>
          <h3>{props.value}</h3>
        </>
      )
  }

  export default TextResult
