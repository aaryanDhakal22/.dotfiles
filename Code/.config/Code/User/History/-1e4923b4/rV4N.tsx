import { MenuItem } from "../menu-item/menu-item.component";
import './directory.styles.scss'
import React from "react";



function DirectoryMenu({}) {
  return <div className="directory-menu">
            <MenuItem title="HATS" />
            <MenuItem title="SNEAKERS" />
            <MenuItem title="JACKETS" />
            <MenuItem title="MEN" />
            <MenuItem title="WOMEN" />
            
        </div>;
}
  
export default DirectoryMenu