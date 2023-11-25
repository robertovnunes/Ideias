import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {DarkModeService} from "angular-dark-mode";
import {Observable} from "rxjs";
import {MatSlideToggleModule} from "@angular/material/slide-toggle"
@Component({
  selector: 'app-dark-mode-toggle',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatSlideToggleModule],
  templateUrl: './dark-mode-toggle.component.html',
  styleUrl: './dark-mode-toggle.component.css'
})
export class DarkModeToggleComponent {
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;
  constructor(private darkModeService: DarkModeService) {}
  onToggle(): void {
    this.darkModeService.toggle();
    console.log('toggle');
  }
}
