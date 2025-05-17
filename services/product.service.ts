// Serviço para integração com a API de produtos
import api from '@/lib/api';

export const productService = {
  /**
   * Obtém lista de produtos
   * @param appId ID do app (opcional)
   * @returns Resposta da API com lista de produtos
   */
  async getProducts(appId?: string) {
    try {
      const url = appId ? `/products?appId=${appId}` : '/products';
      const response = await api.get(url);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao obter produtos'
      };
    }
  },

  /**
   * Obtém detalhes de um produto específico
   * @param id ID do produto
   * @returns Resposta da API com detalhes do produto
   */
  async getProduct(id: string) {
    try {
      const response = await api.get(`/products/${id}`);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao obter detalhes do produto'
      };
    }
  },

  /**
   * Cria um novo produto
   * @param productData Dados do produto
   * @returns Resposta da API com o produto criado
   */
  async createProduct(productData: any) {
    try {
      const response = await api.post('/products', productData);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao criar produto'
      };
    }
  },

  /**
   * Atualiza um produto existente
   * @param id ID do produto
   * @param productData Dados atualizados do produto
   * @returns Resposta da API com o produto atualizado
   */
  async updateProduct(id: string, productData: any) {
    try {
      const response = await api.put(`/products/${id}`, productData);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao atualizar produto'
      };
    }
  },

  /**
   * Remove um produto
   * @param id ID do produto
   * @returns Resposta da API
   */
  async deleteProduct(id: string) {
    try {
      const response = await api.delete(`/products/${id}`);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao remover produto'
      };
    }
  },

  /**
   * Obtém produtos associados a um usuário
   * @param userId ID do usuário
   * @returns Resposta da API com lista de produtos do usuário
   */
  async getUserProducts(userId: string) {
    try {
      const response = await api.get(`/users/${userId}/products`);
      return {
        error: false,
        data: response.data.data
      };
    } catch (error: any) {
      return {
        error: true,
        message: error.response?.data?.message || 'Erro ao obter produtos do usuário'
      };
    }
  }
};
