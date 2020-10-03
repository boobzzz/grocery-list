import React from 'react';
import { connect } from 'react-redux';
import * as A from '../../../redux/actions';

import classes from './FilterByStatus.module.css';

const statusOptions = [
    {name: 'all', value: 'all'},
    {name: 'have', value: 'have'},
    {name: 'ran out', value: 'ran out'}
]

const FilterByStatus = (props) => {
    const { filterByStatus } = props

    const changeHandler = (e) => {
        let value = e.target.value

        filterByStatus(value)
    }

    return (
        <div className={classes.ByStatus}>
            <label>By status
                <select onChange={changeHandler}>
                    {statusOptions.map(option =>
                        <option key={option.value} value={option.value}>
                            {option.name}
                        </option>
                    )}
                </select>
            </label>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterByStatus: (status) => dispatch(A.filterByStatus(status))
    }
}

export default connect(null, mapDispatchToProps)(FilterByStatus);
