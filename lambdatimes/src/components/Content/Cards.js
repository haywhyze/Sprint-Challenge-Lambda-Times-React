import React, { Component } from 'react';
import pt from 'prop-types';
import uuidv1 from 'uuid/v1';
import Card from './Card';

const Cards = ({ cards }) => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/
      cards.map(card => <Card key={uuidv1()} card={card}/>)}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;

Cards.propTypes = {
  cards: pt.array.isRequired,
}