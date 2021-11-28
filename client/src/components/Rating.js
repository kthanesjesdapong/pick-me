import React, { useMemo } from 'react'
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
    let icons = [];
    for (let i = 0; i < int; i++) {
        icons.push(<HeartIcon></HeartIcon>)
    }

    return (
        <RatingStyles>
            <div>
                {icons}
            </div>
        </RatingStyles>
    )
}
