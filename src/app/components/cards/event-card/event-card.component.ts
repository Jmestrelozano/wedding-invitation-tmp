import { Component, Input } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css',
})
export class EventCardComponent {
  @Input() titulo!: string;
  @Input() path!: string;

  options!: AnimationOptions;
  animationItem?: AnimationItem;

  ngOnInit(): void {
    this.options = {
      path: this.path,
      loop: true,
      autoplay: true,
    };
  }

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }
}
