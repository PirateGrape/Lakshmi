import React, { Component } from 'react';
import SchedWeek from '../sched-week';

export default class SchedMonth extends Component {

    render() {
        const { dynSched } = this.props;
        const month = dynSched.map(week => {
            const dynSched = week
            return (
                < SchedWeek
                dynSched={dynSched}
                key={week.length}
                />
            )
        })
            

        return (
            <div id="month">
                {month}
            </div>

        )
    }
}