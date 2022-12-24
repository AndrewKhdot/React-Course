import React from 'react';

const LinckResult = (props) => {
      return(
        choseLinck(props.type, props.value, props.description)
      )
 function   choseLinck(type, value, description) {
        if(type === 'phone') {
            return (
            <>
                <h2>{description}</h2>
                <a href={'tel:' + value}>{value}</a>
            </>)
        }
        else {
            return(
            <>
                <h2>{description}</h2>
                <a href={value}>{value}</a>
            </>)
        }
    }
  }

  export default LinckResult
