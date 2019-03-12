import { Component, OnInit } from '@angular/core';

export interface Reporte{
  value: number;
  name: string;
}

@Component({
  selector: 'app-rendimiento-list',
  templateUrl: './rendimiento-list.component.html',
  styleUrls: ['./rendimiento-list.component.css']
})
export class RendimientoListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  reportes: Reporte[] = [
    {value: 1, name: 'Rendimiento Clases Regular'},
    {value: 2, name: 'Rendimiento Clases Tesis'},
    {value: 3, name: 'Rendimiento Clases Consolidado'},
    {value: 4, name: 'Rendimiento Docente Regular'},
    {value: 5, name: 'Rendimiento Docente Tesis'},
    {value: 6, name: 'Rendimiento Docente Consolidado'},
    {value: 7, name: 'Rendimiento Resumen'},
    {value: 8, name: 'Rendimiento Resumen Consolidado'}
  ];

  selectedOptions: number;
  printedOption: number;

  print() {
    this.printedOption = this.selectedOptions;
    console.log(this.printedOption);
    
  }

}
