import React, { useRef, useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOutlinedIcon from '@material-ui/icons/LocationCityOutlined'
import Rating from '@material-ui/lab'
import styled from 'styled-components'

const MapDivStyles = styled.div`
display: flex;
justify-content: center;
align-items: center;


`
// { Lng = null, Lat = null, zoom = 9 }

export default function M() {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);



    const getLocation = () => {
        if (!navigator.geolocation) {
            setStatus('Geolocation is not supported by your browser');
        } else {
            setStatus('Locating...');
            navigator.geolocation.getCurrentPosition((position) => {
                setStatus(null);
                setLat(position.coords.latitude);
                setLng(position.coords.longitude);
            }, () => {
                setStatus('Unable to retrieve your location');
            });
        }
    }

    const api = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
    console.log(api)
    return (
        <MapDivStyles>
            <div className="class">
                <button onClick={getLocation}>Get Location</button>
                <h1>Coordinates</h1>
                <p>{status}</p>
                {lat && <p>Latitude: {lat}</p>}
                {lng && <p>Longitude: {lng}</p>}
            </div>
        </MapDivStyles>
    )
}
