export interface Episodes {
    id: number; // ID del episodio
    name: string; // Nombre del episodio
    air_date: string; // Fecha de emisión del episodio
    episode: string; // Código del episodio (ej. S01E01)
    characters: string[]; // Lista de personajes que aparecen en el episodio
    url: string; // URL del episodio en la API
    created: string; // Fecha de creación del registro del episodio
}