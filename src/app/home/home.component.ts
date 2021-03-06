import { Component, OnInit } from '@angular/core';
import { CarouselImage } from '../models/carousel-image.model';
import { Item } from '../models/item.model';
import { CarouselService } from '../services/carousel.service';
import { CartService } from '../services/cart.service';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //images = [700, 533, 807, 124].map(image => `https://picsum.photos/id/${image}/900/500`);
  images: CarouselImage[] = [];

  itemWordCount = 3;
  // kuupaev = new Date();
  // number = 500000000.99;

  // kooloniga annan tüübi, võrdusmärgiga väärtuse
  items: Item[] = [];


  // erinevate failide ühendus toimub constructor sees
  // private MUUTUJA_NIMI: Fail_Mida_Ühendan
  // Fail_Mida_Ühendan peab olema imporditud,sest
  //    praegune class tahab teada kus ühendatav fail asub
  // hea tava on panna MUUTUJA_NIMI mis on ühendatava 
  //    faili nimetus väikse tähega
  constructor(private cartService: CartService,
    private itemService: ItemService,
    private carouselService: CarouselService) { }

  ngOnInit(): void {
    this.images = this.carouselService.carouselImagesInService;
    console.log("jõudsin home componenti");
    // this.items = this.itemService.itemsInService;
    // võtmise pool ümber teha (vt view-items)
    this.itemService.getItemsFromDatabase().subscribe(itemsFromDb => {
      this.itemService.itemsInService = itemsFromDb;
      this.items = itemsFromDb;
    });
  }

  // saates peab olema see muutuja olemas
  // vastuvõttes peab olema tüüp
  onAddToCart(item: Item) {
    // lisab service-i sisse vasakul pool võrdusmärki
    // paremal pool võrdusmärki annab väärtust
    // võtab brauseri localStorage seest võtme "cart" abil väärtused
    // kartis, et ei saa kätte (on tühi) ja seega pidin tegema "as string"
    // seejärel teen selle stringi (kui sai kätte või ei saanud kätte - mõlemal juhul)
    //        JSON kujule JSON.parse abil
    // kui ta ei saanud korrektsel JSON kujule teha, siis paneb asemel tühja massiivi
    this.cartService.cartItemsInService = JSON.parse(localStorage.getItem("cart") as string) || [];
    this.cartService.cartItemsInService.push(item);
    // panen localStoragesse, annan võtmeks "cart"
    // väärtuse teen "string" kujule, sest localStorage nõuab kõiki väärtuseid string kujul
    localStorage.setItem("cart", JSON.stringify(this.cartService.cartItemsInService));
    this.cartService.cartItemsChanged.next();
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
