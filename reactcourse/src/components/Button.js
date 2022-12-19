import React from 'react';

class Button extends React.Component {
    render() {
      return(
            <button type='button' id={'button' + this.props.name} onClick= {() => this.props.fAction(this.props.data, this.props.action, this.props.name)}>{this.props.descprition}</button>
      )
    }
  }

  export default Button