import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.page.html',
  styleUrls: ['./swiper.page.scss'],
})
export class SwiperPage implements OnInit, AfterViewInit {

  swiper_images = ['../../../assets/images/lake.jpg', '../../../assets/images/lake2.jpg'];

  swiperParams1 = {
    slidesPerView: 1,
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 5
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      947: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      1040: {
        slidesPerView: 5,
        spaceBetween: 10
      }
    },
    on: {
      init(){

      }
    }
  };

  swiperParams2 = {
    slidesPerView: 1,
    breakpoints: {
      '@0.75': {
        slidesPerView: 2,
        spaceBetween: 5
      },
      '@1.00': {
        slidesPerView: 3,
        spaceBetween: 20
      },
      '@1.50': {
        slidesPerView: 4,
        spaceBetween: 50
      },
      '@1.75': {
        slidesPerView: 5,
        spaceBetween: 10
      }
    },

  };

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const swiperEl = document.querySelector('swiper-container') as HTMLElement;
  
    if(swiperEl){
      Object.assign(swiperEl, this.swiperParams1);
    }
  }

}
