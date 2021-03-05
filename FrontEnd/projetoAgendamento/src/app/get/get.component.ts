import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Model } from '../model/Model';
import { AgendamentoService } from '../service/agendamento.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
  
  model: Model = new Model()
  listaAgendamento!: Model[]
  idAgenda!: number

  constructor(public service: AgendamentoService,
    private router: Router) { }

  ngOnInit() {
    this.encontreTodos()
  }

  encontreTodos(){
    this.service.buscarTodos().subscribe((resp: Model[])=>{
      this.listaAgendamento = resp
    })
  }

  
}
