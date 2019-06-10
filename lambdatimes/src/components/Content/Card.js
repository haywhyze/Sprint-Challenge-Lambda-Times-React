import React from 'react';
import styled from 'styled-components';
import pt from 'prop-types';

const StyledCard = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`
const Author = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;

  span {
    padding-left: 10px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
  }
`

const ImgContainer = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;

  img {
    width: 40px;
  }
`

const Headline = styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`

const Card = ({ card }) => {
  return (
    <StyledCard>
      <Headline>{card.headline}</Headline>
      <Author>
        <ImgContainer>
          <img src={card.img} alt={'avatar'} />
        </ImgContainer>
        <span>By {card.author}</span>
      </Author>
    </StyledCard>
  );
};

// Make sure to include PropTypes.

export default Card;

Card.propTypes = {
  card: pt.object.isRequired,
}
