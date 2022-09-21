import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Cardapio {
  categoria: string;
  descricao: string;
  preco: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  cardapio: Cardapio[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient
      .get<Cardapio[]>('http://localhost:3000/cardapio')
      .subscribe((cardapio) => {
        this.cardapio = cardapio;
      });
  }
}
