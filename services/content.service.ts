// Serviço para integração com a API de conteúdos
import api from '@/lib/api';

export const contentService = {
  /**
   * Obtém lista de conteúdos
   * @param productId ID do produto (opcional)
   * @returns Resposta da API com lista de conteúdos
   */
  async getContents(productId?: string) {
    try {
      const url = productId ? `/contents?productId=${productId}` : '/contents';
      const response = await api.get(url);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao obter conteúdos'
      };
    }
  },

  /**
   * Obtém detalhes de um conteúdo específico
   * @param id ID do conteúdo
   * @returns Resposta da API com detalhes do conteúdo
   */
  async getContent(id: string) {
    try {
      const response = await api.get(`/contents/${id}`);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao obter detalhes do conteúdo'
      };
    }
  },

  /**
   * Cria um novo conteúdo
   * @param contentData Dados do conteúdo
   * @returns Resposta da API com o conteúdo criado
   */
  async createContent(contentData: any) {
    try {
      const response = await api.post('/contents', contentData);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao criar conteúdo'
      };
    }
  },

  /**
   * Atualiza um conteúdo existente
   * @param id ID do conteúdo
   * @param contentData Dados atualizados do conteúdo
   * @returns Resposta da API com o conteúdo atualizado
   */
  async updateContent(id: string, contentData: any) {
    try {
      const response = await api.put(`/contents/${id}`, contentData);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao atualizar conteúdo'
      };
    }
  },

  /**
   * Remove um conteúdo
   * @param id ID do conteúdo
   * @returns Resposta da API
   */
  async deleteContent(id: string) {
    try {
      const response = await api.delete(`/contents/${id}`);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao remover conteúdo'
      };
    }
  },

  /**
   * Faz upload de arquivo para um conteúdo
   * @param file Arquivo a ser enviado
   * @returns Resposta da API com URL do arquivo
   */
  async uploadFile(file: File) {
    try {
      const formData = new FormData();
      formData.append('file', file);
      
      const response = await api.post('/contents/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao fazer upload do arquivo'
      };
    }
  }
};
