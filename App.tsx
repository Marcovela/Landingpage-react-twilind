
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import Login from './components/Login';

const Home: React.FC = () => (
  <main className="min-h-screen">
    <Hero />
    <Catalog />
    {/* Additional Services Section */}
    <section id="services" className="bg-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-12">Nuestros Servicios Especializados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">👷</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Instalación Profesional</h3>
            <p className="text-slate-500">Equipos expertos para colocación de mallas en invernaderos y naves industriales.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">📐</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Diseño a Medida</h3>
            <p className="text-slate-500">Cotizamos y diseñamos estructuras metálicas según tus necesidades específicas.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🚛</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Delivery en Tacna</h3>
            <p className="text-slate-500">Despacho inmediato a toda la ciudad y zonas agrícolas aledañas.</p>
          </div>
        </div>
      </div>
    </section>
  </main>
);

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
