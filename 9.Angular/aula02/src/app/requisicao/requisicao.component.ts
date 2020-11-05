import { Component, OnInit } from '@angular/core';
import { Comments } from '../modelo/comments';
import { CommentsService } from '../servicos/comments.service';

@Component({
  selector: 'app-requisicao',
  templateUrl: './requisicao.component.html',
  styleUrls: ['./requisicao.component.css']
})
export class RequisicaoComponent implements OnInit {

  // Vetor
  vetor: Comments[];


  // Constutor
  constructor(private servico: CommentsService) { }

  // Ao carregar o componente 
  ngOnInit(): void {
    this.selecionar();
    console.table(this.vetor)
  }

  // Função chamar o metodo para obter dados do serviço (GET)
  selecionar(): void {
    this.servico.obterDados()
      .subscribe(retorno => {
        this.vetor = retorno;
        console.table(this.vetor)
      })
  }

  // Função deletar os dados
  deletarDados(): void {

  }

}
