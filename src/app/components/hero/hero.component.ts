import { Component, OnInit, ElementRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { ScrollRevealService } from '../../services/scroll-reveal.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements AfterViewInit {
  @ViewChildren('revealEl') revealEls!: QueryList<ElementRef>;

  constructor(
    public data: PortfolioDataService,
    private reveal: ScrollRevealService,
  ) {}

  ngAfterViewInit(): void {
    this.reveal.observeAll(this.revealEls.map(r => r.nativeElement));
  }

  scrollTo(href: string, e: Event): void {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }
}
