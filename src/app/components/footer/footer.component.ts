import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer>
      <span class="copy">© {{ year }} Kodavali Sri Surya Vamsi</span>
      <span class="made">Crafted with <span class="heart">♥</span> &amp; Spring Boot dreams</span>
    </footer>
  `,
  styles: [`
    footer {
      padding: 26px var(--section-px);
      border-top: 1px solid var(--border);
      background: var(--bg);
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      z-index: 1;
    }
    .copy, .made {
      font-size: 0.72rem;
      letter-spacing: 0.06em;
      color: var(--muted);
    }
    .heart { color: var(--accent); }

    @media (max-width: 560px) {
      footer { flex-direction: column; gap: 6px; text-align: center; }
    }
  `],
})
export class FooterComponent {
  year = new Date().getFullYear();
}
