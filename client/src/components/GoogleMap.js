import React, {useEffect, useState} from "react";
import GoogleMapReact from 'google-map-react';

import s from './googleMap.module.css';

function GoogleMap(props) {

    let defaultCenter = {
        lat: 32.00,
        lng: 34.80
    };

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            defaultCenter = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
        })
    }

    return (
        <div className={s.container}>
            <div className={s.menu}>
                {'< Expand map'}
            </div>
            <div className={s.mapBox}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: "AIzaSyB08Z2947_Sw3aql0Jrh30P3d4uVYH2GoE"}}
                    defaultCenter={defaultCenter}
                    defaultZoom={11}
                />
            </div>

        </div>
    )
}

export default GoogleMap;
