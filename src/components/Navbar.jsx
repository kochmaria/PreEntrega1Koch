import React from 'react'
import styled from 'styled-components'
import CartWidget from './CartWidget'
function Navbar() {
  return (
    <>
     <Navcontainer>
        <h2> Tienda de Auriculares</h2>
        <div>
            <a href="/">Inicio</a>
            <a href="/">Catalogo</a>
            
            <a href="/">Contactanos</a>
            <a href="/"> <CartWidget/> </a>
        </div>

     </Navcontainer>
    </>
  )
}

export default Navbar

const Navcontainer = styled.nav `
  h2{
    font-weight: 700;
    font-weight: bold;
    color: white;

  }
  padding: .4rem;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: white;
    text-decoration: none;
    margin-right: 3rem;



  }
`