import {Component, OnInit} from '@angular/core';
import { ThemeService } from "./service/theme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isDarkTheme: boolean = false;
  title = 'plataforma-ideias';
  constructor(private themeService: ThemeService) {
  }
  ngOnInit(): void {
    this.themeService.isDarkTheme$.subscribe((isDarkTheme) => {
      this.isDarkTheme = isDarkTheme;
    });  }
}
