import { Routes } from '@angular/router';
import { Resenha } from './resenha/resenha';
import { Tropa } from './tropa/tropa';
import { Little } from './little/little';

export const routes: Routes = [
    {path:'resenha',component:Resenha},
    {path:'tropa',component:Tropa},
    {path:'little',component:Little}
];
