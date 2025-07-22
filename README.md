# Quest HTML + CSS + JS Intermediário - Desafio: Formulário com Validação

## 📋 Descrição do Projeto

Este projeto é a resolução do desafio de um formulário com validação, proposto na Quest de HTML + CSS + JS Intermediário. O objetivo principal foi aplicar os conhecimentos adquiridos nos módulos de HTML e CSS avançados, juntamente com JavaScript intermediário, para criar um formulário funcional e visualmente alinhado às especificações de design fornecidas.

## ✨ Funcionalidades Implementadas

### 🎯 Validação do Formulário

A validação foi desenvolvida utilizando **JavaScript puro**, conforme exigido pelo desafio. As principais características da validação incluem:

-   **Campos Obrigatórios:** Ao tentar enviar o formulário, se qualquer campo obrigatório estiver vazio, a borda do `input` ou `textarea` correspondente é alterada para a cor vermelha.
-   **Mensagens de Erro:** Uma mensagem clara de "campo obrigatório" aparece imediatamente abaixo do campo que não foi preenchido, guiando o usuário sobre o que precisa ser corrigido.
-   **Feedback Visual:** Além da borda vermelha para erros, os campos recebem uma borda verde quando preenchidos corretamente, proporcionando um feedback visual positivo ao usuário.
-   **Validação em Tempo Real:** A validação ocorre não apenas no envio, mas também quando o usuário sai de um campo (`blur`) e, em alguns casos, ao digitar, garantindo uma experiência mais fluida.
-   **Validação Específica:** Implementação de validações mais robustas para campos como e-mail (formato válido) e telefone (formato brasileiro básico).
-   **Reset Dinâmico:** As mensagens de erro e as bordas vermelhas desaparecem automaticamente assim que o usuário começa a digitar ou corrige o conteúdo do campo.

### 🎨 Design e Layout

O design do formulário foi cuidadosamente implementado para replicar o modelo fornecido no Figma, com atenção aos detalhes visuais:

-   **Background Personalizado:** O fundo da página utiliza a imagem `bg-repeat.jpg` (localizada na pasta `src/imagens`), criando um padrão visual específico para o formulário.
-   **Gradiente de Cores:** O fundo geral da página apresenta um gradiente de cores que transita entre tons de rosa, roxo e azul, conferindo um visual moderno e atraente.
-   **Estrutura Responsiva:** O layout do formulário é totalmente responsivo, adaptando-se a diferentes tamanhos de tela (desktop, tablet e mobile) para garantir uma experiência de usuário consistente em qualquer dispositivo.
-   **Tipografia:** A fonte `Roboto` foi utilizada em diferentes pesos (400, 700, 900) para garantir legibilidade e hierarquia visual.
-   **Estilo dos Campos:** Os campos de entrada (`input` e `textarea`) possuem bordas arredondadas, padding adequado e uma cor de placeholder específica (`#A8A8A8`) para melhor usabilidade.
-   **Posicionamento:** O texto "*campos obrigatórios" foi ajustado para ficar mais próximo da caixa de mensagem, seguindo a referência visual do Figma.

## 🚀 Como Rodar o Projeto

Para visualizar e testar este projeto localmente, siga os passos abaixo:

1.  **Clone o Repositório:** Se você ainda não clonou, use o comando:
    ```bash
    git clone https://github.com/brunopenna87/formulario-validacao-js.git
    ```
    Substitua `[LINK_DO_SEU_REPOSITORIO]` pelo link do seu repositório GitHub.
2.  **Navegue até a Pasta do Projeto:**
    ```bash
    cd formulario-validacao
    ```
3.  **Abra o `index.html`:** Simplesmente abra o arquivo `index.html` em seu navegador web preferido (Google Chrome, Firefox, Edge, etc.). Você pode fazer isso arrastando o arquivo para a janela do navegador ou clicando duas vezes nele.

## 📂 Estrutura de Arquivos

O projeto segue uma estrutura de pastas organizada para facilitar a manutenção e o desenvolvimento:

```
formulario-validacao/
├── index.html
├── src/
│   ├── css/
│   │   ├── reset.css
│   │   ├── style.css
│   │   └── responsive.css
│    │   └── imagens/
│       └── bg-repeat.jpg
│   ├── js/
│   │   └── painel.js   
└── README.md
```

## 🛠️ Tecnologias Utilizadas

-   **HTML5:** Para a estrutura semântica do formulário.
-   **CSS3:** Para estilização e responsividade (Flexbox, Media Queries).
-   **JavaScript (ES6+):** Para a lógica de validação e interatividade do formulário.
-   **Google Fonts:** Utilização da fonte `Roboto`.

---

Feito com ❤️ por Bruno Penna - brunopenna87
https://www.linkedin.com/in/bruno-cesare-penna-e-costa-77951a6a/

