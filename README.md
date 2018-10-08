# frontend-ammo-challenge

Aplicação cliente do desafio da ammo varejo

## Efetuando build do projeto


### Opção 1

Para efetuar o build do projeto localmente é necessário:

- Docker
- Docker Compose

#### Passo a passo

- Baixe o projeto com o comando:

```
git clone https://github.com/adalbertorsilva/frontend-ammo-challenge.git
```
- Entre na pasta do projeto

- Execute o comando:

```
docker-compose up --build
```

### Opção 2

Para efetuar o build do projeto localmente é necessário:

- O projeto de [backend](https://github.com/adalbertorsilva/backend-ammo-challenge) do desafio sendo executada ( veja as instruções no link
- Nodejs

#### Passo a passo

- Baixe o projeto com o comando:

```
git clone https://github.com/adalbertorsilva/frontend-ammo-challenge.git
```
- Entre na pasta do projeto
- Crie um arquivo **.env** e adicione a seguinte variavel de ambiente:

```
REACT_APP_API_URL={URL NA QUAL O BACKEND ESTÁ OUVINDO}?
```
- Inicie o projeto com o comando

```
npm start
```
