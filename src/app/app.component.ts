import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const CHAT_ICON = 
`
<svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
<path d="M0 8C0 3.58172 3.58172 0 8 0H25.5C39.5833 0 51 11.4167 51 25.5C51 39.5833 39.5833 51 25.5 51C11.4167 51 0 39.5833 0 25.5V8Z" fill="#4CBFB7"/>
<path d="M16.5 24.3334C16.4954 26.0932 16.9066 27.8292 17.7 29.4C18.6408 31.2824 20.087 32.8656 21.8767 33.9724C23.6665 35.0792 25.729 35.6659 27.8333 35.6667C29.5932 35.6713 31.3292 35.2601 32.9 34.4667L40.5 37L37.9667 29.4C38.7601 27.8292 39.1713 26.0932 39.1667 24.3334C39.1659 22.229 38.5792 20.1665 37.4724 18.3768C36.3656 16.587 34.7823 15.1408 32.9 14.2C31.3292 13.4066 29.5932 12.9954 27.8333 13H27.1667C24.3875 13.1534 21.7626 14.3264 19.7945 16.2945C17.8263 18.2626 16.6533 20.8876 16.5 23.6667V24.3334Z" fill="#ADE2DE" stroke="#152323" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M32.375 22.8959C32.3792 24.4907 32.0065 26.064 31.2875 27.4875C30.4349 29.1934 29.1243 30.6282 27.5023 31.6312C25.8804 32.6343 24.0112 33.166 22.1042 33.1667C20.5093 33.1709 18.9361 32.7982 17.5125 32.0792L10.625 34.375L12.9208 27.4875C12.2018 26.064 11.8292 24.4907 11.8333 22.8959C11.8341 20.9888 12.3657 19.1196 13.3688 17.4977C14.3718 15.8758 15.8066 14.5651 17.5125 13.7125C18.9361 12.9935 20.5093 12.6209 22.1042 12.625H22.7083C25.2269 12.764 27.6058 13.827 29.3894 15.6107C31.173 17.3943 32.2361 19.7731 32.375 22.2917V22.8959Z" fill="#4CBFB7" stroke="#152323" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gallery-ui-preview-web';

  constructor(
    _iconRegistry: MatIconRegistry,
    _sanitizer: DomSanitizer) {
    _iconRegistry.addSvgIconLiteral('chat_icon', _sanitizer.bypassSecurityTrustHtml(CHAT_ICON));
  }

  getWhatsAppChat() {
    return ``;
  }
}