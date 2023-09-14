import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const tempData = localStorage.getItem('session');
  if (tempData) return true;
  const router: Router = inject(Router);
  router.navigate(['']);
  return false;
};
