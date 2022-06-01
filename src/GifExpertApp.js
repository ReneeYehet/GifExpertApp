import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    //Esto no nos va a servir si queremos seguir agregando valores
    const[categories, setCategories] = useState(['One Punch']);

    /* const handleAdd = () => {
        setCategories([ ...categories, 'HunterXHunter']);
    } */

    return (
        <>
            <h2>GifExpertApp</h2>
            {/* Para mandarle propiedades a nuestro componente AddCategory */}
            <AddCategory setCategories={setCategories} />
            <hr/>

            <ol>
                {
                    categories.map( category => 
                        <GifGrid 
                            key={category}
                            category={category}/>
                    )
                }
            </ol>
        </>
    );
}

export default GifExpertApp