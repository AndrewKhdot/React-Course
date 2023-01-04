import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Form from '../Form/Form'
import Task from '../Task/Task'


const ActiveTasks = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.activeUser);
  let tasks = renderTasks(user.tasks);
      return(
        <>
            <h1>Active {props.number} {user.name}s tasks</h1>
            <Form action = {addTask}></Form>
            { tasks }
        </>
      )
  
  function renderTasks(tasks) {
    return (
      tasks.map(item => <Task key = {item.id} task = {item.task}/>)
    )
  }

  function addTask(task) {
    const newTask = {
     isActive: true,
     task: task,
     id: new Date() 
    }
    user.tasks.push(newTask)
    dispatch({type: 'UPDATE_ACTIVEUSER', payLoad: user})

  }

}

    
  export default ActiveTasks
