![Preview do Projeto](./imgnext.webp)

# 🚀 Projeto Next.js — Estudo e Prática

Este projeto foi criado com o objetivo de **aprender e praticar Next.js**, explorando conceitos fundamentais do framework, como estrutura de pastas, execução em ambiente de desenvolvimento e boas práticas básicas de setup.

> ⚠️ Observação: Este é um projeto de estudo. Estou em nível **júnior/iniciante em Next.js**, e o foco é aprendizado contínuo.

---

## 🛠️ Tecnologias Utilizadas

- **Next.js**
- **React**
- **Node.js**
- **NPM**
- **Git**

---

## 📦 Criando o Projeto

O projeto foi iniciado utilizando o gerador oficial do Next.js:

```bash
npx create-next-app <nome-do-projeto>
```

---

## ▶️ Rodando o Projeto Localmente

Após instalar as dependências, execute:

```bash
npm run dev
```
O projeto ficará disponível em:
```
http://localhost:3000
```
---
## 📥 Clonando o Repositório

Para clonar o projeto:

```bash 
git clone <url_do_repositorio>
``` 

Em seguida, acesse a pasta do projeto:
```bash 
cd <nome-do-projeto>
```

----

## ⚙️ Instalando Dependências
🔹 Caso exista o arquivo package-lock.json

Utilize:

```bash
npm ci
```

Quando usar npm ci?

    → Sempre que clonar um repositório    

    → Sempre que trocar de branch

    → Quando ocorrerem erros do tipo:
        "Cannot find module"

    → Dependências inconsistentes

💡 O npm ci garante uma instalação limpa e fiel ao package-lock.json.

---

## 🔐 Configuração de Variáveis de Ambiente

O projeto utiliza variáveis de ambiente.

Para criar o arquivo .env, execute:
```bash
npm run setup-env
```
Após isso, revise o arquivo .env e preencha as variáveis necessárias conforme o ambiente.

----


# Config essencial pra auxiliar o desenvolvimento com react e NextJS

Abra as configurações apertando: 
```bash
Ctrl + Shift + P
```

Digite: Preferences: Open Settings (JSON)

Cole isso:

```bash
{
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "typescript": "typescriptreact"
  }
}
```


---

Video aula:

Link:
https://www.youtube.com/watch?v=iWpLD2wTsZ4&list=PLnDvRpP8BnezfJcfiClWskFOLODeqI_Ft&index=13
