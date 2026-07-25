import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { getFeaturedProjects, PORTFOLIO_DATA } from '../../data/portfolio.data';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  protected readonly portfolio = PORTFOLIO_DATA;
  protected readonly featuredProjects = getFeaturedProjects();

  protected onImageError(event: Event): void {
    const target = event.target as HTMLImageElement | null;
    if (!target) {
      return;
    }
    if (!target.src.endsWith('/projects/default-project.svg')) {
      target.src = '/projects/default-project.svg';
    }
  }
}
