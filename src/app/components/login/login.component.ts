import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}
  loginForm!: FormGroup;
  md5 = new Md5();

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      timestamp: new FormControl(1),
      publicKey: new FormControl(
        '28b94e4460d83e677740e165d886b20e',
        Validators.required
      ),
      privateKey: new FormControl(
        '9942c96d7c064d7523d2ec917b51ea214e9bf2f1',
        Validators.required
      ),
      hash: new FormControl(''),
    });
  }

  calcHash(): string {
    this.md5.appendStr(this.loginForm.value.timestamp);
    this.md5.appendStr(this.loginForm.value.privateKey);
    this.md5.appendStr(this.loginForm.value.publicKey);
    return JSON.stringify(this.md5.end());
  }

  comprobarUsuario() {
    const hash = this.calcHash();
    localStorage.setItem('publicKey', this.loginForm.value.publicKey);
    localStorage.setItem('privateKey', this.loginForm.value.privateKey);
    localStorage.setItem('hash', hash);
  }
}
