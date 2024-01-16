import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { P006Component } from './pages/p006/p006.component';
import { P008Component } from './pages/p008/p008.component';
import { WikipediaComponent } from '../../../../Semana8/P008/minhaApp/src/app/wikipedia/wikipedia.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'wiki', component: WikipediaComponent},
    { path: 'p006', component: P006Component},
    { path: 'p008', component: P008Component},
];
