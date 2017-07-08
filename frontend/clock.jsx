import React from 'react';

class Clock extends React.Component{
  constructor(prop){
    super(prop);
    this.state = {date: new Date()};
    this.tick = this.tick.bind(this);
  }

  componentDidMount(){
    this.intervalId = setInterval(this.tick, 1000);

    // first time we increment, we set intervalId  to equal the new time
  }

  // componentWillUnmount(){
  //   // this will be triggered right before we unmount the component.
  //   clearInterval(this.intervalId);
  // }

  tick(){
    this.setState({ date: new Date()});
  }

  render() {
    let hours = this.state.date.getHours();
    let minutes = this.state.date.getMinutes();
    let seconds = this.state.date.getSeconds();

    hours = (hours < 10) ? `0${hours}` : hours;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;

    return (
      <div className = 'time'>
      <p>
        <span className = "head">Date:</span>
        <span className = "body">{ this.state.date.toDateString() }</span>
      </p>
      <p> {hours} : {minutes} : {seconds}</p>
      </div>
    );
  }


}
export default Clock;
