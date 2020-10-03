import React from 'react';

import classes from './AddBtn.module.css';

const AddBtn = ({ clicked }) => {
    return (
        <div className={classes.Add}>
            <a href="#/" onClick={clicked}>
                add new item
            </a>
        </div>
    )
}

export default AddBtn;
