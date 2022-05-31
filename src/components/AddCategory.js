import React, { useState } from 'react'

export const AddCategory = () => {

    //Necesitamos que input tenga un estado
    const [inputValue, setInputValue] = useState('Hola Mundo');
    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit Hecho');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={ handleInputChange }/>
        </form>
    )
}
