import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this.loggedIn.asObservable();

  constructor(private router: Router) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    
    if (usuarios.length === 0) {
      usuarios.push({ 
        nombre: 'Administrador', 
        email: 'admin@admin.com', 
        password: 'admin' 
      });
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      console.log('Usuario admin@admin.com creado por defecto.');
    }
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('userToken');
  }

  // MÉTODO PARA REGISTRAR
  registrar(nuevoUsuario: any): boolean {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    
    // Validar si el email ya existe
    if (usuarios.find((u: any) => u.email === nuevoUsuario.email)) {
      return false; 
    }

    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    return true;
  }

  // MÉTODO PARA LOGIN
  login(credentials: any): boolean {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const userFound = usuarios.find((u: any) => 
      u.email === credentials.email && u.password === credentials.password
    );

    if (userFound) {
      localStorage.setItem('userToken', 'fake-jwt-token');
      this.loggedIn.next(true);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('userToken');
    this.loggedIn.next(false);
    this.router.navigate(['/']);
  }
}
