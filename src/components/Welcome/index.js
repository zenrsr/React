import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    status: true,
  }

  toggle = () => {
    const {status} = this.state

    this.setState(prevState => ({
      status: !prevState.stat,
    }))
  }

  render() {
    const {status} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="info">Thank you! Happy Learning</p>
        <button type="button" className="button" onClick={this.toggle}>
          {status ? 'Subscribed' : 'Subscribe'}
        </button>
      </div>
    )
  }
}

export default Welcome
