import React, { useState } from 'react'

const GifExpertApp = () => {

    //Esto no nos va a servir si queremos seguir agregando valores
    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    //Para eso hacemos uso de useState
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const handleAdd = () => {
        setCategories([ ...categories, 'HunterXHunter']);
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>

            <button onClick={handleAdd}>Agregar</button>

            <ol>
                {
                    categories.map( category => {
                        return <li key={category}> { category } </li>
                    })
                }
            </ol>
        </>
    );
}

export default GifExpertApp