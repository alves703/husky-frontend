'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { authUtils } from '@/utils/auth';

// Definindo o tipo para o contexto de autenticação
type AuthContextType = {
  user: any | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>;
  easyLogin: (email: string) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
};

// Criando o contexto com valor padrão
const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => ({ success: false }),
  easyLogin: async () => ({ success: false }),
  logout: () => {},
});

// Hook personalizado para usar o contexto de autenticação
export const useAuth = () => useContext(AuthContext);

// Provedor do contexto de autenticação
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Verificar se o usuário está autenticado ao carregar a página
  useEffect(() => {
    const checkAuth = () => {
      try {
        const storedUser = authUtils.getUser();
        if (storedUser) {
          setUser(storedUser);
        }
      } catch (error) {
        console.error('Erro ao verificar autenticação:', error);
        authUtils.logout();
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Função de login
  const login = async (email: string, password: string) => {
    try {
      // Simulando chamada à API
      if (email === 'admin@example.com' && password === 'senha123') {
        const userData = {
          id: '1',
          name: 'Administrador',
          email: 'admin@example.com',
          role: 'admin'
        };
        
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjE2MTUyMDAwfQ.example-token';
        
        authUtils.saveToken(token);
        authUtils.saveUser(userData);
        setUser(userData);
        
        return { success: true };
      } else if (email === 'user@example.com' && password === 'senha123') {
        const userData = {
          id: '2',
          name: 'Usuário',
          email: 'user@example.com',
          role: 'user'
        };
        
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIiLCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTYxNjE1MjAwMH0.example-token-user';
        
        authUtils.saveToken(token);
        authUtils.saveUser(userData);
        setUser(userData);
        
        return { success: true };
      }
      
      return { success: false, message: 'Credenciais inválidas' };
    } catch (error: any) {
      console.error('Erro ao fazer login:', error);
      return { success: false, message: error.message || 'Erro ao fazer login' };
    }
  };

  // Função de login facilitado
  const easyLogin = async (email: string) => {
    try {
      // Simulando envio de link de acesso
      return { 
        success: true, 
        message: 'Link de acesso enviado para seu email' 
      };
    } catch (error: any) {
      console.error('Erro ao enviar link de acesso:', error);
      return { success: false, message: error.message || 'Erro ao enviar link de acesso' };
    }
  };

  // Função de logout
  const logout = () => {
    authUtils.logout();
    setUser(null);
  };

  // Valor do contexto
  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    easyLogin,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
