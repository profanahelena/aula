# Extensão Robotbit – sequência Acenar

Esta extensão adiciona à caixa de ferramentas o bloco **executar sequência acenar do slide**.

## Requisito
A extensão oficial `github:KittenBot/pxt-robotbit` é incluída como dependência.

## O que o bloco faz
1. Mostra o número 5 no micro:bit.
2. Servo S8: 90° até 0°, passo -1°, pausa de 30 ms.
3. Servo S7: 15° até 120°, passo +1°, pausa de 30 ms.
4. Servo S7: 120° até 15°, passo -1°, pausa de 30 ms.

## Como adicionar ao MakeCode
O MakeCode adiciona extensões pela URL de um repositório GitHub ou por um projeto compartilhado; não importa diretamente este ZIP como uma extensão pesquisável.

1. Extraia os arquivos deste ZIP.
2. Crie um repositório público no GitHub e envie `pxt.json`, `main.ts` e `README.md` para a raiz.
3. No MakeCode: Extensões → cole a URL do repositório.
4. A categoria **Acenar Slide** deverá aparecer na caixa de ferramentas.
5. Arraste o bloco **executar sequência acenar do slide** para o evento `ao iniciar` ou para a função desejada.

Observação: esta extensão reproduz a sequência funcional do slide em um único bloco. Ela não cria um laço FOR em formato C com área interna para encaixar outros blocos.
