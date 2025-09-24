# Cypress - Do Zero à Nuvem 🌩️

Este repositório contém os exercícios e projetos desenvolvidos durante o curso **[Cypress: Do Zero à Nuvem](https://www.udemy.com/course/testes-automatizados-com-cypress-basico/?couponCode=MT250923G3**) da Udemy, ministrado por [Walmyr Filho](https://github.com/wlsf82).

## 📚 Sobre o curso

O curso ensina testes automatizados utilizando Cypress, cobrindo desde os conceitos básicos até práticas mais avançadas com CI, integração com relatórios, e testes em múltiplos navegadores.

## 🚀 O que tem aqui

Este repositório inclui:

- Exercícios práticos de cada módulo do curso
- Scripts de teste com Cypress
- Configuração de ambiente
- Integrações com CI/CD (GitHub Actions)
- Relatórios com Mochawesome
- Testes em múltiplos navegadores

 ## 📦 Pré-requisitos
- Node.js v20.13.1 ou acima
- Cypress 13.12.0
![Cypress](https://img.shields.io/badge/tested%20with-Cypress-00b6f1.svg)

  
## 👩‍💻 Minha experiência

Este repositório é um reflexo da minha jornada de aprendizado com Cypress. Fiz este fork para acompanhar meu progresso e registrar os exercícios que desenvolvi.

## 🔧 Como executar os testes

1. Instale as dependências do projeto (incluindo o Cypress):
```bash
npm install
```
2. Execute os testes no modo interativo (GUI):
```bash
npm run cy:open
```
3. Execute os testes no modo headless (linha de comando):
```bash
npm test
```
4. Teste com viewport mobile:
```bash
npm run cy:open:mobile
# ou
npm run test:mobile
```
5. Para rodar testes na nuvem (Cypress Cloud):
```bash
npm run test:cloud
```
---

## 📂 Organização dos testes

Os testes estão organizados na pasta `cypress/e2e/`, de acordo com os módulos e exercícios propostos no curso.

---

## 🤝 Créditos

Este repositório é um fork do projeto original do curso e todos os créditos do conteúdo pertencem a [Walmyr Filho](https://github.com/wlsf82) e à [Escola Talking About Testing](https://talkingabouttesting.com/).

Curso disponível na Udemy:  
[Cypress: Do Zero à Nuvem](https://www.udemy.com/course/testes-automatizados-com-cypress-basico/?couponCode=MT250923G3)

---

## 📄 Licença

Este projeto é apenas para fins educacionais e segue a licença original MIT.
