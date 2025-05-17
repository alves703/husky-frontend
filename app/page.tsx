'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      setTimeout(() => {
        localStorage.setItem('token', 'sample-jwt-token');
        localStorage.setItem('user', JSON.stringify({
          id: '1',
          name: 'Administrador',
          email: email,
          role: 'admin'
        }));
        router.push('/dashboard');
      }, 2000);
    } catch (err) {
      setError('Erro ao fazer login.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8">
          <div className="flex flex-col items-center mb-8">
            <svg className="w-24 h-24 mb-4 text-blue-600" viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="45" fill="#3b82f6" />
              <path d="M30 40 Q50 30 70 40 Q75 50 70 60 Q50 70 30 60 Q25 50 30 40" fill="white" />
              <circle cx="40" cy="45" r="5" fill="#1e3a8a" />
              <circle cx="60" cy="45" r="5" fill="#1e3a8a" />
              <path d="M40 60 Q50 65 60 60" stroke="#1e3a8a" strokeWidth="2" fill="none" />
              <path d="M20 30 Q10 50 20 70" stroke="#1e3a8a" strokeWidth="3" fill="none" />
              <path d="M80 30 Q90 50 80 70" stroke="#1e3a8a" strokeWidth="3" fill="none" />
              <path d="M35 75 Q50 85 65 75" stroke="#1e3a8a" strokeWidth="2" fill="none" />
            </svg>
            <h1 className="text-3xl font-bold text-gray-800">HuskyApp</h1>
            <p className="text-gray-500 mt-2">Acesse sua conta administrativa</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="relative">
              <input
                type="email"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-envelope text-gray-400"></i>
              </div>
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-lock text-gray-400"></i>
              </div>
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-blue-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
              </button>
            </div>
            {error && <div className="text-sm text-red-600 bg-red-50 p-2 rounded">{error}</div>}
            <button
              type="submit"
              className="w-full flex justify-center items-center py-3 px-4 rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="mr-2">Autenticando...</span>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                </>
              ) : (
                'Entrar'
              )}
            </button>
          </form>
        </div>
        <div className="bg-gray-50 px-8 py-6 text-center">
          <p className="text-sm text-gray-500">Área restrita apenas para administradores</p>
          <p className="mt-2 text-sm text-gray-500">
            Não tem uma conta?{' '}
            <button onClick={() => router.push('/register')} className="text-blue-600 hover:text-blue-500 font-medium">
              Registre-se aqui
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
