import React from 'react';
import './menu-item.styles.scss'
interface MenuItemProps{
    title:string
    imageUrl:string
    size?:"large" | undefined |""
    linkUrl:string

}
const MenuItem = ({title,imageUrl,size}:MenuItemProps) => {
  return <div  className={`${size} menu-item`} onClick={()=>{}}>
            <div className="background-image" style = {{backgroundImage:`url(${imageUrl})`}}/>
                <div className="content">
                    <h1 className='title'>{title}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            
            </div>;
}

export default MenuItem