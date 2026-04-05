import { inject } from '@angular/core';
import { Auth } from '../services/auth';
import { take, map } from 'rxjs/operators';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(Auth);
  const router = inject(Router);

  return authService.isLoggedIn$.pipe(
    take(1),
    map(isLogged => {
      if (isLogged) return true;
      // Si no está logueado, lo manda al login
      router.navigate(['/login']);
      return false;
    })
  );
};
