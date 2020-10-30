import React, { ChangeEvent, FormEvent, useState } from "react";
import { Map, Marker, TileLayer } from "react-leaflet";
import { LeafletMouseEvent } from "leaflet";
import { useHistory } from "react-router-dom";

import { FiPlus, FiCheck } from "react-icons/fi";
import { MapIcon } from "../../utils/MapIcon";

import { SideBar } from "../../components/SideBar";
import {
    ButtonSelector,
    Form,
    ImagesContainer,
    InputSeparator,
    PageCreateOrphanage,
} from "./styles";
import { api } from "../../services/api";

export const CreateOrphanage = () => {
    const history = useHistory();

    const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

    const [name, setName] = useState("");
    const [about, setAbout] = useState("");
    const [instructions, setInstructions] = useState("");
    // const [opening_hours, setOpening_hours] = useState("");
    const [open_on_weekends, setOpen_on_weekends] = useState(true);
    const [pending, ] = useState('true');
    const [images, setImages] = useState<File[]>([]);
    const [previewImages, setPreviewImages] = useState<string[]>([]);

    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const { latitude, longitude } = position;

        // console.log({
        //     name,
        //     about,
        //     latitude,
        //     longitude,
        //     instructions,
        //     // opening_hours,
        //     from,
        //     to,
        //     open_on_weekends,
        //     images,
        // });

        const data = new FormData();

        data.append("name", name);
        data.append("about", about);
        data.append("latitude", String(latitude));
        data.append("longitude", String(longitude));
        data.append("instructions", instructions);
        // data.append("opening_hours", opening_hours);
        data.append("from", from);
        data.append("to", to);
        data.append("open_on_weekends", String(open_on_weekends));
        data.append("pending", String(pending));

        images.forEach((image) => {
            data.append("images", image);
        });

        await api.post("orphanages", data);

        alert("Cadastro realizado");

        history.push("/app");
    }

    // function handleMapClick(event: any){
    function handleMapClick(event: LeafletMouseEvent) {
        // console.log(event.latlng);

        const { lat, lng } = event.latlng;

        setPosition({
            latitude: lat,
            longitude: lng,
        });
    }

    function handleSelectImage(event: ChangeEvent<HTMLInputElement>) {
        // console.log(event.target.files);

        if (!event.target.files) {
            return;
        }

        const selectedImages = Array.from(event.target.files);

        setImages(selectedImages);

        const selectedPreviewImages = selectedImages.map((image) => {
            return URL.createObjectURL(image);
        });

        setPreviewImages(selectedPreviewImages);
    }

    return (
        <PageCreateOrphanage>
            <SideBar />

            <main>
                <Form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Dados</legend>

                        <Map
                            center={[-11.5323768, -61.0348026]}
                            style={{ width: "100%", height: 280 }}
                            zoom={15}
                            onclick={handleMapClick}
                        >
                            <TileLayer
                                url={`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                            />

                            {position.latitude !== 0 && (
                                <Marker
                                    interactive={false}
                                    icon={MapIcon}
                                    position={[
                                        position.latitude,
                                        position.longitude,
                                    ]}
                                />
                            )}
                        </Map>

                        <InputSeparator>
                            <label htmlFor="name">Nome</label>
                            <input
                                id="name"
                                maxLength={150}
                                value={name}
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
                            />
                        </InputSeparator>

                        <InputSeparator>
                            <label htmlFor="about">
                                Sobre <span>Máximo de 300 caracteres</span>
                            </label>
                            <textarea
                                id="about"
                                maxLength={300}
                                value={about}
                                onChange={(event) =>
                                    setAbout(event.target.value)
                                }
                            />
                        </InputSeparator>

                        <InputSeparator>
                            <label htmlFor="images">Fotos</label>

                            <ImagesContainer>
                                {previewImages.map((image) => {
                                    return (
                                        <img
                                            key={image}
                                            src={image}
                                            alt={name}
                                        />
                                    );
                                })}

                                <label htmlFor="image[]" className="New-Image">
                                    <FiPlus data-icon />
                                </label>
                            </ImagesContainer>

                            <input
                                multiple
                                type="file"
                                id="image[]"
                                onChange={handleSelectImage}
                            />
                        </InputSeparator>
                    </fieldset>

                    <fieldset>
                        <legend>Visitação</legend>

                        <InputSeparator>
                            <label htmlFor="instructions">Instruções</label>
                            <textarea
                                id="instructions"
                                maxLength={300}
                                value={instructions}
                                onChange={(event) =>
                                    setInstructions(event.target.value)
                                }
                            />
                        </InputSeparator>

                        <InputSeparator>
                            <label>Horário de funcionamento</label>

                            <label htmlFor="from">
                                Das
                                <input
                                    type="time"
                                    id="from"
                                    value={from}
                                    onChange={(event) =>
                                        setFrom(event.target.value)
                                    }
                                />
                            </label>
                            <label htmlFor="to">
                                Até
                                <input
                                    type="time"
                                    id="to"
                                    value={to}
                                    onChange={(event) =>
                                        setTo(event.target.value)
                                    }
                                />
                            </label>
                        </InputSeparator>

                        <InputSeparator>
                            <label htmlFor="open_on_weekends">
                                Atende fim de semana
                            </label>

                            <ButtonSelector>
                                <button
                                    type="button"
                                    className={open_on_weekends ? "active" : ""}
                                    onClick={() => {
                                        setOpen_on_weekends(true);
                                    }}
                                >
                                    Sim
                                </button>

                                <button
                                    type="button"
                                    className={
                                        !open_on_weekends ? "active" : ""
                                    }
                                    onClick={() => {
                                        setOpen_on_weekends(false);
                                    }}
                                >
                                    Não
                                </button>
                            </ButtonSelector>
                        </InputSeparator>
                    </fieldset>

                    <button className="confirm-button" type="submit">
                        <FiCheck data-icon />
                        Confirmar
                    </button>
                </Form>
            </main>
        </PageCreateOrphanage>
    );
};
