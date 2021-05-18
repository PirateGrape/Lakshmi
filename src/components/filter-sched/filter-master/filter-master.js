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
            <div className='filter-mas'>
                <div>Мастер </div>
                <select
                    id='filter'
                    className='mas'
                    onChange={onFilterSched}>
                    {options}
                </select>
            </div>
        )
    }
}
