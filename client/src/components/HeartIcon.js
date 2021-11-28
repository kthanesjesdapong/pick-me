import React from 'react'
import styled from 'styled-components'

const HeartIStyles = styled.div`
.w-6{
    width: 1rem;
}

.h-6{
    width: 1rem;
}
`

export default function HeartIcon({ fill = 'none' }) {
    return (
        <HeartIStyles>
            <svg className="w-6 h-6" fill='red' stroke="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
        </HeartIStyles>
    )
}
