
//79.5 se agrega el export de la constante
//79.6 se agrega la category como argumento en la funcion
export const getGifs = async (category) => {

    const url =`https://api.giphy.com/v1/gifs/search?q=${ encodeURI (category) }&limit=10&api_key=QTSZyAzbkAxklrPjw1akmmgDFHX9CFxq`
    //79.2 vamos a AddCategory.js y ordenamos desc para mostrar por la última busqueda
    const respuesta = await fetch(url);
    
    const { data } = await respuesta.json();

    
    const gifs = data.map(img => {
       
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    //79.8 hacemos el return 
    return gifs;
    // console.log(gifs);
    //79.7 comento porque no tenemos el setImages
    // setImages(gifs)

}