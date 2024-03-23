import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from "../../../service/local-storage.service";
import {User} from "../../../service/interfaces/user";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../../service/user/user.service";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!: User;
  cpass!: String;

  nameInput !: HTMLInputElement | null;
  emailInput !: HTMLInputElement | null;
  usernameInput !: HTMLInputElement | null;
  passwordInput !: HTMLInputElement | null;
  cpasswordInput !: HTMLInputElement | null;


  name!: FormControl<string | null>;
  email!: FormControl<string | null>;
  username!: FormControl<string | null>;
  password!: FormControl<string | null>;
  cpassword!: FormControl<string | null>;

  form: FormGroup;


  constructor(private readonly localStorageService: LocalStorageService,
              private readonly fb: FormBuilder,
              private readonly http: HttpClient,
              private readonly userService: UserService
  ) {
    this.user = this.localStorageService.get('user');
    this.name = this.fb.control('', [Validators.required]);
    this.email = this.fb.control('', [Validators.required]);
    this.username = this.fb.control('', [Validators.required]);
    this.password = this.fb.control('', [Validators.required]);
    this.cpassword = this.fb.control('', [Validators.required]);

    this.form = this.fb.nonNullable.group({
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password,
      cpassword: this.cpassword,
    });
  }


  isAdmin = this.user?.roles === 'ADMIN' || this.user?.roles === 'PROFESSOR';
  isEqualPassword = this.user?.password === this.cpass;

  ngOnInit(): void {
    this.nameInput = document.querySelector('input[name="name"]');
    this.emailInput = document.querySelector('input[name="email"]');
    this.usernameInput = document.querySelector('input[name="username"]');
    this.passwordInput = document.querySelector('input[name="password"]');
    this.cpasswordInput = document.querySelector('input[name="cpassword"]');
  }

  save() {
    let uptdUser: User = {
      name: this.nameInput!.value,
      email: this.emailInput!.value,
      username: this.usernameInput!.value,
      password: this.passwordInput!.value,
      roles: this.user?.roles
    }
    try{
      this.userService.updateUser(uptdUser).subscribe((data) => {
        if (data.status_code === '200') {
          alert('User updated successfully');
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

}
