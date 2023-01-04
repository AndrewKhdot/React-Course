import React from 'react';

const Button = (props) => {
      return(
            <button type='button' id={'button' + props.name} onClick= {() => props.firstAction(props.data, props.name)}>{props.description}</button>
      )
    }

  export default Button
