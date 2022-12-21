import React from 'react';

class Text extends React.Component {
    
  constructor(props) {
      super(props)
      this.state = {
        message: '',
        value: ''
      }
      this.props.resFunc(this.resetValue.bind(this))
    }
    render() {
      return(
        <>
            <label htmlFor={'input' + this.props.name}>{this.props.descprition + ':'}</label>
            <input className={this.props.isValid} placeholder={this.props.descprition} id={'input' + this.props.name} value = {this.state.value} onBlur = {(e) => {this.setState({message : ''}); this.props.changeState(this.props.name, e.target.value)}} onChange = {(e) => this.props.validation(this.props.name).bind(this)(e.target.value)}></input>
            <div>{this.state.message}</div>
            <div>{this.props.message}</div>
        </>
      )
    }

    blurEvent() {
      this.setState(
        {
          message : ''
        }
      )
      console.log('blur')
    }
    focusEvent() {
      console.log('focus')
    }
    resetValue() {
      this.setState(
        {
          value : ''
        }
      )
    }
  }

  export default Text
