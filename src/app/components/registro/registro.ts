import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  nuevoUsuario = {
    nombre: '',
    email: '',
    password: ''
  };

  constructor(private authService: Auth, private router: Router) {}

  onRegistro() {
    const exito = this.authService.registrar(this.nuevoUsuario);
    if (exito) {
      alert('¡Cuenta creada! Ahora puedes iniciar sesión.');
      this.router.navigate(['/login']);
    } else {
      alert('Este correo ya está registrado.');
    }
  }
}
