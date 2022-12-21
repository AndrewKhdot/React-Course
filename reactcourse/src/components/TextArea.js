import React from 'react';

class TextArea extends React.Component {
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
            <textarea className={this.props.isValid} placeholder={this.props.descprition} id={'input' + this.props.name} value = {this.state.value} onBlur = {(e) => {this.setState({message : ''}); this.props.changeState(this.props.name, e.target.value)}} onChange = {(e) => this.lengthCalc(e.target.value)}></textarea>
            <div>{this.state.message}</div>
            <div>{this.props.message}</div>
        </>
      )
    }

    lengthCalc(val) {
      if (val.length === 0) {
        this.setState(
          this.state = {
            message: '',
            value : val
          }
        )
      }
      else if(val.length === 600) {
        this.setState(
          this.state = {
            message: 'Длинна должна быть не больше 600 символов',
            value: val.slice(0, 599)
          }
        )
      }
      else {
        this.setState(
          this.state = {
            message: `Символовл ${val.length} из 600`,
            value: val
          }
        )
      }
    }
    resetValue() {
      this.setState(
        {
          value : ''
        }
      )
    }
  }

  export default TextArea
