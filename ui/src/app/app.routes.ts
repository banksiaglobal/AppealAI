import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {
    path: 'welcome',
    loadComponent: () =>
      import('./pages/welcome/welcome.component').then(
        (m) => m.WelcomeComponent
      ),
  },
  {
    path: 'start',
    loadComponent: () =>
      import('./pages/start-page/start-page/start-page.component').then(
        (m) => m.StartPageComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about-page/about-page.component').then(
        (m) => m.AboutPageComponent
      ),
  },
  {
    path: 'letter',
    loadComponent: () =>
      import('./pages/letter-page/letter-page/letter-page.component').then(
        (m) => m.LetterPageComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'welcome',
  },
];
