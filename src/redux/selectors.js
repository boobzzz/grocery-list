import * as R from 'ramda';
import { createSelector } from 'reselect';

const getList = (state) => state.product.list
const getListSelector = createSelector(getList, (list) => {
    const priorityTitleSort = R.sortWith([
        R.ascend(R.prop('priority')),
        R.ascend(R.prop('title'))
    ])

    return priorityTitleSort(list)
})

const getStatus = (state) => state.product.status
export const getStatusSelector = createSelector(
    getListSelector, getStatus, (list, status) => {
        if (status === 'all') return list
        
        return list.filter(i => i.status === status)
})
