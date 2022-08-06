import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/images/mitosysLogo.png'
import {MdAddCircleOutline} from 'react-icons/md'

export const Navbar = ()=>{
    const navigate = useNavigate()

    const studentNavigate = ()=>{
        navigate('/student')
    }
    const feesNavigate = ()=>{
        navigate('/fees')
    }
    const creditNavigate = ()=>{
        navigate('/credit')
    }
    const debitNavigate = ()=>{
        navigate('/debit')
    }
    const transactionNavigate = ()=>{
        navigate('/transaction/add')
    }

    return (
        <div className="fixed top-0 left-0 h-screen w-50 flex flex-col items-center  bg-background px-5">
            <div className="w-46 pl-10 mt-10">
                <img src={logo} alt="MitosysLogo" />
            </div>
            <div className="text-secondaryText px-5 py-3 rounded-lg w-56 text-center mt-20 border-secondaryText border-2  text-2xl"> <MdAddCircleOutline style={{"display":"inline","fontSize":"25px"}} /> TRANSACTION</div>
            <div className="flex flex-col items-center text-primaryText text-2xl gap-10 mt-10">
                <div className="disabled-border" >STUDENT</div>
                <div>FEES</div>
                <div>C/D</div>
            </div>
        </div>
        // <>
        
        // <p onClick={transactionNavigate} > (+)Transaction</p>
        // <p onClick={studentNavigate}>STUDENT</p>
        // <p onClick={feesNavigate} >FEES</p>
        // <p onClick={creditNavigate} >C/D</p>
        // </>
    )
}