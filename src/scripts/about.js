
  const buttons = document.querySelectorAll("[data-view]");
  const layouts = document.querySelectorAll("[data-layout]");


  document.querySelector('[data-view="school"]').classList.add("active");
  document.querySelector('[data-layout="school"]').classList.remove("hidden");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const view = btn.dataset.view;


      buttons.forEach((b) => b.classList.remove("active"));


      btn.classList.add("active");

  
      layouts.forEach((layout) => {
        layout.classList.add("hidden");
      });


      document
        .querySelector(`[data-layout="${view}"]`)
        .classList.remove("hidden");
    });
  });
