import React from 'react'
import logo from '../assets/logo.png';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
export default function Header(props) {
    const navigate= useNavigate()
  return (
    <Container  className='flex a-center j-between'>
    <div className='logo'>
        <img src={logo} alt="Netflix-logo" />
    </div>
    <button className='sign-up-button' onClick={()=> navigate(props.login?'/login':'/signup')}>{props.login?'Log In':'Sign Up'}</button>
    </Container>
  )
}
const Container= styled.div`
padding: 0 4rem;
.logo{
    img{
        height: 5rem;
    }
}
.sign-up-button{
    padding: 0.5rem 1rem 0.5rem 1rem;
    background-color: #E50914;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bold; 
    font-size: 1.05rem;
}`;