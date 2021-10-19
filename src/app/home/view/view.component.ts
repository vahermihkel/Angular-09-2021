import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { CartService } from 'src/app/services/cart.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id!: string;
  item!: Item; // { imgSrc: "https://i.ebayimg.com/", title: "1005", price: 3.75, category: "comics", isActive: true }

  constructor(private route: ActivatedRoute,
    private itemService: ItemService,
    private cartService: CartService) { }

  ngOnInit(): void {
    let urlId = this.route.snapshot.paramMap.get("itemId");
    if (urlId) {
      this.id = urlId;
    }

    let itemFound = this.itemService.itemsInService.find(item => item.title == this.id);
    if (itemFound) {
      this.item = itemFound;
    }
                    // [{title:"Ese1"},{title:"Ese2"},{title:"Ese3"}].find();

                    // .find({title:"Ese1"} => item.title == this.id)
                    // .find({title:"Ese2"} => item.title == this.id)
                    // .find({title:"Ese3"} => item.title == this.id)

                    // .find({title:"Ese1"} => "Ese1" == "itemId kaudu välja URL-st")
                    // .find({title:"Ese2"} => "Ese2" == "itemId kaudu välja URL-st")
                    // .find({title:"Ese3"} => "Ese3" == "itemId kaudu välja URL-st")
  }

  onAddToCart(item: Item) {
    this.cartService.cartItemsInService.push(item);
  }
}
