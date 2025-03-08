import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import {ApplicationBase} from "../../../utils/base/application.base";
import { R_DASHBOARD } from "../../../../constants/route.constants";
import Notiflix from 'notiflix';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends ApplicationBase implements OnInit {

  public formGroup!: UntypedFormGroup;

  constructor(private _fb: UntypedFormBuilder, private _router: Router) {
    super();
  }

  ngOnInit() {
    this.formGroup = this._fb.group({
      username: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    });
  }

  public onSubmit(): void {
    Notiflix.Loading.circle('Autenticando...');
    setTimeout(() => {
      sessionStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
      this._router.navigate([`${R_DASHBOARD}`]);
      Notiflix.Loading.remove();
    }, 2000);
  }

}
