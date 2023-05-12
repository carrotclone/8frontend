import React from 'react'
import { styled } from 'styled-components';
import Flx from './Flx';

function Navbar() {
  return (
    <StNavbar>
        <Flx>
            <button type='button'></button>
            <button type='button'></button>
            <button type='button'></button>
            <button type='button'></button>
        </Flx>
    </StNavbar>
  )
}

export default Navbar;

const StNavbar = styled.div`
    position:sticky;
    bottom:0;
    width:100%;
    height:60px;
    background-color:#fff;
    box-shadow: rgba(0, 0, 0, 0.1) 7px 7px 10px 10px ;
`

