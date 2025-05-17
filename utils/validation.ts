// Utilitário para validação de formulários
export const validateForm = {
  /**
   * Valida se um campo está preenchido
   * @param value Valor do campo
   * @returns Mensagem de erro ou null se válido
   */
  required(value: any): string | null {
    if (value === undefined || value === null || value === '') {
      return 'Este campo é obrigatório';
    }
    return null;
  },

  /**
   * Valida se um email é válido
   * @param value Email para validar
   * @returns Mensagem de erro ou null se válido
   */
  email(value: string): string | null {
    if (!value) return null;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return 'Email inválido';
    }
    return null;
  },

  /**
   * Valida comprimento mínimo de uma string
   * @param value String para validar
   * @param min Comprimento mínimo
   * @returns Mensagem de erro ou null se válido
   */
  minLength(value: string, min: number): string | null {
    if (!value) return null;
    
    if (value.length < min) {
      return `Deve ter pelo menos ${min} caracteres`;
    }
    return null;
  },

  /**
   * Valida comprimento máximo de uma string
   * @param value String para validar
   * @param max Comprimento máximo
   * @returns Mensagem de erro ou null se válido
   */
  maxLength(value: string, max: number): string | null {
    if (!value) return null;
    
    if (value.length > max) {
      return `Deve ter no máximo ${max} caracteres`;
    }
    return null;
  },

  /**
   * Valida se uma URL é válida
   * @param value URL para validar
   * @returns Mensagem de erro ou null se válido
   */
  url(value: string): string | null {
    if (!value) return null;
    
    try {
      new URL(value);
      return null;
    } catch (e) {
      return 'URL inválida';
    }
  },

  /**
   * Valida se um valor é um número
   * @param value Valor para validar
   * @returns Mensagem de erro ou null se válido
   */
  number(value: any): string | null {
    if (!value) return null;
    
    if (isNaN(Number(value))) {
      return 'Deve ser um número';
    }
    return null;
  },

  /**
   * Valida se duas senhas coincidem
   * @param password Senha
   * @param confirmPassword Confirmação de senha
   * @returns Mensagem de erro ou null se válido
   */
  passwordsMatch(password: string, confirmPassword: string): string | null {
    if (!password || !confirmPassword) return null;
    
    if (password !== confirmPassword) {
      return 'As senhas não coincidem';
    }
    return null;
  }
};
