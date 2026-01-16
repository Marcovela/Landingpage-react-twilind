
import React from 'react';
import { COMPANY_INFO } from '../constants';
import { BookOpen, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="font-bold text-2xl tracking-tight text-white">
                TACNA<span className="text-emerald-500">MALLAS</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Líderes en soluciones de cobertura y protección industrial en la región Tacna. Calidad certificada y servicio especializado.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-emerald-600 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-emerald-600 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Información Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><span className="text-slate-500">Razón Social:</span> <br/> {COMPANY_INFO.name}</li>
              <li><span className="text-slate-500">RUC:</span> {COMPANY_INFO.ruc}</li>
              <li>
                <button className="flex items-center space-x-2 bg-white/5 hover:bg-white/10 text-white px-4 py-3 rounded-lg border border-white/10 transition-colors w-full mt-2">
                  <BookOpen className="w-5 h-5 text-emerald-400" />
                  <span className="font-bold">Libro de Reclamaciones</span>
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>ventas@tacnamallas.pe</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Ubicación</h4>
            <div className="rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all border border-slate-700 h-40">
              {/* Map Placeholder */}
              <img 
                src="https://picsum.photos/seed/tacna-map/400/300" 
                className="w-full h-full object-cover" 
                alt="Mapa Tacna" 
              />
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2024 Tacna Mallas & Servicios. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-emerald-400">Términos y Condiciones</a>
            <a href="#" className="hover:text-emerald-400">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
