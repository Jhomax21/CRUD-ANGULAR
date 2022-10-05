import { Component, OnInit } from '@angular/core';
import { KnowledgesService } from 'src/app/service/knowledges.service';
import { MatTableDataSource } from '@angular/material/table';
import { knowledges} from 'src/app/model/knowledges';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-knowledges-actualizar',
  templateUrl: './knowledges-actualizar.component.html',
  styleUrls: ['./knowledges-actualizar.component.css']
})
export class KnowledgesActualizarComponent implements OnInit {
  constructor(private ks: KnowledgesService) { }

  ngOnInit(): void {

  }


  valor()
  {
    return this.ks.numbero;
  }
}

