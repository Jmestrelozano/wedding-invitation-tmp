import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-banner-instagram',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './banner-instagram.component.html',
  styleUrl: './banner-instagram.component.css'
})
export class BannerInstagramComponent {
   options: AnimationOptions = {
      path: 'assets/animations/instagram.json', // Ruta al archivo JSON
      loop: true,
      autoplay: true,
    };

  private animationItem: AnimationItem | undefined;

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }
}
