## GAL Movies

Desenvolvida em JavaScript utilizando o framework ReactJs a aplicação consiste em um portal de filmes/séries, onde permite o usuário buscar por um filme e visualizar suas informações, o usuário também pode adicionar ou remover seus filmes preferidos de favoritos. A aplicação é responsiva, podendo ser utilizada através de desktops, celulares e outros dispositivos.

Clique [aqui](https://galmovies-e8267.web.app/) para visualizar a aplicação.

### Telas da aplicação

**Página incial**: Possui um campo(input) de busca para procurar os filmes, a mesma possui dois estados: "Empty", quando a aplicação é iniciada, e "Not Found" quando a busca não retorna nenhum resultado.

![Imagem da página Inicial](https://www.matheus.in/gal.jpg)

**Página do filme**: Exibe todas as informações do filme como título, poster, atores e outras informações. Ao invés de utilizar rotas, preferi utilizar um modal pois a performance foi melhor.

![Imagem da tela do filme](https://www.matheus.in/gal2.jpg)

**Página de carregamento**: É sempre exibida quando a página está carregando, ou seja, quando um filme é buscado ou é requisitado as informações do mesmo.

![Imagem da tela de carregamento](https://www.matheus.in/gal1.jpg)

### Instruções para rodar a aplicação:

1. Clone este repositório `$ git clone https://github.com/matheusdecleve/gal-movies.git`.
2. Instale os pacotes e dependências `$ npm install`.
3. Execute o projeto `$ npm start`.

### Bibliotecas utilizadas:

- Requisições na API - [Axios](https://www.npmjs.com/package/axios)
- Ícones - [React-icons](https://www.npmjs.com/package/react-icons)
- Modal - [React-modal](https://www.npmjs.com/package/react-modal)
- SASS - [Node-sass](https://www.npmjs.com/package/node-sass)

### OMDb API:

Foi utilizado a api [The Open Movie Database](http://www.omdbapi.com/) para obter as informações dos filmes e séries.
