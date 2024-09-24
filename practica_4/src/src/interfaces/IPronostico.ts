import { IEncuentroDeportivo } from "./IEncuentroDeportivo";
import { IApostador } from "./IApostador";

export interface IPronostico{
    id: number,
    idapostador: IApostador,
    idEcuentroDeportivo: IEncuentroDeportivo,
    resultadoPropuesto: string,
    valorApostado: number,    
    estado: string
}