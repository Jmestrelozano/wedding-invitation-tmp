import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoaderHeartComponent } from '../../components/common/loader-heart/loader-heart.component';

@Component({
  standalone: true,
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  imports: [CommonModule, RouterModule, LoaderHeartComponent],
})
export class LayoutComponent implements OnInit {
  @ViewChild('modalContent', { static: false }) modalContent!: ElementRef;

  isLoading = true;
  showWelcomeModal = false;
  showContent = false;
  bounce = false;

  private minTime = 2000; // 2 segundos
  private startTime = 0;

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit(): void {
    // Primera carga: mostrar loader al entrar
    this.startTime = Date.now();
    setTimeout(() => {
      this.isLoading = false;
      this.showWelcomeModal = true;
    }, this.minTime);

    // Luego escucha navegación
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.startTime = Date.now();
        this.isLoading = true;
      }

      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        const elapsed = Date.now() - this.startTime;
        const remaining = this.minTime - elapsed;

        if (remaining > 0) {
          setTimeout(() => {
            this.isLoading = false;
          }, remaining);
        } else {
          this.isLoading = false;
        }
      }
    });
  }

  onAccept(withMusic: boolean) {
    this.showWelcomeModal = false;
    this.showContent = true;
    if (withMusic) {
      this.playBackgroundMusic();
    }
  }

  playBackgroundMusic() {
    const audio = new Audio('assets/music.mp3'); // Asegúrate que este archivo existe
    audio.loop = true;
    audio.play();
  }

  triggerBounce() {
    const el = this.modalContent?.nativeElement;
    if (!el) return;

    this.renderer.removeClass(el, 'animate__pulse');
    this.renderer.removeClass(el, 'animate__slideInDown');
    // forzar reflow para que la animación se reinicie
    void el.offsetWidth;
    this.renderer.addClass(el, 'animate__pulse');
  }
}
