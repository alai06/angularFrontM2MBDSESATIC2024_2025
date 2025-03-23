import { CanActivateFn,Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthService);
  let router = inject(Router);
  if (authService.isAdmin()) {
    console.log("Vous etes admin, authentification reussie");
    return true;
  } 
  else if (authService.isUser()) {
    console.log("Accès autorisé : Utilisateur");
    router.navigate(['/home']);
    return true;
  }
  else {
    console.log("Vous n'etes pas admin : Navigation refusée");
    router.navigate(['/home']);
    return false;
  }
};
