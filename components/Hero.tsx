
import React from 'react';
import { ShieldCheck, MapPin, Hammer } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-white py-16 sm:py-24 industrial-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left flex flex-col justify-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
              <span className="block">Protección y Calidad para</span>
              <span className="block text-emerald-600">Tacna y el Sur del Perú</span>
            </h1>
            <p className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Venta de mallas Raschel, Rachel, pisos industriales y servicios de soldadura estructural. Especialistas en coberturas agrícolas e industriales adaptadas al clima extremo.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Alta Durabilidad</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold">
                  <MapPin className="w-4 h-4" />
                  <span>Stock en Tacna</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold">
                  <Hammer className="w-4 h-4" />
                  <span>Instalación Incluida</span>
                </div>
              </div>
              <button className="mt-8 inline-flex items-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-200 transform hover:-translate-y-1">
                Ver Catálogo Actualizado
              </button>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-2xl shadow-2xl overflow-hidden rotate-2 border-8 border-white">
              <img
                className="w-full object-cover aspect-[4/3]"
                src="https://picsum.photos/seed/tacna-mallas/800/600"
                alt="Instalación de malla en Tacna"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
