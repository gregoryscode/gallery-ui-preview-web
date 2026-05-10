import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { WelcomeDialogComponent } from 'src/app/shared/components/welcome-dialog/welcome-dialog.component';
import { Button } from 'src/app/shared/models/button';
import { Carousel } from 'src/app/shared/models/carousel';
import { Gallery } from 'src/app/shared/models/gallery';
import { Note } from 'src/app/shared/models/note';
import { Sale } from 'src/app/shared/models/sale';
import { Wallet } from 'src/app/shared/models/wallet';

const NEW_GALLERY_ICON =
  `
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
<path d="M10 1.33333C10.3682 1.33333 10.6667 1.63181 10.6667 2C10.6667 2.36819 10.3682 2.66667 10 2.66667H8.66667C8.29848 2.66667 8 2.36819 8 2C8 1.63181 8.29848 1.33333 8.66667 1.33333H10ZM3 1.33333C3.55228 1.33333 4 1.78105 4 2.33333V4.33333C4 4.88562 3.55228 5.33333 3 5.33333H2.33333C1.78105 5.33333 1.33333 4.88562 1.33333 4.33333V2.33333C1.33333 1.78105 1.78105 1.33333 2.33333 1.33333H3ZM9.66667 6.66667C10.219 6.66667 10.6667 7.11438 10.6667 7.66667V9.66667C10.6667 10.219 10.219 10.6667 9.66667 10.6667H9C8.44772 10.6667 8 10.219 8 9.66667V7.66667C8 7.11438 8.44772 6.66667 9 6.66667H9.66667ZM3.33333 9.33333C3.70152 9.33333 4 9.63181 4 10C4 10.3682 3.70152 10.6667 3.33333 10.6667H2C1.63181 10.6667 1.33333 10.3682 1.33333 10C1.33333 9.63181 1.63181 9.33333 2 9.33333H3.33333ZM12 1C12 0.447715 11.5523 0 11 0H7.66667C7.11438 0 6.66667 0.447715 6.66667 1V3C6.66667 3.55228 7.11438 4 7.66667 4H11C11.5523 4 12 3.55228 12 3V1ZM5.33333 0.999999C5.33333 0.447714 4.88562 0 4.33333 0H1C0.447716 0 0 0.447715 0 1V5.66667C0 6.21895 0.447715 6.66667 1 6.66667H4.33333C4.88562 6.66667 5.33333 6.21895 5.33333 5.66667V0.999999ZM12 6.33333C12 5.78105 11.5523 5.33333 11 5.33333H7.66667C7.11438 5.33333 6.66667 5.78105 6.66667 6.33333V11C6.66667 11.5523 7.11438 12 7.66667 12H11C11.5523 12 12 11.5523 12 11V6.33333ZM5.33333 9C5.33333 8.44772 4.88562 8 4.33333 8H1C0.447716 8 0 8.44772 0 9V11C0 11.5523 0.447715 12 1 12H4.33333C4.88562 12 5.33333 11.5523 5.33333 11V9Z" fill="#152323"/>
</svg>
`;

const CART_ICON =
  `
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
  <g clip-path="url(#clip0_2226_17707)">
  <path d="M5.25 11C5.52614 11 5.75 10.7761 5.75 10.5C5.75 10.2239 5.52614 10 5.25 10C4.97386 10 4.75 10.2239 4.75 10.5C4.75 10.7761 4.97386 11 5.25 11Z" fill="#C8EBE9" stroke="#152323" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.75 11C11.0261 11 11.25 10.7761 11.25 10.5C11.25 10.2239 11.0261 10 10.75 10C10.4739 10 10.25 10.2239 10.25 10.5C10.25 10.7761 10.4739 11 10.75 11Z" fill="#C8EBE9" stroke="#152323" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3.75 3.25L10 7.75H11.25H4.75L3.75 3.25Z" fill="#C8EBE9"/>
  <path d="M1.25 0.5H3.25L4.59 7.195C4.63572 7.4252 4.76095 7.63198 4.94377 7.77915C5.12659 7.92632 5.35535 8.0045 5.59 8H10.45C10.6847 8.0045 10.9134 7.92632 11.0962 7.77915C11.279 7.63198 11.4043 7.4252 11.45 7.195L12.25 3H3.75" stroke="#152323" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
  <clipPath id="clip0_2226_17707">
  <rect width="12" height="12" fill="white" transform="translate(0.75)"/>
  </clipPath>
  </defs>
  </svg>
`;

const MONEY_ICON =
  `
 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
<g clip-path="url(#clip0_2226_1487)">
<path d="M3.26562 4.51953C3.26562 3.6911 3.9372 3.01953 4.76562 3.01953C5.59405 3.01953 6.26562 3.6911 6.26562 4.51953V5.01953C6.26562 5.84796 5.59405 6.51953 4.76562 6.51953C3.9372 6.51953 3.26562 5.84796 3.26562 5.01953V4.51953Z" fill="#C8EBE9"/>
<path d="M5.76562 8.01953C5.76562 7.1911 6.4372 6.51953 7.26562 6.51953C8.09405 6.51953 8.76562 7.1911 8.76562 8.01953V8.51953C8.76562 9.34796 8.09405 10.0195 7.26562 10.0195C6.4372 10.0195 5.76562 9.34796 5.76562 8.51953V8.01953Z" fill="#C8EBE9"/>
<path d="M6 1V12" stroke="#152323" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 3H4.75C4.28587 3 3.84075 3.18437 3.51256 3.51256C3.18437 3.84075 3 4.28587 3 4.75C3 5.21413 3.18437 5.65925 3.51256 5.98744C3.84075 6.31563 4.28587 6.5 4.75 6.5H7.25C7.71413 6.5 8.15925 6.68437 8.48744 7.01256C8.81563 7.34075 9 7.78587 9 8.25C9 8.71413 8.81563 9.15925 8.48744 9.48744C8.15925 9.81563 7.71413 10 7.25 10H3" stroke="#152323" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2226_1487">
<rect width="12" height="12" fill="white" transform="translate(0 0.5)"/>
</clipPath>
</defs>
</svg>
 `;

 const INFO_ICON =
 `
 <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
 <g clip-path="url(#clip0_2424_18652)">
 <path d="M6.5 11C9.26142 11 11.5 8.76142 11.5 6C11.5 3.23858 9.26142 1 6.5 1C3.73858 1 1.5 3.23858 1.5 6C1.5 8.76142 3.73858 11 6.5 11Z" stroke="#152323" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
 <path d="M6.5 8V6" stroke="#152323" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
 <path d="M6.5 4H6.505" stroke="#152323" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
 </g>
 <defs>
 <clipPath id="clip0_2424_18652">
 <rect width="12" height="12" fill="white" transform="translate(0.5)"/>
 </clipPath>
 </defs>
 </svg>
`;

const GO_PRIME_ICON =
`
<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
<path d="M6 2L8.25 4.75L10.5 5L10 9.25L6 10V2Z" fill="#4CBFB7"/>
<path d="M1 4L1.652 4.5215C1.87914 4.70318 2.14318 4.83312 2.4257 4.90228C2.70822 4.97144 3.00242 4.97814 3.2878 4.92192C3.57317 4.8657 3.84285 4.74792 4.07803 4.57677C4.31321 4.40563 4.50823 4.18525 4.6495 3.931L6 1.5L7.3505 3.931C7.4918 4.18529 7.68688 4.40569 7.92212 4.57684C8.15736 4.74799 8.42711 4.86575 8.71254 4.92193C8.99798 4.9781 9.29224 4.97133 9.57479 4.90208C9.85734 4.83284 10.1214 4.70279 10.3485 4.521L11 4L10.123 8.385C10.0847 8.57637 10.0032 8.75646 9.88478 8.91157C9.76633 9.06667 9.61404 9.19268 9.4395 9.28C8.37158 9.814 7.19399 10.092 6 10.092C4.80601 10.092 3.62842 9.814 2.5605 9.28C2.38596 9.19268 2.23367 9.06667 2.11522 8.91157C1.99677 8.75646 1.91529 8.57637 1.877 8.385L1 4Z" stroke="#2A6965" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cartIcon: Button | null = null;
  carousel: Carousel[] | null = null;
  currentCarouselPicture: string | null = null;
  currentCarouselPictureIndex: number = 0;
  galleries: Gallery[] | null = null;
  sales: Sale[] | null = null;
  notes: Note[] | null = null;
  wallet: Wallet | null = null;
  blur: boolean = false;

  constructor(
    private _dialog: MatDialog,
    _iconRegistry: MatIconRegistry,
    _sanitizer: DomSanitizer) {
    _iconRegistry.addSvgIconLiteral('new_gallery_icon', _sanitizer.bypassSecurityTrustHtml(NEW_GALLERY_ICON));
    _iconRegistry.addSvgIconLiteral('cart_icon', _sanitizer.bypassSecurityTrustHtml(CART_ICON));
    _iconRegistry.addSvgIconLiteral('money_icon', _sanitizer.bypassSecurityTrustHtml(MONEY_ICON));
    _iconRegistry.addSvgIconLiteral('info_icon', _sanitizer.bypassSecurityTrustHtml(INFO_ICON));
    _iconRegistry.addSvgIconLiteral('go_prime_icon', _sanitizer.bypassSecurityTrustHtml(GO_PRIME_ICON));
  }

  ngOnInit() {
    this.setupCarousel();
    this.openWelcomeDialog();
  }

  getCreateGalleryButton(): Button {
    let button = new Button();
    button.text = 'Criar galeria';
    button.icon = NEW_GALLERY_ICON;
    button.iconName = 'new_gallery_icon';
    return button;
  }

  getSetupStoreButton(): Button {
    let button = new Button();
    button.text = 'Configurar loja';
    button.icon = CART_ICON;
    button.iconName = 'cart_icon';
    return button;
  }

  getEnableAccountButton(): Button {
    let button = new Button();
    button.text = 'Ativar conta';
    button.icon = MONEY_ICON;
    button.iconName = 'money_icon';
    return button;
  }

  setupCarousel() {
    this.carousel = [
      {
        image: '/assets/img/img_carousel1.png',
        title: 'Cobrança na fotografia: 7 principais dicas',
        date: '18 de março, 2024',
        place: 'Go Image Academy | Online',
        buttonText: 'Fazer inscrição',
        buttonLink: 'https://www.goimage.com.br/',
        buttonEnabled: true
      },
      {
        image: '/assets/img/img_carousel2.png',
        title: 'Investindo da maneira certa',
        date: '05 de junho, 2024',
        place: 'Go Image Academy | Online',
        buttonText: 'Fazer inscrição',
        buttonLink: 'https://www.goimage.com.br/',
        buttonEnabled: true
      },
      {
        image: '/assets/img/img_carousel3.png',
        title: 'Negócios: estratégias de crescimento',
        date: '16 de julho, 2024',
        place: 'Go Image | On-site',
        buttonText: 'Em breve',
        buttonLink: 'https://www.goimage.com.br/',
        buttonEnabled: false
      }
    ];
  }

  openWelcomeDialog() {
    const dialogRef = this._dialog.open(WelcomeDialogComponent, {
      width: '750px',
      data:
      {
        title: 'Remover favorito'
      },
      autoFocus: false,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }

  loadData() {
    this.loadGalleries();
    this.loadSales();
    this.loadNotes();
    this.loadWallet();
  }

  loadGalleries() {
    this.galleries = [
      {
        id: '42854a9f-f99a-47c9-b95f-d1c589073a58',
        name: 'Luna Gabriela the Cat',
        status: 'Prévia',
        date: '16 de fevereiro, 2024',
        imageCount: 0,
        downloadCount: 0,
        likeCount: 0,
        noteCount: 0,
        image: '/assets/img/img_cover3.jpg'
      },
      {
        id: '0e6d2ec2-618c-4682-a7c2-9284449b01c0',
        name: 'Casamento Cecília e Carlitos',
        status: 'Publicada',
        date: '02 de abril, 2024',
        imageCount: 142,
        downloadCount: 3,
        likeCount: 72,
        noteCount: 26,
        image: '/assets/img/img_cover2.jpg'
      },
      {
        id: 'fcecb89e-b783-4c5d-9b41-d8ae9893e6d4',
        name: 'Newborn do João Pedro',
        status: 'Publicada',
        date: '12 de dezembro, 2023',
        imageCount: 56,
        downloadCount: 2,
        likeCount: 36,
        noteCount: 18,
        image: '/assets/img/img_cover1.jpg'
      },
      {
        id: '4dd3ee80-cb03-4347-b47e-6df0f2aa6dda',
        name: 'Luna Gabriela the Cat',
        status: 'Publicada',
        date: '16 de julho, 2024',
        imageCount: 16,
        downloadCount: 14,
        likeCount: 33,
        noteCount: 2,
        image: '/assets/img/img_cover3.jpg'
      }
    ]
  }

  loadSales() {
    this.sales = [
      {
        id: 'e742d580-dbe0-4827-a5c6-6dad62edc99f',
        description: 'Foto Imã',
        project: 'Newborn do João Pedro',
        date: '16/12/2023',
        price: 18.45,
        image: '/assets/img/img_cover1.jpg'
      },
      {
        id: 'e6163404-6ea4-4471-8c75-0644860dc856',
        description: 'Foto Digital',
        project: 'Casamento Cecília e Carlitos',
        date: '26/04/2024',
        price: 35,
        image: '/assets/img/img_cover2.jpg'
      }
    ]
  }

  loadWallet() {
    this.wallet = {
      balance: 642.76,
      receiving: 72.47,
      processing: 301.35,
    }
  }

  loadNotes() {
    this.notes = [
      {
        id: '062b31ff-64b1-4b72-8418-5cb7929b8478',
        customer: 'Karoline Burgues',
        project: 'Newborn do João Pedro',
        date: '08/12/2023',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: '/assets/img/img_cover1.jpg'
      },
      {
        id: 'cac45cf5-1acd-4a4f-a6f9-b62fb0ba99be',
        customer: 'Karoline Burgues',
        project: 'Newborn do João Pedro',
        date: '21/12/2023',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: '/assets/img/img_cover1.jpg'
      },
      {
        id: 'a84dde04-c493-4bce-9ef8-32c0dd6fa373',
        customer: 'Carlitos Menestrel',
        project: 'Casamento Cecília e Carlitos',
        date: '07/02/2024',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: '/assets/img/img_cover2.jpg'
      },
      {
        id: 'a50ee7e8-f07b-430c-ba67-0431b177dc01',
        customer: 'Carlitos Menestrel',
        project: 'Casamento Cecília e Carlitos',
        date: '14/02/2024',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: '/assets/img/img_cover2.jpg'
      }
    ]
  }

  toCurrency(value: number) {
    return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' });
  }
}
