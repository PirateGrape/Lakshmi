import React, { Component } from 'react';


export default class FilterResetButton extends Component {


    render() {
        const { onReset, onClearFilters } = this.props;
        return (
            <button
                onClick={() => {onReset(); onClearFilters()}}>Сбросить фильтр</button>
        )
    }
}
