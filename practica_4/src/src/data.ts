import { IApostador, IEncuentroDeportivo, IPronostico } from './interfaces';

export const apostador: IApostador[] = [
    {
        id: 1,
        nombre: 'juan',
        identificacion: 1127897129371
    },
    {
        id:2,
        nombre: 'pedro',
        identificacion: 123456789
    },
    {
        id: 3,
        nombre: 'maria',
        identificacion: 123456789
    },
    {
        id: 4,
        nombre: 'jose',
        identificacion: 123456789
    },
    {
        id: 5,
        nombre: 'ana',
        identificacion: 123456789
    }
]

export const encuentroDeportivo: IEncuentroDeportivo[] = [
    {
        id: 1,
        equipo1: 'Barcelona',
        equipo2: 'Real Madrid',
        fecha: new Date('2021-10-10'),
        hora: 10
    },
    {
        id: 2,
        equipo1: 'Manchester City',
        equipo2: 'Chelsea',
        fecha: new Date('2021-10-10'),
        hora: 12
    },
    {
        id: 3,
        equipo1: 'Liverpool',
        equipo2: 'Manchester United',
        fecha: new Date('2021-10-10'),
        hora: 14
    },
    {
        id: 4,
        equipo1: 'Juventus',
        equipo2: 'Milan',
        fecha: new Date('2021-10-10'),
        hora: 16
    },
    {
        id: 5,
        equipo1: 'Bayern Munich',
        equipo2: 'Borussia Dortmund',
        fecha: new Date('2021-10-10'),
        hora: 18
    }


]

const Pronostico: IPronostico[]= [
    {
        id: 1,
        idapostador: {id:1,nombre: 'juan',identificacion: 1127897129371},
        idEcuentroDeportivo: {id:1,equipo1: 'Barcelona',equipo2: 'Real Madrid',fecha: new Date('2021-10-10'),hora: 10},
        resultadoPropuesto: 'Barcelona',
        valorApostado: 100,
        estado: 'ACTIVO'

    },
    {
        id: 2,
        idapostador: {id:2,nombre: 'pedro',identificacion: 123456789},
        idEcuentroDeportivo: {id:2,equipo1: 'Manchester City',equipo2: 'Chelsea',fecha: new Date('2021-10-10'),hora: 12},
        resultadoPropuesto: 'Chelsea',
        valorApostado: 200,
        estado: 'ACTIVO'
    },
    {
        id: 3,
        idapostador: {id:3,nombre: 'maria',identificacion: 123456789},
        idEcuentroDeportivo: {id:3,equipo1: 'Liverpool',equipo2: 'Manchester United',fecha: new Date('2021-10-10'),hora: 14},
        resultadoPropuesto: 'Liverpool',
        valorApostado: 150,
        estado: 'ACTIVO'
    },
    {
        id: 4,
        idapostador: {id:4,nombre: 'jose',identificacion: 123456789},
        idEcuentroDeportivo: {id:4,equipo1: 'Juventus',equipo2: 'Milan',fecha: new Date('2021-10-10'),hora: 16},
        resultadoPropuesto: 'Juventus',
        valorApostado: 250,
        estado: 'ACTIVO'
    },
    {
        id: 5,
        idapostador: {id:5,nombre: 'ana',identificacion: 123456789},
        idEcuentroDeportivo: {id:5,equipo1: 'Bayern Munich',equipo2: 'Borussia Dortmund',fecha: new Date('2021-10-10'),hora: 18},
        resultadoPropuesto: 'Bayern Munich',
        valorApostado: 300,
        estado: 'ACTIVO'
    }
]

export {Pronostico};