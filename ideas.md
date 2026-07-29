# Direção de Design — Especialista em Disaster Recovery

## Três abordagens consideradas

| Tema | Breve introdução | Probabilidade |
| --- | --- | --- |
| Sala de Comando Serena | Uma estética de centro operacional que substitui o pânico visual por sinais de controle, clareza e prontidão. | 0,07 |
| Prevenção de Precisão | Uma linguagem editorial de engenharia corporativa: tipografia marcante, elementos de diagnóstico e espaços planejados que comunicam método antes de promessa. | 0,04 |
| Cofre de Continuidade | Um sistema visual sóbrio, inspirado em cofres físicos e arquitetura institucional, para enfatizar proteção, permanência e confiança. | 0,09 |

## Abordagem escolhida: Prevenção de Precisão

### Movimento de design

**Editorial técnico de inspiração suíça**, reinterpretado para uma consultoria brasileira de infraestrutura crítica. A página deve parecer uma leitura de risco bem estruturada, e não uma vitrine genérica de tecnologia.

### Princípios centrais

1. **Clareza antes de ornamentação:** cada bloco visual deve explicar prevenção, resposta ou continuidade com máxima legibilidade.
2. **Tensão controlada:** indicadores, linhas de status e contrastes densos remetem a ambientes operacionais, sem recorrer ao visual cyberpunk.
3. **Autoridade humana:** o especialista é apresentado como responsável técnico acessível, com área preparada para uma fotografia profissional fornecida pelo cliente.
4. **Conversão sem pressão:** CTAs firmes, específicos e orientados à redução de risco; nunca genéricos ou agressivos.

### Filosofia de cor

O azul-marinho profundo representa a infraestrutura que precisa permanecer estável. O branco mineral cria o espaço de auditoria e diagnóstico. Um verde-água de alta visibilidade é reservado exclusivamente a sinais de prontidão, continuidade e ação confirmada; ele funciona como uma assinatura operacional, não como decoração.

### Paradigma de layout

Uma sequência de **faixas operacionais assimétricas**: a esquerda sustenta contexto, risco e narrativa; a direita concentra painéis, diagramas e conversão. Linhas verticais e rótulos de sistema atravessam as seções para criar continuidade sem depender de uma grade centralizada convencional.

### Elementos de assinatura

1. Uma linha de pulso verde-água que percorre a página como sinal de disponibilidade monitorada.
2. Rótulos monoespaçados de status e coordenadas de seção, inspirados em runbooks de operações.
3. Cartões com recortes de canto e sombras precisas, remetendo a relatórios de auditoria técnica.

### Filosofia de interação

As interações devem reforçar previsibilidade: links e botões revelam direção com transições curtas; cards elevam levemente e atualizam seu indicador de status; CTAs direcionam à avaliação técnica, não a uma compra impulsiva.

### Animação

As animações devem ser discretas e funcionais. O traço de pulso pode se deslocar lentamente no hero; indicadores aparecem com atraso sequencial de 40–60 ms; elementos de entrada usam apenas opacidade e pequena translação, em até 280 ms. O layout respeitará `prefers-reduced-motion` e não terá animações em campos de formulário ou navegação por teclado.

### Sistema tipográfico

**Manrope** será usada em títulos, com pesos 600–800 e rastreamento levemente negativo para autoridade objetiva. **IBM Plex Mono** será usada em rótulos de status, números, tags e microcopy técnica. O texto corrido usa Manrope em peso 400–500, com largura de leitura confortável e entrelinha generosa.

### Essência da marca

**Uma consultoria especializada que transforma a recuperação de desastres em uma operação continuamente verificada para empresas que não podem parar.**

Personalidade: **metódica, segura e presente**.

### Voz da marca

Os títulos devem ser diretos e sustentados por consequência operacional. Os CTAs soam como um próximo passo técnico e objetivo. A microcopy reforça escopo, acompanhamento e transparência; não usa clichês promocionais.

Exemplos: “Você não descobre uma falha quando ela já interrompeu a operação.”

“Vamos identificar o que ainda pode interromper o seu negócio.”

### Logotipo e símbolo

O símbolo é um **núcleo de continuidade**: três faixas angulares envolvem um ponto central, sugerindo backup, recuperação e monitoramento em ciclo fechado. O wordmark será composto em caixa baixa, com um ponto verde-água de status antes do nome.

### Cor de assinatura

**Verde Sinal `#4FE0B6`** — uma cor reservada para disponibilidade, confirmação e ação de continuidade.

## Observação de conteúdo

O material fornecido recomenda fortemente o uso de uma fotografia real e profissional do especialista. A interface incluirá uma área visual de destaque pronta para receber essa imagem, mas não apresentará uma pessoa gerada ou de banco de imagens como se fosse o profissional real. Após o envio da foto, ela poderá substituir o espaço reservado sem alterar o layout.

## Style Decisions

- **Verde Sinal `#4FE0B6` não será empregado como campo amplo de fundo.** Seu uso fica reservado a ação, prontidão, validação, linhas de pulso, pontos de status e indicadores operacionais.
- **Os visuais deverão ser diagnósticos ou infraestruturais.** Diagramas de auditoria, mapas de continuidade, sequências de recuperação, ambientes técnicos e a foto real do especialista têm precedência sobre abstrações decorativas.
- **Cada seção principal se conecta a um eixo operacional contínuo.** O trilho de diagnóstico, com coordenada e ponto de status, percorre o fluxo risco → solução → método → contato para reforçar a ideia de continuidade verificada.
