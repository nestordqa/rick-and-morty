import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ActivityIndicator } from 'react-native';
import useFetchEpisodes from '../hooks/useFetchEpisodes';

// TODO: Declarar tipo para parámetro "route"
// @ts-ignore
const CharacterScreen = ({ route }) => {
    const { character } = route.params; // Obtiene el personaje de los parámetros de la ruta

    const lastEpisodeUrl = character.episode[character.episode.length - 1]; //Obtiene la URL del ultimo episodio

    const { episodes, loading, error } = useFetchEpisodes(lastEpisodeUrl); // Hook para obtener el último episodio del personaje

    return (
        <>
            {loading && <ActivityIndicator />}
            {error && <Text>{error}</Text>}
            {!loading && !error && episodes && (
                <ImageBackground 
                    source={{ uri: character.image }} 
                    style={styles.background}
                    imageStyle={{ opacity: 0.5 }}
                >
                    <View style={styles.card}>
                        <Text style={styles.title}>Nombre: {character.name}</Text>
                        <Text style={styles.detail}>Especie: {character.species}</Text>
                        <Text style={styles.detail}>Localización: {character.location.name}</Text>
                        <Text style={styles.detail}>Origen: {character.origin.name}</Text>
                        <Text style={styles.detail}>Último episodio: {episodes?.episode}, {episodes?.name}</Text>
                    </View>
                </ImageBackground>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo blanco con algo de transparencia
        borderRadius: 10,
        padding: 20,
        width: '90%',
        alignItems: 'flex-start',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, // Sombra para Android
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    detail: {
        fontSize: 18,
        marginVertical: 5,
    },
});

export default CharacterScreen;