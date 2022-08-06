import { MenuItem } from './../../components/menu-item/menu-item.component';
import React from 'react';

import './homepage.styles.scss'

const Homepage = () =>{
    return <div className="homepage">
        <DirectoryMenu     />
    </div>
}


  

    function DirectoryMenu({}) {
      return (<div className="directory-menu">
            <MenuItem title="HATS" />
            <MenuItem title="SNEAKERS" />
            <MenuItem title="JACKETS" />
            <MenuItem title="MEN" />
            <MenuItem title="WOMEN" />
            
        </div>);
    }
    export default Homepage