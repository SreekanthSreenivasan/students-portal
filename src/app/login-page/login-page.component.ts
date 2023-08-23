import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MockApiServiceService } from '../mock-api-service.service';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      this.httpService.login(username, password).subscribe((data: any) => {
        if (data.length) {
          this.httpService.isAuthenticated(true);
          this.router.navigate(['/home']);
        } else {
          this._snackBar.open('checks');
          this.httpService.isAuthenticated(false);
        }
      });
      // console.log('Password:', password);
    }
  }
}
