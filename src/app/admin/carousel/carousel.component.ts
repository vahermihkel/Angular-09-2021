import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarouselImage } from 'src/app/models/carousel-image.model';
import { CarouselService } from 'src/app/services/carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  // siia muutuja
  carouselImages: CarouselImage[] = [];

  // ühendus Service-ga
  constructor(private carouselService: CarouselService) { }

  // võta Service seest väärtused ülemisse muutujasse
  ngOnInit(): void {
    this.carouselImages = this.carouselService.carouselImagesInService;
  }

  // tehke HTMLi ngFor näidates välja kõiki 4 välja

  // kustutamise nupp HTMLi

  // funktsioon mis kustutab Service-st

  // view.items.ts ja view.items.html sees on kogu loogika

  onRemoveImage(image: CarouselImage) {
    let index = this.carouselService.carouselImagesInService.indexOf(image);
    this.carouselService.carouselImagesInService.splice(index, 1);
  }

  onSubmit(addImageForm: NgForm) {
    this.carouselService.carouselImagesInService.push(addImageForm.value);
  }

}
