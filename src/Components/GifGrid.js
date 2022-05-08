import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGigs';
import { GifGridItem } from './GifGridItem';
//75.1. necesito hacer otro componente para agregar nombre y que muestre el gif sobre eso
export const GifGrid = ({ category }) => {

    //80.5 vamos a utilizar el useFetchState para eso hay que impportarlo useFetchGifs();
    //80.6 este objeto lo vamos a almacenar en una constante

    //81.4 le paso la category como parametro 

    //81.6 para renombrar el data por imagenes se le agrega el : 
    const { data:images, loading } = useFetchGifs( category );
    //80.7 este loading lo voy a pasar en el https


    //76.1 creo el estado useStarte para verificar que si generamos el código con un contador
    // se genera siempre el mismo código y llama a los 10 gif cada vez
    // const [count, setCount] = useState(0)

    //77.2 creamos un nuevo estado useState
    /* const [images, setImages] = useState([])

    //76.2 para esto se ghace el useEffect y controla que si ya se generó no se genere de nuevo
    //76.3 quiero que se ejecute esta accion cuando el componente es renderizado por primera vez
    //76.4 debo comentar el getGifs() en la linea 54
    //80.1 esta instruccíon cuando se carga por primera vez lanza la peticion para obtener los gifs
    //y los coloca en las imagenes (setImages). 
    //Vamos a crear un custome hook para hacer esto
    useEffect(() => {
        //79.10 se importa el getGifs
        //se agrega las category y como retorna una promesa se agrega el .then 
        getGifs( category )
        .then(imgs => setImages(imgs))
        //79.9 esta funcion no existe mas por lo tanto la comentamos
        // getGifs();
    }, [category]) */

    //75.3. en este GifGrid necesito recibir una categoría y hacer una petición http
    // para eso creo una funcion.

    //7. hago async la funcion
    //79.4 creamos la carpeta helpers y dentro el archivo donde va a contener funciones que 
    //hacen trabajos epecificos. En este caso el codigo de la linea 26 a 56
    /* const getGifs = async () => {

        //75.4. hacemos la petición http para traer las imagenes que corresponden a esa categoría

        //75.5. abrimos la app postman y creamos la url
        //75.6. le agregamos los + en los espacios y el https:// al pricipio

        //79.1 las category del GifGrid no lo estamos utilizando
        // para utilizarlo reemplazamos donde nombra los gif que buscamos y agregamos las categorías
        //se debe poner entre `` la url y ${ category}. Para reemplazar los espacios se utiliza el encodeURI
        const url =`https://api.giphy.com/v1/gifs/search?q=${ encodeURI (category) }&limit=10&api_key=QTSZyAzbkAxklrPjw1akmmgDFHX9CFxq`
        //79.2 vamos a AddCategory.js y ordenamos desc para mostrar por la última busqueda
        const respuesta = await fetch(url);
        //75.8. voy a barrer las imagenes que estan en data en la consola del navegador
        //hago desestructuracion de la data {data}
        const { data } = await respuesta.json();

        //75.9. necesito ver cuales son los datos que necesito para traer el gif
        //75.10.voy a barrer cada una de las imagenes
        const gifs = data.map(img => {
            //75.11. el return va a transformar cada uno de los elementos que esten dentro del arreglo img
            //y voy a retornar un nuevo objeto con la informacion que me intereza, en este caso el id:
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs);
        setImages(gifs)

    } */
    //75.7. necesito llamar a la función getGif();
    // getGifs();

    //75.2. creo el componente
    //77.1 agrego una lista ordenada <ol> </ol> con items
    //77.2 se debe mostrar el id mas el titulo ordenados por eso utilizamos el map
    //<li key={img.id}>{img.title}</li>
    //77.4 borro <li key={img.id}>{img.title}</li> y muestro mi gridItem que creamos
    //77.5 debemos importarlo
    return (
        <>
            <h3 className='animate__animated animate__rotateIn'> { category } </h3>

            { loading && <p className='animate__animated animate__flash'>Loading...</p> }

            <div className='card-grid'>
                    {
                        images.map(img => (
                            <GifGridItem
                                key={img.id}
                                { ...img }

                            />

                        ))
                    }
            </div> 
        </>
    )
}


//NOTAS:
//clase 75
//75.2.En el GifExpert.js importo el componente GifGrid y le paso el key para que imprima por cada categoría un key

//clase 76

//clase 77. creo una lista de items

//clase 79

//clase 80 CUSTOM HOOK
// esto es una forma de extraer logica de un componente o lógica que yo quiero reutilizar, y extraerla de 
//tal manera que sea facil utilizarla nuevamente.
// se va a comentar codigo de este js 