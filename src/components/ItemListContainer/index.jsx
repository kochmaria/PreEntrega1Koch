import React from 'react';
import Title from '../Title/title';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Arial, sans-serif;
`;


const ItemListContainer = ({ greeting }) => {
    return (
      <Container>
        <h2>{greeting}</h2>
        <p>Bienvenido a nuestra tienda de auriculares</p>
      </Container>
    );
  };
  
  export default ItemListContainer;