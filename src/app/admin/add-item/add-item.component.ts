import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  onSubmit(addItemForm: NgForm) {
    if ( addItemForm.valid ) { 
      console.log(addItemForm);
      this.itemService.itemsInService.push(addItemForm.value);
    }
  }
}
