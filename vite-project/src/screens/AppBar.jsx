import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import './AppBar.css'


export const AppBar=(props)=>{
    console.log(props)
    const[isLoggedIn,SetIsLoggedIn]=useState(false)
    const handleClick=()=>{
       // console.log(props.num+1)
      //  props.handleClick(props.num+1,"setname:")
        SetIsLoggedIn(!isLoggedIn)

    }
    return <div className="appbarParent">
        <img src={reactLogo} className='appBarImg'/>
        <div className='appBarNav'>
            <h2>Website</h2>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <h1>{props.name}</h1>
            <h1>{props.num}</h1>
            <button onClick={handleClick}>{isLoggedIn?"LogOut":"Login"}</button>
        </div>
    </div>
}