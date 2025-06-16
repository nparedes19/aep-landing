import { Component } from '@angular/core';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

@Component({
  selector: 'app-plants',
  standalone: false,
  templateUrl: './plants.component.html',
  styleUrl: './plants.component.scss'
})
export class PlantsComponent {
  public email: string = 'Feel free to reach out at aep.architecture@gmail.com —'

  ngAfterViewInit() {
    setTimeout(() => {
    this.initSplide();
  }, 50);
  }

  
  initSplide() {
    const splide = new Splide( '.splide', {
        type   : 'loop',
        drag   : 'free',
        focus  : 'center',
        perPage: 4,
        autoScroll: {
          speed: -1,
        },
      } );
      splide.mount({ AutoScroll });
    }
}
