import { Component } from '@angular/core';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  isSecondInfo: boolean = false
  
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

  secondInfo(){
    this.isSecondInfo = !this.isSecondInfo
  }
}
