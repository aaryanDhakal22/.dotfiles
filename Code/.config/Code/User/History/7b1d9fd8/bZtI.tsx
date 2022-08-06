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
        <div className="fixed top-0 left-0 h-screen w-50 flex flex-col items-center bg-background">
            <div>
                <img src={logo} alt="MitosysLogo" />
            </div>
            <div className="text-secondaryText px-5 py-3 rounded-lg w-48 text-center border-secondaryText border-2 font-bold"> <MdAddCircleOutline style={{"display":"inline","fontSize":"25px"}} /> TRANSACTION</div>
            <div className="">
                <div>STUDENT</div>
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