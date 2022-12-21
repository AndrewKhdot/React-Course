import React from 'react';

const Button = (props) => {
      return(
            <button type='button' id={'button' + props.name} onClick= {() => props.fAction(props.data, props.action, props.name)}>{props.descprition}</button>
      )
    }

  export default Button