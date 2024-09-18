// src/data.ts

import { Apostador, Encuentro, Pronostico } from './interfaces';

export const apostadores: Apostador[] = [
    { id: 1, nombre: 'Olery Zambrano', identificacion: '1223148978' },
    { id: 2, nombre: 'Luis Mendoza', identificacion: '2345655151' },
    { id: 3, nombre: 'William Cabrera', identificacion: '0706254372' },
    { id: 4, nombre: 'Jennifer Tigua', identificacion: '1350099659' },
    { id: 5, nombre: 'Francesca Cabrera', identificacion: '1352001648' }
];

export const encuentros: Encuentro[] = [
    { id: 1, equipo1: 'Ecuador', equipo2: 'Brasil', fecha: '2024-09-15', hora: '16:00' },
    { id: 2, equipo1: 'Barcelona', equipo2: 'Delfin', fecha: '2024-09-16', hora: '18:00' },
    { id: 3, equipo1: 'Liga', equipo2: 'Madrid', fecha: '2024-09-17', hora: '20:00' },
    { id: 4, equipo1: 'Argentina', equipo2: 'Ecuador', fecha: '2024-09-18', hora: '21:00' },
    { id: 5, equipo1: 'Colombia', equipo2: 'Emelec', fecha: '2024-09-20', hora: '14:00' }
];

export const pronosticos: Pronostico[] = [
    { id: 1, apostadorId: 1, encuentroId: 1, resultado: 'Victoria Equipo 1' },
    { id: 2, apostadorId: 2, encuentroId: 2, resultado: 'Victoria Equipo 2' },
    { id: 3, apostadorId: 3, encuentroId: 3, resultado: 'Empate' },
    { id: 4, apostadorId: 4, encuentroId: 4, resultado: 'Victoria Equipo 2' },
    { id: 5, apostadorId: 5, encuentroId: 5, resultado: 'Victoria Equipo 1' }
];
