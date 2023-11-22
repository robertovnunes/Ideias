import {Component, OnInit} from '@angular/core';
import {Router, RouterEvent} from "@angular/router";
import {LocalStorageService} from "../../../service/local-storage.service";

import { ThemeService } from "../../../service/theme.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  liLogout: HTMLLIElement|null = document.querySelector('.liLogout');
  isLogedIn:boolean = false;
  isAdmin: boolean = false;

  constructor(private readonly router: Router,
              private localStorageService: LocalStorageService,
              private themeService: ThemeService) {

  }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      if (val instanceof RouterEvent) {
        if (val.url === '/login' || this.localStorageService.get('user') === null) {
          this.isLogedIn = false;
        } else {
          this.isLogedIn = true;
          this.isAdmin = this.localStorageService.get('user')?.role === 'admin';
        }
      }
    });

  }
  toggleTheme(): void {
    this.themeService.toggleTheme();
    alert(this.themeService.isDarkThemeEnabled() ? 'Dark mode enabled' : 'Light mode enabled');
  }
  protected readonly alert = alert;

}



