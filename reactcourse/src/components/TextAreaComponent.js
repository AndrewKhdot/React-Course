import React from 'react';

class TextAreaComponent extends React.Component {
    render() {
      return(
        <>
            <label htmlFor={'input' + this.props.name}>{this.props.descprition + ':'}</label>
            <textarea placeholder={this.props.descprition} id={'input' + this.props.name}></textarea>
        </>
      )
    }
  }

  export default TextAreaComponent
