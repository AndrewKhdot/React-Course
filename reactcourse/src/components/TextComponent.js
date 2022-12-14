import React from 'react';

class TextComponent extends React.Component {
    render() {
      return(
        <React.Fragment>
            <label htmlFor={'input' + this.props.name}>{this.props.descprition + ':'}</label>
            <input placeholder={this.props.descprition} id={'input' + this.props.name}></input>
        </React.Fragment>
      )
    }
  }

  export default TextComponent