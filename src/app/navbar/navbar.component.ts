import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    console.log("jõudsin navbar componenti");
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
