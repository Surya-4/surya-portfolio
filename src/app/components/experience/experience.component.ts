import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { ScrollRevealService } from '../../services/scroll-reveal.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements AfterViewInit {
  @ViewChildren('revealEl') revealEls!: QueryList<ElementRef>;

  constructor(
    public data: PortfolioDataService,
    private reveal: ScrollRevealService,
  ) {}

  ngAfterViewInit(): void {
    this.reveal.observeAll(this.revealEls.map(r => r.nativeElement));
  }
}
