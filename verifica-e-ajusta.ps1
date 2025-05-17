$frontendPath = "C:\Users\USUARIO\Desktop\01\husky-frontend"
Set-Location $frontendPath

# 1. Verifica tailwind.config.js
$tailwindConfigPath = Join-Path $frontendPath "tailwind.config.js"
if (Test-Path $tailwindConfigPath) {
    Write-Host "📄 tailwind.config.js encontrado."

    $tailwindContent = Get-Content $tailwindConfigPath -Raw
    if ($tailwindContent -match "app/\*\*/\*\.") {
        Write-Host "✅ Tailwind já parece conter os caminhos corretos."
    } else {
        $res = Read-Host "⚠️ Caminhos incompletos em tailwind.config.js. Deseja atualizar? (s/n)"
        if ($res -eq "s") {
            $novoTailwind = @'
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./contexts/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
'@
            Set-Content -Path $tailwindConfigPath -Value $novoTailwind -Encoding UTF8
            Write-Host "✅ tailwind.config.js atualizado com sucesso."
        }
    }
} else {
    Write-Host "❌ tailwind.config.js NÃO encontrado!"
}

# 2. Verifica layout.tsx e metadata
$layoutPath = Join-Path $frontendPath "app\layout.tsx"
if (Test-Path $layoutPath) {
    Write-Host "📄 layout.tsx encontrado."
    $layoutContent = Get-Content $layoutPath
    if ($layoutContent -match "viewport") {
        Write-Host "✅ metadata.viewport já presente em layout.tsx"
    } else {
        $res = Read-Host "⚠️ metadata.viewport ausente. Deseja adicionar ao final do arquivo? (s/n)"
        if ($res -eq "s") {
            Add-Content $layoutPath "`nexport const metadata = { viewport: { width: 'device-width', initialScale: 1, maximumScale: 1 } };"
            Write-Host "✅ metadata.viewport adicionada."
        }
    }
} else {
    Write-Host "❌ layout.tsx NÃO encontrado!"
}

# 3. Verifica se há pastas de cache para limpar
if (Test-Path ".next") {
    $res = Read-Host "🧹 Deseja remover a pasta .next? (s/n)"
    if ($res -eq "s") {
        Remove-Item -Recurse -Force ".next"
        Write-Host "✅ .next removida."
    }
}
if (Test-Path "node_modules\.cache") {
    $res = Read-Host "🧹 Deseja remover node_modules/.cache? (s/n)"
    if ($res -eq "s") {
        Remove-Item -Recurse -Force "node_modules\.cache"
        Write-Host "✅ .cache removido."
    }
}

# 4. Opcional: Rebuild e start
$res = Read-Host "🚀 Deseja rodar 'npm install', 'build' e iniciar servidor? (s/n)"
if ($res -eq "s") {
    npm install
    npm run build
    npm start
}
