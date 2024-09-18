// src/functions.ts

import { Apostador, Encuentro, Pronostico } from './interfaces';
import { apostadores, encuentros, pronosticos } from './data';

// Generar tabla HTML para apostadores
export function generarTablaApostadores(data: Apostador[]): string {
    let html = `<tr><th>ID</th><th>Nombre</th><th>Edad</th></tr>`;
    data.forEach(apostador => {
        html += `<tr><td>${apostador.id}</td><td>${apostador.nombre}</td><td>${apostador.identificacion}</td></tr>`;
    });
    return html;
}

// Generar tabla HTML para encuentros
export function generarTablaEncuentros(data: Encuentro[]): string {
    let html = `<tr><th>ID</th><th>Equipo 1</th><th>Equipo 2</th><th>Fecha</th><th>Hora</th></tr>`;
    data.forEach(encuentro => {
        html += `<tr><td>${encuentro.id}</td><td>${encuentro.equipo1}</td><td>${encuentro.equipo2}</td><td>${encuentro.fecha}</td><td>${encuentro.hora}</td></tr>`;
    });
    return html;
}

// Generar tabla HTML para pronósticos
export function generarTablaPronosticos(data: Pronostico[], apostadores: Apostador[], encuentros: Encuentro[]): string {
    let html = `<tr><th>ID</th><th>Apostador</th><th>Encuentro</th><th>Resultado</th></tr>`;
    data.forEach(pronostico => {
        const apostador = apostadores.find(a => a.id === pronostico.apostadorId);
        const encuentro = encuentros.find(e => e.id === pronostico.encuentroId);
        html += `<tr><td>${pronostico.id}</td><td>${apostador ? apostador.nombre : 'Desconocido'}</td><td>${encuentro ? `${encuentro.equipo1} vs ${encuentro.equipo2}` : 'Desconocido'}</td><td>${pronostico.resultado}</td></tr>`;
    });
    return html;
}

// Filtrar pronósticos por resultado
export function filtrarPronosticos(resultado: string, pronosticos: Pronostico[], apostadores: Apostador[], encuentros: Encuentro[]): string {
    const datosFiltrados = pronosticos.filter(p => p.resultado.toLowerCase().includes(resultado.toLowerCase()));
    return generarTablaPronosticos(datosFiltrados, apostadores, encuentros);
}
