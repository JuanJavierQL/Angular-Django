import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { RendimientoComponent } from '././rendimiento/rendimiento.component';
import { RendimientoSelectComponent } from '././rendimiento-select/rendimiento-select.component';
import { RendimientoListComponent } from '././rendimiento-list/rendimiento-list.component';
import { EncuestasComponent } from '././encuestas/encuestas.component';

const routes: Routes = [
  {path: 'rendimiento', component: RendimientoComponent},
  {path: 'rendimientoSelect', component: RendimientoSelectComponent},
  {path: 'rendimientoList', component: RendimientoListComponent},
  {path: 'encuestas', component: EncuestasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
