import { Injectable } from '@angular/core';
import { knowledges } from  '../model/knowledges'
import {HttpClient} from '@angular/common/http';
import {Subject, EMPTY} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KnowledgesService {
  url: string = "http://localhost:5000/knowledges"
  private listaCambio = new Subject<knowledges[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<knowledges[]>(this.url);
  }
  insertar(knowledges: knowledges) {
    return this.http.post(this.url, knowledges);
  }
  setLista(listaNueva: knowledges[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(knowledges: knowledges) {
    return this.http.put(this.url + "/" + knowledges.id, knowledges);
    //si se quiere cambiar para que no salga el url, la linea de arriba
  }
  listarId(id: number) {
    return this.http.get<knowledges>(`${this.url}/${id}`);
  }
  eliminar(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<knowledges[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}
