import { Injectable } from '@angular/core';
import { ciudadanos } from '../data/ciudadanos.data';
import { ICiudadano } from '../interfaces/ICiudadano';

@Injectable({
  providedIn: 'root'
})
export class CiudadanosService {

  constructor() { }

  getCiudadanos():ICiudadano[]{
    return ciudadanos;
  }
  getCiudadano(identificacion:string) : ICiudadano|undefined{
    return ciudadanos.find(ciudadano => ciudadano.identificacion === identificacion);
  }
  addCiudadano(ciudadano:ICiudadano){
    ciudadanos.push(ciudadano);
  }
  updateCiudadano(ciudadano:ICiudadano){
    const index = ciudadanos.findIndex(c => c.identificacion === ciudadano.identificacion);
    ciudadanos[index] = ciudadano;
  }
  deleteCiudadano(identificacion:string){
    const index = ciudadanos.findIndex(c => c.identificacion === identificacion);
    ciudadanos.splice(index, 1);
  }


}