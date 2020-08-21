import React, { Component } from 'react';
import './Clock.css';

export class Clock extends Component {

    state = {
        hour: '',
        mins: '',
        secs: ''
    }

    componentDidMount() {
        this.updateTime();
    }

    updateTime = () => {
        let time = new Date();
        this.setState({hour: time.getHours() < 10 ? '0' + time.getHours() : time.getHours()});
        this.setState({mins: time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()});
        this.setState({secs: time.getSeconds() < 10 ?  '0' + time.getSeconds() : time.getSeconds()});
        var t = setTimeout(this.updateTime, 500); 
    }
    render() {
        return (
            <div className="wholeDT">
                <span className="time">{this.state.hour}</span>
                <span className="time">{this.state.mins}</span>
                <span className="time">{this.state.secs}</span>
                <br></br>
                <br></br>
                <span className="time-header"> The <i><b className="clock">clock</b></i> is ticking..</span>
                <span className="time-header">So if you <i><b className="clock">love</b></i> someone, let them know before it's too late.</span>
            </div>
        )
    }
}

export default Clock
