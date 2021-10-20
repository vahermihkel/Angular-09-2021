import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.items = this.itemService.itemsInService;
  }

  onRemoveItem(item: Item) {
    let index = this.itemService.itemsInService.indexOf(item);
    this.itemService.itemsInService.splice(index, 1);
    this.items = this.itemService.itemsInService;
  }
  // nupp "kustuta ese" - peale klikkides kutsub välja TS-s funktsiooni ja 
  // saadab kaasa eseme

  // TS-i sees võtab eseme vastu, otsib üles indeksi ja 
  // kustutab itemService seest selle indeksiga eseme

  onAddItemsToDatabase() {
    this.itemService.addItemsToDatabase().subscribe();
  }

}
