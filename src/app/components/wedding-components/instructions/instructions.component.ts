import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { LottieComponent } from 'ngx-lottie';

interface CardInfo {
  title: string;
  description: string;
  label: string;
  path: string;
}

@Component({
  selector: 'app-instructions',
  standalone: true,
  imports: [LottieComponent, CommonModule],
  templateUrl: './instructions.component.html',
  styleUrl: './instructions.component.css',
})
export class InstructionsComponent {
  cards: CardInfo[] = [
    {
      title: 'Música',
      description: 'Una orientación para<br />tu vestuario',
      path: 'assets/animations/sounds.json',
      label: 'Sugerir canción'
    },
    {
      title: 'Vestuario',
      description: 'Una orientación para<br />tu vestuario',
      path: 'assets/animations/dress.json',
      label: 'Ver más'
    },
    {
      title: 'Tips y Notas',
      description: 'Una orientación para<br />tu vestuario',
      path: 'assets/animations/tips.json',
      label: 'Información',
    },
  ];

  private animationItem: AnimationItem | undefined;

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }
}
