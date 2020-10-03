import React from 'react';

import classes from './ToggleBtn.module.css';

const ToggleBtn = ({ clicked }) => {
    return (
        <a
            href="#/"
            className={classes.Toggle}
            onClick={clicked}>
            <i>status</i>
        </a>
    )
}

export default ToggleBtn;
