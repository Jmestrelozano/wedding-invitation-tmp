import { Component, OnDestroy } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { CommonModule } from '@angular/common';

// Importar ngx-slick-carousel
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Fancybox } from '@fancyapps/ui';

@Component({
  selector: 'app-portraits',
  standalone: true,
  imports: [LottieComponent, CommonModule, SlickCarouselModule],
  templateUrl: './portraits.component.html',
  styleUrl: './portraits.component.css',
})
export class PortraitsComponent implements OnDestroy {
  images = [
    {
      thumb: 'https://lipsum.app/id/60/200x150',
      full: 'https://lipsum.app/id/60/1600x1200',
    },
    {
      thumb: 'https://lipsum.app/id/61/200x150',
      full: 'https://lipsum.app/id/61/1600x1200',
    },
    {
      thumb: 'https://lipsum.app/id/62/200x150',
      full: 'https://lipsum.app/id/62/1600x1200',
    },
    {
      thumb: 'https://lipsum.app/id/63/200x150',
      full: 'https://lipsum.app/id/63/1600x1200',
    },
    {
      thumb: 'https://lipsum.app/id/64/200x150',
      full: 'https://lipsum.app/id/64/1600x1200',
    },
  ];

  options: AnimationOptions = {
    path: 'assets/animations/camera.json',
    loop: true,
    autoplay: true,
  };

  animationItem: AnimationItem | undefined;

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: true,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  ngAfterViewInit() {
    // Inicializar Fancybox para las imágenes con data-fancybox="gallery"
    Fancybox.bind('[data-fancybox="gallery"]', {
      Thumbs: {},
      // Puedes agregar más opciones aquí
    });
  }

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }

  ngOnDestroy() {
    // aquí limpia si fuera necesario
  }
}
