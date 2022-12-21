import React from 'react';

class LinckResult extends React.Component {
    render() {
      return(
        this.choseLinck(this.props.type, this.props.value, this.props.descprition)
      )
    }
    choseLinck(type, value, descprition) {
        if(type === 'phone') {
            return (
            <>
                <h2>{descprition}</h2>
                <a href={'tel:' + value}>{value}</a>
            </>)
        }
        else {
            return(
            <>
                <h2>{descprition}</h2>
                <a href={value}>{value}</a>
            </>)
        }
    }
  }

  export default LinckResult
