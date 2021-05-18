import React, { Component } from 'react';
import SchedWeek from '../sched-week';

import '../../../../styles/sched-month.css'

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
            <div className="sched-month"
                >
                {month}
            </div>

        )
    }
}