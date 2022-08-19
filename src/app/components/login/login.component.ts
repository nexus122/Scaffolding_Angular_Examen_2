import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Md5 } from 'ts-md5';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}
  loginForm!: FormGroup;
  md5 = new Md5();

  privateKey = '9942c96d7c064d7523d2ec917b51ea214e9bf2f1';
  publicKey = '398d788634e8cc2decdabcfe848b82ad';
  hash = 'dbdf7c33f6f3294b0ac8da95c58278b2';
  ngOnInit(): void {
    if (localStorage.getItem('hash')) {
      this.router.navigateByUrl('/home');
    }
  }

  comprobarUsuario() {
    localStorage.setItem('publicKey', this.publicKey);
    localStorage.setItem('privateKey', this.privateKey);
    localStorage.setItem('hash', this.hash);
    localStorage.setItem('timestamp', JSON.stringify(Date.now()));
    this.router.navigateByUrl('/home');
  }
}
