// Serviço para integração com a API de feed
import api from '@/lib/api';

export const feedService = {
  /**
   * Obtém lista de publicações do feed
   * @param appId ID do app (opcional)
   * @returns Resposta da API com lista de publicações
   */
  async getFeedItems(appId?: string) {
    try {
      const url = appId ? `/feed?appId=${appId}` : '/feed';
      const response = await api.get(url);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao obter publicações do feed'
      };
    }
  },

  /**
   * Obtém detalhes de uma publicação específica
   * @param id ID da publicação
   * @returns Resposta da API com detalhes da publicação
   */
  async getFeedItem(id: string) {
    try {
      const response = await api.get(`/feed/${id}`);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao obter detalhes da publicação'
      };
    }
  },

  /**
   * Cria uma nova publicação no feed
   * @param feedData Dados da publicação
   * @returns Resposta da API com a publicação criada
   */
  async createFeedItem(feedData: any) {
    try {
      const response = await api.post('/feed', feedData);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao criar publicação'
      };
    }
  },

  /**
   * Atualiza uma publicação existente
   * @param id ID da publicação
   * @param feedData Dados atualizados da publicação
   * @returns Resposta da API com a publicação atualizada
   */
  async updateFeedItem(id: string, feedData: any) {
    try {
      const response = await api.put(`/feed/${id}`, feedData);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao atualizar publicação'
      };
    }
  },

  /**
   * Remove uma publicação
   * @param id ID da publicação
   * @returns Resposta da API
   */
  async deleteFeedItem(id: string) {
    try {
      const response = await api.delete(`/feed/${id}`);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao remover publicação'
      };
    }
  },

  /**
   * Agenda uma publicação para data futura
   * @param id ID da publicação
   * @param scheduleDate Data de agendamento
   * @returns Resposta da API
   */
  async scheduleFeedItem(id: string, scheduleDate: string) {
    try {
      const response = await api.post(`/feed/${id}/schedule`, { scheduleDate });
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao agendar publicação'
      };
    }
  }
};
