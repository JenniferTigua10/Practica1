// interfas

interface Sistemadepronostico {
    apostadores: {
        totalElementos: number;
        tipo: string;
        datos: Array<{
            id: number;
            nombre: string;
            identificacion: number;
        }>;
    };
    encuentrosDeportivos: {
        totalElementos: number;
        tipo: string;
        datos: Array<{
            id: number;
            equipo1: string;
            equipo2: string;
            fecha: Date;
            hora: string;
        }>;
    };
    pronosticos: {
        totalElementos: number;
        tipo: string;
        datos: Array<{
            id: number;
            idApostador: number;
            idEncuentrodeportivo: number;
            resultado: string;
            valorApuesta: number;
        }>;
    };
}

// Cobjetos
const sistema: Sistemadepronostico = {
    apostadores: {
        totalElementos: 3,
        tipo: 'maestro',
        datos: [
            { id: 1, nombre: 'William', identificacion: 1234567890 },
            { id: 2, nombre: 'John', identificacion: 1156489752 },
            { id: 3, nombre: 'Ana', identificacion: 9876543210 },
        ]
    },

    encuentrosDeportivos: {
        totalElementos: 3,
        tipo: 'maestro',
        datos: [
            { id: 1, equipo1: 'Ecuador', equipo2: 'Brasil', fecha: new Date('2021-10-10'), hora: '20:30' },
            { id: 2, equipo1: 'Chile', equipo2: 'Argentina', fecha: new Date('2021-10-11'), hora: '18:00' },
            { id: 3, equipo1: 'Uruguay', equipo2: 'Paraguay', fecha: new Date('2021-10-12'), hora: '19:30' },
        ]
    },

    pronosticos: {
        totalElementos: 3,
        tipo: 'Transaccional',
        datos: [
            { id: 1, idApostador: 1, idEncuentrodeportivo: 1, resultado: 'Gano Ecuador', valorApuesta: 10000 },
            { id: 2, idApostador: 2, idEncuentrodeportivo: 1, resultado: 'Perdio Chile', valorApuesta: 5000 },
            { id: 3, idApostador: 3, idEncuentrodeportivo: 1, resultado: 'Empate', valorApuesta: 8000 },
        ]
    }
};

// para apostador se esta usando for...of
console.log('Apostadores usando for...of:');
for (const apostador of sistema.apostadores.datos) {
    console.log(`ID: ${apostador.id}, Nombre: ${apostador.nombre}, Identificación: ${apostador.identificacion}`);
}

// para encuentro deportivo se esta usando for...in
console.log('\nEncuentros Deportivos usando for...in:');
for (const index in sistema.encuentrosDeportivos.datos) {
    const encuentro = sistema.encuentrosDeportivos.datos[index];
    console.log(`ID: ${encuentro.id}, ${encuentro.equipo1} vs ${encuentro.equipo2} el ${encuentro.fecha.toLocaleDateString()} a las ${encuentro.hora}`);
}

// para pronostico se esta usando forEach
console.log('\nPronósticos usando forEach:');
sistema.pronosticos.datos.forEach(pronostico => {
    console.log(`Pronóstico ID: ${pronostico.id}, Apostador ID: ${pronostico.idApostador}, Encuentro ID: ${pronostico.idEncuentrodeportivo}, Resultado: ${pronostico.resultado}, Valor de Apuesta: ${pronostico.valorApuesta}`);
});

