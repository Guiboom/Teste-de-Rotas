import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import {Resenha} from './resenha/resenha'
import { Tropa } from './tropa/tropa';
import { Little } from './little/little';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,Resenha,Tropa,Little],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('rotas');
}
