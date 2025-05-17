'use client';

import React, { useState } from 'react';
import Image from 'next/image';
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
      // Simulação de login bem-sucedido
      setTimeout(() => {
        // Armazenar token e dados do usuário
        localStorage.setItem('token', 'sample-jwt-token');
        localStorage.setItem('user', JSON.stringify({
          id: '1',
          name: 'Administrador',
          email: email,
          role: 'admin'
        }));
        
        // Redirecionar para o dashboard
        router.push('/dashboard');
      }, 1000);
    } catch (err) {
      setError('Credenciais inválidas. Por favor, tente novamente.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 bg-gradient-to-br from-blue-50 to-white p-4">
      <div style={{maxWidth: '400px', width: '100%', backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', padding: '2rem', position: 'relative', overflow: 'hidden'}} className="w-full max-w-md !max-w-md bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-2">
            <div style={{width: '70px', height: '70px', maxWidth: '70px', maxHeight: '70px'}}>
              <svg style={{width: '70px', height: '70px', maxWidth: '70px', maxHeight: '70px'}} className="text-blue-600" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50,0 L70,20 L90,0 L90,40 L70,60 L50,40 L30,60 L10,40 L10,0 L30,20 Z" />
                <circle cx="30" cy="25" r="5" fill="white" />
                <circle cx="70" cy="25" r="5" fill="white" />
                <path d="M40,45 C40,45 45,55 50,55 C55,55 60,45 60,45" stroke="white" strokeWidth="3" fill="none" />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">HuskyApp</h1>
          <p className="text-gray-600 text-sm">Acesse sua conta administrativa</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-4 relative">
            <div className="flex items-center border border-green-500 rounded-md overflow-hidden">
              <div className="pl-3 pr-2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px', maxWidth: '20px', maxHeight: '20px'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input
                type="email"
                className="w-full py-3 px-2 outline-none"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-2 relative">
            <div className="flex items-center border border-blue-500 rounded-md overflow-hidden">
              <div className="pl-3 pr-2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px', maxWidth: '20px', maxHeight: '20px'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full py-3 px-2 outline-none"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="px-3 text-gray-400 hover:text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px', maxWidth: '20px', maxHeight: '20px'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px', maxWidth: '20px', maxHeight: '20px'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="text-right mb-4">
            <a href="#" className="text-purple-600 text-sm hover:underline">Esqueceu a senha?</a>
          </div>

          {error && (
            <div className="mb-4 p-2 bg-red-50 text-red-600 text-sm rounded">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-colors font-medium"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2" style={{width: '16px', height: '16px', maxWidth: '16px', maxHeight: '16px'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Entrando...
              </div>
            ) : (
              'Entrar'
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">Área restrita apenas para administradores</p>
          <div className="mt-2 text-sm">
            <span className="text-gray-600">Não tem uma conta? </span>
            <button 
              onClick={() => router.push('/register')}
              className="text-blue-600 hover:underline font-medium"
            >
              Registre-se aqui
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
