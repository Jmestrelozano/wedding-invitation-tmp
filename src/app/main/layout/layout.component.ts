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
import { SplashMusicComponent } from '../../components/ui/lottie/splash-music/splash-music.component';
import { FooterComponent } from "../../components/common/footer/footer.component";

@Component({
  standalone: true,
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  imports: [
    CommonModule,
    RouterModule,
    LoaderHeartComponent,
    SplashMusicComponent,
    FooterComponent
],
})
export class LayoutComponent implements OnInit {
  @ViewChild('modalContent', { static: false }) modalContent!: ElementRef;
  @ViewChild(SplashMusicComponent) splashComp!: SplashMusicComponent;

  isLoading = true;
  showWelcomeModal = false;
  showContent = false;
  bounce = false;

  private audio: HTMLAudioElement | null = null; // Agregado
  private isMusicPlaying = false;
  private minTime = 2000; // 2 segundos
  private startTime = 0;

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit(): void {
    // Primera carga: mostrar loader al entrar
    this.startTime = Date.now();
    setTimeout(() => {
      this.isLoading = false;
      this.showContent = true;
      this.showWelcomeModal = true;
      this.disableScroll(); // Bloquea scroll cuando se abre el modal
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
    this.enableScroll(); // Restaura scroll

    if (withMusic) {
      this.playBackgroundMusic();
    } else {
      setTimeout(() => {
        this.splashComp.pauseAnimation();
      }, 300); // Pausa Lottie inmediatamente
    }
  }

  disableScroll() {
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  enableScroll() {
    this.renderer.removeStyle(document.body, 'overflow');
  }

  playBackgroundMusic() {
    if (!this.audio) {
      this.audio = new Audio('assets/music/EdSheeran-Perfect(Lyrics).mp3');
      this.audio.loop = true;
      this.audio.volume = 0.3; // Ajusta el volumen según sea necesario
    }

    this.audio.play();
    this.isMusicPlaying = true;
  }

  toggleMusic() {
    if (!this.audio) return;

    if (this.isMusicPlaying) {
      this.audio.pause();
      this.splashComp.pauseAnimation(); // pausa Lottie
    } else {
      this.audio.play();
      this.splashComp.playAnimation(); // reanuda Lottie
    }

    this.isMusicPlaying = !this.isMusicPlaying;
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
