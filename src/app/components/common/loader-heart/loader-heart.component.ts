import { CommonModule } from '@angular/common';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { Component } from '@angular/core';
import player, { AnimationItem } from 'lottie-web';

export function playerFactory() {
  return player;
}

@Component({
  selector: 'app-loader-heart',
  standalone: true,
  imports: [CommonModule, LottieComponent],
  templateUrl: './loader-heart.component.html',
  styleUrls: ['./loader-heart.component.css'], // opcional
})
export class LoaderHeartComponent {
  private animationItem: AnimationItem | undefined;

  options: AnimationOptions = {
    path: 'assets/animations/heart.json', // Ruta al archivo JSON
    loop: true,
    autoplay: true,
  };

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }
}
