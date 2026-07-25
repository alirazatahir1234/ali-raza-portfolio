import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PORTFOLIO_DATA } from './data/portfolio.data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private readonly themeKey = 'portfolio-theme';

  protected readonly portfolio = PORTFOLIO_DATA;
  protected readonly darkMode = signal(true);
  protected readonly year = new Date().getFullYear();

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly title: Title,
    private readonly meta: Meta
  ) {}

  ngOnInit(): void {
    this.setSeoMeta();
    this.initializeTheme();
  }

  protected toggleTheme(): void {
    this.darkMode.update((current) => !current);
    this.applyTheme();
  }

  protected scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private initializeTheme(): void {
    const storedTheme = localStorage.getItem(this.themeKey);
    if (storedTheme === 'light') {
      this.darkMode.set(false);
    }
    this.applyTheme();
  }

  private applyTheme(): void {
    const root = this.document.documentElement;
    root.classList.toggle('dark', this.darkMode());
    localStorage.setItem(this.themeKey, this.darkMode() ? 'dark' : 'light');
  }

  private setSeoMeta(): void {
    const seo = this.portfolio.seo;
    this.title.setTitle(seo.title);
    this.meta.updateTag({ name: 'description', content: seo.description });
    this.meta.updateTag({ property: 'og:title', content: seo.title });
    this.meta.updateTag({ property: 'og:description', content: seo.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:image', content: seo.image });
    this.meta.updateTag({ property: 'og:url', content: seo.url });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: seo.title });
    this.meta.updateTag({ name: 'twitter:description', content: seo.description });
    this.meta.updateTag({ name: 'twitter:image', content: seo.image });
  }
}
