import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'useless-site';

  private isBrowser: boolean;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  @HostListener('document:contextmenu', ['$event'])
  onRightClick(event: MouseEvent): void {
    if (this.isBrowser) {
      event.preventDefault();
    }
  }
}
