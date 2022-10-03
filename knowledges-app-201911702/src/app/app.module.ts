import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';//
import { MatTableModule } from '@angular/material/table';//
import { MatInputModule } from '@angular/material/input';//
import { MatButtonModule } from '@angular/material/button';//
import { MatIconModule } from '@angular/material/icon';//
import { FormsModule } from '@angular/forms';//
import { MatDialogModule } from '@angular/material/dialog';//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KnowledgesComponent } from './page/knowledges/knowledges.component';
import { KnowledgesListarComponent } from './page/knowledges/knowledges-listar/knowledges-listar.component';
import { KnowledgesCreaeditaComponent } from './page/knowledges/knowledges-creaedita/knowledges-creaedita.component';
import { KnowledgesBuscarComponent } from './page/knowledges/knowledges-buscar/knowledges-buscar.component';
import { KnowledgesDialogoComponent } from './page/knowledges/knowledges-listar/knowledges-dialogo/knowledges-dialogo.component';

@NgModule({
  declarations: [
    AppComponent,
    KnowledgesComponent,
    KnowledgesListarComponent,
    KnowledgesCreaeditaComponent,
    KnowledgesBuscarComponent,
    KnowledgesDialogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
