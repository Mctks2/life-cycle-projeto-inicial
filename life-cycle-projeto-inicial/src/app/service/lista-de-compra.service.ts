import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Item[] = [
    {
      "id": 1,
      "nome": "Queijo prato",
      "data": "Segunda-feira (31/10/2022) às 08:30",
      "comprado": false
    },
    {
      "id": 2,
      "nome": "Leite integral",
      "data": "Segunda-feira (31/10/2022) às 08:30",
      "comprado": false
    },
    {
      "id": 3,
      "nome": "Mamão papaia",
      "data": "Segunda-feira (31/10/2022) às 08:30",
      "comprado": true
    },
  ]

  constructor() {
    console.log('Instanciando dependências necessárias para o serviço.');
  }

  getListaDeCompra(){
    return this.listaDeCompra;
  }

  criarItem(nomeDoItem: string){
    const id = this.listaDeCompra.length + 1;
    const item: Item = {
      "id": id,
      "nome": nomeDoItem,
      "data": new Date().toLocaleString('pt-BR'),
      "comprado": false
    }
    return item
  }

  adicionarItemNaLista(nomeDoItem: string){
    const item = this.criarItem(nomeDoItem)
    this.listaDeCompra.push(item);
  }

  editarItemDaLista(itemAntigo: Item, nomeEditadoDoItem: string){ //recebe o item que vai ser editado
    const itemEditado: Item = {
      "id": itemAntigo.id,
      "nome": nomeEditadoDoItem,
      "data": itemAntigo.data,
      "comprado": itemAntigo.comprado
    }

    const id = itemAntigo.id;
    this.listaDeCompra.splice(Number(id) - 1, 1, itemEditado); // percorre o array e remove o item antigo e adiciona o item editado
  }
}
