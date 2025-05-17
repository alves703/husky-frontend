// Utilitário para gerenciamento de tokens e autenticação
export const authUtils = {
  /**
   * Salva o token JWT no localStorage
   * @param token Token JWT
   */
  saveToken(token: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', token);
    }
  },

  /**
   * Obtém o token JWT do localStorage
   * @returns Token JWT ou null se não existir
   */
  getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token');
    }
    return null;
  },

  /**
   * Remove o token JWT do localStorage
   */
  removeToken(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
  },

  /**
   * Salva os dados do usuário no localStorage
   * @param user Dados do usuário
   */
  saveUser(user: any): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(user));
    }
  },

  /**
   * Obtém os dados do usuário do localStorage
   * @returns Dados do usuário ou null se não existir
   */
  getUser(): any | null {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    }
    return null;
  },

  /**
   * Remove os dados do usuário do localStorage
   */
  removeUser(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
    }
  },

  /**
   * Verifica se o usuário está autenticado
   * @returns true se o usuário estiver autenticado, false caso contrário
   */
  isAuthenticated(): boolean {
    return !!this.getToken();
  },

  /**
   * Realiza o logout do usuário
   */
  logout(): void {
    this.removeToken();
    this.removeUser();
  }
};
