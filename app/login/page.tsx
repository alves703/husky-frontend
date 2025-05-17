// COMPONENTES DE DESIGN E APARÊNCIA DO HUSKY APP

// ===== LAYOUT PRINCIPAL DA PÁGINA DE LOGIN =====
<div className="min-h-screen flex items-center justify-center bg-blue-50 bg-gradient-to-br from-blue-50 to-white p-4">
  <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 relative overflow-hidden">
    {/* Conteúdo do card de login */}
  </div>
</div>

// ===== CABEÇALHO COM LOGO E TÍTULO =====
<div className="text-center mb-8">
  <div className="flex justify-center mb-2">
    <svg className="w-12 h-12 text-blue-600" viewBox="0 0 100 100" fill="currentColor">
      <path d="M50,0 L70,20 L90,0 L90,40 L70,60 L50,40 L30,60 L10,40 L10,0 L30,20 Z" />
      <circle cx="30" cy="25" r="5" fill="white" />
      <circle cx="70" cy="25" r="5" fill="white" />
      <path d="M40,45 C40,45 45,55 50,55 C55,55 60,45 60,45" stroke="white" strokeWidth="3" fill="none" />
    </svg>
  </div>
  <h1 className="text-5xl font-bold text-gray-900 mb-2">HuskyApp</h1>
  <p className="text-gray-600">Acesse sua conta administrativa</p>
</div>

// ===== CAMPO DE EMAIL COM ÍCONE =====
<div className="mb-4 relative">
  <div className="flex items-center border border-green-500 rounded-md overflow-hidden">
    <div className="pl-3 pr-2 text-gray-400">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </div>
    <input
      type="email"
      className="w-full py-3 px-2 outline-none"
      placeholder="Digite seu email"
      required
    />
  </div>
</div>

// ===== CAMPO DE SENHA COM ÍCONE E BOTÃO DE MOSTRAR/OCULTAR =====
<div className="mb-2 relative">
  <div className="flex items-center border border-blue-500 rounded-md overflow-hidden">
    <div className="pl-3 pr-2 text-gray-400">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    </div>
    <input
      type="password"
      className="w-full py-3 px-2 outline-none"
      placeholder="Digite sua senha"
      required
    />
    <button
      type="button"
      className="px-3 text-gray-400 hover:text-gray-600"
    >
      {/* Ícone de olho aberto */}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    </button>
  </div>
</div>

// ===== LINK "ESQUECEU A SENHA" =====
<div className="text-right mb-4">
  <a href="#" className="text-purple-600 text-sm hover:underline">Esqueceu a senha?</a>
</div>

// ===== MENSAGEM DE ERRO =====
<div className="mb-4 p-2 bg-red-50 text-red-600 text-sm rounded">
  Mensagem de erro aqui
</div>

// ===== BOTÃO DE ENTRAR =====
<button
  type="submit"
  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-colors font-medium"
>
  Entrar
</button>

// ===== BOTÃO DE ENTRAR COM LOADING =====
<button
  type="submit"
  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-colors font-medium"
  disabled
>
  <div className="flex items-center justify-center">
    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    Entrando...
  </div>
</button>

// ===== RODAPÉ COM INFORMAÇÕES E LINK DE REGISTRO =====
<div className="mt-6 text-center">
  <p className="text-gray-600 text-sm">Área restrita apenas para administradores</p>
  <div className="mt-2 text-sm">
    <span className="text-gray-600">Não tem uma conta? </span>
    <button 
      className="text-blue-600 hover:underline font-medium"
    >
      Registre-se aqui
    </button>
  </div>
</div>

// ===== AJUSTES RECOMENDADOS PARA O LOGO =====
// Problema: Logo SVG muito grande
// Solução: Ajustar o tamanho do SVG para ser proporcional

// Opção 1: Reduzir o tamanho do SVG diretamente
<svg className="w-12 h-12 text-blue-600" viewBox="0 0 100 100" fill="currentColor">
  <!-- conteúdo do SVG -->
</svg>

// Opção 2: Usar classes mais restritivas
<svg className="w-10 h-10 text-blue-600" viewBox="0 0 100 100" fill="currentColor">
  <!-- conteúdo do SVG -->
</svg>

// Opção 3: Usar container com tamanho fixo
<div className="w-10 h-10">
  <svg className="w-full h-full text-blue-600" viewBox="0 0 100 100" fill="currentColor">
    <!-- conteúdo do SVG -->
  </svg>
</div>
