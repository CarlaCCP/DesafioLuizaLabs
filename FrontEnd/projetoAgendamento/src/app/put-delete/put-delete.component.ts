import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Model } from '../model/Model';
import { AgendamentoService } from '../service/agendamento.service';

@Component({
  selector: 'app-put-delete',
  templateUrl: './put-delete.component.html',
  styleUrls: ['./put-delete.component.css']
})
export class PutDeleteComponent implements OnInit {
  model: Model = new Model()
  listaAgendamento!: Model[]
  idModel!: number

  constructor(private router: Router,
    private service: AgendamentoService) { }

  ngOnInit() {
    window.scroll(0,0)
    this.encontreTodos()
    
   
  }

  encontreTodos(){
    this.service.buscarTodos().subscribe((resp: Model[])=>{
      this.listaAgendamento = resp
    })
  }
  encontreUm(id:number){
    this.service.buscarUm(id).subscribe((resp: Model)=>{
      this.model = resp
    })
  }


  deletar(){
    this.service.deleteAgendamento(this.idModel).subscribe(()=>{
    window.alert("Agendamento deletado com sucesso")
    window.location.reload()
    })
  }

  alterarUm(){
    
    this.service.putAgendamento(this.model).subscribe((resp: Model)=>{
    this.model = resp
    window.alert("Agendamento alterada com sucesso")
    window.location.reload()
    })
  }

  identificarId(id:number){
    this.idModel = id
    this.service.buscarUm(id).subscribe((resp: Model)=>{
      this.model = resp
    })
  }
}
