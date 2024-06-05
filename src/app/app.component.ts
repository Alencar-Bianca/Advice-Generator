import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdviceContainerComponent } from './components/advice-container/AdviceContainerComponent';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdviceContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'adviceGenerator';
}
