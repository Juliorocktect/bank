import React, { useEffect, useState } from 'react'
import "./Navigator.css"
import {GoHome,GoCreditCard } from 'react-icons/go'
import {RxDashboard} from 'react-icons/rx'
import {VscGraph} from 'react-icons/vsc'
import { useNavigate } from "react-router-dom";


function Navigator({activePage}) {
    const ids = ['home','card','dashboard','graph'];
    const [state, setState] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        activate(activePage);
    },[])

    function activate(activePage){
        if (activePage <= 3){
        document.getElementById(ids[activePage]).classList.add("active-tab")
        setState(true);
        }
    }
    function deactivate(activePage){
        document.getElementById(ids[activePage]).classList.remove("active-tab")
        setState(false);
    }

  return (
   <div className="navigator">
        <div className="icon-cont" id='home' onClick={() =>{navigate("/")}}>
            <GoHome className='icon'/>
        </div>
        <div className="icon-cont" id='card' onClick={() => {navigate("/card")}}>
            <GoCreditCard className='icon'/>
        </div>
        <div className="icon-cont " id='dashboard' onClick={() => {navigate("/dashboard")}}>
        <RxDashboard className='icon'/>
        </div>
        <div className="icon-cont" id='graph' onClick={() => {navigate("/graph")}}>
            <VscGraph className='icon'/>
        </div>
   </div>
  )
}

export default Navigator