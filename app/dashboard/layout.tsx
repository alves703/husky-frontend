'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [user, setUser] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
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
      setIsLoading(false);
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
          <p className="mt-4 text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold text-blue-600">Husky App</h1>
          <p className="text-xs text-gray-600">Painel do Produtor</p>
        </div>
        <nav className="p-3">
          <ul className="space-y-1">
            <li>
              <Link href="/dashboard" className="block px-3 py-2 text-sm rounded hover:bg-blue-50 hover:text-blue-600 transition-colors">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/dashboard/apps" className="block px-3 py-2 text-sm rounded hover:bg-blue-50 hover:text-blue-600 transition-colors">
                Apps
              </Link>
            </li>
            <li>
              <Link href="/dashboard/products" className="block px-3 py-2 text-sm rounded hover:bg-blue-50 hover:text-blue-600 transition-colors">
                Produtos
              </Link>
            </li>
            <li>
              <Link href="/dashboard/contents" className="block px-3 py-2 text-sm rounded hover:bg-blue-50 hover:text-blue-600 transition-colors">
                Conteúdos
              </Link>
            </li>
            <li>
              <Link href="/dashboard/feed" className="block px-3 py-2 text-sm rounded hover:bg-blue-50 hover:text-blue-600 transition-colors">
                Feed
              </Link>
            </li>
            <li>
              <Link href="/dashboard/notifications" className="block px-3 py-2 text-sm rounded hover:bg-blue-50 hover:text-blue-600 transition-colors">
                Notificações
              </Link>
            </li>
            <li>
              <Link href="/dashboard/integrations" className="block px-3 py-2 text-sm rounded hover:bg-blue-50 hover:text-blue-600 transition-colors">
                Integrações
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm">
          <div className="flex justify-between items-center px-4 py-3">
            <h2 className="text-lg font-semibold text-gray-800">Painel de Controle</h2>
            <div className="flex items-center">
              <div className="mr-3">
                <p className="text-sm font-medium text-gray-700">{user?.name || 'Usuário'}</p>
                <p className="text-xs text-gray-500">{user?.email || 'email@exemplo.com'}</p>
              </div>
              <button
                onClick={handleLogout}
                className="px-2 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700 transition-colors"
              >
                Sair
              </button>
            </div>
          </div>
        </header>
        <main className="p-4">
          {children}
        </main>
      </div>
    </div>
  );
}
