import React, { Component } from 'react';
import SchedWeek from '../sched-week';

export default class SchedMonth extends Component {

    render() {
        const { dynSched } = this.props;
        const month = dynSched.map(week => {
            const dynSched = week
            console.log(week)
            return (
                < SchedWeek
                dynSched={dynSched}/>
            )
        })
            

        return (
            <div id="month">
                {month}
            </div>

        )
    }
}