import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Restaurante } from '../../services/restaurante';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin implements OnInit {
  listaReservas: any[] = [];
  listaPedidos: any[] = [];

  constructor(private restauranteService: Restaurante) {}

  ngOnInit(): void {
    // Cargamos ambos datos al entrar al panel
    this.actualizarListas();
  }

  actualizarListas() {
    this.listaReservas = this.restauranteService.obtenerReservas();
    this.listaPedidos = this.restauranteService.obtenerPedidos();
    console.log('Datos cargados en Admin:', { 
      reservas: this.listaReservas.length, 
      pedidos: this.listaPedidos.length 
    });
  }

  finalizarReserva(id: number) {
    this.restauranteService.eliminarReserva(id);
    this.actualizarListas();
  }

  despacharPedido(id: number) {
    console.log('Despachando pedido ID:', id);
    this.restauranteService.eliminarPedido(id);
    this.actualizarListas(); // Refrescamos la vista
    alert('¡Pedido enviado a cocina!');
  }
}
