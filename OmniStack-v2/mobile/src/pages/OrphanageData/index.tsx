import React, { useState } from "react";
import {
    ScrollView,
    View,
    Switch,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

import { styles } from "./styles";
import { api } from "../../services/api";

interface OrphanageDataRouterParams {
    position: {
        latitude: number;
        longitude: number;
    };
}

export const OrphanageData = () => {
    const navigation = useNavigation();

    const route = useRoute();
    const params = route.params as OrphanageDataRouterParams;

    const [name, setName] = useState("");
    const [about, setAbout] = useState("");
    const [instructions, setInstructions] = useState("");
    const [opening_hours, setOpening_hours] = useState("");
    const [open_on_weekends, setOpen_on_weekends] = useState(true);
    const [images, setImages] = useState<string[]>([]);

    async function handleCreateOrphanage() {
        const { latitude, longitude } = params.position;

        const data = new FormData();

        data.append("name", name);
        data.append("about", about);
        data.append("latitude", String(latitude));
        data.append("longitude", String(longitude));
        data.append("instructions", instructions);
        data.append("opening_hours", opening_hours);
        data.append("open_on_weekends", String(open_on_weekends));

        images.forEach((image, index) => {
            data.append("images", {
                name: `image_${index}.jpg`,
                type: "image/jpg",
                uri: image,
            } as any);
        });

        await api.post("orphanages", data);

        alert("Cadastro realizado");

        navigation.navigate("OrphanagesMap");

        console.log({
            name,
            about,
            latitude,
            longitude,
            instructions,
            opening_hours,
            open_on_weekends,
        });
    }

    async function handleSelectImage() {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

        if (status != "granted") {
            alert("acesso negado");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
        });

        if (result.cancelled) {
            return;
        }

        const { uri: image } = result;

        setImages([...images, image]);
    }

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={{ padding: 24 }}
        >
            <Text style={styles.title}>Dados</Text>

            <Text style={styles.label}>Nome</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={(text) => {
                    setName(text);
                }}
            />

            <Text style={styles.label}>Sobre</Text>
            <TextInput
                style={[styles.input, { height: 110 }]}
                multiline
                value={about}
                onChangeText={(text) => {
                    setAbout(text);
                }}
            />

            <Text style={styles.label}>Whatsapp</Text>
            <TextInput style={styles.input} />

            <Text style={styles.label}>Fotos</Text>
            <View style={styles.uploadImagesContainer}>
                {images.map((image) => {
                    return (
                        <Image
                            key={image}
                            source={{ uri: image }}
                            style={styles.uploadedImage}
                        />
                    );
                })}
            </View>

            <TouchableOpacity
                style={styles.imagesInput}
                onPress={handleSelectImage}
            >
                <Feather name="plus" size={24} color="#15B6D6" />
            </TouchableOpacity>

            <Text style={styles.title}>Visitação</Text>

            <Text style={styles.label}>Instruções</Text>
            <TextInput
                style={[styles.input, { height: 110 }]}
                multiline
                value={instructions}
                onChangeText={(text) => {
                    setInstructions(text);
                }}
            />

            <Text style={styles.label}>Horario de visitas</Text>
            <TextInput
                style={styles.input}
                value={opening_hours}
                onChangeText={(text) => {
                    setOpening_hours(text);
                }}
            />

            <View style={styles.switchContainer}>
                <Text style={styles.label}>Atende final de semana?</Text>
                <Switch
                    thumbColor="#fff"
                    trackColor={{ false: "#ccc", true: "#39CC83" }}
                    value={open_on_weekends}
                    onValueChange={(text) => {
                        setOpen_on_weekends(text);
                    }}
                />
            </View>

            <RectButton
                style={styles.nextButton}
                onPress={handleCreateOrphanage}
            >
                <Text style={styles.nextButtonText}>Cadastrar</Text>
            </RectButton>
        </ScrollView>
    );
};
