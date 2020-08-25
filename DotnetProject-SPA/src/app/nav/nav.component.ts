import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {}

  login(): void {
    this.authService.login(this.model).subscribe(
      (next) => {
        console.log('logged in successfully');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  loggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout(): void {
    localStorage.removeItem('token');
    console.log('logged out');
  }
}
