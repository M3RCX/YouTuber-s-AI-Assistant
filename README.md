# YouTuber's AI Assistant

Esta é uma plataforma que permite aos usuários enviar vídeos, extrair o áudio, realizar transcrição utilizando o Whisper da OpenAI e, em seguida, gerar respostas de texto com o ChatGPT. As transcrições e respostas são armazenadas no banco de dados para futura referência.

## Como Funciona

**Resumo:** O usuário envia vídeos que são transcritos e, em seguida, usa o ChatGPT para gerar respostas com base nas transcrições.

Detalhes:

O projeto é dividido em duas partes: o Front-end e o Back-end.

### Front-end

1. O usuário acessa a plataforma.
2. Ele envia um vídeo, que é processado no lado do cliente usando o FFmpeg para extrair o áudio.
3. Após a extração, o usuário pode selecionar o tipo de prompt.
4. Ao clicar em "Enviar", o vídeo é enviado para o Back-end junto com o prompt escolhido.

### Back-end

1. O Back-end recebe o vídeo e o prompt do Front-end.
2. Utiliza o Whisper da OpenAI para transcrever o áudio do vídeo.
3. Salva a transcrição e o áudio no banco de dados para referência futura.

### Geração de Resposta com ChatGPT

1. Após a transcrição, o Back-end envia a transcrição do vídeo e o prompt escolhido para o ChatGPT.
2. A resposta gerada pelo ChatGPT é recebida.
3. A resposta é exibida no Front-end para o usuário.

## Pré-requisitos

- Node.js e NPM instalados.
- Chaves de API da OpenAI para usar o Whisper e o ChatGPT.

## Instalação e Configuração

1. Clone este repositório.
2. No diretório do upload-ai-server, localize o arquivo `.env` e adicione sua api key nele.
4. Execute o Front-end e o Back-end separadamente. Siga as instruções em - [Front-end](upload-ai-web/README.md) - [Back-end](uploade-ai-server/README.md).

## Uso

1. Acesse a plataforma no Front-end.
2. Envie um vídeo e selecione um prompt.
3. Clique em "Enviar".
4. Aguarde a resposta gerada pelo ChatGPT, que será exibida na tela.

## Tecnologias Utilizadas

### Front-end

- **Tailwind CSS:** Um framework de CSS utilitário altamente personalizável.
- **PostCSS:** Um pré-processador de CSS para estender as capacidades do CSS.
- **Axios:** Uma biblioteca para fazer requisições HTTP.
- **Radix UI:** Uma biblioteca para criar componentes de interface ricos.
- **Lucide React:** Um conjunto de componentes React para uma experiência de desenvolvimento mais rápida.
- **Vite:** Um bundler de JavaScript extremamente rápido e versátil.
- **TypeScript:** Um superset tipado do JavaScript que melhora a segurança e a escalabilidade do código.

### Back-end

- **TypeScript:** Uma linguagem de programação tipada que se integra bem com o Node.js.
- **Fastify:** Um framework web eficiente e de alto desempenho para Node.js.
- **Prisma:** Uma biblioteca de banco de dados para trabalhar com bancos de dados SQL.
- **Zod:** Uma biblioteca para validação de dados em TypeScript.

Cada uma dessas tecnologias desempenhou um papel fundamental na construção desta plataforma, contribuindo para uma experiência de usuário sólida e eficiente.

## Contribuição

Você pode contribuir para este projeto de várias maneiras:
- Abra problemas relatando bugs ou sugira melhorias.
- Envie solicitações de pull com aprimoramentos.
- Ajude a documentar o projeto.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE.md). Consulte o arquivo [LICENSE.md](LICENSE.md) para obter detalhes.
