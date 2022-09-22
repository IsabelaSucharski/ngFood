import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cardapio, CardapioService } from '../cardapio.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.sass'],
})
export class CardapioComponent implements OnInit {
  constructor(
    private cardapioService: CardapioService,
    private router: Router
  ) {}

  cardapio: Cardapio[] = [];
  pedido: Cardapio[] = [];
  quantidade: number = 0;
  total: any = 0;

  card: any[] = [];

  ngOnInit(): void {
    this.getCardapio();
  }

  getCardapio() {
    this.pedido = this.cardapioService.pedido;
    this.quantidade = this.cardapioService.quantidade;
    this.total = this.cardapioService.total;
    
    this.cardapioService.get().subscribe((cardapio) => {
      const group = cardapio.reduce(function (acumulador: any, card) {
        if (!acumulador[card.categoria]) {
          acumulador[card.categoria] = [];
        }
        acumulador[card.categoria].push(card);
        return acumulador;
      }, {});

      Object.entries(group).map((c: any) => {
        this.card.push(c);
      });
    });
  }

  addToPedido(lanche: Cardapio) {
    this.cardapioService.addToPedido(lanche);
    this.pedido = this.cardapioService.pedido;
    this.quantidade = this.cardapioService.quantidade;
    this.total = this.cardapioService.total;
  }

  reset() {
    this.cardapioService.resetValues();
  }

  goToPedido() {
    this.router.navigateByUrl('/Pedido');
  }
}
