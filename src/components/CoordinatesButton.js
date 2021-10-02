// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

  handleClick = e => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }

  render() {
    return (
    <div>
      <button onClick={this.handleClick} >CoordinatesButton</button>
    </div>
    )
  }
}

export default CoordinatesButton
/* had to create fis-wip branch, switch to it, and push myself due to 'learn save' not working.  will submit gitHub URL on canvas */