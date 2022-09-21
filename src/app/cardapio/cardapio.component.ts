import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cardapio } from '../app.component';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.sass'],
})
export class CardapioComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  cardapio: Cardapio[] = [];

  ngOnInit(): void {
    this.httpClient
      .get<Cardapio[]>('http://localhost:3000/cardapio')
      .subscribe((cardapio) => {
        this.cardapio = cardapio;
      });
  }
}
