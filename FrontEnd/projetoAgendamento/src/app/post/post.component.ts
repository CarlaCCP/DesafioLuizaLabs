import { Component, OnInit } from '@angular/core';
import { Model } from '../model/Model';
import { AgendamentoService } from '../service/agendamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  model: Model = new Model()
  constructor( public service: AgendamentoService, private router: Router) { }

  ngOnInit() {
  }

  cadastrando(){
    if(this.model.destinatario == null|| this.model.mensagem == null){
      window.alert('Todos os campos são obrigatórios')
    } else {
      this.service.postAgendamento(this.model).subscribe((resp: Model)=>{
        this.model = resp
        window.alert("Novo agendamento realizado com sucesso")
        this.router.navigate(['/todos'])
      })
    }
  }
}
