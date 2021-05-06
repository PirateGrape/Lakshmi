import React, { Component } from 'react';


export default class FilterResetButton extends Component {


    render() {
        const { onReset } = this.props;
        return (
            <button
                onClick={onReset}>Сбросить фильтр</button>
        )
    }
}
