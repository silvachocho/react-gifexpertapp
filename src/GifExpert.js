import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifExpert = () => {

    //1.crear categorías
    //5. de esta manera no se hace ya que si queremos cambiar una categoría no se renderizaría el listado
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    //6. vamos a usar useState, que se importa ni bien se escribe
    //7. setCategories es el segundo argumento que sería la funcion que vamos a llamar para agregar categorías
    //8. en el useState vamos a poner como valor inicial el mismo arreglo
    const [categories, setCategories] = useState(['One Punch']);

    /* TAREA
    se necesita que cuando se click en el boton se agregue un nuevo elemento al array
     para agregarlo se neceita utilizar el setCategories*/

    // const handleAdd = () => {

    //      /* setCategories('Mr Robot');//esto da error */
    //      /* esta es una solucion */
    //     //  setCategories([...categories, 'Mr Robot']);
    //      /* esta es otra 
    //      cats sería recibir un callback donde cats sería el valor del estado anterior, y luego tiene 
    //      que regresar el nuevo estado,  en este caso va a ser un nuevo arreglo, con todos los valores anteriores
    //      ...categories + el nuevo que le pasamos 'Mr Robot' */
    //      setCategories( cats => [...categories, 'Mr Robot']);

    // }

  return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories }/>
        <hr /> 

        <ol>
            {
                categories.map( category => (
                    <GifGrid 
                        key={ category }
                        category ={ category } 
                    />
                ))
            }
        </ol>
        
    </>
  )
// // NOTAS
// luego de crear el+ html se debe pegar el GifExpert en el index.js 
// 2. podríamos listar así solamente pero lista todos pegados en un mismo div*/
// // {
// //     categories
// // }
// 3. podríamos listar con un orden list <ol> </ol> y dentro agregarle los list itmes <li> </li>
{/* <ol>
            <li>One Punch</li>
            <li>Samurai X</li>
            <li>Dragon Ball</li>
        </ol> */}

// 4. necesito recorrer los elementos y retornarlos para eso utilizamos el .map del array 
}
