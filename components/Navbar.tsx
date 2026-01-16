
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Settings, LogOut, LayoutGrid, Menu } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Navbar: React.FC = () => {
  const { user, logout } = useApp();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <LayoutGrid className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-800">
                TACNA<span className="text-emerald-600">MALLAS</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Catálogo</Link>
            <a href="#services" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Servicios</a>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/admin" className="flex items-center space-x-1 text-slate-600 hover:text-emerald-600 font-medium">
                  <Settings className="w-4 h-4" />
                  <span>Admin Panel</span>
                </Link>
                <button 
                  onClick={handleLogout}
                  className="flex items-center space-x-1 bg-slate-100 hover:bg-red-50 text-slate-600 hover:text-red-600 px-3 py-1.5 rounded-md transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Salir</span>
                </button>
              </div>
            ) : (
              <Link 
                to="/login" 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm"
              >
                Acceso Admin
              </Link>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button className="text-slate-500 hover:text-emerald-600 p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
