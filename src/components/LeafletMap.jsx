import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import markerIcon from '../assets/images/icon.svg';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [40, 48],
    iconAnchor: [20, 48],
    popupAnchor: [0, -48],
    shadowSize: [50, 64],
    shadowAnchor: [15, 64],
});

L.Marker.prototype.options.icon = DefaultIcon;

const LeafletMap = () => {
    return (
        <MapContainer 
            center={[25, -93.2411]}
            zoom={5}
            style={{ height: '100vh', width: '100%' }}
            zoomControl={false}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; OpenStreetMap contributors'
            />
            <Marker position={[35.5175, -86.5804]}>
                <Popup>
                    1892 Chenoweth Drive, TN
                </Popup>
            </Marker>
            <Marker position={[31.9686, -99.9018]}>
                <Popup>
                    3399 Wines Lane, TX
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default LeafletMap;