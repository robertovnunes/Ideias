import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../services/user';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  constructor(private usersService: UsersService) { }

    user!: User;

    getUser(value: string | null): void {
        this.usersService.getUser(value)
            .subscribe(data => {
              if (data.status_code === '200') {
                this.user = data.data;
              } else {
                alert(data.message);
              }
            });
    }


}
