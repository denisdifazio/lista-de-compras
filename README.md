# Projeto: Lista de Compras

Este projeto é uma single page application que utiliza Angular 6, Bootstrap 4 para layout e Firebase como banco de dados e autenticador. O mesmo foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 6.2.4.

Em Lista de Compras, os usuários possuem uma lista em que podem adicionar novos itens ou editar e remover itens já inseridos. Além disso, o usuário também é capaz de marcar ou desmarcar um item já pego e inserido no carrinho de compras.

## Instalação

Baixe ou clone o repositório em uma pasta local e depois execute o comando `npm install` em uma prompt inicializada na pasta.

### Packages Utilizados

- [Bootstrap](https://getbootstrap.com/) - layout e css
- [FontAwesome](https://fontawesome.com/) - ícones
- [AngularFire2](https://github.com/angular/angularfire2) - integração com Firebase

## Desenvolvimento e Uso

Após instalada a aplicação, é preciso configurar um novo projeto no Firebase.

### Configurando Projeto Firebase

Crie um novo projeto através do console do Firebase e logo em seguida autorize a autenticação por email indo em Auth(entication) -> Método de Login -> E-mail/senha -> Ativar.

Além disso, para o salvamento de dados das listas de compras de cada usuário, este software utiliza o Realtime Database. Portanto, agora é necessário configurar o banco de dados. Para isso, basta criar um novo Realtime Database e nas Regras inserir o código abaixo. Isto permite aos usuários ler e escrever no caminho "compras" utilizado pela aplicação.

```
{
  "rules": {
    "compras": {
      ".read": true,
      ".write": true
    }
  }
}
```

Por fim, é necessário adicionar chaves de acesso do Firebase ao projeto Angular. Na página de configurações do projeto na parte de baixo da aba Geral, há a sessão _Seus aplicativos_ em que é possível escolher qual o tipo de aplicativo que se deseja conectar ao Firebase. Neste caso, utiliza-se a opção Web. Com os dados copiados, basta ir nos arquivos _environments_ localizados na pasta com o mesmo nome e colá-los abaixo da key _production_ da seguinte forma:

```
firebase: {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  }
```

Onde dentro das aspas estariam os dados copiados. Feito isso, está finalizada a parte de configuração do Firebase.

### Executando Projeto

A aplicação pode ser executada com o comando `ng serve`. Este comando irá criar um servidor local disponibilizando o software na url `http://localhost:4200/`. A app será recarregada automaticamente após qualquer mudança nos arquivos-fonte.

## Build

Rode o comando `ng build` para executar uma nova build do projeto. A build será armazenada no diretório `dist/`. Use a flag `--prod` para executar em modo produção.

## Running unit tests

Para executar os testes, utiliza-se o comando `ng test` que inicializa uma nova sessão via [Karma](https://karma-runner.github.io).
