const initialState = {
    list: [
        {
            id: '5f54d4ef953fc802d98a11ee',
            img: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1882&q=80',
            title: 'Eggs',
            status: 'have',
            priority: '3'
        },
        {
            id: '5f54d4effd80f1f8b78649cc',
            img: 'https://images.unsplash.com/photo-1573333515743-56d57731dd1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80',
            title: 'Bread',
            status: 'ran out',
            priority: '1'
        },
        {
            id: '5f54d4ef5462fef6db7d2006',
            img: 'https://images.unsplash.com/photo-1560872236-a2550e4f2d4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1010&q=80',
            title: 'Salt',
            status: 'have',
            priority: '3'
        }
    ],
    status: 'all'
}

const productReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case 'ADD_ITEM':
        return {
            ...state,
            list: [...state.list, payload]
        }
        case 'DELETE_ITEM':
            return {
                ...state,
                list: state.list.filter(i => i.id !== payload)
            }
        case 'TOGGLE_STATUS':
            return {
                ...state,
                list: state.list.map(item =>
                    item.id === payload.id
                    ? {...item, status: payload.status}
                    : item
                )
            }
        case 'FILTER':
            return {
                ...state,
                status: payload
            }
        default:
            return state
    }
}

export default productReducer;
