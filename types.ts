
export type Category = 'Malla Rachel' | 'Malla Sombra' | 'Pisos' | 'Soldadura' | 'Servicios';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  description: string;
  imageUrl: string;
  whatsappMessage: string;
}

export interface User {
  username: string;
  isAdmin: boolean;
}
