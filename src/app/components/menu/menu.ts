import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Plato } from '../../models/plato';
import { Restaurante } from '../../services/restaurante';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

  categoriaSeleccionada: string = 'Todos';

  get categorias(): string[] {
    return ['Todos', ...new Set(this.listaPlatos.map(p => p.categoria))];
  }

  get platosFiltrados(): Plato[] {
    if (this.categoriaSeleccionada === 'Todos') {
      return this.listaPlatos;
    }
    return this.listaPlatos.filter(p => p.categoria === this.categoriaSeleccionada);
  }

  listaPlatos: Plato[] = [
    {
      id: 1,
      nombre: 'Salchipapa "La Mata-Hambre"',
      descripcion: 'Papas fritas crocantes, hot dog premium, huevo frito y todas las cremas.',
      precio: 8.50,
      imagen: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500',
      categoria: 'Platos Fuertes'
    },
    {
      id: 2,
      nombre: 'Mostrito con Broaster',
      descripcion: 'Arroz chaufa con presa de pollo crocante y ensalada.',
      precio: 12.00,
      imagen: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500',
      categoria: 'Platos Fuertes'
    },
    {
      id: 3,
      nombre: 'Chicha Morada',
      descripcion: 'Natural, heladita y con su toque de limón.',
      precio: 3.00,
      imagen: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500',
      categoria: 'Bebidas'
    },
    {
      id: 4,
      nombre: 'Hamburguesa "La Criminal"',
      descripcion: 'Carne a la parrilla, queso derretido, tocino, huevo y harto camote frito.',
      precio: 15.00,
      imagen: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500',
      categoria: 'Hamburguesas'
    },
    {
      id: 5,
      nombre: 'Alitas Broaster (6 unidades)',
      descripcion: 'Alitas crocantes con receta secreta, acompañadas de papas y cremas.',
      precio: 14.50,
      imagen: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500',
      categoria: 'Para Picar'
    },
    {
      id: 6,
      nombre: 'Coca Cola 500ml',
      descripcion: 'La compañera ideal para cualquier bajona. Bien helada.',
      precio: 3.50,
      imagen: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500',
      categoria: 'Bebidas'
    },
    {
      id: 7,
      nombre: 'Lomo Saltado "Al Jugo"',
      descripcion: 'Trozos de carne saltados al wok con cebolla, tomate, ají amarillo y papas fritas.',
      precio: 18.50,
      imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500',
      categoria: 'Platos Fuertes'
    },
    {
      id: 8,
      nombre: 'Picarones de la Tía',
      descripcion: 'Porción de 4 aros de zapallo y camote bañados en miel de chancaca con hoja de higo.',
      precio: 7.00,
      imagen: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=500',
      categoria: 'Postres'
    },
    {
      id: 9,
      nombre: 'Limonada Frozen',
      descripcion: 'Refrescante y granizada, perfecta para acompañar tus alitas o hamburguesas.',
      precio: 4.50,
      imagen: 'https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg?auto=compress&cs=tinysrgb&w=500',
      categoria: 'Bebidas'
    },
    
    {
      id: 10,
      nombre: 'Hamburguesa "La Extrema"',
      descripcion: 'Doble carne, doble queso, doble tocino y un baño de salsa de la casa. Solo para valientes.',
      precio: 22.00,
      imagen: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500',
      categoria: 'Hamburguesas'
    },
    {
      id: 11,
      nombre: 'Hamburguesa de Pollo Crunchy',
      descripcion: 'Pechuga de pollo empanizada extracrocante, lechuga fresca, tomate y mayonesa especial.',
      precio: 16.50,
      imagen: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=500',
      categoria: 'Hamburguesas'
    },

    {
      id: 12,
      nombre: 'Tequeños con Guacamole (8 unidades)',
      descripcion: 'Rellenos de queso fundido, servidos con una crema de palta bien sazonada.',
      precio: 12.00,
      imagen: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500',
      categoria: 'Para Picar'
    },
    {
      id: 13,
      nombre: 'Salchipapa Kids',
      descripcion: 'Una versión mini con hot dog cortado en formas divertidas y papas amarillas.',
      precio: 6.50,
      imagen: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500',
      categoria: 'Para Picar'
    },

    {
      id: 14,
      nombre: 'Arroz con Leche Antañón',
      descripcion: 'Cremoso, con harta canela, pasas y un toque de cáscara de naranja.',
      precio: 5.00,
      imagen: 'https://images.pexels.com/photos/10311442/pexels-photo-10311442.jpeg?auto=compress&cs=tinysrgb&w=500',
      categoria: 'Postres'
    },
    {
      id: 15,
      nombre: 'Mazamorra Morada',
      descripcion: 'El clásico postre limeño con fruta seca y harina de camote.',
      precio: 5.00,
      imagen: 'https://images.pexels.com/photos/14705141/pexels-photo-14705141.jpeg?auto=compress&cs=tinysrgb&w=500',
      categoria: 'Postres'
    }
  ];

  carrito: any[] = [];
  datosEnvio = { nombre: '', direccion: '' };

  constructor(private restauranteService: Restaurante) {}

  agregarAlPedido(plato: Plato) {
    this.carrito.push(plato);
  }

  quitarDelPedido(index: number) {
    this.carrito.splice(index, 1);
  }

  get total() {
    return this.carrito.reduce((sum, item) => sum + item.precio, 0);
  }

  realizarPedido() {
    const pedidoCompleto = {
      cliente: this.datosEnvio,
      productos: this.carrito,
      total: this.total
    };
    this.restauranteService.registrarPedido(pedidoCompleto);
    alert('¡Pedido enviado! La Tía Veneno está preparando tu bajona.');
    this.carrito = []; // Limpiar carrito
    this.datosEnvio = { nombre: '', direccion: '' }; // Limpiar datos
  }
}
