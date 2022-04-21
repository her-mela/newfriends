const api="https://friends-quotes-api.herokuapp.com/quotes/random";
let actor=document.getElementById('actor');
console.log(actor)
let quote=document.getElementById('quote');

function quotegenerator(url) {
    fetch(url).then(res => res.json()).then(data => {
        actor.innerHTML=data.character;
        quote.innerHTML=data.quote;
          console.log(data);
    });
}
document.getElementById('btn').onclick=function ehh(){quotegenerator(api);}