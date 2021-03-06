import React, { useEffect, useState } from "react";
import { Image, View, ScrollView, Text, Linking } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { RectButton, TouchableOpacity } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";

import { Feather, FontAwesome } from "@expo/vector-icons";
import mapMarkerImg from "../../assets/images/happy.png";

import { styles } from "./styles";
import { api } from "../../services/api";

interface OrphanageDetailsRouteParams {
    id: number;
}

interface OrphanageDetailsType {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    about: string;
    instructions: string;
    opening_hours: string;
    open_on_weekends: boolean;
    // open_on_weekends: string;
    images: Array<{ id: number; url: string }>;
}

export const OrphanageDetails = () => {
    const route = useRoute();
    const params = route.params as OrphanageDetailsRouteParams;

    const [orphanage, setOrphanage] = useState<OrphanageDetailsType>();

    useEffect(() => {
        api.get(`orphanages/${params.id}`).then((response) => {
            setOrphanage(response.data);
        });
    }, [params.id]);

    if (!orphanage) {
        return (
            <View style={styles.container}>
                <Text style={styles.description}>CARRENGANDO...</Text>
            </View>
        );
    }

    function handleOpenGoogleMapsRoutes() {
        Linking.openURL(
            `https://www.google.com/maps/dir/?api=1&destination=${orphanage?.latitude},${orphanage?.longitude}`
        );
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.imagesContainer}>
                <ScrollView horizontal pagingEnabled>
                    {orphanage.images.map((image) => {
                        return (
                            <Image
                                key={image.id}
                                style={styles.image}
                                source={{
                                    uri: image.url,
                                }}
                            />
                        );
                    })}
                </ScrollView>
            </View>

            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{orphanage.name}</Text>
                <Text style={styles.description}>{orphanage.about}</Text>

                <View style={styles.mapContainer}>
                    <MapView
                        initialRegion={{
                            latitude: orphanage.latitude,
                            longitude: orphanage.longitude,
                            latitudeDelta: 0.008,
                            longitudeDelta: 0.008,
                        }}
                        zoomEnabled={false}
                        pitchEnabled={false}
                        scrollEnabled={false}
                        rotateEnabled={false}
                        style={styles.mapStyle}
                    >
                        <Marker
                            icon={mapMarkerImg}
                            coordinate={{
                                latitude: orphanage.latitude,
                                longitude: orphanage.longitude,
                            }}
                        />
                    </MapView>

                    <TouchableOpacity
                        onPress={handleOpenGoogleMapsRoutes}
                        style={styles.routesContainer}
                    >
                        <Text style={styles.routesText}>
                            Ver rotas no Google Maps
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.separator} />

                <Text style={styles.title}>Instruções para visita</Text>
                <Text style={styles.description}>{orphanage.instructions}</Text>

                <View style={styles.scheduleContainer}>
                    <View
                        style={[styles.scheduleItem, styles.scheduleItemBlue]}
                    >
                        <Feather name="clock" size={40} color="#2AB5D1" />
                        <Text
                            style={[
                                styles.scheduleText,
                                styles.scheduleTextBlue,
                            ]}
                        >
                            Segunda a Sexta {orphanage.opening_hours}
                        </Text>
                    </View>

                    {orphanage.open_on_weekends ? (
                        <View
                            style={[
                                styles.scheduleItem,
                                styles.scheduleItemGreen,
                            ]}
                        >
                            <Feather name="info" size={40} color="#39CC83" />
                            <Text
                                style={[
                                    styles.scheduleText,
                                    styles.scheduleTextGreen,
                                ]}
                            >
                                Atendemos {"\n"}
                                Ao Finais De Semana
                            </Text>
                        </View>
                    ) : (
                        <View
                            style={[
                                styles.scheduleItem,
                                styles.scheduleItemRed,
                            ]}
                        >
                            <Feather name="info" size={40} color="#ff669d" />
                            <Text
                                style={[
                                    styles.scheduleText,
                                    styles.scheduleTextRed,
                                ]}
                            >
                                Não Atendemos {"\n"}
                                Ao Finais De Semana
                            </Text>
                        </View>
                    )}
                </View>

                <RectButton style={styles.contactButton} onPress={() => {}}>
                    <FontAwesome name="whatsapp" size={24} color="#FFF" />
                    <Text style={styles.contactButtonText}>
                        Entrar em contato
                    </Text>
                </RectButton>
            </View>
        </ScrollView>
    );
};
