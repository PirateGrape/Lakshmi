import React, { Component } from 'react';
import SchedDay from '../sched-day';

import '../../../../styles/sched-week.css'

export default class SchedWeek extends Component {
    render() {
        const { dynSched } = this.props;
        const week = dynSched.map(day => {
            const dynSched = day
            return (
                <SchedDay dynSched={dynSched}
                />
            )
        })

        return (
            <div className="sched-week">
                {week}
            </div>
        )
    }
}
