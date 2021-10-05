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

// kordamine URL params osas - URL params on tänane teema

// category lõpuni lisamisel (kordamine)
  // - uus component
  // - uus Service, mis omab endas up-to-date seisu
  // - componendis küsin Service-lt uusimat seisu ja samas Componendis saan lisada (push)
  // - add-item Component võtab need category'd kasutusele ja näitab neid Dropdownis (select/option)

// tõlked peale - seadistamist, aga mitte palju koodikirjutamist

// vormi valideerimist - dünaamiline kujundus

// not found page

// tüübid ( muutuja : TÜÜP)