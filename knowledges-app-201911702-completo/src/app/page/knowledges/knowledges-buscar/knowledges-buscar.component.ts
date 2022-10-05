import { KnowledgesService } from 'src/app/service/knowledges.service';
import { knowledges } from 'src/app/model/knowledges';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledges-buscar',
  templateUrl: './knowledges-buscar.component.html',
  styleUrls: ['./knowledges-buscar.component.css']
})
export class KnowledgesBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private knowledgesservice:KnowledgesService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: knowledges[] = [];
    this.knowledgesservice.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.titulo.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.knowledgesservice.setLista(array);
    })
  }
}