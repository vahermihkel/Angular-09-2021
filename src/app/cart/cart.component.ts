import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // MUUTUJA -- string interpolation {{ }}
  // LISTI -- tsükli abil HTML-s (Loops)
  // OBJEKTI -- võtme kaudu (mis ma ise võtme nimeks panen) 
  // LISTI OBJEKTIDEST -- kuvan tsükli abil, mille sees kasutan objekti võtit

  // võimalikud väärtuse tüübid:
  // string ehk sõnaline ---- "midagi" jutumärkides
  // number ehk numbriline ---- 0   numbrina
  // boolean ehk kahendväärtus ---- true   true või false
  // array ehk massiiv ---- ["","",""] kandiliste sulgude vahel komaga eraldatud elemendid
  // object ehk objekt ---- {võti: "väärtus", võti2: "väärtus2"} loogeliste sulgude vahel võti-väärtus paarid
  title = "Ese1";
  title2 = "Ese2"
  price = 10;
  price2 = 20;
  isActive = true;
  isActive2 = false;

  titles = ["Ese1", "Ese2"];
  prices = [10, 20];
  actives = [true, false];

  item = { title: "Ese1", price: 10, isActive: true };
  item2 = { title: "Ese2", price: 20, isActive: false };

  itemList = [{ title: "Ese1", price: 10, isActive: true }, { title: "Ese2", price: 20, isActive: false }];

  constructor() { }

  ngOnInit(): void {
    console.log("jõudsin cart componenti");
  }

}
