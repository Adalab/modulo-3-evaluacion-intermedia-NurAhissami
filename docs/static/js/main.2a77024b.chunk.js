(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{14:function(e){e.exports=JSON.parse('[{"id":1,"name":"bulbasaur","types":["poison","grass"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},{"id":2,"name":"ivysaur","types":["poison","grass"],"evolution":"bulbasaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},{"id":3,"name":"venusaur","types":["poison","grass"],"evolution":"ivysaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},{"id":4,"name":"charmander","types":["fire"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},{"id":5,"name":"charmeleon","types":["fire"],"evolution":"charmander","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"},{"id":6,"name":"charizard","types":["flying","fire"],"evolution":"charmeleon","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},{"id":7,"name":"squirtle","types":["water"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},{"id":8,"name":"wartortle","types":["water"],"evolution":"squirtle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"},{"id":9,"name":"blastoise","types":["water"],"evolution":"wartortle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"},{"id":10,"name":"caterpie","types":["bug"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"}]')},25:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){"use strict";s.r(t);var r=s(1),n=s(18),a=s.n(n),i=(s(25),s(20)),o=s(17),c=s(14),l=s(7),p=s(0),u=function(e){var t=e.type.map((function(e,t){return Object(p.jsx)("li",{className:"PokemonTypes",children:e},t)}));return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("article",{className:"ListPokemon",children:[Object(p.jsx)("img",{src:e.url,alt:e.name}),Object(p.jsx)("h3",{children:e.name}),Object(p.jsx)("ul",{className:"ulTypes",children:t})]})})},m=s.p+"static/media/logo-pokemon.6e223bd2.png",j=function(e){var t=e.favorites.map((function(t,s){return Object(p.jsx)("li",{onClick:e.clickFavorites,className:"listFav",children:Object(p.jsx)("img",{src:t.url,alt:t.name})},s)})),s=e.pokemons.map((function(t,s){var r=e.favorites.find((function(e){return e.id===t.id}));return Object(p.jsxs)("li",{className:"listPokemon",children:[Object(p.jsx)("button",{id:t.id,onClick:function(){return e.favPokemon(t.id)},className:"favoritesHeart",children:Object(p.jsx)("i",{className:r?"fas fa-lg fa-heart":"far fa-heart"})}),Object(p.jsx)(l.b,{to:"./pokemon/".concat(t.id),children:Object(p.jsx)(u,{id:t.id,name:t.name,url:t.url,type:t.types})})]},s)}));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"container-img",children:Object(p.jsx)("img",{className:"image-logo",src:m,alt:"logo"})}),Object(p.jsxs)("div",{className:"containerAll",children:[Object(p.jsx)("ul",{className:"ulList",children:s}),Object(p.jsxs)("div",{className:"Favorites",children:[Object(p.jsx)("h3",{className:"titleFav",children:"lista de favoritos"}),Object(p.jsx)("ul",{children:t})]})]})]})},d=function(e){var t=e.pokeDetail.types.map((function(e,t){return Object(p.jsx)("li",{className:"PokemonTypes",children:e},t)}));return Object(p.jsxs)("div",{className:"cardNew",children:[Object(p.jsx)(l.b,{to:"/",children:Object(p.jsx)("div",{className:"divContainer",children:Object(p.jsx)("small",{className:"back",children:"Volver"})})}),Object(p.jsxs)("article",{className:"pokemonCardDetail",children:[Object(p.jsxs)("p",{className:"titlepoke",children:[" Has seleccionado a ",e.pokeDetail.name]}),Object(p.jsx)("img",{src:e.pokeDetail.url,alt:e.pokeDetail.name}),Object(p.jsx)("h3",{children:e.pokeDetail.name}),Object(p.jsx)("ul",{className:"ulTypes",children:t})]})]})},b=s(2);s(35);var h=function(){var e=Object(r.useState)(c),t=Object(o.a)(e,1)[0],s=Object(r.useState)(JSON.parse(localStorage.getItem("favorites")||[])),n=Object(o.a)(s,2),a=n[0],l=n[1];return Object(r.useEffect)((function(){localStorage.setItem("favorites",JSON.stringify(a))})),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(b.c,{children:[Object(p.jsxs)(b.a,{exact:!0,path:"/",children:[Object(p.jsx)(j,{pokemons:c,favPokemon:function(e){var s=a.find((function(t){return console.log(t.id,e),t.id===e}));if(console.log(s),void 0!==s){var r=a.filter((function(t){return t.id!==e}));l(r)}else{var n=t.find((function(t){return t.id===e}));l([].concat(Object(i.a)(a),[n]))}},favorites:a}),";"]}),Object(p.jsx)(b.a,{path:"/pokemon/:pokeId",render:function(e){var s=e.match.params.pokeId,r=t.find((function(e){return e.id===parseInt(s)}));return r?Object(p.jsx)(d,{pokeDetail:r}):Object(p.jsx)("p",{children:"No hay pokemones"})}})]})})};a.a.render(Object(p.jsx)(l.a,{children:Object(p.jsx)(h,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.2a77024b.chunk.js.map