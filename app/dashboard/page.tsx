'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({
    apps: 0,
    products: 0,
    users: 0,
    contents: 0
  });

  useEffect(() => {
    // Verificar autenticação
    const storedUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    
    if (!storedUser || !token) {
      router.push('/login');
      return;
    }
    
    try {
      const userData = JSON.parse(storedUser);
      setUser(userData);
      
      // Simular carregamento de estatísticas
      setTimeout(() => {
        setStats({
          apps: 2,
          products: 5,
          users: 120,
          contents: 25
        });
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Erro ao carregar dados do usuário:', error);
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/login');
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-3 text-gray-600 text-sm">Carregando dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600 text-sm">Bem-vindo, {user?.name || 'Usuário'}!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="p-2 rounded-full bg-blue-100 text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-xs text-gray-500 font-medium">Apps</p>
              <p className="text-lg font-semibold text-gray-800">{stats.apps}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="p-2 rounded-full bg-green-100 text-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-xs text-gray-500 font-medium">Produtos</p>
              <p className="text-lg font-semibold text-gray-800">{stats.products}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="p-2 rounded-full bg-purple-100 text-purple-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-xs text-gray-500 font-medium">Usuários</p>
              <p className="text-lg font-semibold text-gray-800">{stats.users}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="p-2 rounded-full bg-yellow-100 text-yellow-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-xs text-gray-500 font-medium">Conteúdos</p>
              <p className="text-lg font-semibold text-gray-800">{stats.contents}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Atividade Recente</h2>
          <div className="space-y-3">
            <div className="border-l-4 border-blue-500 pl-3 py-1">
              <p className="text-xs text-gray-600">Hoje</p>
              <p className="text-sm font-medium">Novo usuário registrado: Maria Silva</p>
            </div>
            <div className="border-l-4 border-green-500 pl-3 py-1">
              <p className="text-xs text-gray-600">Ontem</p>
              <p className="text-sm font-medium">Novo conteúdo adicionado: Aula 3 - SEO Avançado</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-3 py-1">
              <p className="text-xs text-gray-600">3 dias atrás</p>
              <p className="text-sm font-medium">Novo app criado: Curso de Marketing Digital</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Ações Rápidas</h2>
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={() => router.push('/dashboard/apps')}
              className="flex items-center justify-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <div className="text-center">
                <div className="mx-auto p-1 rounded-full bg-blue-100 text-blue-500 w-8 h-8 flex items-center justify-center mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-xs font-medium">Gerenciar Apps</span>
              </div>
            </button>
            
            <button 
              onClick={() => router.push('/dashboard/products')}
              className="flex items-center justify-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <div className="text-center">
                <div className="mx-auto p-1 rounded-full bg-green-100 text-green-500 w-8 h-8 flex items-center justify-center mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <span className="text-xs font-medium">Gerenciar Produtos</span>
              </div>
            </button>
            
            <button 
              onClick={() => router.push('/dashboard/contents')}
              className="flex items-center justify-center p-3 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors"
            >
              <div className="text-center">
                <div className="mx-auto p-1 rounded-full bg-yellow-100 text-yellow-500 w-8 h-8 flex items-center justify-center mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <span className="text-xs font-medium">Gerenciar Conteúdos</span>
              </div>
            </button>
            
            <button 
              onClick={() => router.push('/dashboard/feed')}
              className="flex items-center justify-center p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <div className="text-center">
                <div className="mx-auto p-1 rounded-full bg-purple-100 text-purple-500 w-8 h-8 flex items-center justify-center mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <span className="text-xs font-medium">Gerenciar Feed</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 text-right">
        <button
          onClick={handleLogout}
          className="px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700 transition-colors"
        >
          Sair
        </button>
      </div>
    </div>
  );
}
