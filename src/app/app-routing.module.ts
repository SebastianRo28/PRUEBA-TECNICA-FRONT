import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeProductoComponent } from './ui/views/home-producto/home-producto.component';
import { AgregarProcutoComponent } from './ui/views/agregar-procuto/agregar-procuto.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: HomeProductoComponent },
  { path: 'agregar', component: AgregarProcutoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
