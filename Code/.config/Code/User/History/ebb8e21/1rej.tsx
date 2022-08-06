import  DirectoryMenu  from './../../components/directory-menu/directory-menu.component';
import React from 'react';
import { Outlet } from 'react-router-dom';
import './homepage.styles.scss'

const Homepage = () =>{
    return <div className="homepage">
        <DirectoryMenu     />
        <Outlet/>
    </div>
}


export default Homepage