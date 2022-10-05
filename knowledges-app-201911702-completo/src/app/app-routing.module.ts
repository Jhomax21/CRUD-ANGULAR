import { KnowledgesActualizarComponent } from './page/knowledges/knowledges-actualizar/knowledges-actualizar.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { knowledges } from 'src/app/model/knowledges';
import { KnowledgesComponent } from './page/knowledges/knowledges.component';
import { KnowledgesCreaeditaComponent } from './page/knowledges/knowledges-creaedita/knowledges-creaedita.component';

const routes: Routes = [
  {
    path: 'business', component: KnowledgesComponent, children: [
  
      { path: 'knowledges', component: KnowledgesComponent, children:[  
      { path: 'edit/:id', component: KnowledgesCreaeditaComponent }
 ]}, 
    ]
  },
  {
    path: 'admin', component: KnowledgesCreaeditaComponent, children: [
      
     { path: 'new', component: KnowledgesCreaeditaComponent },
    ]
  },
  
  { path: 'edit/:id', component: KnowledgesCreaeditaComponent },

  { path: 'home', component: KnowledgesActualizarComponent }


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
