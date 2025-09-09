# Desafio Abrigo de Animais

![Tests](https://img.shields.io/badge/tests-passing-brightgreen)
![Coverage](https://img.shields.io/badge/coverage-97%25-green)

## Descrição do Projeto
Este projeto foi desenvolvido como parte do desafio técnico da StartDB 2025.  
O objetivo é criar um sistema que organiza a adoção de animais em um abrigo, respeitando regras específicas sobre brinquedos favoritos, tipos de animais e limites de adoção.

O código principal está em `abrigo-animais.js` e os testes foram implementados com Jest.

---

## Regras do Desafio
1. O animal vai para a pessoa que mostrar todos os seus brinquedos favoritos na ordem desejada.  
2. Uma pessoa pode intercalar brinquedos que o animal queira ou não, desde que estejam na ordem desejada.  
3. Gatos não dividem seus brinquedos.  
4. Se ambas as pessoas tiverem condições de adoção, ninguém fica com o animal (vai para o abrigo).  
5. Uma pessoa não pode levar mais de três animais para casa.  
6. Loco (jabuti) não se importa com a ordem dos seus brinquedos, desde que tenha outro animal como companhia.

---

## Estrutura de Pastas

- `abrigo-animais.js` → código principal  
- `abrigo-animais.test.js` → testes originais do desafio  
- `abrigo-animais-extra.test.js` → testes extras para cenários adicionais  

---

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seuUsername/desafio-ThiagoMarangoni-dev-2025.git
```
2. Entre na pasta do projeto:
```
cd desafio-ThiagoMarangoni-dev-2025
```
3. Instale as dependências:
```
npm install
```

## Como Rodar os Testes

Todos os testes usam Jest. Para rodar:
```
npm test
```
Isso vai executar tanto os testes originais quanto os extras, verificando todas as regras do desafio.

## Exemplo de Uso

import { AbrigoAnimais } from "./abrigo-animais";

const resultado = new AbrigoAnimais().encontraPessoas(
    'RATO,BOLA', 'RATO,NOVELO', 'Rex,Fofo'
);

console.log(resultado);
// Saída esperada:
// {
//   lista: ['Fofo - abrigo', 'Rex - pessoa 1']
// }


## Considerações

* O projeto garante que nenhuma pessoa receba mais de 3 animais.

* Animais inválidos ou duplicados retornam erro.

* Brinquedos inválidos ou duplicados também retornam erro.

* Casos extras (como regras do Loco e intercalando brinquedos) estão cobertos pelos testes adicionais.
