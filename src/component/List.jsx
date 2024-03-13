import React from 'react'
import ListItem from './ListItem'


const List = ({ items, dispatch }) => {
    return (
        <ul>
            {items.map(item => (
                <ListItem key={item.id} item={item} dispatch={dispatch} />
            ))}
        </ul>
    )
}

export default List