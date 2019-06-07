import React, { Component } from 'react';
import styled from 'styled-components';
import pt from 'prop-types';
import uuidv1 from 'uuid/v1';
import Card from './Card';

const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;
  
  @media (min-width: 1200px) {
    width: 1200px;
  }
`

const Cards = ({ cards }) => {
  return (
    <CardContainer>
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/
      cards.map(card => <Card key={uuidv1()} card={card}/>)}
    </CardContainer>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;

Cards.propTypes = {
  cards: pt.array.isRequired,
}