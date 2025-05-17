// Serviço para integração com a API de comunidade
import api from '@/lib/api';

export const communityService = {
  /**
   * Obtém lista de posts da comunidade
   * @param appId ID do app (opcional)
   * @returns Resposta da API com lista de posts
   */
  async getPosts(appId?: string) {
    try {
      const url = appId ? `/community/posts?appId=${appId}` : '/community/posts';
      const response = await api.get(url);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao obter posts da comunidade'
      };
    }
  },

  /**
   * Obtém detalhes de um post específico
   * @param id ID do post
   * @returns Resposta da API com detalhes do post
   */
  async getPost(id: string) {
    try {
      const response = await api.get(`/community/posts/${id}`);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao obter detalhes do post'
      };
    }
  },

  /**
   * Cria um novo post na comunidade
   * @param postData Dados do post
   * @returns Resposta da API com o post criado
   */
  async createPost(postData: any) {
    try {
      const response = await api.post('/community/posts', postData);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao criar post'
      };
    }
  },

  /**
   * Atualiza um post existente
   * @param id ID do post
   * @param postData Dados atualizados do post
   * @returns Resposta da API com o post atualizado
   */
  async updatePost(id: string, postData: any) {
    try {
      const response = await api.put(`/community/posts/${id}`, postData);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao atualizar post'
      };
    }
  },

  /**
   * Remove um post
   * @param id ID do post
   * @returns Resposta da API
   */
  async deletePost(id: string) {
    try {
      const response = await api.delete(`/community/posts/${id}`);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao remover post'
      };
    }
  },

  /**
   * Obtém comentários de um post
   * @param postId ID do post
   * @returns Resposta da API com lista de comentários
   */
  async getComments(postId: string) {
    try {
      const response = await api.get(`/community/posts/${postId}/comments`);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao obter comentários'
      };
    }
  },

  /**
   * Adiciona um comentário a um post
   * @param postId ID do post
   * @param commentData Dados do comentário
   * @returns Resposta da API com o comentário criado
   */
  async addComment(postId: string, commentData: any) {
    try {
      const response = await api.post(`/community/posts/${postId}/comments`, commentData);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao adicionar comentário'
      };
    }
  },

  /**
   * Remove um comentário
   * @param postId ID do post
   * @param commentId ID do comentário
   * @returns Resposta da API
   */
  async deleteComment(postId: string, commentId: string) {
    try {
      const response = await api.delete(`/community/posts/${postId}/comments/${commentId}`);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao remover comentário'
      };
    }
  }
};
