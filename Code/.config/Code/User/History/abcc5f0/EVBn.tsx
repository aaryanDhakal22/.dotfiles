import { url } from 'inspector';
import React from 'react';
import './menu-item.styles.scss'
interface MenuItemProps{
    title:string
    imageUrl:string
}
const MenuItem = ({title,imageUrl}:MenuItemProps) => {
  return <div style = {{
    backgroundImage:`url(${imageUrl})`
  }} className="menu-item">
                <div className="content">
                    <h1 className='title'>{title}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>;
}

export default MenuItem