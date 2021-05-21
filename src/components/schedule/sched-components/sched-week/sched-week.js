import React, { Component } from 'react';
import SchedDay from '../sched-day';

import '../../../../styles/sched-week.css'

export default class SchedWeek extends Component {
    render() {
        let l = 100; //Индексация
        const { dynSched } = this.props;
        const week = dynSched.map(day => {
            l++; //Индексация
            const dynSched = day;
            return (
                <SchedDay dynSched={dynSched}
                key={l.toString()} //Индексация
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
