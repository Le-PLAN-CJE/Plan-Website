<script>
  export let res;
</script>

<h2>Plan</h2>
<div style="width:100%; height: 40vh; background: #000)">
  <p
    style="color: gray; font-family: merriweather; font-size: 3rem;
    vertical-align: middle; text-align: center;">
    Voter pour des mesures concrètes, c'est ça le Plan.
  </p>
  <ul
    class="uk-subnav uk-subnav-pill uk-flex-center uk-text-center
    uk-vertical-align-middle uk-child-width-expand@s uk-text-center folderTabs"
    uk-switcher>
    {#each res.data as folder}
      <li class="folderTab uk-flex-middle">
        <a
          href="#"
          style="height: 10vh; background: {folder.color}; color: white;">
          {folder.title}
        </a>
      </li>
    {/each}
    <!-- </div> -->
  </ul>
  <ul class="uk-switcher uk-margin">
    {#each res.data as folder}
      <li>
        <p>{folder.description}</p>
        <ul uk-accordion="multiple: true" style="border-bottom: 1px solid">
          {#each folder.measures as measure}
            <li
              style="margin: 0; border: 1px solid #111; border-bottom: 1px solid
              white;">
              <a
                class="uk-accordion-title"
                href="#"
                style="height: auto; background: {folder.color}; padding: 5px;
                color: #fff; margin:0">
                {measure.title}
              </a>
              <div
                class="uk-accordion-content"
                style="margin-top:0; padding: 15px; color: #111;">
                <p>{measure.description}</p>
              </div>
            </li>
          {/each}
        </ul>
      </li>
    {/each}
  </ul>
</div>
