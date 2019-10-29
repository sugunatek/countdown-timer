import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Timer extends Component {
  state = {
      time: 0,
      start: 0,
      isOn: false
    };
  startTimer = () => {
    this.setState({
      time: this.state.time,
      start: Date.now() - this.state.time,
      isOn: true
    })
    this.timer = setInterval(() => this.setState({
      time: Date.now() - this.state.start
    }), 1);
  }
  pauseTimer = () => {
    this.setState({isOn: false})
    clearInterval(this.timer)
  }
  resetTimer = () => {
    this.setState({time:0})
    clearInterval(this.timer)
  }


  render() {
    const { time } = this.state;
    let seconds = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(time / 3600000)).slice(-2);
    return (
      <div>
        <div>
          <h3>{hours} : {minutes} : {seconds}</h3>
          <button onClick={this.startTimer}>start</button>
          <button onClick={this.pauseTimer}>pause</button>
          <button onClick={this.resetTimer}>reset</button>
       </div>
      </div>
    );
  }
}

