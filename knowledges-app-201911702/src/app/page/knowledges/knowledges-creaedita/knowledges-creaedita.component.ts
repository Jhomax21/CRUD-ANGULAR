import { knowledges } from 'src/app/model/knowledges';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { KnowledgesService } from 'src/app/service/knowledges.service';
@Component({
  selector: 'app-knowledges-creaedita',
  templateUrl: './knowledges-creaedita.component.html',
  styleUrls: ['./knowledges-creaedita.component.css']
})
export class KnowledgesCreaeditaComponent implements OnInit {
  knowledges: knowledges = new knowledges();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  constructor(private knowledgesservice: KnowledgesService,private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.knowledges.titulo.length > 0 && this.knowledges.url.length > 0 && this.knowledges.sumary.length > 0 && this.knowledges.content.length > 0) {
      if (this.edicion) {
        this.knowledgesservice.modificar(this.knowledges).subscribe(data => {
          this.knowledgesservice.listar().subscribe(data => {
            this.knowledgesservice.setLista(data);
          })
        })
      } else {

        this.knowledgesservice.insertar(this.knowledges).subscribe(data => {
          this.knowledgesservice.listar().subscribe(data => {
            this.knowledgesservice.setLista(data);
          })
        })
      }
      this.router.navigate(['business/knowledges']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.knowledgesservice.listarId(this.id).subscribe(data => {
        this.knowledges = data;
      })
    }
  }
}
