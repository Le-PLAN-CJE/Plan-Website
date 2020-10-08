<script>
  export let proxy;
  import axios from "axios";
</script>

<style>
  .betterNav,
  .betterNav li a {
    min-height: 50px;
  }
</style>

<nav
  class="uk-navbar-container uk-navbar-sticky "
  style="background: rgba(255,255,255,0.8); padding-top: 5px; padding-bottom:
  5px;"
  uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
  <div class="uk-navbar-left ">

    <a class="uk-navbar-item uk-logo betterNav" href="#accueil" style="">
      <img src="favicon.png" width={35} alt="plan" />
    </a>

    <ul class="uk-navbar-nav betterNav" style="margin-right: auto;">
      <li>
        <a href="#vision">
          <span class="uk-icon uk-margin-small-right" uk-icon="world" />
          Vision
        </a>
      </li>

      <li>
        <a href="#equipe">
          <span class="uk-icon uk-margin-small-right" uk-icon="users" />
          Équipe
        </a>
      </li>
      <li>
        <a href="#plan">
          <span class="uk-icon uk-margin-small-right" uk-icon="thumbnails" />
          Plan
        </a>
      </li>

    </ul>

    <div class="betterNav uk-navbar-item">

      {#await axios.get(proxy + 'json/contact.json')}
        Un moment s'il vous plaît...
      {:then res}
        <a target="_blank" href={res.data.instagram}>
          <span
            class="uk-icon uk-margin-small-right"
            uk-icon="instagram"
            style="fill:#C13584" />
        </a>
        <a target="_blank" href={res.data.facebook}>
          <span
            class="uk-icon uk-margin-small-right"
            uk-icon="facebook"
            style="fill: dodgerblue" />
        </a>
        <a target="_blank" href={res.data.discord}>
          <img
            alt="discord"
            class="uk-icon uk-margin-small-right"
            src="discord-logo.svg"
            style="width: 22px; height: 22px;" />
        </a>
        <a target="_blank" href={res.data.mail}>
          <span
            class="uk-icon uk-margin-small-right"
            uk-icon="mail"
            style="filter: brightness(50%)" />
        </a>
      {:catch error}
        Une erreur s'est produite.
      {/await}

    </div>

  </div>
</nav>
