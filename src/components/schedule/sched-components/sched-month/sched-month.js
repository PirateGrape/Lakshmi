import React, { Component } from 'react';
import SchedWeek from '../sched-week';

import '../../../../styles/sched-month.css'

export default class SchedMonth extends Component {

    render() {
        const { dynSched } = this.props;
        let o = 1000; //Индексация
        const month = dynSched.map(week => {
            o++; //Индексация
            const dynSched = week
            return (
                < SchedWeek
                    dynSched={dynSched}
                    key={o.toString()} //Индексация
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