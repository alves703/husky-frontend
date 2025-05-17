// Serviço para integração com a API de notificações
import api from '@/lib/api';

export const notificationService = {
  /**
   * Obtém lista de notificações
   * @param appId ID do app (opcional)
   * @returns Resposta da API com lista de notificações
   */
  async getNotifications(appId?: string) {
    try {
      const url = appId ? `/notifications?appId=${appId}` : '/notifications';
      const response = await api.get(url);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao obter notificações'
      };
    }
  },

  /**
   * Obtém detalhes de uma notificação específica
   * @param id ID da notificação
   * @returns Resposta da API com detalhes da notificação
   */
  async getNotification(id: string) {
    try {
      const response = await api.get(`/notifications/${id}`);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao obter detalhes da notificação'
      };
    }
  },

  /**
   * Cria uma nova notificação
   * @param notificationData Dados da notificação
   * @returns Resposta da API com a notificação criada
   */
  async createNotification(notificationData: any) {
    try {
      const response = await api.post('/notifications', notificationData);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao criar notificação'
      };
    }
  },

  /**
   * Atualiza uma notificação existente
   * @param id ID da notificação
   * @param notificationData Dados atualizados da notificação
   * @returns Resposta da API com a notificação atualizada
   */
  async updateNotification(id: string, notificationData: any) {
    try {
      const response = await api.put(`/notifications/${id}`, notificationData);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao atualizar notificação'
      };
    }
  },

  /**
   * Remove uma notificação
   * @param id ID da notificação
   * @returns Resposta da API
   */
  async deleteNotification(id: string) {
    try {
      const response = await api.delete(`/notifications/${id}`);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao remover notificação'
      };
    }
  },

  /**
   * Agenda uma notificação para data futura
   * @param id ID da notificação
   * @param scheduleDate Data de agendamento
   * @returns Resposta da API
   */
  async scheduleNotification(id: string, scheduleDate: string) {
    try {
      const response = await api.post(`/notifications/${id}/schedule`, { scheduleDate });
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao agendar notificação'
      };
    }
  },

  /**
   * Envia uma notificação imediatamente
   * @param id ID da notificação
   * @returns Resposta da API
   */
  async sendNotification(id: string) {
    try {
      const response = await api.post(`/notifications/${id}/send`);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao enviar notificação'
      };
    }
  }
};
