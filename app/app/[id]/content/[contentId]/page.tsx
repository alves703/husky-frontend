'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ContentPage({ params }: { params: { id: string, contentId: string } }) {
  const router = useRouter();
  const { id, contentId } = params;
  const [content, setContent] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar autenticação
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    // Carregar dados do conteúdo
    const fetchContentData = async () => {
      try {
        // Simulação de chamada à API
        setTimeout(() => {
          setContent({
            id: contentId,
            title: 'SEO Avançado - Aula 1',
            type: 'video',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            description: 'Nesta aula, você aprenderá os fundamentos avançados de SEO para melhorar o ranqueamento do seu site nos motores de busca.',
            image: 'https://via.placeholder.com/800x450',
            attachments: 'Material complementar, Slides da aula'
          });
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Erro ao carregar dados do conteúdo:', error);
        setIsLoading(false);
      }
    };

    fetchContentData();
  }, [contentId, id, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando conteúdo...</p>
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
            <button
              onClick={() => router.push(`/app/${id}`)}
              className="mr-3"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <h1 className="text-xl font-bold">{content?.title || 'Conteúdo'}</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {content?.type === 'video' && (
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={content.url}
                title={content.title}
                className="w-full h-96"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}

          {content?.type === 'pdf' && (
            <div className="p-4 bg-gray-100 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="mt-2 text-gray-700">Documento PDF</p>
              <a
                href={content.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 bg-red-600 text-white rounded text-sm font-medium hover:bg-red-700"
              >
                Baixar PDF
              </a>
            </div>
          )}

          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{content?.title}</h2>
            <p className="text-gray-700 mb-6">{content?.description}</p>

            {content?.attachments && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Material Complementar</h3>
                <div className="bg-gray-50 p-4 rounded border">
                  <ul className="space-y-2">
                    {content.attachments.split(',').map((attachment: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700">{attachment.trim()}</span>
                        <a href="#" className="ml-2 text-blue-600 hover:underline text-sm">Baixar</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <div className="mt-8 flex justify-between">
              <button
                onClick={() => router.push(`/app/${id}`)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded text-sm font-medium hover:bg-gray-300"
              >
                Voltar para o app
              </button>
              <button
                onClick={() => {
                  // Marcar como concluído (simulação)
                  alert('Conteúdo marcado como concluído!');
                }}
                className="px-4 py-2 bg-green-600 text-white rounded text-sm font-medium hover:bg-green-700"
              >
                Marcar como concluído
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
