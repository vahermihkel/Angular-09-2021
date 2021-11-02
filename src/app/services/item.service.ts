import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemsInService: Item[] = [];

  // HttpClient on Angulari Service, mis võimaldab serveritest päringuid teha
  constructor(private httpClient: HttpClient) { }

  addItemsToDatabase() {
    // kõiki päringuid peab returnima ning välja kutsudes seda funktsiooni
    // peab .subscribe() kirjutama

    // put() on andmebaasi panek
    // see nõuab kahte argumenti - aadress kuhu panna ja väärtus mida panna
    return this.httpClient.put("https://webshop-10-2021-default-rtdb.europe-west1.firebasedatabase.app/items.json", this.itemsInService);
  }

  getItemsFromDatabase() {
    return this.httpClient.get<Item[]>("https://webshop-10-2021-default-rtdb.europe-west1.firebasedatabase.app/items.json");
  }
}
