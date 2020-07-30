<script>
  export let name;
</script>

<nav
  class="uk-navbar-container uk-margin uk-navbar-sticky uk-navbar-transparent"
  uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
  <div class="uk-navbar-left">

    <a class="uk-navbar-item uk-logo" href="#">Logo</a>

    <ul class="uk-navbar-nav">
      <li>
        <a href="#">
          <span class="uk-icon uk-margin-small-right" uk-icon="icon: star" />
          Features
        </a>
      </li>
    </ul>

    <div class="uk-navbar-item">
      <div>
        <a href="#">Link</a>
      </div>
    </div>

  </div>
</nav>

<div
  class="uk-child-width-1-3@m"
  uk-grid
  uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 500; repeat:
  true">
  <div>
    <div class="uk-card uk-card-default uk-card-body">
      <h3 class="uk-card-title">Fade</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
  <div>
    <div class="uk-card uk-card-default uk-card-body">
      <h3 class="uk-card-title">Fade</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
  <div>
    <div class="uk-card uk-card-default uk-card-body">
      <h3 class="uk-card-title">Fade</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
  <div>
    <div class="uk-card uk-card-default uk-card-body">
      <h3 class="uk-card-title">Fade</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
  <div>
    <div class="uk-card uk-card-default uk-card-body">
      <h3 class="uk-card-title">Fade</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
  <div>
    <div class="uk-card uk-card-default uk-card-body">
      <h3 class="uk-card-title">Fade</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
</div>
