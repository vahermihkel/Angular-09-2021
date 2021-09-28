import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: any[] = [];


  // erinevate failide ühendus toimub constructor sees
  // private MUUTUJA_NIMI: Fail_Mida_Ühendan
  // Fail_Mida_Ühendan peab olema imporditud,sest
  //    praegune class tahab teada kus ühendatav fail asub
  // hea tava on panna MUUTUJA_NIMI mis on ühendatava 
  //    faili nimetus väikse tähega
  constructor(private cartService: CartService,
    private itemService: ItemService) { }

  // täitke items itemsInService väärtusega
  // lahendus on CartComponent sees olemas
  ngOnInit(): void {
    console.log("jõudsin home componenti");
    this.items = this.itemService.itemsInService;
  }

  onAddToCart(item: any) {
    this.cartService.cartItemsInService.push(item);
  }
}
