import { Component, DoCheck, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'app-lista-de-compras';
  listaDeCompra!: Array<Item>; // Lista de compras
  itemParaSerEditado!: Item;

  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void {
    this.listaDeCompra = this.listaService.getListaDeCompra();
  }

  editarItem(item: Item) {
    this.itemParaSerEditado = item; // Armazena o item que vai ser editado
  }

  deletarItem(id: number) {
    const index = this.listaDeCompra.findIndex((item) =>item.id === id); // Encontra o index do item que vai ser deletado
    this.listaDeCompra.splice(index, 1); // Remove o item
  }

  limparLista() {
    this.listaDeCompra = []; // Limpa a lista
  }

  ngDoCheck() {
    console.log('DoCheck');
    this.listaService.atualizarLocalStorage(); // Atualiza o localStorage
  }
}
