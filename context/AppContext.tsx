
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, User } from '../types';
import { INITIAL_PRODUCTS } from '../constants';

interface AppContextType {
  products: Product[];
  user: User | null;
  addProduct: (product: Omit<Product, 'id'>) => void;
  deleteProduct: (id: string) => void;
  login: (username: string, pass: string) => boolean;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [user, setUser] = useState<User | null>(null);

  // Load initial data
  useEffect(() => {
    const savedProducts = localStorage.getItem('tacna_mallas_products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      setProducts(INITIAL_PRODUCTS);
      localStorage.setItem('tacna_mallas_products', JSON.stringify(INITIAL_PRODUCTS));
    }

    const savedUser = localStorage.getItem('tacna_mallas_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const addProduct = (newProduct: Omit<Product, 'id'>) => {
    const productWithId: Product = {
      ...newProduct,
      id: Math.random().toString(36).substr(2, 9)
    };
    const updatedProducts = [productWithId, ...products];
    setProducts(updatedProducts);
    localStorage.setItem('tacna_mallas_products', JSON.stringify(updatedProducts));
  };

  const deleteProduct = (id: string) => {
    const updatedProducts = products.filter(p => p.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem('tacna_mallas_products', JSON.stringify(updatedProducts));
  };

  const login = (username: string, pass: string): boolean => {
    if (username === 'admin' && pass === '123') {
      const loggedUser = { username, isAdmin: true };
      setUser(loggedUser);
      localStorage.setItem('tacna_mallas_user', JSON.stringify(loggedUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('tacna_mallas_user');
  };

  return (
    <AppContext.Provider value={{ products, user, addProduct, deleteProduct, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
