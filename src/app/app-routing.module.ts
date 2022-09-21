import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardapioComponent } from './cardapio/cardapio.component';
import { PedidoComponent } from './pedido/pedido.component';

const routes: Routes = [
  {path: 'Cardapio', component: CardapioComponent},
  {path: '', redirectTo: 'Cardapio', pathMatch: 'full'},
  {path: 'Pedido', component: PedidoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
