import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import { Feather } from "@expo/vector-icons";
import MapMarker from "../../assets/images/happy.png";


import { styles } from "./styles";
import { api } from "../../services/api";

interface OrphanageType {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
}

export const OrphanagesMap = () => {
    const navigation = useNavigation();

    const [orphanages, setOrphanages] = useState<OrphanageType[]>([]);

    useFocusEffect(() => {
        api.get("orphanages").then((response) => {
            setOrphanages(response.data);
        });
    });

    function handleNavigateToOrphanageDetails(id: number) {
        navigation.navigate("OrphanageDetails", { id });
    }

    function handleNavigateToCreateOrphanage() {
        navigation.navigate("SelectMapPosition");
    }

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                    latitude: -27.2090802,
                    longitude: -49.6080902,
                    latitudeDelta: 8.888,
                    longitudeDelta: 8.888,
                }}
            >
                {orphanages.map((orphanage) => {
                    return (
                        <Marker
                            key={orphanage.id}
                            calloutAnchor={{
                                x: 2.7,
                                y: 0.8,
                            }}
                            icon={MapMarker}
                            coordinate={{
                                latitude: orphanage.latitude,
                                longitude: orphanage.longitude,
                            }}
                        >
                            <Callout
                                tooltip={true}
                                onPress={() => { handleNavigateToOrphanageDetails(orphanage.id) }}
                            >
                                <View style={styles.calloutContainer}>
                                    <Text style={styles.calloutText}>
                                        {orphanage.name}
                                    </Text>
                                </View>
                            </Callout>
                        </Marker>
                    );
                })}
            </MapView>

            <View style={styles.footer}>
                <Text style={styles.footerText}>{orphanages.length} Orfanatos</Text>

                <RectButton
                    style={styles.createOrphanageButton}
                    onPress={handleNavigateToCreateOrphanage}
                >
                    <Feather name="plus" size={20} color="#fff" />
                </RectButton>
            </View>
        </View>
    );
};
