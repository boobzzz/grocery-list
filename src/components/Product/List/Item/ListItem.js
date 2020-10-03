import React from 'react';

import ToggleBtn from '../../../UI/Buttons/ToggleBtn/ToggleBtn';
import DeleteBtn from '../../../UI/Buttons/DeleteBtn/DeleteBtn';
import classes from './ListItem.module.css';

const ListItem = (props) => {
    const { title, status, priority, toggle, remove } = props

    return (
        <div className={classes.Item}>
            <h4>{title}</h4>
            <div>
                <span>Status: <i>{status}</i></span>
                <span>Priority: <i>{priority}</i></span>
            </div>
            <div>
                <ToggleBtn clicked={toggle} />
                <DeleteBtn clicked={remove} />
            </div>
        </div>
    )
}

export default ListItem;
