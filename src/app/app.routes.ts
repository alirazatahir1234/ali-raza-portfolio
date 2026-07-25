import { Routes } from '@angular/router';
import { CaseStudyComponent } from './pages/case-study/case-study';
import { HomeComponent } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects/:slug', component: CaseStudyComponent },
  { path: '**', redirectTo: '' }
];
