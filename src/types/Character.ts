export interface Character {
    id: number; // ID del personaje
    name: string; // Nombre del personaje
    species: string; // Especie del personaje
    location: { name: string }; // Localización del personaje
    origin: { name: string }; // Origen del personaje
    episode: string[]; // Episodios en los que aparece el personaje
    image: string; // Imagen del personaje
}