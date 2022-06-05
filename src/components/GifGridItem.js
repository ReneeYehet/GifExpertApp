import React from 'react'

export const GifGridItem = ({ id, title, url }) => {
    //console.log(img);
    return (
        <div className='card animate__animated animate__backInUp'>
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}
