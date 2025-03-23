import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule,MatCardModule,ReactiveFormsModule]
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { login, password } = this.loginForm.value;

      if (this.authService.logIn(login, password)) {
        if (this.authService.isAdmin()) {
          console.log("Redirection vers le dashboard admin...");
          this.router.navigate(['/home']);
        } else if (this.authService.isUser()) {
          console.log("Redirection vers l'accueil utilisateur...");
          this.router.navigate(['/home']);
        } else {
          console.log("Utilisateur inconnu, redirection vers accueil.");
          this.router.navigate(['/home']);
        }
      } else {
        alert('Login ou mot de passe incorrect');
      }
    }
  }
}
