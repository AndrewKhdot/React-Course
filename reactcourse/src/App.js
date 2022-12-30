import React, { useEffect } from 'react';
import {Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux';

import './App.css';
import EnterForm from './components/EnterForm/EnterForm'
import Header from './components/Header/Header';
import ActiveTasks from './components/ActiveTasks/ActiveTasks'


function App() {
  const user = useSelector(state => state.user.activeUser);
  let tasks = 0;
  if(user !== null) {
    tasks = user.tasks.length
  }
  useEffect(() => console.log('hi'), [user])
  return (
    <div className="App">
    <Header />
      <div>
          <Routes>
            <Route exact path='/' element = {<EnterForm />}></Route>
            <Route exact path='/active' element = {<ActiveTasks number = {tasks}/>}></Route>
          </Routes>
      </div>
    </div>
  );
}

export default App;
