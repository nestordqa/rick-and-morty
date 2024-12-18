import React from 'react';
import { Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Character } from '../../types/Character';

// Definición de las propiedades que acepta el componente CharacterCard
interface CharacterCardProps {
    character: Character; // Objeto que representa al personaje
    onPress: () => void; // Función que se ejecuta al presionar la tarjeta
}

// Componente funcional CharacterCard
const CharacterCard: React.FC<CharacterCardProps> = ({ character, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <Image source={{ uri: character.image }} style={styles.image} />
            <Text style={styles.name}>{character.name}</Text>
        </TouchableOpacity>
    );
};

// Estilos para el componente
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff', // Fondo blanco para la tarjeta
        borderRadius: 10, // Bordes redondeados
        elevation: 3, // Sombra para Android
        marginVertical: 8, // Margen vertical
        padding: 10, // Espaciado interno
        alignItems: 'center', // Centra los elementos dentro de la tarjeta
    },
    image: {
        width: 100, // Ancho de la imagen
        height: 100, // Alto de la imagen
        borderRadius: 50, // Hace que la imagen sea circular
        marginBottom: 10, // Margen inferior
    },
    name: {
        fontSize: 16, // Tamaño de fuente para el nombre
        fontWeight: 'bold', // Negrita para el nombre
    },
});

export default CharacterCard; // Exporta el componente para su uso en otras partes de la aplicación