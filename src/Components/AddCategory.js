import React, { useState } from 'react'

import PropType from 'prop-types';

//lo que envie en el GifExpert <AddCategory setCategories={ setCategories }/> lo vamos a recibir aca mediante
// ({setCategories})
export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {

    setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2) {

            // console.log('Submit hecho');
            //79.3 cambiamos el orden ...cats, inputValue para que primero inserte la nueva y luego las anteriores 
            //mediante el operador ...
            setCategories( cats => [inputValue, ...cats]);
            setInputValue('');
        }


    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                    type="text"
                    value={ inputValue }
                    onChange={ handleInputChange }
                />
        </form>
  )
}

AddCategory.propTypes = {
    setCategories: PropType.func.isRequired
}
