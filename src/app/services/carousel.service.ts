import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  carouselImagesInService = [
    { url: "https://picsum.photos/id/700/900/500", header: "Pealkiri1", text: "Tekst1", alt: "Alt1" },
    { url: "https://picsum.photos/id/533/900/500", header: "Pealkiri2", text: "Tekst2", alt: "Alt2" },
    { url: "https://picsum.photos/id/807/900/500", header: "Pealkiri3", text: "Tekst3", alt: "Alt3" },
    { url: "https://picsum.photos/id/124/900/500", header: "Pealkiri4", text: "Tekst4", alt: "Alt4" },
  ]

  constructor() { }
}
