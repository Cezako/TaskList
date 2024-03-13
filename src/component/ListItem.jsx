import React from 'react'

const ListItem = ({ item, dispatch }) => {
    const handleDeleteItem = () => {
        dispatch({ type: 'DELETE_ITEM', payload: item.id })
    };

    return (
        <li>
            {item.text}
            <button onClick={handleDeleteItem}>Delete</button>
        </li>
    )
}

export default ListItem