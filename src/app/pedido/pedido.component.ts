import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cardapio, CardapioService } from '../cardapio.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.sass'],
})
export class PedidoComponent implements OnInit {
  constructor(
    private cardapioService: CardapioService,
    private router: Router
  ) {}

  pedido: Cardapio[] = [];
  total: any = 0;

  ngOnInit(): void {
    this.definePedido();
  }

  definePedido() {
    this.pedido = this.cardapioService.pedido;
    this.total = this.cardapioService.total;
  }

  concluirPedido() {
    alert("Pedido realizado")
    this.resetValues();
    this.router.navigateByUrl('/Cardapio');
  }

  resetValues() {
    this.cardapioService.resetValues();
    this.definePedido();
  }
}
