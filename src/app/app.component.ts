import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testwork';
  currentRoute: string = ''
  constructor(private activeRoute: ActivatedRoute, private router: Router  ){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) this.currentRoute = event.urlAfterRedirects
    })
  }
}
