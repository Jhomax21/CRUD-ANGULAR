import { Component, OnInit } from '@angular/core';
import { KnowledgesService } from 'src/app/service/knowledges.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-knowledges-dialogo',
  templateUrl: './knowledges-dialogo.component.html',
  styleUrls: ['./knowledges-dialogo.component.css']
})
export class KnowledgesDialogoComponent implements OnInit {

  constructor(private knowledgesservice: KnowledgesService,
    private dialogRef: MatDialogRef<KnowledgesDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.knowledgesservice.setConfirmaEliminacion(estado);
    //CONTADOR
    if(estado)
    {
      this.knowledgesservice.numbero--;
    }
    //
    this.dialogRef.close();

  }
}
