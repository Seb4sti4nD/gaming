import React from 'react'
import icon1 from '../../assets/icons8-cloud-storage-58.png'
import icon2 from '../../assets/icons8-headphones-50.png'
import icon3 from '../../assets/icons8-monitor-50.png'
import icon4 from '../../assets/icons8-mouse-100.png'
import icon5 from '../../assets/icons8-printer-50.png'
import icon6 from '../../assets/icons8-processor-64.png'
import './home.css';
import { Link } from 'react-router-dom'
export function Home() {
  return (
    <div className='home'>
      <h1>Compañia Portales</h1>
      <p>ELIGE UNA CATEGORIA</p>
      <div className='category-home'>
         <div className='category'>
        <Link className='link' to={`/product/Impresoras`}>
         <img src={icon5}></img>
         Impresoras
         </Link>
         </div>
         <div className='category'>
         <Link className='link' to={`/product/Monitores`}>
         <img src={icon3}></img>
         Monitores
         </Link>
         </div>
         <div className='category'>
         <Link className='link'  to={`/product/Auriculares`}>
         <img src={icon2}></img>
         Auriculares
         </Link>
         </div>
         <div className='category'>
         <Link className='link'  to={`/product/Almacenamiento`}>
         <img src={icon1}></img>
         Almacenamiento
         </Link>
         </div>
         <div className='category'>
         <Link className='link'  to={`/product/Procesadores`}>
         <img src={icon6}></img>
         Procesadores
         </Link>
         </div>
         <div className='category'>
         <Link className='link'  to={`/product/Ratones`}>
         <img src={icon4}></img>
         Ratones
         </Link>
         </div>
      </div>
    </div>
  )
}

