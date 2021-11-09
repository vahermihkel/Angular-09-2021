import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sumOfCart = 0;

  constructor(private translate: TranslateService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartItemsInService = JSON.parse(localStorage.getItem("cart") as string) || [];
    this.sumOfCart = 0;
    this.cartService.cartItemsInService.forEach(cartItem => this.sumOfCart = this.sumOfCart + cartItem.price);

    console.log("jõudsin navbar componenti");
    this.cartService.cartItemsChanged.subscribe(() => {
      this.sumOfCart = 0;
      this.cartService.cartItemsInService.forEach(cartItem => this.sumOfCart = this.sumOfCart + cartItem.price);
    })
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
