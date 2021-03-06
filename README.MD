# Desafio Luiza Labs (Java)

Olá, tudo bem? 

Meu nome é Carla Cristina e vou contar um pouco sobre essa aplicação, vamos lá?  🤙

## 💻 Tecnologias usadas

- Java (Orientado à objetos)
- Spring Boot (Spring Web, Dev Tools e Jpa)
- APACHE (servidor local)
- MySQL
- Swagger (para teste de endpoints)
- Angular (Typescript)
- Bootstrap (HTML, CSS e JS)
- GIT e GITHUB

### Informações técnicas 

Esta aplicação foi desenvolvida através do padrão Arquitetural MVC. 

O padrão consiste nas três camadas que dão o seu nome: Model, View e Controller, cada camada é responsável por uma responsabilidade no sistema.

- Model: representa o negócio que a aplicação foi construída para controlar. Desde modelos de dados (como classes de domínio e tabelas de banco de dados) a códigos de lógica de negócio, o modelo é o que traz o valor e necessidade para o software. **Tudo que for decisão do ponto de vista do negócio modelado fica nesta camada**.
- View: é a camada responsável por interagir com o usuário diretamente. Ela tem a responsabilidade de mostrar os dados da melhor maneira para o usuário e de coletar informações e interações dele para mandar para aplicação.
- Controller: é a camada do meio, entre o modelo e a visualização. Ela é responsável pelo fluxo de dados e de trabalha da aplicação. 

### Testando a aplicação pelo localHost

- Clone o repositório da aplicação em sua máquina através do git bash

```
git clone https://github.com/CarlaCCP/DesafioLuizaLabs.git
```

- Instale ou start seu servidor local e configure para rodar na porta 8080

- Abra o diretório Back-end no Spring Boot e rode a aplicação

- Abra o diretório Front-end no Angular e rode a aplicação

```
ng serve
```

**Observação:**

Caso queira somente testar os endpoints desta aplicação e o CRUD completo, rode a parte do backend e entre neste link:  http://localhost:8080/swagger-ui.html. Lá você conseguirá testar as requisições. 

Existe também a possibilidade de usar o Postman, basta usar a URL do localHost e testar os endpoints.

### Testando a aplicação por URL

Deploy da aplicação através do HEROKU, foi necessário trocar o banco de dados da aplicação deploy de MySQL para PostgreSQL.

- https://desafio-agendamento.herokuapp.com/

##### Observação:

Como o servidor é gratuito, se ele não tiver requisições de 30 em 30 minutos ele “dorme” e a próxima pessoa a acessá-lo enfrentará uma pequena demora para visualizar a página, isso por que o servidor estará iniciando.

### Em construção

- Elaborar testes unitários para aplicação
- Tratamento de erros 
- Trabalhar com o atributo dataHora, torna Date e fazer uma comparação com a data/hora atual. Dessa forma o status da aplicação fluiria entre "Aguardando Envio" e "Enviado"

#### Agradecimentos e considerações finais

Agradeço a oportunidade de realizar este teste e participar deste processo.

Algumas funcionalidades eu não consegui colocar em prática ainda, mas continuarei estudando para melhorar a minha lógica e os processos desta aplicação. 