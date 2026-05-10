import { Component, Input, OnInit } from '@angular/core';
import { Carousel } from '../../models/carousel';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const CALENDAR_ICON =
  `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M15.8333 3.33203H4.16667C3.24619 3.33203 2.5 4.07822 2.5 4.9987V16.6654C2.5 17.5858 3.24619 18.332 4.16667 18.332H15.8333C16.7538 18.332 17.5 17.5858 17.5 16.6654V4.9987C17.5 4.07822 16.7538 3.33203 15.8333 3.33203Z" stroke="#505050" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.332 1.66797V5.0013" stroke="#505050" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66797 1.66797V5.0013" stroke="#505050" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.5 8.33203H17.5" stroke="#505050" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const MAP_PIN_ICON =
  `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<g clip-path="url(#clip0_2274_4931)">
<path d="M17.5 8.33203C17.5 14.1654 10 19.1654 10 19.1654C10 19.1654 2.5 14.1654 2.5 8.33203C2.5 6.34291 3.29018 4.43525 4.6967 3.02873C6.10322 1.62221 8.01088 0.832031 10 0.832031C11.9891 0.832031 13.8968 1.62221 15.3033 3.02873C16.7098 4.43525 17.5 6.34291 17.5 8.33203Z" stroke="#505050" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 10.832C11.3807 10.832 12.5 9.71274 12.5 8.33203C12.5 6.95132 11.3807 5.83203 10 5.83203C8.61929 5.83203 7.5 6.95132 7.5 8.33203C7.5 9.71274 8.61929 10.832 10 10.832Z" stroke="#505050" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2274_4931">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() carousel: Carousel[] | null = null;
  currentCarousel: Carousel | null = null;
  currentCarouselIndex: number = 0;

  constructor(
    _iconRegistry: MatIconRegistry,
    _sanitizer: DomSanitizer) {
    _iconRegistry.addSvgIconLiteral('calendar_icon', _sanitizer.bypassSecurityTrustHtml(CALENDAR_ICON));
    _iconRegistry.addSvgIconLiteral('map_pin_icon', _sanitizer.bypassSecurityTrustHtml(MAP_PIN_ICON));
  }

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    if (this.carousel) {
      this.currentCarousel = this.carousel[this.currentCarouselIndex];

      setInterval(() => {
        if (this.currentCarouselIndex < this.carousel!.length - 1) {
          this.currentCarouselIndex++;
        }
        else {
          this.currentCarouselIndex = 0
        }

        this.currentCarousel = this.carousel![this.currentCarouselIndex];
      }, 5000);
    }
  }

  select(index: number) {
    if(this.carousel) {
      this.currentCarouselIndex = index;
      this.currentCarousel = this.carousel[index];
    }
  }
}
