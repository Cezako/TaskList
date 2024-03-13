import React, { useState } from 'react'


const Input = ({ dispatch }) => {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = event => {
        setInputValue(event.target.value)
    }

    const handleAddItem = () => {
        if (inputValue.trim() !== '') {
            dispatch({ type: 'ADD_ITEM', payload: inputValue })
            setInputValue('')
        }
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button onClick={handleAddItem}>Add Item</button>
        </div>
    )
}

export default Input