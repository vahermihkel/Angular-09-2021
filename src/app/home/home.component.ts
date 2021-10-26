import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { CartService } from '../services/cart.service';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // kooloniga annan tüübi, võrdusmärgiga väärtuse
  items: Item[] = [];


  // erinevate failide ühendus toimub constructor sees
  // private MUUTUJA_NIMI: Fail_Mida_Ühendan
  // Fail_Mida_Ühendan peab olema imporditud,sest
  //    praegune class tahab teada kus ühendatav fail asub
  // hea tava on panna MUUTUJA_NIMI mis on ühendatava 
  //    faili nimetus väikse tähega
  constructor(private cartService: CartService,
    private itemService: ItemService) { }

  ngOnInit(): void {
    console.log("jõudsin home componenti");
    this.items = this.itemService.itemsInService;
  }

  // saates peab olema see muutuja olemas
  // vastuvõttes peab olema tüüp
  onAddToCart(item: Item) {
    this.cartService.cartItemsInService.push(item);
  }

  onSortTitleAsc() {
    // users.sort((a, b) => a.firstname.localeCompare(b.firstname))
    this.items.sort((a, b) => a.title.localeCompare(b.title));
  }

  onSortTitleDesc() {
    this.items.sort((a, b) => b.title.localeCompare(a.title));
  }

  onSortPriceAsc() {
    // homes.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    this.items.sort((a, b) => a.price - b.price);
  }

  onSortPriceDesc() {
    // homes.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    this.items.sort((a, b) => b.price - a.price);
  }
}
