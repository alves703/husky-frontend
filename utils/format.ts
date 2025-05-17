// Utilitário para formatação de dados
export const formatUtils = {
  /**
   * Formata uma data para exibição
   * @param dateString String de data ISO
   * @returns Data formatada no padrão local
   */
  formatDate(dateString: string): string {
    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }).format(date);
    } catch (error) {
      console.error('Erro ao formatar data:', error);
      return dateString;
    }
  },

  /**
   * Formata uma data com hora para exibição
   * @param dateString String de data ISO
   * @returns Data e hora formatadas no padrão local
   */
  formatDateTime(dateString: string): string {
    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }).format(date);
    } catch (error) {
      console.error('Erro ao formatar data e hora:', error);
      return dateString;
    }
  },

  /**
   * Trunca um texto para um tamanho máximo
   * @param text Texto a ser truncado
   * @param maxLength Tamanho máximo
   * @returns Texto truncado com "..." se necessário
   */
  truncateText(text: string, maxLength: number): string {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  },

  /**
   * Formata um valor monetário
   * @param value Valor numérico
   * @param currency Código da moeda (padrão: BRL)
   * @returns Valor formatado como moeda
   */
  formatCurrency(value: number, currency: string = 'BRL'): string {
    try {
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency
      }).format(value);
    } catch (error) {
      console.error('Erro ao formatar moeda:', error);
      return value.toString();
    }
  }
};
