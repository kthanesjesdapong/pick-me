import React from 'react'
import styled from 'styled-components'
import HeartIcon from './HeartIcon';
const RatingStyles = styled.div`

div {
    display: flex;
    justify-content: center;
}


`


export default function Rating({ int }) {
    int = Math.floor(int);
    const heart = [];

    for (let i = 0; i < int; i++) {
        heart.push(<HeartIcon />)

    }
    return (
        <RatingStyles>
            <div>
                {heart}
            </div>
        </RatingStyles>
    )
}
