import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Form from '../Form/Form'
import Header from '../Header/Header';


const ActiveTasks = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.activeUser);
      return(
        <div>
            <Header />
            <h1>Active {user.name}s tasks</h1>
            <Form action = {addTask}></Form>
            {user.tasks.map(item => <div key = {item.id}>{item.task} </div>)}
        </div>
      )
  function addTask(task) {
    const newTask = {
     isActive: true,
     task: task,
     id: new Date() 
    }
    user.tasks.push(newTask)
    dispatch({type: 'UDATE_ACTIVEUSER', payLoad: user})
  }

}

    
  export default ActiveTasks