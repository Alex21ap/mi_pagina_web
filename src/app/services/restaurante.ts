import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Restaurante {
  private reservas: any[] = [];
  private pedidos: any[] = [];

  constructor() { }

  // Métodos para el Cliente (POST simbólico)
  registrarReserva(reserva: any) {
  const nueva = { ...reserva, id: Date.now() };
  
  this.reservas.push(nueva);
  
  console.log('Lista actual en el servicio:', this.reservas);
}

  registrarPedido(pedido: any) {
  this.pedidos.push({ ...pedido, id: Date.now(), fecha: new Date() });
  console.log('Pedidos actuales en la cocina:', this.pedidos);
}

  // Métodos para el Administrador (GET simbólico)
  obtenerReservas() {
    return this.reservas;
  }

  obtenerPedidos() {
    return this.pedidos;
  }

  // Métodos para el Administrador (DELETE simbólico)
  eliminarPedido(id: number) {
  this.pedidos = this.pedidos.filter(p => p.id !== id);
  }

  eliminarReserva(id: number) {
    this.reservas = this.reservas.filter(r => r.id !== id);
  }
}
