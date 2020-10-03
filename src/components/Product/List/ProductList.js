import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as S from '../../../redux/selectors';
import * as A from '../../../redux/actions';

import FilterByStatus from '../../Filter/ByStatus/FilterByStatus';
import ListItem from './Item/ListItem';
import AddBtn from '../../UI/Buttons/AddBtn/AddBtn';
import ModalContainer from '../../UI/Modal/Modal';
import FormNewItem from '../Form/FormNewItem';
import classes from './ProductList.module.css';

const ProductList = (props) => {
    const { list, toggleStatus, deleteEntry } = props
    const [ modal, setModal ] = useState(false)

    const toggleModal = () => setModal(!modal)

    const changeStatus = (id, status) => {
        status === 'have'
        ? toggleStatus(id, 'ran out')
        : toggleStatus(id, 'have')
    }

    const deleteItem = (id) => deleteEntry(id)

    return (
        <>
            <FilterByStatus />
            <div className={classes.List}>
                {list.map(item =>
                    <ListItem
                        key={item.id}
                        title={item.title}
                        status={item.status}
                        priority={item.priority}
                        remove={() => deleteItem(item.id)}
                        toggle={() => changeStatus(item.id, item.status)}/>
                )}
                <AddBtn clicked={toggleModal} />
            </div>
            <ModalContainer
                modal={modal}
                toggle={toggleModal}
                title="New Item"
                modalBody={<FormNewItem />} />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        list: S.getStatusSelector(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addEntry: (entry) => dispatch(A.addEntry(entry)),
        toggleStatus: (id, status) => dispatch(A.toggleStatus(id, status)),
        deleteEntry: (id) => dispatch(A.deleteEntry(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
