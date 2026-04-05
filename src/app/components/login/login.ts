import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  
  usuario = ''; 
  password = '';

  constructor(private authService: Auth, private router: Router) {}

  onLogin() {
    // 2. CREAMOS EL OBJETO que el servicio espera recibir
    const credentials = { 
      email: this.usuario, 
      password: this.password 
    };

    // 3. PASAMOS EL OBJETO COMPLETO
    const success = this.authService.login(credentials);

    if (success) {
      alert('¡Bienvenido, jefe! Entrando al panel...');
      this.router.navigate(['/admin']); 
    } else {
      alert('Usuario o contraseña incorrectos. ¡Vuelve a intentarlo, sobrino!');
      this.password = '';
    }
  }
}