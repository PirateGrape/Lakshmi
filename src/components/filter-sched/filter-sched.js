import React, { Component } from 'react';
import FilterPrac from './filter-prac';
import FilterMas from './filter-master';
import FilterTime from './filter-time';
import FilterResetButton from './filter-reset';

export default class FilterSched extends Component {

    render() {

        const { onFilterSched, onReset, onClearFilters } = this.props;

        return (
            <>  
                <FilterPrac onFilterSched={onFilterSched} />

                <FilterMas onFilterSched={onFilterSched} />

                <FilterTime onFilterSched={onFilterSched} />

                <FilterResetButton onReset={onReset}
                onClearFilters={onClearFilters} />


            </>
        )
    }
};