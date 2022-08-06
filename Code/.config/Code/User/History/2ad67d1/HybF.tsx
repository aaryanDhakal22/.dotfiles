import React from 'react';
import './menu-item.styles.scss'
import {Link} from "react-router-dom"

interface MenuItemProps{
    title:string
    imageUrl:string
    size?:"large" | undefined |""
    linkUrl:string

}
const MenuItem = ({title,imageUrl,size,linkUrl}:MenuItemProps) => {
  return  <Link to={linkUrl}> <div  className={`${size} menu-item`} >
            <div className="background-image" style = {{backgroundImage:`url(${imageUrl})`}}/>
                <div className="content">
                    <h1 className='title'>{title}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            
            </div>
            </Link>
}

export default MenuItem