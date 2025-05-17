// Serviço para integração com a API de webhooks e integrações
import api from '@/lib/api';

export const webhookService = {
  /**
   * Obtém lista de integrações configuradas
   * @returns Resposta da API com lista de integrações
   */
  async getIntegrations() {
    try {
      const response = await api.get('/webhooks/integrations');
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao obter integrações'
      };
    }
  },

  /**
   * Obtém detalhes de uma integração específica
   * @param id ID da integração
   * @returns Resposta da API com detalhes da integração
   */
  async getIntegration(id: string) {
    try {
      const response = await api.get(`/webhooks/integrations/${id}`);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao obter detalhes da integração'
      };
    }
  },

  /**
   * Configura uma nova integração com plataforma de vendas
   * @param platform Nome da plataforma (hotmart, kiwify, etc)
   * @param configData Dados de configuração
   * @returns Resposta da API com a integração criada
   */
  async setupIntegration(platform: string, configData: any) {
    try {
      const response = await api.post(`/webhooks/integrations/${platform}`, configData);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao configurar integração'
      };
    }
  },

  /**
   * Atualiza uma integração existente
   * @param id ID da integração
   * @param configData Dados atualizados da integração
   * @returns Resposta da API com a integração atualizada
   */
  async updateIntegration(id: string, configData: any) {
    try {
      const response = await api.put(`/webhooks/integrations/${id}`, configData);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao atualizar integração'
      };
    }
  },

  /**
   * Remove uma integração
   * @param id ID da integração
   * @returns Resposta da API
   */
  async deleteIntegration(id: string) {
    try {
      const response = await api.delete(`/webhooks/integrations/${id}`);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao remover integração'
      };
    }
  },

  /**
   * Obtém histórico de eventos de webhook
   * @param integrationId ID da integração (opcional)
   * @returns Resposta da API com histórico de eventos
   */
  async getWebhookEvents(integrationId?: string) {
    try {
      const url = integrationId ? `/webhooks/events?integrationId=${integrationId}` : '/webhooks/events';
      const response = await api.get(url);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao obter eventos de webhook'
      };
    }
  },

  /**
   * Testa a configuração de webhook
   * @param integrationId ID da integração
   * @returns Resposta da API com resultado do teste
   */
  async testWebhook(integrationId: string) {
    try {
      const response = await api.post(`/webhooks/integrations/${integrationId}/test`);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao testar webhook'
      };
    }
  }
};
