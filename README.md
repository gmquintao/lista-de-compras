# 🛒 Aplicação: Lista de Compras

## 📌 Objetivo
Esta aplicação web permite que o usuário crie, edite, marque como concluídos e exclua itens de uma lista de compras de forma simples e organizada.

## 🚀 Como Usar

### ➤ Digite o nome do item
No campo de texto que aparece logo abaixo da imagem da sacola de compras, escreva o nome do produto ou item que deseja adicionar à lista.

### ➤ Clique em “Salvar item”
O item será adicionado automaticamente à lista com:

- ✅ Uma caixa de seleção (checkbox) para marcar como comprado.
- 🖉 A opção de editar o nome do item.
- 🗑 A opção de excluir o item.
- 🕒 A data e hora em que foi adicionado.

### ➤ Marcar como comprado
Marque a caixinha ao lado do item para riscá-lo (indicar que já foi comprado). Desmarcando, ele volta ao normal.

### ➤ Editar o item
Clique no ícone de lápis (🖉) ao lado do item para abrir uma caixa de edição. Altere o texto e confirme para atualizar.

### ➤ Excluir o item
Clique no ícone de lixeira (🗑) para remover o item da lista.

---

## 🧠 Funcionalidades do Código

### 🖼 HTML:
Define a estrutura da página, incluindo o formulário para adicionar novos itens, a lista que será preenchida dinamicamente, e a inclusão dos arquivos CSS e JavaScript.

### 🎨 CSS:
Fornece uma aparência moderna e limpa à aplicação com:

- 🎨 Cores suaves e harmônicas.
- 📐 Layout centralizado e responsivo.
- 🔤 Fontes personalizadas do Google Fonts.
- 🧩 Estilo visual para botões, campos de texto, lista e ícones.

### ⚙️ JavaScript:
Adiciona interatividade à aplicação:

- 📝 Captura o valor digitado e cria um novo item.
- ☑️ Adiciona checkbox para marcar/desmarcar como comprado.
- ✏️ Permite editar ou excluir o item.
- ⏱ Exibe a data e a hora em que o item foi adicionado.
- 🚫 Impede que itens em branco sejam adicionados.
- 🧹 Limpa o campo de entrada após adicionar um item.

---

## 💡 Observações Técnicas

- Cada item é armazenado dinamicamente na lista `<ul>` por meio de manipulação do DOM.
- As ações (adicionar, editar, excluir, riscar) são feitas inteiramente no navegador, sem necessidade de conexão com servidor.
- O uso de `prompt()` para edição é simples, mas pode ser substituído futuramente por uma edição inline para melhor usabilidade.
