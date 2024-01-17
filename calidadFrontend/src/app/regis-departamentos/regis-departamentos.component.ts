import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from '../services/departamento.service';
import { Departamento } from '../interfaces/shared';

@Component({
  selector: 'app-regis-departamentos',
  templateUrl: './regis-departamentos.component.html',
  styleUrls: ['./regis-departamentos.component.css']
})
export class RegisDepartamentosComponent implements OnInit{

  crearDpto!:Departamento;
  departamentos:Departamento[]=[];
  idDepto:string='';
  constructor(private departamentoS:DepartamentoService){}

  ngOnInit(): void {
    this.departamentoS.getAll().subscribe((data:Departamento[])=>{
      this.departamentos=data;
    });
    this.crearDpto={
      id:'',
      numero:'',
      nombre:'',
      encargado:'',
      tipo:''
    }
  }

  submit(element:Departamento){
    this.departamentoS.create(this.crearDpto).subscribe(res =>{
      console.log('Departamento agregado');
      const newDepto={
        id: res.id,
        numero: element.numero,
        nombre: element.nombre,
        encargado: element.encargado,
        tipo: element.tipo
      }
      this.departamentos.push(newDepto);
      this.crearDpto = {
        id: '',
        numero: '',
        nombre: '',
        encargado: '',
        tipo: ''
      };
    })
  }
  submitedit(element:Departamento){
    this.departamentoS.update(this.idDepto,this.crearDpto).subscribe(res=>{
      console.log('Departamento aditado');
      // Encuentra el índice del departamento en el arreglo
    const index = this.departamentos.findIndex(d => d.id === this.idDepto);

    if (index !== -1) {
      // Actualiza el departamento en el arreglo
      this.departamentos[index] = { ...this.crearDpto, id: this.idDepto };
    }
    })
  }
  editDepto(id:string){
    this.idDepto=id;
    this.departamentoS.find(id).subscribe((data:Departamento)=>{
      this.crearDpto=data;
    });
  }
  nuevo(){
    this.crearDpto = {
      id: '',
      numero: '',
      nombre: '',
      encargado: '',
      tipo: ''
    };
  }

}
