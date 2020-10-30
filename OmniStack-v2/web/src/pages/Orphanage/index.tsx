import React, { useEffect, useState } from "react";
import { Map, Marker, TileLayer } from "react-leaflet";
import { useParams } from "react-router-dom";

import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";

import { MapIcon } from "../../utils/MapIcon";

import { SideBar } from "../../components/SideBar";
import {
    OpeningDetails,
    DetailsContent,
    Details,
    ImagesContainer,
    PageOrphanage,
    MapContainer,
} from "./styles";

import { api } from "../../services/api";
import { Loading } from "../../components/Loading";

interface OrphanageType {
    name: string;
    latitude: number;
    longitude: number;
    about: string;
    instructions: string;
    from: string;
    to: string;
    // opening_hours: string;
    open_on_weekends: boolean;
    // open_on_weekends: string;
    images: Array<{ id: number; url: string }>;
}

interface ParamsType {
    id: string;
}

export const Orphanage = () => {
    const params = useParams<ParamsType>();

    const [orphanage, setOrphanage] = useState<OrphanageType>();

    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
        /* api.get(`orphanages/${params.id}`).then((response) => {
            setOrphanage(response.data);
            // console.log("promise", response);
        }); */

        (async () => {
            const response = await api.get(`orphanages/${params.id}`);
            const orphanageArray = await response.data;
            setOrphanage(orphanageArray);
            // console.log("async", response);
        })();
    }, [params.id]);

    if (!orphanage) {
        return <Loading />;
    }

    return (
        <PageOrphanage>
            <SideBar />

            <main>
                <Details>
                    <img
                        src={orphanage.images[activeImageIndex].url}
                        alt={orphanage.name}
                    />

                    <ImagesContainer>
                        {orphanage.images.map((image, index) => {
                            return (
                                <button
                                    key={image.id}
                                    className={
                                        activeImageIndex === index
                                            ? "active"
                                            : ""
                                    }
                                    type="button"
                                    onClick={() => {
                                        setActiveImageIndex(index);
                                    }}
                                >
                                    <img src={image.url} alt={orphanage.name} />
                                </button>
                            );
                        })}
                    </ImagesContainer>

                    <DetailsContent>
                        <h1>{orphanage.name}</h1>
                        <p>{orphanage.about}</p>

                        <MapContainer>
                            <Map
                                center={[
                                    orphanage.latitude,
                                    orphanage.longitude,
                                ]}
                                zoom={16}
                                style={{ width: "100%", height: 280 }}
                                dragging={false}
                                touchZoom={false}
                                zoomControl={false}
                                scrollWheelZoom={false}
                                doubleClickZoom={false}
                            >
                                <TileLayer
                                    url={`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                                />
                                <Marker
                                    interactive={false}
                                    icon={MapIcon}
                                    position={[
                                        orphanage.latitude,
                                        orphanage.longitude,
                                    ]}
                                />
                            </Map>

                            <footer>
                                <a
                                    target="_blank"
                                    rel={"noopener noreferrer"}
                                    href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
                                >
                                    Ver rotas no Google Maps
                                </a>
                            </footer>
                        </MapContainer>

                        <hr />

                        <h2>Instruções para visita</h2>
                        <p> {orphanage.instructions}</p>

                        <OpeningDetails>
                            <div className="Hours">
                                <FiClock data-icon />
                                Segunda à Sexta <br />
                                {`Das: ${orphanage.from}h Até: ${orphanage.to}h`}
                            </div>

                            {orphanage.open_on_weekends ? (
                                <div className="Open-On-Weekends">
                                    <FiInfo data-icon />
                                    Atendemos <br />
                                    Ao Finais De Semana
                                </div>
                            ) : (
                                <div className="Dont-On-Weekends">
                                    <FiInfo data-icon />
                                    Não Atendemos <br />
                                    Ao Finais De Semana
                                </div>
                            )}
                        </OpeningDetails>

                        <button type="button">
                            <FaWhatsapp data-icon />
                            Entrar em contato
                        </button>
                    </DetailsContent>
                </Details>
            </main>
        </PageOrphanage>
    );
};
