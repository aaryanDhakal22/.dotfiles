import React from 'react';
interface MenuItemProps{
    title:string
}
export function MenuItem({title}:MenuItemProps) {
  return <div className="menu-item">
                <div className="content">
                    <h1 className='title'>HATS</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>;
}
  