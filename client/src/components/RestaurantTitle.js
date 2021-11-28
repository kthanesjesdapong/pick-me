import React from 'react'
import styled from 'styled-components'
import HeartIcon from './HeartIcon';
import Rating from './Rating';

const RestaurantTitleStyle = styled.div`
  text-align: center;
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
    address = 'someaddress',
    city = 'somecity',
    state = 'somestate'
  },
) {
  return (
    <RestaurantTitleStyle>
      <h2>{name}</h2>
      <Rating />
      <h2>

        {address},{' '}
        {city},{' '}
        {state}
      </h2>
    </RestaurantTitleStyle>
  )
}
