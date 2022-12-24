import React, { useState } from 'react';
import Form  from './components/Form'
import CompletedForm from './components/CompletedForm';
import './main.css'

const App = () => {
  let [isComplete, setStatus] = useState(false)
  let [user, setUser] = useState()
  const complete = function (user) {
      setStatus(true)
      setUser(user)   
  }
  const breake = function () {
    setStatus(false)  
}
      if(!isComplete) {
        return(
          <div>
            <Form submit = {complete} cancel = {breake}/>
          </div>
        )
      }
      else {
        return(
          <div>
            <CompletedForm user = {user}/>
          </div>
        )
      }
  }
  export default App