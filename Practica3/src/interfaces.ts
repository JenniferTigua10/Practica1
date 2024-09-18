// src/interfaces.ts

export interface Apostador {
    id: number;
    nombre: string;
    identificacion: string;
}

export interface Encuentro {
    id: number;
    equipo1: string;
    equipo2: string;
    fecha: string;
    hora: string;
}

export interface Pronostico {
    id: number;
    apostadorId: number;
    encuentroId: number;
    resultado: string;
}
