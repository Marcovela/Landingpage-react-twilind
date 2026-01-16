
import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MessageCircle, Search, Filter } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { Category } from '../types';

const categories: (Category | 'Todas')[] = ['Todas', 'Malla Rachel', 'Malla Sombra', 'Pisos', 'Soldadura', 'Servicios'];

const Catalog: React.FC = () => {
  const { products } = useApp();
  const [activeCategory, setActiveCategory] = useState<Category | 'Todas'>('Todas');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'Todas' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Nuestro Catálogo</h2>
          <p className="text-slate-500">Productos y servicios con garantía local.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Buscar producto..." 
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2 bg-white border border-slate-200 rounded-lg p-1">
             {categories.map(cat => (
               <button
                 key={cat}
                 onClick={() => setActiveCategory(cat)}
                 className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                   activeCategory === cat 
                     ? 'bg-emerald-600 text-white shadow-sm' 
                     : 'text-slate-500 hover:bg-slate-50'
                 }`}
               >
                 {cat}
               </button>
             ))}
          </div>
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2">
                  <span className="bg-white/90 backdrop-blur-sm text-emerald-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <h3 className="font-bold text-slate-800 text-lg mb-1">{product.name}</h3>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2 flex-grow">{product.description}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                  <span className="text-2xl font-black text-slate-900">
                    S/ {product.price.toFixed(2)}
                  </span>
                  <a 
                    href={`${COMPANY_INFO.whatsappBaseUrl}?text=${encodeURIComponent(product.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white p-2.5 rounded-lg transition-colors flex items-center space-x-2 shadow-sm"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-xs font-bold md:hidden lg:inline">Pedir</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
          <Filter className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-slate-600">No hay productos en esta categoría</h3>
          <button onClick={() => {setActiveCategory('Todas'); setSearchTerm('')}} className="mt-4 text-emerald-600 font-bold hover:underline">
            Ver todo el catálogo
          </button>
        </div>
      )}
    </div>
  );
};

export default Catalog;
