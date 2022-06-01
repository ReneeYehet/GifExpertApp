import React, { useState, useEffect } from 'react'

//useEffect permite poder ejecutar codigo de manera condicional

export const GifGrid = ({category}) => {

    const [ count, setCount ] = useState(0);

    //Lo que significa que usando useEffect hace que este componente solo sea renderizado por primera vez
    useEffect( () => {
        getGifs();
    }, []); //[Lista de dependencias] -> si la dejamos vacia, useEffect solo se va ejecutar una vez

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=mVV3dLufqIKZlgCGXO2QIMTXUrIGmVBd';
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs);
    }

    return (
        <div>
            <h3>{category}</h3>
            <h4>{count}</h4>
            <button onClick={() => setCount(count+1)}></button>
        </div>
    )
}
