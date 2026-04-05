export interface Plato {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  categoria: 'Platos Fuertes' | 'Bebidas' | 'Piqueos' | 'Hamburguesas' | 'Para Picar' | 'Postres';
}