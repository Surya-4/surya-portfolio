import { Injectable, NgZone } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollRevealService {
  private observer!: IntersectionObserver;

  constructor(private ngZone: NgZone) {
    this.ngZone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              this.observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
    });
  }

  observe(el: HTMLElement): void {
    this.ngZone.runOutsideAngular(() => this.observer.observe(el));
  }

  observeAll(els: HTMLElement[]): void {
    els.forEach((el) => this.observe(el));
  }
}
