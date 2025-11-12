import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private readonly _isAuthenticated = signal(false);
  readonly isAuthenticated = this._isAuthenticated.asReadonly();

  private readonly validUser = {
    username: 'admin@volvo.com',
    password: 'Fl3tM4n4G3r'
  };

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === this.validUser.username && password === this.validUser.password) {
      this._isAuthenticated.set(true);
      localStorage.setItem('auth', 'true');
      this.router.navigate(['/restricted-area']); // ✅
      return true;
    }
    return false;
  }


  logout(): void {
    this._isAuthenticated.set(false);
    localStorage.removeItem('auth');
    this.router.navigate(['/public-area/login']);
  }

  checkSession(): void {
    const stored = localStorage.getItem('auth');
    this._isAuthenticated.set(stored === 'true');
  }
}
