import React, { useContext, useEffect, useState } from "react";
import { Map, Marker, TileLayer } from "react-leaflet";

import {
  FiAlertCircle,
  FiEdit3,
  FiMapPin,
  FiPower,
  FiTrash,
} from "react-icons/fi";
import { MapIcon } from "../../utils/MapIcon";
import mapMarkerImg from "../../assets/images/map-marker.svg";
import dashboardImg from "../../assets/images/dashboard.svg";

import { Loading } from "../../components/Loading";
import { AuthContext } from "../../contexts/AuthContext";
import { api } from "../../services/api";

import {
  AsideContainer,
  CreatePendingSelection,
  LogoEmpty,
  DashboardContent,
  PageDashboard,
  MapContainer,
  EditorSelection,
} from "./styles";

interface OrphanagesType {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  pending: boolean;
}

export const Dashboard = () => {
  const { authLogout } = useContext(AuthContext);

  const [orphanages, setOrphanages] = useState<OrphanagesType[]>([]);

  const [active, setActive] = useState(false);
  const [activeSelection, setActiveSelection] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await api.get("orphanages");
      const orphanagesArray = await response.data;
      setOrphanages(orphanagesArray);
      console.log(orphanagesArray);
    })();
  }, []);

  if (!orphanages) {
    return <Loading />;
  }

  return (
    <PageDashboard>
      <AsideContainer>
        <img src={mapMarkerImg} alt="Happy" />

        <CreatePendingSelection>
          <button
            // href="#"
            className={active ? "" : "active"}
            onClick={() => {
              active ? setActive(false) : setActive(true);
              activeSelection
                ? setActiveSelection(false)
                : setActiveSelection(true);
            }}
          >
            <FiMapPin data-icon />
          </button>

          <button
            // href="#"
            className={active ? "active" : ""}
            onClick={() => {
              active ? setActive(false) : setActive(true);
              activeSelection
                ? setActiveSelection(false)
                : setActiveSelection(true);
            }}
          >
            <FiAlertCircle data-icon />
          </button>
        </CreatePendingSelection>

        <footer>
          <button type="button" onClick={authLogout}>
            <FiPower data-icon />
          </button>
        </footer>
      </AsideContainer>

      <main>
        {activeSelection ? (
          <>
            <header>
              <h1>Orfanatos Cadastrados</h1>
              <span>{orphanages.length} Orfanatos</span>
            </header>

            <DashboardContent>
              {orphanages.map((orphanage, index, array) => {
                return (
                  orphanage.pending === false && (
                    <MapContainer key={orphanage.id}>
                      <Map
                        center={[orphanage.latitude, orphanage.longitude]}
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
                          position={[orphanage.latitude, orphanage.longitude]}
                        />
                      </Map>

                      <footer>
                        <h2>{orphanage.name}</h2>

                        <EditorSelection>
                          <a href="">
                            <FiEdit3 data-icon />
                          </a>

                          <a href="">
                            <FiTrash data-icon />
                          </a>
                        </EditorSelection>
                      </footer>
                    </MapContainer>
                  )
                );
              })}
            </DashboardContent>
          </>
        ) : (
          <>
            <header>
              <h1>Orfanatos Pendentes</h1>
              <span>{orphanages.length} Orfanatos</span>
            </header>

            <DashboardContent>
              {orphanages.map((orphanage, index, array) => {
                return (
                  orphanage.pending === true &&
                  (array.length === 0 ? (
                    <LogoEmpty key={orphanage.id}>
                      <img src={dashboardImg} alt="😐 Nenhum" />
                      <p>Nenhum no momento</p>
                    </LogoEmpty>
                  ) : (
                    <MapContainer key={orphanage.id}>
                      <Map
                        center={[orphanage.latitude, orphanage.longitude]}
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
                          position={[orphanage.latitude, orphanage.longitude]}
                        />
                      </Map>

                      <footer>
                        <h2>{orphanage.name}</h2>

                        <EditorSelection>
                          <a href="">
                            <FiEdit3 data-icon />
                          </a>

                          <a href="">
                            <FiTrash data-icon />
                          </a>
                        </EditorSelection>
                      </footer>
                    </MapContainer>
                  ))
                );
              })}
            </DashboardContent>
          </>
        )}
      </main>
    </PageDashboard>
  );
};
