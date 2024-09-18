// src/main.ts

import { apostadores, encuentros, pronosticos } from './data';
import { generarTablaApostadores, generarTablaEncuentros, generarTablaPronosticos, filtrarPronosticos } from './functions';

// Mostrar tablas iniciales
document.getElementById('tablaApostadores')!.innerHTML = generarTablaApostadores(apostadores);
document.getElementById('tablaEncuentros')!.innerHTML = generarTablaEncuentros(encuentros);
document.getElementById('tablaPronosticos')!.innerHTML = generarTablaPronosticos(pronosticos, apostadores, encuentros);

// Manejo del formulario de filtrado
document.getElementById('filtrarFormulario')!.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = (document.getElementById('filtrarTexto') as HTMLInputElement).value;
    document.getElementById('tablaPronosticos')!.innerHTML = filtrarPronosticos(input, pronosticos, apostadores, encuentros);
});
