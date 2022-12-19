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
            <CompletedForm al = {this.state.xoxo}/>
          </div>
        )
      }
    }

    complete(user) {
      this.setState(
        {
          isComplete : true,
          xoxo: user
        }
      ) 
    }

    breake() {
      this.setState(
        {
          isComplete : false
        }
      )
      this.render();
      console.log('hi from app')
    }
  }
  export default App