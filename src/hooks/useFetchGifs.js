
//80.2 cutom hook, el use adelante de los archivos es un estandar para indicar que es un hook

import { useEffect, useState } from 'react'

import { getGifs } from "../helpers/getGifs";

//los hooks son funcionaes

//81.5 le agrego la category como parametro 
export const useFetchGifs = ( category ) => {

    //e80.3 estos hooks pueden tener ESTADO useState

    const [state, setState] = useState({
        //80.4 necesitamos agregar el estado incial, va a ser un objeto que tiene un arreglo
        data: [],
        loading: true
    });
    //cuando se utilice por primera vez el useFetchGifs tenemos este estado que va a cargar por defecto 

    //81.1 
    useEffect(() => {

        //81.2 necesito ejecutar el cuerpo de mi peticion http para traer las imagenes
        //81.3 importo el getGifs
        getGifs( category )
        .then(imgs => {

            setTimeout( () => {

                setState({

                    data: imgs,
                    loading: false
                });
                
            }, 3000);
            
        })

    }, [category])
    


    //80.8 
 /*    setTimeout( () => {
        setState({
            data: [1,2,3,4,5,6,7],
            loading: false
        })
    },3000); */

    return state; // el state es un arreglo { data: [], loading: true};

}
