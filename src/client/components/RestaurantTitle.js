import React from 'react'
import styled from 'styled-components'
import Rating from './Rating';

const RestaurantTitleStyle = styled.div`
  text-align: center;
  p {
    position: absolute;
    font-size: 1rem;
    text-align: center;
    top: 0px;
  }
  h2 {

    font-size: 1rem;
    margin-top: 0.5rem;
  }

  img{
    width: 300px;
    height: auto;
    border: 3px solid var(--semi-pink);
    border-radius: 3px;
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
    state = 'somestate',
    img = 'https://www.attendanceworks.org/wp-content/uploads/2020/09/img-placeholder.png'
  },
) {
  return (
    <RestaurantTitleStyle>
      <h2>{name}</h2>
      <Rating
        int={rating} />
      <h2>

        {address},{' '}
        {city},{' '}
        {state}
      </h2>
      <div className='img__container'>
        <img src={img} alt={img} />
      </div>
    </RestaurantTitleStyle>
  )
}
