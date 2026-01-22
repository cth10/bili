# 🎌 Bilibili Brasil - Guia de Desenvolvimento

## ✅ Setup Completo

As dependências foram instaladas automaticamente. Você agora tem tudo pronto para:

### 1️⃣ **Rodar Localmente**
```bash
npm run dev
```
- Abre automaticamente em http://localhost:5173
- Hot reload: mudanças são refletidas em tempo real
- Perfeito para desenvolvimento

### 2️⃣ **Fazer Build (Compilar)**
```bash
npm run build
```
- Gera a versão otimizada em `dist/`
- CSS e JS são minificados
- Pronto para produção

### 3️⃣ **Visualizar Build**
```bash
npm run preview
```
- Testa o build compilado localmente
- Simula o ambiente de produção

## 📝 Como Alterar o Site

1. **Editar HTML**: Modifique `index.html`
2. **Editar CSS**: Crie/modifique arquivos em `assets/` 
3. **Editar Imagens**: Adicione em `assets/` e referencie no HTML
4. **Recarregar**: Em dev mode, salve e o site atualiza automaticamente

### Exemplo: Adicionar novo CSS
```html
<link rel="stylesheet" href="./seu-arquivo.css">
```

### Exemplo: Adicionar novo JavaScript
```html
<script type="module" src="./seu-arquivo.js"></script>
```

## 🚀 Deploy (GitHub Pages)

O projeto usa GitHub Pages com domínio `bilibili.com.br` (arquivo CNAME).

### Passos:
1. **Fazer build**:
   ```bash
   npm run build
   ```

2. **Enviar para Git**:
   ```bash
   git add .
   git commit -m "Description da alteração"
   git push origin main
   ```

3. **Configurar GitHub Pages**:
   - Vá em: Settings → Pages
   - Selecione branch: `main` (ou `gh-pages` se usar)
   - Selecione pasta: `/root` ou `/dist` (dependendo da config)
   - Domain: `bilibili.com.br` já está configurado no CNAME

## 📦 Estrutura

```
bili/
├── index.html          # Página principal
├── assets/             # CSS, JS, imagens compilados
├── package.json        # Dependências do projeto
├── vite.config.ts      # Configuração do Vite
├── tsconfig.json       # Configuração TypeScript
├── CNAME               # Domínio customizado
├── robots.txt          # SEO
├── sitemap.xml         # SEO
└── .git/               # Histórico Git
```

## 🐛 Troubleshooting

**Porta 5173 já em uso?**
```bash
npm run dev -- --port 3000
```

**Problemas com node_modules?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Commitso não aparecem?**
```bash
git status          # Verificar mudanças
git log --oneline  # Ver commits
```

## 📚 Links Úteis
- [Vite Docs](https://vitejs.dev)
- [GitHub Pages](https://pages.github.com)
- [SEO Meta Tags](https://metatags.io)

---
**Tudo pronto! Comece com `npm run dev` 🚀**
