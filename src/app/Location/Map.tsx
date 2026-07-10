"use client";

import "leaflet/dist/leaflet.css";

import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
} from "react-leaflet";

import L from "leaflet";

import { location } from "./location.constants";

const marker = new L.Icon({
    iconUrl: "/icons/marker.png",
    iconSize: [40, 40],
});

export default function Map() {
    return (
        <MapContainer
            center={[
                location.coordinates.lat,
                location.coordinates.lng,
            ]}
            zoom={16}
            scrollWheelZoom={false}
            className="h-[550px] w-full"
        >
            <TileLayer
                attribution="OpenStreetMap"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker
                position={[
                    location.coordinates.lat,
                    location.coordinates.lng,
                ]}
                icon={marker}
            >
                <Popup>

                    Expo Feria Cultural Andrade Marín

                </Popup>

            </Marker>

        </MapContainer>
    );
}