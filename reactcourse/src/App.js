import React from 'react';
import Form  from './components/Form'
import CompletedForm from './components/CompletedForm';
import './main.css'

class App extends React.Component {
    constructor(props) {
      super(props) 
      this.state = {
        isComplete : false
      }
    }
    render() {
      if(!this.state.isComplete) {
        return(
          <div>
            <Form submit = {this.complete.bind(this)} cancel = {this.breake.bind(this)}/>
          </div>
        )
      }
      else {
        return(
          <div>
            <CompletedForm />
          </div>
        )
      }
    }

    complete() {
      this.setState(
        {
          isComplete : true
        }
      ) 
    }

    breake() {
      this.setState(
        {
          isComplete : false
        }
      )

    }
  }
  export default App