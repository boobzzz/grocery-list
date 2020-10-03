import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import * as A from '../../../redux/actions';

import FieldText from '../../UI/Field/Text/FieldText';
import FieldSelect from '../../UI/Field/Select/FieldSelect';
import classes from './FormNewItem.module.css';

const statusOptions = [
    {name: 'Choose item status...', value: ''},
    {name: 'have', value: 'have'},
    {name: 'ran out', value: 'out'}
]
const priorityOptions = [
    {name: 'Choose item priority...', value: ''},
    {name: '1', value: '1'},
    {name: '2', value: '2'},
    {name: '3', value: '3'},
    {name: '4', value: '4'},
    {name: '5', value: '5'},
]
const initialValues = {
    img: '',
    title: '',
    status: '',
    priority: ''
}
const validationSchema = Yup.object({
    img: Yup.string().required('Enter item image url *'),
    title: Yup.string().required('Enter item title *'),
    status: Yup.string().required('Choose item status *'),
    priority: Yup.string().required('Choose item priority *')
})

const FormNewItem = (props) => {
    const { addEntry } = props

    const handleSubmit = (values, { resetForm }) => {
        const { img, title, status, priority } = values
        let entry = {
            id: nanoid(24),
            img: img,
            title: title,
            status: status,
            priority: priority
        }

        addEntry(entry)
        resetForm({ values: '' })
    }

    return (
        <>
            <div className={classes.Form}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}>
                    {() => {
                        return (
                            <Form>
                                <FieldText id="img" type="text" label="item image URL *" />
                                <FieldText id="title" type="text" label="item title *" />
                                <FieldSelect id="status" label="status *" options={statusOptions} />
                                <FieldSelect id="priority" label="priority *" options={priorityOptions} />
                                <div className={classes.SubmitBtn}>
                                    <button type="submit">
                                        add item
                                    </button>
                                </div>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addEntry: (entry) => dispatch(A.addEntry(entry)),
    }
}

export default connect(null, mapDispatchToProps)(FormNewItem);
