import { Injectable } from '@angular/core';
import { Model } from '../model/Model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

constructor(private http: HttpClient) { }

buscarTodos() : Observable<Model[]>{
  return this.http.get<Model[]>('http://localhost:8080/agendamento/status')
}

buscarUm(id:number) : Observable<Model>{
  return this.http.get<Model>(`http://localhost:8080/agendamento/um/${id}`)
}

postAgendamento(model: Model): Observable<Model>{
  return this.http.post<Model>('http://localhost:8080/agendamento/solicitacao', model)
}

putAgendamento(model: Model) : Observable<Model>{
  return this.http.put<Model>('http://localhost:8080/agendamento/alterar', model)
}

deleteAgendamento(id: number) : Observable<Model>{
  return this.http.delete<Model>(`http://localhost:8080/agendamento/${id}`)
}



}
