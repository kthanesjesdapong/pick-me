import React from 'react'
import styled from 'styled-components'
import Rating from 'react-rating'

const RestaurantTitleStyle = styled.div`
  text-align: left;
  p {
    position: absolute;
    font-family: 'Roboto';
    font-size: 1rem;
    text-align: center;
    top: 0px;
  }
  h2 {
    font-family: 'OSBold';
    font-size: rem;
    margin-top: 0.5rem;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 1.6rem;
    }
  }
`;


export default function RestaurantTitle(
  { name = 'Name',
    rating = 0,
    location = 'placeholder' },
) {
  return (
    <RestaurantTitleStyle>
      <h2>{name}</h2>
      <Rating initialRating={rating} />

    </RestaurantTitleStyle>
  )
}
