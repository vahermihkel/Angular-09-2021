import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

// Service-i componenti lisamine, et saaks andmeid Componentide vahel liigutada
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    console.log("jõudsin cart componenti");
    this.cartItems = this.cartService.cartItemsInService;
  }

  // :{ title: string, price: number, imgSrc: string, category: string; isActive: boolean }
  onRemoveFromCart(cartItem: any) {
    let index = this.cartItems.indexOf(cartItem);
    this.cartItems.splice(index, 1);
  }

  onEmptyCart() {
    this.cartItems = [];
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
