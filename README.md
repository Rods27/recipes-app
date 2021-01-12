# Recipes-App
<img align ="center" src="/src/images/app-image-1.png" width="1200" />

<img align ="center" src="/src/images/app-image-2.png" width="1200" />

<img align ="center" src="/src/images/app-image-3.png" width="1200" />

<br>Link da pasta das imagens <a href="https://github.com/Rods27/recipes-app/tree/master/src/images/">aqui.</a>

## Teste de Velocidade pelo Google

<img align ="center" src="/src/images/speed-test.png" width="1200" />

## Feedback 

Ficarei bem agradecido caso queira me dar um feedback costrutivo, caso queira meus contatos estarão abaixo!

Email: rods.leite27@gmail.com e <a href="https://linkedin.com/in/rodrigoleite27">Linkedin</a>.

## Observações

<ul>
  <li>Apesar do foco do app ser mobile, ele não foi desenvolvido em um ambiente mobile, então pode ser aberto pelo browser.</li>
  <li>O login é apenas por carater de layout, o crivo do email e apenas pelo formato, e da senha apenas por quantidade de caracteres.</li>
  <li>Design web não desenvolvido.</li>
  <li>Projeto feito com eslint da AirBnb.</li>
</ul>

## Funcionalidades

<ul>
  <li>É uma biblioteca de receitas de comidas ou bebidas, onde pode ser filtrado de acordo com tags(Chicken, All, Milk/Float/Shake), ingredientes, local, ou critérios especificos.<br>
  <li>Comece uma receita, veja as instruções, videos, e assim que terminar de fazer ingrediente por ingrediente, preencha-os e termine a receita.</li>
  <li>Receitas feitas e favoritadas podem ser visualizadas e filtradas por (All, Foods, Drinks).</li>
  <li>Todas as receitas de comida são pegas pela API <a href="https://www.themealdb.com/">themealdb</a> e as de bebidas
    <a href="https://www.thecocktaildb.com/">thecocktaildb</a>.</li><br>
  
  <li>Foods/Drinks
    <ul>
      <li>Pesquisa 12 receitas assim que a tela renderiza, pode ser tiltrado por uma tag.</li>
      <li>Clique em alguns dos botões e acesse o Perfil/Toogle Search/Comidas/Bebidas/Explore.</li>
      <li>Assim que clicar em um card de receita será redirecionado ao Food/Drink Details.</li>
    </ul><br>
  </li>
  
   <li>Toogle Search
    <ul>
      <li>Pesquise por uma receita espeficica com critérios mais específicos.</li>
      <li>É acessado pela Food ou Drinks.</li>
      <li>Filtra pelo texto de acordo com um dos seguintes critérios (Ingrediente, Nome, Primeira Letra).
    </ul><br>
  </li>
  
  <li>Foods/Drinks Details
    <ul>
      <li>Favorite a comida e/ou Copie o Link.</li>  
      <li>É renderizado um video de acordo com a receita.</li> 
      <li>São recomendados comidas ser o usuário está na tela de bebidas, vice-versa.</li>
      <li>Favorite sua receita, assim poderá visualiza-la na tela de receitas favoritas.</li>
      <li>O usuário será redirecionado para Foods/Drinks in Progress assim que clicar no botão "Iniciar Receita".</li> 
    </ul><br>
  </li>
    <li>Foods/Drinks In-progress
    <ul>
      <li>Favorite sua receita, assim poderá visualiza-la na tela de receitas favoritas.</li>
      <li>Finalize uma parte da receita clicando no ingrediente específico.</li>  
      <li>Preencha tudo e finalize a receita, será adicionado e redireciado a Receitas Feitas.</li>  
    </ul><br>
  </li>
  
   <li>Foods/Drinks Done
    <ul>
      <li>Filtre suas receitas feitas por (All, Food, Drinks).</li>  
    </ul><br>
  </li>
  
   <li>Favorite Foods/Drinks
    <ul>
      <li>Filtre suas receitas favoritas (All, Food, Drinks).</li>
      <li>Desfavorite sua comida, assim ela deixará de estar nesta tela.</li>
    </ul><br>
  </li>
  
   <li>Profile
    <ul>
      <li>Acesse suas Receitas favoritas ou Feitas pela tela de perfil.</li>
    </ul><br>
  </li>
  
   <li>Explore Food/Drinks
    <ul>
      <li>Explore comidas ou bebidas por: </li>
      <ul>
        <li>Ingredientes.</li>
        <li>Local de Origem.</li>
        <li>Ou seja surpreendido por uma receita aleatória.</li>
      </ul>
    </ul><br>
  </li>

## Pré Requisitos
<ul>
  <li>Npm</li>
  <li>Node</li>
  <li>React</li>
  <li>React-thunk</li>
  <li>React Redux</li>
</ul>

### Instalando
Após intalar Node e Npm: 
React<br><br>
`npm i react`<br><br>
Redux<br><br>
`npm i redux`<br><br>
Redux-Thunk<br><br>
`npm i redux-thunk`<br><br>

### Link do Deploy
Depois que clicar no Link, é importante clicar com o segundo botão na tela, depois em inspecionar e na parte superior esquerda da janela que apareceu, clique no segundo icone para habilitar a visulização em resolução mobile (Toogle device toolbar).
https://rods27.github.io/recipes-app/
