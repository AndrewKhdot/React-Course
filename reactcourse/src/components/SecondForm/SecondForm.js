import React from 'react';

const SecondForm = (props) => {
      return(
        <div>
            <h1>Second</h1>
            { props.linkList.map(item => <a href= {'http://localhost:3000/' + item}>{item}</a>)}
        </div>
      )
    }

  export default SecondForm