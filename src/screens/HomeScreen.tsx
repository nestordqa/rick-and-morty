import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import useFetchCharacters from '../hooks/useFetchCharacters';
import { Character } from '../types/Character';
import CharacterCard from '../components/characters/CharacterChard';

//TODO: Declarar tipo para parámetro "navigation"
//@ts-ignore
const HomeScreen = ({ navigation }) => {
    const [query, setQuery] = useState('');
    const { characters, loading, error } = useFetchCharacters(query);

    const handleCharacterPress = (character: Character) => {
        navigation.navigate('Personaje', { character });
    };

    return (
        <View>
            <View>
                <TextInput
                    placeholder="Busca un personaje..."
                    value={query}
                    onChangeText={setQuery}
                />
                <Button title="Buscar" onPress={() => setQuery(query)} />
            </View>
            {loading && <ActivityIndicator />}
            {error && <Text>{error}</Text>}
            <FlatList
                data={characters}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ paddingBottom: 100 }}
                renderItem={({ item }) => (
                    <CharacterCard
                        character={item}
                        onPress={() => handleCharacterPress(item)}
                    />
                )}
            />
        </View>
    );
};

export default HomeScreen;