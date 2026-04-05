import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Restaurante } from '../../services/restaurante';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reserva.html',
  styleUrl: './reserva.css',
})
export class Reserva {
  nuevaReserva = { nombre: '', fecha: '', hora: '', personas: 1, comentario: '' };

  constructor(private restauranteService: Restaurante) {}

  enviarReserva(form: NgForm) { // 2. Recibe el formulario aquí
    console.log('Enviando...', this.nuevaReserva);
    this.restauranteService.registrarReserva(this.nuevaReserva);
    
    alert('¡Reserva enviada con éxito!');

    // 3. LA MAGIA: Esto limpia los datos Y los mensajes de error
    form.resetForm({
      personas: 1 // Puedes dejar valores por defecto aquí
    });
  }
}