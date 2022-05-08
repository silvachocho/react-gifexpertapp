import React from 'react'

//77.3 creamos otro componente 
export const GifGridItem = ({title, url}) => {

    // console.log(id, title, url)
    //clase 78.1 creo una clase .card en el index.css para que se vean mejor los gifs
    //78.2 agrego la clase al div
  return (
    <div className="card animate__animated animate__flipInX">
       <img src={url} alt={title}/>
       <p> {title} </p>
    </div>
  )
}
