import { Component } from '@angular/core';
import { slideInAnimation } from './animations/animation';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'project-carousel';

  animationRoute = (outlet: RouterOutlet) => {
    if (outlet.isActivated) return outlet.activatedRouteData['animation']
  }
}