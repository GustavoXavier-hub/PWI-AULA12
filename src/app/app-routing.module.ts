import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProdutosComponent} from  './produtos/produtos.component';
import {NovoProdutoComponent} from './novo-produto/novo-produto.component';
import {ContentComponent} from './content/content.component';



const routes: Routes = [
  {
    path :'',
    component : ContentComponent 
    },

{
path :'produtos',
component : ProdutosComponent 
},
{
  path :'novosprodutos',
  component : NovoProdutoComponent
  }
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
