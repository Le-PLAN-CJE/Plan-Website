<script>
  import VisionPage from "./pages/Vision.svelte";
  import PlanPage from "./pages/Plan.svelte";
  import EquipePage from "./pages/Equipe.svelte";
  import Navbar from "./Navbar.svelte";
  import Footer from "./Footer.svelte";

  window.addEventListener("hashchange", e => {
    location.hash = ["#vision", "#plan", "#equipe"].includes(location.hash)
      ? location.hash
      : "#vision";
    console.log(ref);
    ref[location.hash.substr(1)].scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  });

  const ref = {
    vision: null,
    equipe: null,
    plan: null
  };
</script>

<Navbar />

<img
  src="https://www.tla-architectes.com/wp-content/uploads/2015/12/CollegeJeanEudes-05.jpg"
  alt="collegejeaneudes"
  width="100%"
  style="width:100vw" />

<div bind:this={ref.vision}>
  <VisionPage />
</div>

<div bind:this={ref.equipe}>
  <EquipePage />
</div>

<div bind:this={ref.plan}>
  <PlanPage />
</div>

<Footer />
