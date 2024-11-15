import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListaDeCompraService {
  private listaDeCompra: Item[];

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('itens') || '[]'); //pega os dados do localStorage
  }

  getListaDeCompra() {
    return this.listaDeCompra;
  }

  criarItem(nomeDoItem: string) {
    const id = this.listaDeCompra.length + 1;
    const item: Item = {
      id: id,
      nome: nomeDoItem,
      data: new Date().toLocaleString('pt-BR'),
      comprado: false,
    };
    return item;
  }

  adicionarItemNaLista(nomeDoItem: string) {
    //recebe o item que vai ser adicionado
    const item = this.criarItem(nomeDoItem); //cria o item
    this.listaDeCompra.push(item); //adiciona o item na lista
  }

  editarItemDaLista(itemAntigo: Item, nomeEditadoDoItem: string) {
    //recebe o item que vai ser editado
    const itemEditado: Item = {
      id: itemAntigo.id,
      nome: nomeEditadoDoItem,
      data: itemAntigo.data,
      comprado: itemAntigo.comprado,
    };

    const id = itemAntigo.id;
    this.listaDeCompra.splice(Number(id) - 1, 1, itemEditado); // percorre o array e remove o item antigo e adiciona o item editado
  }

  atualizarLocalStorage() {
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompra)); // lista de compra salva os dados no localStorage chamado itens
  }
}
