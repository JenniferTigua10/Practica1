import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Apostador } from '../../interfaces/Apostador';
import { PracticaService } from '../../services/practica.service';

@Component({
  selector: 'app-practica',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './practica.component.html',
  styleUrl: './practica.component.css'
})
export class PracticaComponent {

  forma: FormGroup= new FormGroup({
    nombre: new FormControl('william'),
    identificacion: new FormControl('0706254372'),
  });
  user:Apostador= {
    id: "",
    nombre: "",
    identificacion: "",
    rev: ""
  }
  users:Apostador[] = [];


  constructor(private cliente: PracticaService  ) {


  }


  guardar(){

    this.cliente.addDocument(this.forma.value).subscribe((data)=>{
      console.log(data);
    })

  }
  consultar(){
    this.users=[];
    this.cliente.getAlldocuments().subscribe((data)=>{
      data.rows.forEach((element:any) => {
        this.users.push({
          id: element.doc._id,
          nombre: element.doc.nombre,
          identificacion: element.doc.identificacion,
          rev: element.doc._rev
        });
      })
    })
  }
  editar(elemento:Apostador){
    this.forma.controls['nombre'].setValue(elemento.nombre);
    this.forma.controls['identificacion'].setValue(elemento.identificacion);
    // this.forma.setValue(elemento);
    // console.log(elemento);
  }
  eliminar(elemento:Apostador){


    this.cliente.deleteDocument(elemento.id, elemento.rev).subscribe((data)=>{
      console.log(data);
      this.consultar();
    })



  }

}