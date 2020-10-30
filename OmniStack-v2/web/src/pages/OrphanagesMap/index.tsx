import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import { FiArrowRight, FiPlus } from "react-icons/fi";

import { MapIconLanding } from "../../utils/MapIcon";
import MapMakerIcon from "../../assets/images/map-marker.svg";

import { api } from "../../services/api";

import { PageMap } from "./styles";

interface OrphanagesType {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
}

export const OrphanagesMap = () => {
    const [orphanages, setOrphanages] = useState<OrphanagesType[]>([]);

    useEffect(() => {
        /* api.get("orphanages").then((response) => {
            setOrphanages(response.data);
            // console.log(response);
        }); */

        (async () => {
            const response = await api.get("orphanages");
            const orphanagesArray = await response.data;
            setOrphanages(orphanagesArray);
            // console.log("async", response);
        })();
    }, []);

    return (
        <PageMap>
            <aside>
                <header>
                    <img src={MapMakerIcon} alt="😃" />

                    <h2>
                        Escolha <br /> um orfanato <br /> no mapa
                    </h2>
                    <p>
                        Muitas crianças estão <br /> esperando a sua visita 😃
                    </p>
                </header>

                <footer>
                    <strong>Espigão D'Oeste</strong>
                    <span>Rondônia</span>
                </footer>
            </aside>

            <Map
                center={[-11.5323768, -61.0348026]}
                zoom={15}
                style={{ width: "100%", height: "100%" }}
            >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <TileLayer
                    // url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token${process.env.REACT_APP_MAPBOX_TOKEN}`}

                    url={`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                {orphanages.map((orphanage) => {
                    return (
                        <Marker
                            position={[orphanage.latitude, orphanage.longitude]}
                            icon={MapIconLanding}
                            key={orphanage.id}
                        >
                            <Popup
                                closeButton={false}
                                minWidth={240}
                                maxWidth={240}
                                className="map-popup"
                            >
                                {orphanage.name}
                                <Link to={`/orphanages/${orphanage.id}`}>
                                    <FiArrowRight data-icon />
                                </Link>
                            </Popup>
                        </Marker>
                    );
                })}
            </Map>

            <Link to="/orphanages/create">
                <FiPlus data-icon />
            </Link>
            {/* {console.log(process.env.MAPBOX_TOKEN)} */}
        </PageMap>
    );
};
