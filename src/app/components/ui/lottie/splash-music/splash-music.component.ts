import { CommonModule } from '@angular/common';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { Component, EventEmitter, Output } from '@angular/core';
import player, { AnimationItem } from 'lottie-web';

export function playerFactory() {
  return player;
}

@Component({
  selector: 'app-splash-music',
  standalone: true,
  imports: [CommonModule, LottieComponent],
  templateUrl: './splash-music.component.html',
})
export class SplashMusicComponent {
  @Output() iconClicked = new EventEmitter<void>();
  private animationItem: AnimationItem | undefined;
  

  options: AnimationOptions = {
    path: 'assets/animations/music.json', // Ruta al archivo JSON
    loop: true,
    autoplay: true,
  };

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }

  onClick(): void {
    this.iconClicked.emit();
  }

  pauseAnimation(): void {
    this.animationItem?.pause();
  }

  playAnimation(): void {
    this.animationItem?.play();
  }
}
