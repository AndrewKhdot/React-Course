import './App.css';
import React from 'react';
import {Routes, Route } from 'react-router-dom'
import EnterForm from './components/EnterForm/EnterForm';
import FirstForm from './components/FirstForm/FirstForm'
import SecondForm from './components/SecondForm/SecondForm'


const list = ['', 'first', 'second'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
          <Routes>
            <Route exact path='/' element = {<EnterForm linkList = {list}/>}></Route>
            <Route exact path='/first' element = {<FirstForm linkList = {list}/>}></Route>
            <Route exact path='/second' element = {<SecondForm linkList = {list}/>}></Route>
          </Routes>
      </div>
    </div>
  );
}

export default App;
