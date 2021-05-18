import React, { Component } from "react";
import SCChronometer from "../../components/Chronometer/SCChronometer";
import { withAuth } from "../../context/auth.context";

class Chronometer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actualTime: 0,
      btnPlayPause: "Play",
    };
    this.counter = null;
    this.initTimer = this.initTimer.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
  }
  initTimer() {
    if (this.counter) {
      this.pauseTimer();
      this.setState({ btnPlayPause: "Play" });
    } else {
      this.counter = setInterval(() => {
        this.setState({ actualTime: this.state.actualTime + 0.1 });
      }, 1000);
      this.setState({ btnPlayPause: "Pause" });
    }
  }
  pauseTimer() {
    clearInterval(this.counter);
    this.counter = null;
  }
  clearTimer() {
    this.setState({ actualTime: 0 });
    clearInterval(this.counter);
    this.counter = null;
    this.setState({ btnPlayPause: "Play" });
  }
  render() {
    return (
      <SCChronometer>
        <div className="timer">
          <div className="time">
            <img
              className="imagen"
              src="../../../cronometro.png"
              alt="Cronometro"
            />
            <h2>{this.state.actualTime.toFixed(2)}</h2>
          </div>
          <div className="btns">
            <input
              type="button"
              value={this.state.btnPlayPause}
              onClick={this.initTimer}
            />
            <input type="button" value="Clean" onClick={this.clearTimer} />
          </div>
        </div>
      </SCChronometer>
    );
  }
}
export default withAuth(Chronometer);
