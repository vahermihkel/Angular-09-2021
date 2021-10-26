import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  kasutajad: any[] = [];

  constructor(private kasutajaService: UserService) { }

  ngOnInit(): void {
    this.kasutajad = this.kasutajaService.kasutajad;
  }

  kustuta(kasutaja: any) {
    console.log(kasutaja);
    let j2rjekorraNumber = this.kasutajaService.kasutajad.indexOf(kasutaja);
    console.log(j2rjekorraNumber);
    this.kasutajaService.kasutajad.splice(j2rjekorraNumber, 1);
  }

}
