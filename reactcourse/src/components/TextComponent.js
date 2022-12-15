import React from 'react';

class TextComponent extends React.Component {
    render() {
      return(
        <>
            <label htmlFor={'input' + this.props.name}>{this.props.descprition + ':'}</label>
            <input placeholder={this.props.descprition} id={'input' + this.props.name}></input>
        </>
      )
    }
  }

  export default TextComponent
