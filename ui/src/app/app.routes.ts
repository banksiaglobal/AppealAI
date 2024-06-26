import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {
    path: 'welcome',
    loadComponent: () =>
      import('./pages/welcome/welcome.component').then(
        (m) => m.WelcomeComponent
      ),
    title: 'Welcome',
  },
  {
    path: 'start',
    loadComponent: () =>
      import('./pages/start-page/start-page/start-page.component').then(
        (m) => m.StartPageComponent
      ),
    title: 'Start',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about-page/about-page.component').then(
        (m) => m.AboutPageComponent
      ),
    title: 'About',
  },
  {
    path: 'run',
    loadComponent: () =>
      import('./pages/letter-page/letter-page/letter-page.component').then(
        (m) => m.LetterPageComponent
      ),
    title: 'Run',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'welcome',
  },
];
