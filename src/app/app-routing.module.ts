import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path: '',component:HomeComponent},
  {path: 'about',component:AboutComponent},
  {path: 'proyectos',component:ProyectosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
