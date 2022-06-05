import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category}) => {

    const {data: images , loading} = useFetchGifs( category );

    return (
        <>
            <h3  className='animate__animated animate__fadeIn'>{category}</h3>

            {loading && <p className='animate__animated animate__flash'>Loading</p>} {/** modo corto con el AND si el primero es verdadero, haz esto, sino no hagas nada */}

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
