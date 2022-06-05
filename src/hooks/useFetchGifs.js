//Los Hooks son funciones
//Los CustomHooks funcionan como si fueran functional components

import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs'

//Esto puede ser un Hook sencillamente
//Los hooks tambien pueden tener estados y es lo que haremos
//mandaremos un estado con la siguiente estructura de data
export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        //esto es una promesa
        getGifs( category )
            .then( imgs => {
                setTimeout( () => {
                    console.log(imgs);
                    setState({
                        data: imgs,
                        loading: false
                    })
                }, 3000)
            })
    }, [category])


    return state; // {data: [], loading: true}
}