import React from 'react';

const EnterForm = (props) => {
      return(
        <div>
            <h1>Enter</h1>
            { props.linkList.map(item => <a href= {'http://localhost:3000/' + item}>{item + 'page'}</a>)}
        </div>
      )
    }

  export default EnterForm