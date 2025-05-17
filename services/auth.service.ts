// Serviço para integração com a API de autenticação
import api from '@/lib/api';

export const authService = {
  /**
   * Realiza login com email e senha
   * @param email Email do usuário
   * @param password Senha do usuário
   * @returns Resposta da API com token e dados do usuário
   */
  async login(email: string, password: string) {
    try {
      const response = await api.post('/auth/login', { email, password });
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao fazer login'
      };
    }
  },

  /**
   * Solicita login facilitado (apenas email)
   * @param email Email do usuário
   * @returns Resposta da API com link de acesso
   */
  async requestEasyLogin(email: string) {
    try {
      const response = await api.post('/auth/easy-login', { email });
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao solicitar login facilitado'
      };
    }
  },

  /**
   * Verifica token de login facilitado
   * @param email Email do usuário
   * @param token Token de acesso
   * @returns Resposta da API com token JWT e dados do usuário
   */
  async verifyEasyLoginToken(email: string, token: string) {
    try {
      const response = await api.post('/auth/verify-token', { email, token });
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao verificar token'
      };
    }
  },

  /**
   * Obtém perfil do usuário autenticado
   * @returns Resposta da API com dados do usuário
   */
  async getProfile() {
    try {
      const response = await api.get('/auth/profile');
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao obter perfil'
      };
    }
  }
};
