import React from 'react';
import {Routes, Route } from 'react-router-dom'

import './App.css';
import EnterForm from './components/EnterForm/EnterForm'
import Header from './components/Header/Header';
import ActiveTasks from './components/ActiveTasks/ActiveTasks'


function App() {
  return (
    <div className="App">
    <Header />
      <div>
          <Routes>
            <Route exact path='/' element = {<EnterForm />}></Route>
            <Route exact path='/active' element = {<ActiveTasks/>}></Route>
          </Routes>
      </div>
    </div>
  );
}

export default App;
