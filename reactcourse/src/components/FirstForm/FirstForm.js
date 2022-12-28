import React from 'react';

const FirstForm = (props) => {
      return(
        <div>
            <h1>First</h1>
            { props.linkList.map(item => <a href= {'http://localhost:3000/' + item}>{item}</a>)}
        </div>
      )
    }

  export default FirstForm