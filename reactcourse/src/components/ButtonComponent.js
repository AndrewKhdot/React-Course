import React from 'react';

class ButtonComponent extends React.Component {
    render() {
      return(
            <button type='button' id={'button' + this.props.name}>{this.props.descprition}</button>
      )
    }
  }

  export default ButtonComponent