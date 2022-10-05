import { Component, OnInit } from '@angular/core';
import { KnowledgesService } from 'src/app/service/knowledges.service';
import { MatTableDataSource } from '@angular/material/table';
import { knowledges} from 'src/app/model/knowledges';
import { MatDialog } from '@angular/material/dialog';
import { KnowledgesDialogoComponent } from './knowledges-dialogo/knowledges-dialogo.component';
@Component({
  selector: 'app-knowledges-listar',
  templateUrl: './knowledges-listar.component.html',
  styleUrls: ['./knowledges-listar.component.css']
})
export class KnowledgesListarComponent implements OnInit {
  dataSource: MatTableDataSource<knowledges>= new MatTableDataSource();
  displayedColumns:string[]=["id","titulo","url", "sumary", "content", 'ACCIÓN 1', 'ACCIÓN 2']; //CAMBIAR
  private idMayor = 0;
  constructor(private ks: KnowledgesService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.ks.listar().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
    })
    this.ks.getLista().subscribe(data=>
      {
        this.dataSource=new MatTableDataSource(data);
      });
      this.ks.getConfirmaEliminacion().subscribe(data => {
        data == true ? this.eliminar(this.idMayor) : false;
      });
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(KnowledgesDialogoComponent);
  }

  eliminar(id: number) {
    this.ks.eliminar(id).subscribe(() => {
      this.ks.listar().subscribe(data => {
        this.ks.setLista(data);
      });
    });

  }
}



