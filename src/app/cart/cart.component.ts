import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  sumOfCart = 0;

  // Service-i Componenti lisamine, et saaks andmeid Componentide vahel liigutada
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    console.log("jõudsin cart componenti");
    this.cartItems = this.cartService.cartItemsInService;
    // = this. ---- näitab kõik mis on siin klassi sees
    // = this.cartService. ---- näitab kõik mis on cartService sees
    // = this.cartService.cartItemsInService
    // (kui olen 2 korda vajutanud esimesele esemele .push() )
    // = [{title:"Ese1", price: "123",...},{title:"Ese1", price: "123",...}]
    this.sumOfCart = 0;
    this.cartItems.forEach(cartItem => this.sumOfCart = this.sumOfCart + cartItem.price);
  }

  onEmptyCart() {
    this.cartService.cartItemsInService = [];
    this.cartItems = this.cartService.cartItemsInService;
    this.sumOfCart = 0;
    // a) [{title:"Ese1", price: "123",...},{title:"Ese2", price: "321",...}, {t:"E", price: "10"}].forEach()
    // b) 1. this.cartItems.forEach({title:"Ese1", price: "123",...}=>{});
    // b) 2. this.cartItems.forEach({title:"Ese2", price: "321",...}=>{});
    // b) 3. this.cartItems.forEach({t:"E", price: "10"}=>{});
    // c) 1. this.cartItems.forEach(cartItem=>  123   =  0 + 123
    // c) 2. this.cartItems.forEach(cartItem=>  454   = 123 + 321
    // c) 3. this.cartItems.forEach(cartItem=>  464   = 454 + 10
    this.cartItems.forEach(cartItem => this.sumOfCart = this.sumOfCart + cartItem.price);
    // let muutuja of array
    // siin div sees kuvatakse nii mitu korda
    // array.forEach(muutuja=>)
    // minnakse nii mitu korda funktsiooni tegema
    // ---- nii mitu korda kui on elemente massiivis
  }

  // :{ title: string, price: number, imgSrc: string, category: string; isActive: boolean }
  onRemoveFromCart(cartItem: any) {
    let index = this.cartService.cartItemsInService.indexOf(cartItem);
    this.cartService.cartItemsInService.splice(index, 1);
    this.cartItems = this.cartService.cartItemsInService;

    this.sumOfCart = 0;
    this.cartItems.forEach(cartItem => this.sumOfCart = this.sumOfCart + cartItem.price);
  }


  // ostukorvi kogusumma - forEach abil
  // js forEach sum object values
}


// onEmptyCart() funktsioon peab olema TS-s
// jälgige, et oleks klassi loogeliste sulgude sees
// jälgige, et kogemata ei läheks mõne teise funktsiooni sisse
// () {}  tavalised sulud ja loogelised sulud
// loogeliste sulgude sisse vaadake mis JavaScriptis tühjendamiseks
//      kasutasime ja tehke ka siin

// let on lokaalne muutuja mis on nähtav tema loogeliste sulgude sees
// this. ehk ülemine klassimuutuja on kasutatav HTMLs ja mitmes funktsioonis
