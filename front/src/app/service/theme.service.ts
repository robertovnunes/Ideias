import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkThemeSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isDarkTheme$: Observable<boolean> = this.isDarkThemeSubject.asObservable();

  toggleTheme(): void {
    const isDarkTheme = !this.isDarkThemeSubject.value;
    this.isDarkThemeSubject.next(isDarkTheme);
    this.applyTheme();
  }

  private applyTheme(): void {
    const theme = this.isDarkThemeSubject.value ? 'dark-theme' : 'light-theme';
    document.body.className = theme;
  }

  isDarkThemeEnabled(): boolean {
    return this.isDarkThemeSubject.value;
  }
}
