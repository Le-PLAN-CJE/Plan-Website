<script>
  import VisionPage from "./pages/Vision.svelte";
  import PlanPage from "./pages/Plan.svelte";
  import EquipePage from "./pages/Equipe.svelte";
  import Navbar from "./Navbar.svelte";
  import Footer from "./Footer.svelte";
  import axios from "axios";

  window.addEventListener("hashchange", e => {
    location.hash = ["#accueil", "#vision", "#plan", "#equipe"].includes(
      location.hash
    )
      ? location.hash
      : "#accueil";
    window.scrollTo({
      top:
        ref[location.hash.substr(1)].getBoundingClientRect().top +
        window.pageYOffset -
        60,
      behavior: "smooth"
    });
  });

  const ref = {
    vision: null,
    equipe: null,
    plan: null,
    accueil: null
  };
</script>

<style>
  .moreSpace {
    padding-top: 30px;
  }
</style>

<Navbar />

<div
  bind:this={ref.accueil}
  class="uk-height-large uk-background-cover uk-light uk-flex"
  uk-parallax="bgy: -100"
  style="background-image:
  url('https://www.tla-architectes.com/wp-content/uploads/2015/12/CollegeJeanEudes-05.jpg');
  height: calc(100vh - 60px)">

  <h1
    style="background: rgba(128,16,16,0.75); padding: 20px;"
    class="uk-width-1-3@m uk-text-left uk-margin-auto-vertical">
    Parti des
    <br />
    Labadens
    <br />
    Actionnistes et
    <br />
    Novateurs
  </h1>

</div>

<div class="uk-container">
  <div bind:this={ref.vision} class="moreSpace">
    {#await axios.get('json/vision.json')}
      A moment please
    {:then res}
      <VisionPage {res} />
    {:catch error}
      Something went wrong
    {/await}
  </div>

  <hr />

  <div bind:this={ref.equipe} class="moreSpace">
    {#await axios.get('json/equipe.json')}
      A moment please
    {:then res}
      <EquipePage {res} />
    {:catch error}
      Something went wrong
    {/await}
  </div>

  <hr />

  <div bind:this={ref.plan} class="moreSpace">
    {#await axios.get('json/plan.json')}
      A moment please
    {:then res}
      <PlanPage {res} />
    {:catch error}
      Something went wrong
    {/await}
  </div>
</div>
