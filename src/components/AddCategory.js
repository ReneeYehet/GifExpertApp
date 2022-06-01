import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    //Necesitamos que input tenga un estado
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(cats => [ ...cats, inputValue]);
            setInputValue('');
        }
        
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

AddCategory.protoType = {
    setCategories: PropTypes.func.isRequired
}
