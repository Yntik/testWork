import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testwork';
  currentRoute = '';
  constructor(private activeRoute: ActivatedRoute, private router: Router) {
    this.router.events.subscribe((event): void => {
      if (event instanceof NavigationEnd) { this.currentRoute = event.urlAfterRedirects; }
    });
  }
}
