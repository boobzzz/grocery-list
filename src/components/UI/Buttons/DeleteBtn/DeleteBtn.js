import React from 'react';
import { RiDeleteBin2Line } from 'react-icons/ri';

import classes from './DeleteBtn.module.css';

const DeleteBtn = ({ clicked }) => {
    return (
        <a
            href="#/"
            className={classes.Delete}
            onClick={clicked}>
            <RiDeleteBin2Line />
        </a>
    )
}

export default DeleteBtn;
