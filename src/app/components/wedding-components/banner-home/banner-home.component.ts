import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { Component } from '@angular/core';
import player, { AnimationItem } from 'lottie-web';
import { TitleCoupleComponent } from "../../ui/title-couple/title-couple.component";

export function playerFactory() {
  return player;
}
@Component({
  selector: 'app-banner-home',
  standalone: true,
  imports: [LottieComponent, TitleCoupleComponent],
  templateUrl: './banner-home.component.html',
  styleUrl: './banner-home.component.css'
})
export class BannerHomeComponent {
  private animationItem: AnimationItem | undefined;

  options: AnimationOptions = {
    path: 'assets/animations/arrow_continue.json', // Ruta al archivo JSON
    loop: true,
    autoplay: true,
  };

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }
}
