import React, { Component } from 'react';
import pracList from '../../info/prac-list';

export default class FilterPrac extends Component {

    render() {
        const { onFilterSched } = this.props;
        const options = pracList.map(unit => {
            const { name, key } = unit;
            return (
                <option
                    key={key}>
                    {name}
                </option>
            )
        }
        )
        return (
            <div className='filter-prac'>
                <div>Практика</div>
                <select
                    id='filter'
                    className='prac'
                    onChange={onFilterSched}>
                    {options}
                </select>
            </div>

        )
    }
}
