import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { loginAction } from '../store/app.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = new FormControl('', { nonNullable: true });

  constructor(
    private store: Store,
    private router: Router,
  ) { }

  ngOnInit(): void { }

  onSubmit() {
    console.log('on Submit', this.username.value);
    this.store.dispatch(loginAction({
      username: this.username.value
    }));
    this.router.navigateByUrl('/products');
  }
}
