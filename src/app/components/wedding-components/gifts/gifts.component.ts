import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-gifts',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './gifts.component.html',
  styleUrl: './gifts.component.css',
})
export class GiftsComponent {
  private animationItem: AnimationItem | undefined;

  options: AnimationOptions = {
    path: 'assets/animations/gift.json', // Ruta al archivo JSON
    loop: true,
    autoplay: true,
  };

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }
}
