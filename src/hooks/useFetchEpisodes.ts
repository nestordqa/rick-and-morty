import { useState, useEffect } from 'react';
import { Episodes } from '../types/Episodes';

// Custom hook para obtener un episodio en específico
const useFetchEpisodes = (episodeUrl: string) => {
    const [episodes, setEpisodes] = useState<Episodes | null>(null); // Estado para almacenar los episodios
    const [loading, setLoading] = useState<boolean>(true); // Estado para manejar la carga
    const [error, setError] = useState<string | null>(null); // Estado para manejar errores

    useEffect(() => {
        const fetchEpisodes = async () => {
            setLoading(true); // Inicia la carga
            try {
                const response = await fetch(episodeUrl); // Realiza la solicitud a la URL del episodio
                const data = await response.json(); // Convierte la respuesta a JSON
                setEpisodes(data); // Actualiza el estado con los episodios obtenidos
            } catch (error) {
                setError('Error fetching Episodes'); // Maneja errores en la solicitud
            } finally {
                setLoading(false); // Finaliza el estado de carga
            }
        };

        fetchEpisodes(); // Llama a la función para obtener episodios
    }, [episodeUrl]); // Dependencia: se ejecuta cuando cambia la URL del episodio

    // Retorna los estados y datos, permitiendo que otros componentes accedan a esta lógica
    return { episodes, loading, error }; 
};

export default useFetchEpisodes;