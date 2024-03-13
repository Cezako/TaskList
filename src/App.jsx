import React, { useReducer } from 'react'
import Input from './component/Input.jsx'
import List from './component/List.jsx'

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, { id: Date.now(), text: action.payload }]
        case 'DELETE_ITEM':
            return state.filter(item => item.id !== action.payload)
        default:
            return state
    }
}

const App = () => {
    const [items, dispatch] = useReducer(reducer, [])

    return (
        <div className="App">
            <Input dispatch={dispatch} />
            <List items={items} dispatch={dispatch} />
        </div>
    )
}

export default App

