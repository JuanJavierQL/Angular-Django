import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface Reporte {
  value: number;
  viewValue: string;
}


@Component({
  selector: 'app-rendimiento-select',
  templateUrl: './rendimiento-select.component.html',
  styleUrls: ['./rendimiento-select.component.css']
})
export class RendimientoSelectComponent implements OnInit {
  
  
  
  
  // selectedValue: number;

  // reportes: Reporte[] = [
  //   {value: 1, viewValue: 'Rendimiento Clases Regular'},
  //   {value: 2, viewValue: 'Rendimiento Clases Tesis'},
  //   {value: 3, viewValue: 'Rendimiento Clases Consolidado'},
  //   {value: 4, viewValue: 'Rendimiento Docente Regular'},
  //   {value: 5, viewValue: 'Rendimiento Docente Tesis'},
  //   {value: 6, viewValue: 'Rendimiento Docente Consolidado'},
  //   {value: 7, viewValue: 'Rendimiento Resumen'},
  //   {value: 8, viewValue: 'Rendimiento Resumen Consolidado'}
  // ];

  // console.log(reporte);
  
  
  // toppings = new FormControl();
  // toppingList: string[] = [
  //   'Rendimiento Clases Regular',
  //   'Rendimiento Clases Tesis',
  //   'Rendimiento Clases Consolidado',
  //   'Rendimiento Docente Regular',
  //   'Rendimiento Docente Tesis',
  //   'Rendimiento Docente Consolidado',
  //   'Rendimiento Resumen',
  //   'Rendimiento Resumen Consolidado'];

  

  constructor() { }

  ngOnInit() {
  }

  selected: string;
  printedOption: string;

  print() {
    this.printedOption = this.selected;
    console.log(this.printedOption);
    
  }
}
