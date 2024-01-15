import React, { useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import styled from "styled-components"; 
import logo from '../assets/logo.png';
import {FaPowerOff, FaSearch} from 'react-icons/fa';
import {firebaseAuth} from '../utils/firebase-config'; 
import { signOut, onAuthStateChanged  } from 'firebase/auth';
export default function Navbar(isScrolled) {
    const links = [
        {name: 'Home', link: '/'},
        {name: 'TV Shows', link: '/tv'},
        {name: 'Movies', link: '/movies'},
        {name: 'New & Popular', link: '/new'},
        {name: 'My List', link: '/mylist'},
        {name: 'Browse by Languages', link: '/lang'},
    ]
    const navigate= useNavigate();
    onAuthStateChanged(firebaseAuth, (currentUser)=>{
        if(!currentUser){
            navigate('/login');
        }

    })
    const [showSearch, setShowSearch]= useState(false);
    const [inputHover, setInputHover]= useState(false);
  return (    
    <Container>
        <nav className={`flex ${isScrolled ? "scrolled":""}`}>
            <div className="flex a-center left">
                <div className="brand a-center flex j-center">
                    <img src={logo} alt='logo' className='netflix-logo'/>
                </div>
                <ul className="links flex">
                    {links.map(({name, link})=>{
                        return(
                            <li key= {name}>
                                <Link to={links}>{name}</Link>
                            </li>
                        )
                    })}
                </ul>
                </div>
                <div className="a-center flex right">
                    <div className={`search ${showSearch? "showSearch":""}`}>
                        <button onFocus= {()=> setShowSearch(true)} onBlur= {
                            ()=> {
                            if(!inputHover){
                                setShowSearch(false)
                            }}
                        }>
                        <FaSearch/>
                        </button>
                        <input type="text" placeholder='Search Item'
                        onMouseEnter={()=> setInputHover(true)} 
                        onMouseLeave={()=>setInputHover(false)}
                        onBlur={()=>{
                            setShowSearch(false);
                            setInputHover(false)}}
                        />
                        </div>
                         <button onClick={()=> {
                         signOut(firebaseAuth)}}>
                        <FaPowerOff/>
                    </button>
                    
                </div>
        </nav>
    </Container>
  )
}
const Container = styled.div`
font-family: 'Poppins';
margin: 0rem;
.scrolled{
    background-color: none;
}
nav{
width: 100%; 
justify-content: space-between;
position: sticky;
top: 0;
text-decorations: none;
position: fixed;
.netflix-logo{
    height: 5rem;
}
.links{
    list-style-type: none;
    gap: 1rem;

    li{
        a{
            color: white;
            text-decoration: none;
        }
    }

}
.right{
    gap: 2rem;
    button{
        background-color: transparent;
        color: #f34242;
        margin: 0.5rem;
        border: none;
        cursor: pointer;
    &:focus{
        outline: none;
    }}
.search{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.2rem;
    padding-left: 0.5rem;
    
    input{
        width:0;
        opacity: 0;
        visibility: hidden;
        transition: 0.3s ease-in-out;
        background-color: transparent;
        border: none;
        color: white;
        &:focus{
            outline: none;
        }
    }}
    .showSearch{
        border: 1px solid white;
        background-color: rgba(0,0,0,0.5);
        input{
            width: 100%;
            opacity: 1;
            visibility: visible;
            padding: 0.8rem;
        }

    }}
}
}`;
