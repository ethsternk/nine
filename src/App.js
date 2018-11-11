import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      date: Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillMount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: Date()
    })
  }

  convertDate(date) {
    let hours = [parseInt(date[16]), + parseInt(date[17])]
    let minutes = [parseInt(date[19]), + parseInt(date[20])]
    if ((hours[0] === 1 && hours[1] > 2) || (hours[0] === 2)) {
      hours[0] -= 1
      hours[1] -= 2
    }
    let sum = hours[0] + hours[1] + minutes[0] + minutes[1]
    if (sum >= 10) {
      sum = String(sum)
      sum = parseInt(sum[0]) + parseInt(sum[1])
    }
    if (sum === hours[0] || sum === hours[1] || sum === minutes[0] || sum === minutes[1]) {
      return "True"
    } else {
      return "False"
    }
  }

  render() {
    return (
      <div>
        <p>{this.convertDate(this.state.date)}</p>
      </div>
    )
  }
}

export default App;
