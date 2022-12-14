import React from 'react';

class TextAreaComponent extends React.Component {
    render() {
      return(
        <React.Fragment>
            <label htmlFor={'input' + this.props.name}>{this.props.descprition + ':'}</label>
            <textarea placeholder={this.props.descprition} id={'input' + this.props.name}></textarea>
        </React.Fragment>
      )
    }
  }

  export default TextAreaComponent