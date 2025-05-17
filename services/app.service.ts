// Serviço para integração com a API de apps
import api from '@/lib/api';

export const appService = {
  /**
   * Obtém lista de apps do produtor
   * @returns Resposta da API com lista de apps
   */
  async getApps() {
    try {
      const response = await api.get('/apps');
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao obter apps'
      };
    }
  },

  /**
   * Obtém detalhes de um app específico
   * @param id ID do app
   * @returns Resposta da API com detalhes do app
   */
  async getApp(id: string) {
    try {
      const response = await api.get(`/apps/${id}`);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao obter detalhes do app'
      };
    }
  },

  /**
   * Cria um novo app
   * @param appData Dados do app
   * @returns Resposta da API com o app criado
   */
  async createApp(appData: any) {
    try {
      const response = await api.post('/apps', appData);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao criar app'
      };
    }
  },

  /**
   * Atualiza um app existente
   * @param id ID do app
   * @param appData Dados atualizados do app
   * @returns Resposta da API com o app atualizado
   */
  async updateApp(id: string, appData: any) {
    try {
      const response = await api.put(`/apps/${id}`, appData);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao atualizar app'
      };
    }
  },

  /**
   * Remove um app
   * @param id ID do app
   * @returns Resposta da API
   */
  async deleteApp(id: string) {
    try {
      const response = await api.delete(`/apps/${id}`);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao remover app'
      };
    }
  },

  /**
   * Configura domínio personalizado para um app
   * @param id ID do app
   * @param domain Domínio personalizado
   * @returns Resposta da API
   */
  async setCustomDomain(id: string, domain: string) {
    try {
      const response = await api.post(`/apps/${id}/domain`, { domain });
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao configurar domínio personalizado'
      };
    }
  }
};
