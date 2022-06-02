import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';



export const GifGrid = ({category}) => {
    const [images, setimages] = useState([]);

    useEffect( () => {
        getGifs(category)
            .then(setimages);
    }, [ category ]); //En este caso, lo ponemos asi porque si la categoria cambia, queremos que nuestro useEffect se vuelva ejecutar
    //[Lista de dependencias] -> si la dejamos vacia, useEffect solo se va ejecutar una vez

    /* const getGifs = async() => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=mVV3dLufqIKZlgCGXO2QIMTXUrIGmVBd`;
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        //console.log(gifs);
        setimages(gifs);

        //vamos abtraer esta funcion para que quede mas sencillo para que solamente tenga lo que es especifico del mismo componente
        //para eso crearemos un nuevo directorio llamado helpers, van a ser funciones que hacen cierto trabajo en especifico, pueden recibir algunos argumentos, lo procesan y hacen return.
    } */

    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>
                
                
                {
                    images.map( img => (
                        <GifGridItem  
                            {...img} //esto para pasarlo como desestructurado
                            key={img.id}/>
                    ))
                }
            </div>
        </>
    )
}
