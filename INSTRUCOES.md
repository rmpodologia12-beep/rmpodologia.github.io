# RM Podologia Clínica — Instruções de Publicação

## Estrutura de Pastas

```
rm-podologia/
├── index.html          ← Página principal
├── style.css           ← Estilos (design premium)
├── script.js           ← Comportamentos e animações
└── assets/
    ├── podologa.jpg             ← Foto da Rosel (foto_1.jpg)
    ├── clinica.jpg              ← Fachada da clínica
    ├── logo-banner.jpeg         ← Logo RM Podologia
    ├── depoimento-alexandra.png ← Print do Google (Alexandra)
    ├── depoimento-diana.png     ← Print do Google (Diana)
    └── depoimento-larissa.png   ← Print do Google (Larissa)
```

---

## Opção 1 — Hostinger (Recomendado, mais barato)

1. Acesse https://www.hostinger.com.br e contrate o plano "Starter" (~R$9/mês)
2. Registre um domínio (ex: `rmpodologia.com.br`) — incluso no plano
3. Acesse o **Gerenciador de Arquivos** no painel hPanel
4. Navegue até `public_html/`
5. Faça upload de todos os arquivos mantendo a estrutura acima
6. Pronto! O site estará no ar em instantes.

---

## Opção 2 — Vercel (Grátis, ideal para testes)

1. Crie conta em https://vercel.com (grátis)
2. Instale o Vercel CLI: `npm install -g vercel`
3. Na pasta `rm-podologia/`, execute: `vercel deploy`
4. Siga as instruções no terminal
5. Você receberá um link `.vercel.app` gratuito

---

## Opção 3 — Netlify (Grátis, arrastar e soltar)

1. Acesse https://www.netlify.com e crie conta gratuita
2. No painel, clique em **"Add new site" → "Deploy manually"**
3. Arraste a pasta `rm-podologia/` inteira para a área indicada
4. O site vai ao ar em segundos com link automático
5. Para domínio próprio: Settings → Domain Management → Add custom domain

---

## Domínio Sugerido

- `rmpodologia.com.br` — direto e profissional
- `rmpodologiaclinica.com.br` — variante completa

Registro via: https://registro.br (~R$40/ano)

---

## Personalizar o Mapa

O mapa do Google incorporado usa coordenadas aproximadas. Para precisão:

1. Acesse https://maps.google.com
2. Busque: "Rua Pedro Pereira do Santos, 620, Hortolândia"
3. Clique em **Compartilhar → Incorporar mapa**
4. Copie o código `<iframe ...>`
5. Substitua o `<iframe>` dentro da `<div class="contato__map">` no `index.html`

---

## SEO — Para melhorar ainda mais

- Crie e verifique o **Google Meu Negócio**: https://business.google.com
- Adicione o site lá (Category: Podólogo)
- Peça às clientes para avaliar com 5 estrelas no Google
- Instale o **Google Search Console** (gratuito) para monitorar buscas
- Para analytics de visitas: https://analytics.google.com

---

## Atualizar Informações

Todos os dados editáveis estão claramente identificados no `index.html`:
- **Telefone/WhatsApp**: busque `5519971658654` e substitua pelo novo
- **Instagram**: busque `@rmpodologia12` e substitua
- **Endereço**: busque `Rua Pedro Pereira do Santos` e substitua
- **Serviços**: seção `id="servicos"` — edite os cards conforme necessário
- **Fotos**: substitua os arquivos na pasta `assets/` pelos novos (mesmo nome)

---

## Suporte Técnico

Para dúvidas de hospedagem, cada plataforma oferece chat ao vivo:
- Hostinger: chat 24h em português
- Netlify: https://answers.netlify.com
- Vercel: https://vercel.com/support
