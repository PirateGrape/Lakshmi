import React, { Component } from 'react';
import masterList from '../../info/master-list';

export default class FilterMas extends Component {

    render() {
        const { onFilterSched } = this.props;
        const options = masterList.map(unit => {
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
                className='mas'
                onChange={onFilterSched}>
                <option>Все</option>
                {options}
            </select>
        )
    }
}
