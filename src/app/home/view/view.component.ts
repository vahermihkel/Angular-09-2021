import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id!: any;
  item!: any;
  // kuvage HTML-s
  // te ei pea kasutama ngFori, sest ta ei ole massiiv, ta on üksik objekt sealt
  // kasutage ngFor sisu väljakuvamiseks

  // home.component.html-s
  // view-items.component.html-s
  // cart.component.html-s

  // seal me oleme kasutanud ngFori
  // siin pole vajadust

  constructor(private route: ActivatedRoute,
    private itemService: ItemService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("itemId");
    this.item = this.itemService.itemsInService.find(item => item.title == this.id);
  }

  onAddToCart(item: any) {
    this.cartService.cartItemsInService.push(item);
  }
}
