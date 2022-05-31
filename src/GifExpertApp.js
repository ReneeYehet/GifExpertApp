import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

const GifExpertApp = () => {

    //Esto no nos va a servir si queremos seguir agregando valores
    const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    /* const handleAdd = () => {
        setCategories([ ...categories, 'HunterXHunter']);
    } */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory />
            <hr/>

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