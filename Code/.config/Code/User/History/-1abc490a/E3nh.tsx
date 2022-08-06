import {BsPlus, BsFillLightningFill, BsGearFill} from 'react-icons/bs'
import {FaFire,FaPoo} from 'react-icons/fa'


const NavBar =  ()=>{
    return(
        <div className="fixed left-0 top-0 h-screen w-16 m-0 flex flex-col bg-primary text-secondary shadow-lg ">
            <SideBarIcon icon={<></>}

        </div>
    )
}

const SideBarIcon = ({icon}:{icon:any})=>{
    return (
        <div>
            {icon}
        </div>
    )
}

export default NavBar

