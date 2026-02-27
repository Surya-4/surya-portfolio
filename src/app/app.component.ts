import { Component, OnInit, ElementRef, NgZone } from '@angular/core';
import { NavbarComponent }      from './components/navbar/navbar.component';
import { HeroComponent }        from './components/hero/hero.component';
import { AboutComponent }       from './components/about/about.component';
import { SkillsComponent }      from './components/skills/skills.component';
import { ExperienceComponent }  from './components/experience/experience.component';
import { ProjectsComponent }    from './components/projects/projects.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { ContactComponent }     from './components/contact/contact.component';
import { FooterComponent }      from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    AchievementsComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <canvas id="particle-canvas"></canvas>
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-skills></app-skills>
      <app-experience></app-experience>
      <app-projects></app-projects>
      <app-achievements></app-achievements>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    main { position: relative; z-index: 1; }
  `],
})
export class AppComponent implements OnInit {
  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => this.initParticles());
  }

  private initParticles(): void {
    const canvas = document.getElementById('particle-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let W: number, H: number, animId: number;

    interface Particle {
      x: number; y: number;
      vx: number; vy: number;
      r: number; a: number;
    }

    let particles: Particle[] = [];

    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    const newParticle = (): Particle => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.4 + 0.3,
      a: Math.random() * 0.45 + 0.08,
    });

    const init = () => {
      resize();
      particles = [];
      const n = Math.min(100, Math.floor((W * H) / 14000));
      for (let i = 0; i < n; i++) particles.push(newParticle());
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const D = 130;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy;

        if (p.x < 0 || p.x > W || p.y < 0 || p.y > H) {
          Object.assign(p, newParticle());
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79,142,247,${p.a})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < D) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(79,142,247,${0.06 * (1 - dist / D)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', () => {
      cancelAnimationFrame(animId);
      init();
      draw();
    });

    init();
    draw();
  }
}
