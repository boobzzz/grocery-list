import React from 'react';

import classes from './ProductEntry.module.css';

const ProductEntry = (props) => {
    const { img, title, status, priority } = props

    return (
        <div>
            <div>
                <img src="" alt=""/>
            </div>
            <div>
                <h3>{title}</h3>
                <span>{status}</span>
                <span>{priority}</span>
            </div>
        </div>
    )
}

export default ProductEntry;
