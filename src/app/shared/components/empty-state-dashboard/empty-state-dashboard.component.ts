import { Component, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Button } from '../../models/button';

@Component({
  selector: 'app-empty-state-dashboard',
  templateUrl: './empty-state-dashboard.component.html',
  styleUrls: ['./empty-state-dashboard.component.css']
})
export class EmptyStateDashboardComponent {

  @Input() title: string | null = null;
  @Input() subtitle: string | null = null;
  @Input() button: Button | null = null;

  constructor(
    public _iconRegistry: MatIconRegistry,
    public _sanitizer: DomSanitizer) {
  }

  registerSvgIcon(button: Button | null) {
    if (button) {
      this._iconRegistry.addSvgIconLiteral(button.iconName, this._sanitizer.bypassSecurityTrustHtml(button.icon));
      return button.iconName;
    }

    return '';
  }
}
