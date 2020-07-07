import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouteAnimation } from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    RouteAnimation
  ]
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet): object {
    return outlet && outlet.activatedRouteData;
  }
}
