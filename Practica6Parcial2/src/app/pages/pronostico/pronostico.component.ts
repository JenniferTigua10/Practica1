import { Component } from '@angular/core';
import { IPronostico } from '../../interfaces/IPronostico';
import { PronosticoService } from '../../services/pronostico.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pronostico',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pronostico.component.html',
  styleUrls: ['./pronostico.component.css']
})
export class PronosticoComponent {
  pronostico: IPronostico = {
    id: '',
    idApostador: '',
    idEncuentroDeportivo: '',
    resultadoPropuesto: '',
    valorApuesta: 0
  };

  pronosticos: IPronostico[] = [];

  constructor(private service: PronosticoService) {}

  ngOnInit() {
    this.list();
  }

  list() {
    this.service.getAllDocuments()
      .then((data: any) => {
        this.pronosticos = data.rows.map((row: any) => row.doc);
      })
      .catch((err: any) => console.error('Error fetching documents:', err));
  }

  new() {
    this.pronostico = {
      id: '',
      idApostador: '',
      idEncuentroDeportivo: '',
      resultadoPropuesto: '',
      valorApuesta: 0
    };
  }

  save() {
    const document = { ...this.pronostico, _id: this.pronostico.id };
    this.service.addDocument(document)
      .then(() => {
        console.log('Documento creado/actualizado');
        this.list();
        this.new();
      })
      .catch((err: any) => console.error('Error saving document:', err));
  }

  edit(pronostico: IPronostico) {
    this.pronostico = { ...pronostico };
  }

  delete(pronostico: any) {
    this.service.deleteDocument(pronostico)
      .then(() => {
        console.log('Documento eliminado');
        this.list();
      })
      .catch((err: any) => console.error('Error deleting document:', err));
  }

  sincronizar() {
    this.service.syncWithCouchDB('http://admin:12345@localhost:5984/pronosticos')
      .then(() => console.log('Sincronización completada'))
      .catch((err: any) => console.error('Error durante la sincronización:', err));
  }
}
