import React, { Component } from 'react';
import timeList from '../../info/time-list';

export default class FilterTime extends Component {

    render() {
        const { onFilterSched } = this.props;
        const options = timeList.map(unit => {
            const { time, key } = unit;
            return (
                <option
                    key={key}>
                    {time}
                </option>
            )
        }
        )
        return (
            <div className='filter-prac'>
                <div>Время</div>
                <select
                    id='filter'
                    className='time'
                    onChange={onFilterSched}>
                    {options}
                </select>
            </div>

        )
    }
}
