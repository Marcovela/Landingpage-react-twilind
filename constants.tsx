
import { Product } from './types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Malla Rachel 90% Verde',
    price: 45.50,
    category: 'Malla Rachel',
    description: 'Malla de alta densidad ideal para protección solar en climas áridos como Tacna.',
    imageUrl: 'https://picsum.photos/seed/malla1/600/400',
    whatsappMessage: 'Hola, me interesa la Malla Rachel 90% Verde.'
  },
  {
    id: '2',
    name: 'Piso de Goma Industrial',
    price: 120.00,
    category: 'Pisos',
    description: 'Pisos antideslizantes para alto tránsito, ideales para talleres y gimnasios.',
    imageUrl: 'https://picsum.photos/seed/piso1/600/400',
    whatsappMessage: 'Hola, deseo cotizar Pisos de Goma Industrial.'
  },
  {
    id: '3',
    name: 'Servicio de Soldadura Estructural',
    price: 250.00,
    category: 'Soldadura',
    description: 'Instalación y soldadura de marcos para mallas y coberturas metálicas.',
    imageUrl: 'https://picsum.photos/seed/welding1/600/400',
    whatsappMessage: 'Hola, necesito el servicio de soldadura para mallas.'
  },
  {
    id: '4',
    name: 'Malla Raschel Blanca 80%',
    price: 38.00,
    category: 'Malla Rachel',
    description: 'Perfecta para invernaderos y espacios que requieren luminosidad controlada.',
    imageUrl: 'https://picsum.photos/seed/malla2/600/400',
    whatsappMessage: 'Hola, me interesa la Malla Raschel Blanca.'
  }
];

export const COMPANY_INFO = {
  name: 'Mallas & Servicios Tacna S.A.C.',
  ruc: '20601234567',
  address: 'Av. Industrial N° 123, Tacna, Perú',
  phone: '+51 952 123 456',
  whatsappBaseUrl: 'https://wa.me/51952123456'
};
