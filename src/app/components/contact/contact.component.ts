import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealService } from '../../services/scroll-reveal.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements AfterViewInit {
  @ViewChildren('revealEl') revealEls!: QueryList<ElementRef>;

  readonly links = [
    { icon: '✉', label: 'suryavamsi04@gmail.com', href: 'mailto:suryavamsi04@gmail.com' },
    { icon: '⌥', label: 'GitHub',   href: 'https://github.com/Surya-4',            external: true },
    { icon: '◈', label: 'LinkedIn', href: 'https://linkedin.com/in/kodavali-sri-surya-vamsi',        external: true },
  ];

  constructor(private reveal: ScrollRevealService) {}

  ngAfterViewInit(): void {
    this.reveal.observeAll(this.revealEls.map(r => r.nativeElement));
  }
}
