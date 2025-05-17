'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AppPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { id } = params;
  const [app, setApp] = useState<any>(null);
  const [feedItems, setFeedItems] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('feed');

  useEffect(() => {
    // Verificar autenticação
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    // Carregar dados do app
    const fetchAppData = async () => {
      try {
        // Simulação de chamada à API
        setTimeout(() => {
          setApp({
            id,
            name: 'Curso de Marketing Digital',
            logo: 'https://via.placeholder.com/150',
            primaryColor: '#3B82F6',
            secondaryColor: '#6366F1',
            supportType: 'whatsapp',
            supportContact: '+5511999999999'
          });

          setFeedItems([
            {
              id: '1',
              title: 'Bem-vindo ao curso!',
              content: 'Estamos muito felizes em ter você como aluno. Neste curso, você aprenderá tudo sobre marketing digital, desde o básico até estratégias avançadas.',
              image: 'https://via.placeholder.com/800x400',
              createdAt: new Date().toISOString()
            },
            {
              id: '2',
              title: 'Nova aula disponível',
              content: 'Acabamos de liberar a aula sobre SEO. Não perca!',
              link: `/app/${id}/content/2`,
              createdAt: new Date(Date.now() - 86400000).toISOString()
            },
            {
              id: '3',
              title: 'Webinar exclusivo',
              content: 'Na próxima semana teremos um webinar exclusivo sobre tráfego pago. Inscreva-se agora!',
              image: 'https://via.placeholder.com/800x400',
              link: 'https://example.com/webinar',
              createdAt: new Date(Date.now() - 172800000).toISOString()
            }
          ]);

          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Erro ao carregar dados do app:', error);
        setIsLoading(false);
      }
    };

    fetchAppData();
  }, [id, router]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* App Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
              <span className="text-blue-600 font-bold text-lg">H</span>
            </div>
            <h1 className="text-xl font-bold">{app?.name || 'App'}</h1>
          </div>
          <button
            onClick={() => router.push('/login')}
            className="px-3 py-1 bg-white text-blue-600 rounded text-sm font-medium hover:bg-gray-100"
          >
            Sair
          </button>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="container mx-auto">
          <div className="flex">
            <button
              onClick={() => setActiveTab('feed')}
              className={`px-4 py-3 font-medium text-sm ${
                activeTab === 'feed'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Feed
            </button>
            <button
              onClick={() => setActiveTab('contents')}
              className={`px-4 py-3 font-medium text-sm ${
                activeTab === 'contents'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Conteúdos
            </button>
            <button
              onClick={() => setActiveTab('community')}
              className={`px-4 py-3 font-medium text-sm ${
                activeTab === 'community'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Comunidade
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto p-4">
        {activeTab === 'feed' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Feed</h2>
            {feedItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow p-4">
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{formatDate(item.createdAt)}</p>
                <p className="text-gray-700 mb-4">{item.content}</p>
                {item.image && (
                  <div className="mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto rounded"
                    />
                  </div>
                )}
                {item.link && (
                  <div className="mt-2">
                    <a
                      href={item.link}
                      className="text-blue-600 hover:underline font-medium"
                      target={item.link.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                    >
                      {item.link.startsWith('http') ? 'Acessar link externo' : 'Ver mais'}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'contents' && (
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Conteúdos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="h-40 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">Introdução ao Marketing Digital</h3>
                  <p className="text-sm text-gray-600 mt-1">Aula 1 - Fundamentos</p>
                  <button
                    onClick={() => router.push(`/app/${id}/content/1`)}
                    className="mt-3 w-full px-4 py-2 bg-blue-600 text-white rounded text-sm font-medium hover:bg-blue-700"
                  >
                    Assistir
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="h-40 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">SEO Avançado</h3>
                  <p className="text-sm text-gray-600 mt-1">Aula 2 - Estratégias</p>
                  <button
                    onClick={() => router.push(`/app/${id}/content/2`)}
                    className="mt-3 w-full px-4 py-2 bg-blue-600 text-white rounded text-sm font-medium hover:bg-blue-700"
                  >
                    Assistir
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="h-40 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">Material Complementar</h3>
                  <p className="text-sm text-gray-600 mt-1">PDF - Guia de Referência</p>
                  <button
                    onClick={() => router.push(`/app/${id}/content/3`)}
                    className="mt-3 w-full px-4 py-2 bg-blue-600 text-white rounded text-sm font-medium hover:bg-blue-700"
                  >
                    Baixar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'community' && (
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Comunidade</h2>
            <div className="bg-white rounded-lg shadow p-4 mb-4">
              <textarea
                className="w-full border rounded p-2 mb-2"
                placeholder="Compartilhe algo com a comunidade..."
                rows={3}
              ></textarea>
              <div className="flex justify-end">
                <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm font-medium hover:bg-blue-700">
                  Publicar
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold">JS</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">João Silva</p>
                    <p className="text-xs text-gray-500">Há 2 dias</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Estou adorando o curso! As dicas de SEO já estão fazendo diferença no meu site.
                </p>
                <div className="flex items-center text-gray-500 text-sm">
                  <button className="flex items-center mr-4 hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    12 curtidas
                  </button>
                  <button className="flex items-center hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    3 comentários
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 font-bold">MC</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Maria Costa</p>
                    <p className="text-xs text-gray-500">Há 5 dias</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Alguém tem dicas para melhorar a taxa de conversão em campanhas de Facebook Ads?
                </p>
                <div className="flex items-center text-gray-500 text-sm">
                  <button className="flex items-center mr-4 hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    8 curtidas
                  </button>
                  <button className="flex items-center hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    5 comentários
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Support Button */}
      <div className="fixed bottom-6 right-6">
        <button className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
