import React from 'react';

const Task = (props) => {

      return(
        <div>
            <div>{props.task}</div>
            <button>Edit</button>
            <button>Delete</button>
        </div>
      )
    }

  export default Task