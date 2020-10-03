export const deleteEntry = (id) => {
    return {
        type: 'DELETE_ITEM',
        payload: id
    }
}

export const addEntry = (entry) => {
    return {
        type: 'ADD_ITEM',
        payload: entry
    }
}

export const toggleStatus = (id, status) => {
    return {
        type: 'TOGGLE_STATUS',
        payload: {
            id: id,
            status: status
        }
    }
}

export const filterByStatus = (status) => {
    return {
        type: 'FILTER',
        payload: status
    }
}
