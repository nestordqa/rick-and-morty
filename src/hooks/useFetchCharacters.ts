import { useState, useEffect } from 'react';
import { Character } from '../types/Character';

//Custom hook para obtener personajes. Si no recibe
//Query por parametro, devuelve todos los personajes
//Si lo recibe, devolverá aquel que coincida
const useFetchCharacters = (query: string) => {
    const [characters, setCharacters] = useState<Character[]>([]); // Estado para almacenar los personajes
    const [loading, setLoading] = useState<boolean>(true); // Estado para manejar la carga
    const [error, setError] = useState<string | null>(null); // Estado para manejar errores

    useEffect(() => {
        const fetchCharacters = async () => {
            setLoading(true); // Inicia la carga
            try {
                // Realiza la solicitud a la API de personajes utilizando la consulta
                const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`);
                const data = await response.json(); // Convierte la respuesta a JSON
                setCharacters(data.results); // Actualiza el estado con los personajes obtenidos
            } catch (error) {
                setError('Error fetching characters'); // Maneja errores en la solicitud
            } finally {
                setLoading(false); // Finaliza el estado de carga
            }
        };

        fetchCharacters(); // Llama a la función para obtener personajes
    }, [query]); // Dependencia: se ejecuta cuando cambia la consulta

    // Retorna los estados y datos, permitiendo que otros componentes accedan a esta lógica
    return { characters, loading, error }; 
};

export default useFetchCharacters;