<script>
  const hamburger = document.createElement("div");
  hamburger.classList.add("hamburger");
  hamburger.innerHTML = `
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line3"></div>
  `;
  document.querySelector(".navContainer").appendChild(hamburger);

  hamburger.addEventListener("click", () => {
    document.querySelector(".navButtonContainer").classList.toggle("active");
    hamburger.classList.toggle("toggle");
  });
</script>
