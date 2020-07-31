import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {},
});

console.log("Les enfants, ce n'est pas très gentil de regarder au code des autres. ¯\\_(ツ)_/¯");
console.log("Mais là que vous êtes ici, jouons à un petit jeu. Écrivez 'PLAN()' dans la console.");

window.PLAN = () => {
  if (prompt("Allez-vous voter pour le PLAN?").toLowerCase() == "oui") alert("Hoora, merci :)");
  else alert("Vous m'aviez rendu triste ;(");
};

export default app;
