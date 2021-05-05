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
            <select
                className='prac'
                onChange={onFilterSched}>
                <option>Все</option>
                {options}
            </select>
        )
    }
}
