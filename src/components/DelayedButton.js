// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {
  handleClick = e => {
    e.persist();
    window.setTimeout(() => {this.props.onDelayedClick(e)}, this.props.delay)
  }

  render() {
    return (
    <div>
      <button onClick={this.handleClick} >DelayedButton</button>
    </div>
    )
  }
}

export default DelayedButton
/* had to create fis-wip branch, switch to it, and push myself due to 'learn save' not working.  will submit gitHub URL on canvas */