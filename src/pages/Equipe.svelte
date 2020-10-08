<script>
  export let res;
</script>

<h2>Équipe</h2>
<p
    style="color: gray; font-family: merriweather; font-size: 3rem;
    vertical-align: middle; text-align: center;">
    Voter pour une équipe dévouée et engagée, c'est ça le Plan.
  </p>
<div
  class="uk-grid-column-small uk-grid-row-large uk-child-width-1-2
  uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-text-center
  uk-flex-center"
  uk-grid>

  {#each res.data as slideshow}
    <div>
      <h4>{slideshow.title}</h4>
      <div
        class="uk-position-relative uk-visible-toggle"
        tabindex="-1"
        uk-slideshow="animation: push; autoplay: true; ratio: 2:3;
        autoplay-interval: 3000">
        <ul class="uk-slideshow-items">
          {#each slideshow.members as member}
            <li>
              <img style="height: 100%" src={member.imageURL} alt="" uk-cover />
              <div
                class="uk-overlay uk-overlay-primary uk-position-bottom
                uk-text-center uk-transition-slide-bottom">
                <h4 class="uk-margin-remove">{member.name}</h4>
                <p class="uk-margin-remove">
                  <small>{member.roles.join(', ')}</small>
                </p>
              </div>
            </li>
          {/each}
        </ul>
        <div class="uk-light">
          <a
            class="uk-position-center-left uk-position-small uk-hidden-hover"
            href="#"
            uk-slidenav-previous
            uk-slideshow-item="previous" />
          <a
            class="uk-position-center-right uk-position-small uk-hidden-hover"
            href="#"
            uk-slidenav-next
            uk-slideshow-item="next" />
        </div>
      </div>
    </div>
  {/each}

</div>
