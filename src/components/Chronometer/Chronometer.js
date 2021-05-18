import React, { Component } from "react";
import SCChronometer from "../../components/Chronometer/SCChronometer";
import { withAuth } from "../../context/auth.context";
import Text from "../Chronometer/SCChronometer";

class Chronometer extends React.Component {
  constructor(props) {
    super(props);

    //: getInitialState() method
    this.state = {
      minutes: 0,
      seconds: 0,
      millis: 0,
      running: false,
    };

    this._handleStartClick = this._handleStartClick.bind(this);
    this._handleStopClick = this._handleStopClick.bind(this);
    this._handleResetClick = this._handleResetClick.bind(this);
  }

  _handleStartClick(event) {
    var _this = this;
    if (!this.state.running) {
      this.interval = setInterval(() => {
        this.tick();
      }, 100);

      this.setState({ running: true });
    }
  }

  _handleStopClick(event) {
    if (this.state.running) {
      clearInterval(this.interval);
      this.setState({ running: false });
    }
  }

  _handleResetClick(event) {
    this._handleStopClick();
    this.update(0, 0, 0);
  }

  tick() {
    let millis = this.state.millis + 1;
    let seconds = this.state.seconds;
    let minutes = this.state.minutes;

    if (millis === 10) {
      millis = 0;
      seconds = seconds + 1;
    }

    if (seconds === 60) {
      millis = 0;
      seconds = 0;
      minutes = minutes + 1;
    }

    this.update(millis, seconds, minutes);
  }

  zeroPad(value) {
    return value < 10 ? `0${value}` : value;
  }

  update(millis, seconds, minutes) {
    this.setState({
      millis: millis,
      seconds: seconds,
      minutes: minutes,
    });
  }

  render() {
    let run = this.state.running === true;
    return (
      <SCChronometer>
        <div className="contenedor-principal">
          <Text className="h1" as="h1">
            & Chronometer
          </Text>
          <main className="main">
            <div className="display">
              <div className="state">{run ? "TASKTIME" : "STOP"}</div>
              <div className="segments">
                <span className="mins">
                  {this.zeroPad(this.state.minutes)}:
                </span>
                <span className="secs">
                  {this.zeroPad(this.state.seconds)}{" "}
                </span>
                <span className="millis">.0{this.state.millis}</span>
              </div>
            </div>

            <div className="actions">
              <button
                className={"btn start " + (run ? "disabled" : "")}
                onClick={this._handleStartClick}
              >
                ►
              </button>

              <button
                className={"btn stop " + (false == run ? "disabled" : "")}
                onClick={this._handleStopClick}
              >
                ⥣
              </button>

              <button
                className={
                  "btn reset " +
                  (this.state.seconds > 0 && false == run ? "" : "disabled")
                }
                onClick={this._handleResetClick}
              >
                ⟳
              </button>
            </div>
          </main>
        </div>
      </SCChronometer>
    );
  }
}
export default withAuth(Chronometer);
