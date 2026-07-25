import { Component, OnInit, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { getProjectBySlug, PORTFOLIO_DATA } from '../../data/portfolio.data';
import { ProjectData } from '../../models/portfolio.model';

@Component({
  selector: 'app-case-study',
  imports: [RouterLink],
  templateUrl: './case-study.html',
  styleUrl: './case-study.css'
})
export class CaseStudyComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  protected project: ProjectData | undefined;
  protected readonly portfolio = PORTFOLIO_DATA;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug') ?? '';
      this.project = getProjectBySlug(slug);
      if (this.project) {
        const pageTitle = `${this.project.title} | Case Study | ${this.portfolio.hero.name}`;
        this.title.setTitle(pageTitle);
        this.meta.updateTag({ name: 'description', content: this.project.summary });
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        this.title.setTitle(`Case Study Not Found | ${this.portfolio.hero.name}`);
      }
    });
  }

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
