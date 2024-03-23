import { Component } from '@angular/core';
import {LocalStorageService} from "../../../service/local-storage.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router,
              private localStorageService: LocalStorageService) {

  }
  ngOnInit(): void {
    if (this.localStorageService.get('user') === null) {
      this.router.navigate(['/login']).then();
    }
  }

}
