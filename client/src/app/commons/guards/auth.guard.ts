import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from 'app/pages/public-area/authentication.service';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthenticationService);
  const router = inject(Router);

  auth.checkSession();

  if (auth.isAuthenticated()) { 
    return true;
  }

  router.navigate(['/public-area/login']);
  return false;
};
