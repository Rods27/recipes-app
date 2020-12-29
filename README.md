# Recipes-App
<img align ="center" src="/src/images/app-image-1.png" width="1200" />

<img align ="center" src="/src/images/app-image-2.png" width="1200" />

<img align ="center" src="/src/images/app-image-3.png" width="1200" />

<br>Link da pasta das imagens <a href="https://github.com/Rods27/recipes-app/tree/master/src/images/">aqui.</a>

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
  <li>Receitas feitas e favoritadas podem ser visualizadas e filtradas por (All, Foods, Drinks).</li><br>
  
  <li>Food/Drinks
    <ul>
      <li>Pesquisa 12 receitas assim que a tela renderiza, pode ser tiltrado por uma tag.</li>
      <li>Nesta tela pode-se acessar o Perfil/Toogle Search/Comidas/Bebidas/Explore.</li>
      <li>Assim que clicar em um card de receita será redirecionado ao Food/Drink Details.</li>
    </ul><br>
  </li>
  
   <li>Toogle Search
    <ul>
      <li>Pesquisa por uma receita espeficica com critérios mais específicos.</li>
      <li>É acessado pela Food ou Drinks.</li>
      <li>Filtra pelo texto de acordo com um dos seguintes critérios (Ingrediente, Nome, Primeira Letra).
    </ul><br>
  </li>
  
  <li>Food/Drink Details
    <ul>
      <li>O usuário pode favoritar a comida, Copiar o Link.</li>  
      <li>É renderizado um video de acordo com a receita.</li> 
      <li>São recomendados comidas ser o usuário está na tela de bebidas, vice-versa.</li>
      <li>O usuário será redirecionado para Foods/Drinks in Progress assim que clicar no botão "Iniciar Receita".</li> 
    </ul><br>
  </li>
    <li>Food/Drink In-progress
    <ul>
      <li>Finalize uma parte da receita clicando no ingrediente específico.</li>  
      <li>Preencha tudo e finalize a receita, será adicionado e redireciado a Receitas Feitas.</li>  
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
