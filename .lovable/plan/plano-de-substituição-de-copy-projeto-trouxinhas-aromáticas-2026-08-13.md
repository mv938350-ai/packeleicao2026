# Plano de Substituição de Copy - Projeto Trouxinhas Aromáticas

O objetivo é substituir toda a copy da página de vendas atual (focada em "Sachês Aromáticos") pela nova copy focada em "Trouxinhas Aromáticas", conforme solicitado pelo usuário.

## Alterações Planejadas

### 1. Metadados e Configurações (src/routes/index.tsx)
- Atualizar o título do `head()` e a descrição para refletir "Trouxinhas Aromáticas".
- Atualizar constantes de módulos (`modules`), bônus (`bonuses`) e FAQs (`faqs`) com os novos textos.

### 2. Seção 1 - Hero
- **Título (H1):** Novo texto focado em R$300 em vendas e "Trouxinhas Aromáticas".
- **Subtítulo:** Novo texto sobre "sua própria renda, sem precisar pedir dinheiro ao marido".
- **CTA:** "QUERO COMEÇAR MINHA RENDA EXTRA".

### 3. Seção 2 - Resultados
- **Título (H2):** "Elas começaram. Fizeram suas primeiras trouxinhas. E estes são alguns dos resultados."
- **Texto de apoio:** "Você não precisa ser artesã profissional para começar..."
- **Frase final:** "A próxima pode ser a sua."

### 4. Seção 3 - O Que Você Recebe
- **Título (H2):** "Do absoluto zero às suas primeiras Trouxinhas Aromáticas prontas para vender".
- **Descrições dos Módulos (01 a 06):** Atualizar conforme a nova copy.

### 5. Seção 4 - Bônus
- **Título (H2):** "Fazer é só o começo. Agora você precisa saber vender."
- **Detalhamento dos Bônus:** Calculadora do Preço Certo, Catálogo Pronto Para Vender e Primeiros Clientes (incluindo valores e descrições).

### 6. Seção 5 - Oferta
- **Título (H2):** "Escolha como você quer começar".
- **Oferta Simples:** "Quero Aprender a Fazer" (R$ 9,90).
- **Oferta Completa:** "Quero Fazer Para Vender" (R$ 19,90) + lista de benefícios.

### 7. Seção 6 - Pop-up de Upsell (showUpsell)
- **Título:** "Por apenas R$10 a mais..."
- **Pergunta chave:** "Depois que suas primeiras peças estiverem prontas, você vai saber quanto cobrar...?"
- **Benefícios e Preço:** Atualizar para R$ 19,90.

### 8. Seção 7 - Garantia
- **Texto:** Atualizar para "Método Trouxinhas Aromáticas Passo a Passo".

### 9. Seção 8 - FAQ
- Atualizar todas as perguntas e respostas com os novos textos de "Trouxinhas".

### 10. Rodapé
- Atualizar o nome do método para "Método Trouxinhas Aromáticas Passo a Passo".

## Detalhes Técnicos
- Manter a lógica de componentes e estilização Tailwind existente.
- Garantir que a cor lavanda (`#B57EDC`) seja preservada nos destaques, adaptando para o novo texto do H1.
- Manter as referências de imagens (IMG.hero, assets, etc.) intactas, alterando apenas os textos que as acompanham.
- Substituir o termo "Sachês" por "Trouxinhas" em toda a aplicação.

---

### 📊 Relatório de Execução (Prévia)
- **Padrão utilizado:** FEATURE (Global Copy Update)
- **Sub-agentes ativados:** UI Architect, Code Auditor.
- **Resumo:** Reescrita total da copy da página para o novo posicionamento de produto.
