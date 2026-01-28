# Deploy na Vercel

Este é um guia rápido para fazer deploy do site Mitsuri Emotes na Vercel.

## Opção 1: Deploy via CLI (Recomendado)

### Pré-requisitos
- Node.js 18+ instalado
- Conta na Vercel (https://vercel.com)
- Git instalado

### Passos

1. **Instale o Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Faça login na Vercel**
   ```bash
   vercel login
   ```

3. **Deploy do projeto**
   ```bash
   vercel
   ```

4. **Siga as instruções interativas** e escolha as opções padrão

## Opção 2: Deploy via GitHub (Recomendado para atualizações contínuas)

1. **Crie um repositório no GitHub**
   - Vá para https://github.com/new
   - Crie um novo repositório

2. **Faça push do código**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Mitsuri Emotes site"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/seu-repositorio.git
   git push -u origin main
   ```

3. **Conecte à Vercel**
   - Vá para https://vercel.com/new
   - Clique em "Import Git Repository"
   - Selecione seu repositório do GitHub
   - Clique em "Deploy"

## Opção 3: Deploy via Drag & Drop

1. Vá para https://vercel.com/new
2. Clique em "Deploy a new Project"
3. Arraste a pasta do projeto para a área indicada
4. Clique em "Deploy"

## Configurações Importantes

O arquivo `vercel.json` já está configurado com:
- Build command: `pnpm build`
- Output directory: `dist`
- Environment: Production

## Após o Deploy

- Seu site estará disponível em `https://seu-projeto.vercel.app`
- Cada push para o repositório GitHub fará um novo deploy automático
- Você pode configurar um domínio customizado nas configurações do projeto

## Troubleshooting

Se o build falhar:
1. Verifique se todas as dependências estão instaladas: `pnpm install`
2. Teste o build localmente: `pnpm build`
3. Verifique os logs de build na dashboard da Vercel

## Suporte

Para mais informações, visite: https://vercel.com/docs
