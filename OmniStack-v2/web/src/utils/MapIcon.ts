import { icon } from "leaflet";

import MapMakerIcon from "../assets/images/map-marker.svg";

export const MapIcon = icon({
    iconUrl: MapMakerIcon,

    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60],
});

export const MapIconLanding = icon({
    iconUrl: MapMakerIcon,
    iconSize: [58, 58],
    iconAnchor: [28, 58],
    popupAnchor: [168, 2],
});
