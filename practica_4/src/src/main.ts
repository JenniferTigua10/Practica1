import './style.css'
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div> id= divcontenido </div>
`
import './style.css'
import { Pronostico } from './data'
import { IPronostico } from './interfaces'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="divcontenido"></div>
`;

const divcontenido = document.querySelector<HTMLDivElement>('#divcontenido')!;
const tabla = document.createElement('table');

divcontenido.appendChild(tabla);

tabla.innerHTML = `
  <tr>
    <th>ID</th>
    <th>Apostador</th>
    <th>Encuentro Deportivo</th>
    <th>Resultado Propuesto</th>
    <th>Valor Apostado</th>
    <th>Estado</th>
    <th>Acciones</th>
  </tr>
`;

Pronostico.forEach((pronostico: IPronostico) => {
  const tr = document.createElement('tr');
  
  // Cambiar el color según el estado
  switch (pronostico.estado) {
    case 'ACTIVO':
      tr.style.backgroundColor = 'green';
      break;
    case 'INACTIVO':
      tr.style.backgroundColor = 'orange';
      break;
    case 'ELIMINADO':
      tr.style.backgroundColor = 'red';
      break;
  }

  tr.innerHTML = `
    <td>${pronostico.id}</td>
    <td>${pronostico.idapostador.nombre}</td>
    <td>${pronostico.idEcuentroDeportivo.equipo1} vs ${pronostico.idEcuentroDeportivo.equipo2}</td>
    <td>${pronostico.resultadoPropuesto}</td>
    <td>${pronostico.valorApostado}</td>
    <td>${pronostico.estado}</td>
    <td>
      <button class="dar-baja">DAR DE BAJA</button>
      <button class="recuperar">RECUPERAR</button>
      <button class="reiniciar">REINICIAR</button>
    </td>
  `;
  
  tabla.appendChild(tr);
});

tabla.addEventListener('click', (e) => {
  if (!(e.target instanceof HTMLButtonElement)) {
    return;
  }
  
  const boton = e.target;
  const tr = boton.parentElement?.parentElement as HTMLTableRowElement;
  const id = parseInt(tr?.firstElementChild?.textContent || '0');
  const pronostico = Pronostico.find((p) => p.id === id);
  
  if (!pronostico) return;

  if (boton.classList.contains('dar-baja')) {
    if (pronostico.estado === 'ACTIVO') {
      pronostico.estado = 'INACTIVO';
    } else if (pronostico.estado === 'INACTIVO') {
      pronostico.estado = 'ELIMINADO';
    } else if (pronostico.estado === 'ELIMINADO') {
      // Borrar el pronóstico definitivamente
      const index = Pronostico.indexOf(pronostico);
      Pronostico.splice(index, 1);
      tr.remove();
      return;
    }
  }

  if (boton.classList.contains('recuperar')) {
    if (pronostico.estado === 'ELIMINADO') {
      pronostico.estado = 'INACTIVO';
    } else if (pronostico.estado === 'INACTIVO') {
      pronostico.estado = 'ACTIVO';
    } else {
      alert('El pronóstico ya está ACTIVO.');
    }
  }

  if (boton.classList.contains('reiniciar')) {
    pronostico.estado = 'ACTIVO';
  }

  // Actualizar el color de la fila
  switch (pronostico.estado) {
    case 'ACTIVO':
      tr.style.backgroundColor = 'green';
      break;
    case 'INACTIVO':
      tr.style.backgroundColor = 'orange';
      break;
    case 'ELIMINADO':
      tr.style.backgroundColor = 'red';
      break;
  }
});
