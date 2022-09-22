import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Cardapio {
  categoria: string;
  descricao: string;
  preco: number;
}

@Injectable({
  providedIn: 'root',
})
export class CardapioService {
  constructor(private httpClient: HttpClient) {}

  pedido: Cardapio[] = [];
  quantidade: number = 0;
  total: any = 0;

  get() {
    return this.httpClient.get<Cardapio[]>('http://localhost:3000/cardapio');
  }

  addToPedido = (lanche: Cardapio) => {
    this.pedido.push(lanche);
    this.quantidade = this.pedido.length;
    this.total = this.pedido.reduce((a, b) => a + (b['preco'] || 0), 0);
  };

  resetValues() {
    this.pedido = [];
    this.quantidade = 0;
    this.total = 0;
  }
}
