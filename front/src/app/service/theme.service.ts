import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkTheme: boolean = false;

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    this.applyTheme();
  }

  private applyTheme(): void {
    document.body.className = this.isDarkTheme ? 'darkMode' : 'lightMode';
  }

  isDarkThemeEnabled(): boolean {
    return this.isDarkTheme;
  }
}
