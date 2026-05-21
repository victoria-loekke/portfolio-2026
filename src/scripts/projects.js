
    const buttons = document.querySelectorAll("[data-view]");
    const layouts = document.querySelectorAll("[data-layout]");
    document.querySelector('[data-view="grid"]').classList.add("active");

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

    const topBtn = document.getElementById("toTopBtn");
    const filterBar = document.getElementById("filterBar");

    window.addEventListener("scroll", () => {
      const rect = filterBar.getBoundingClientRect();

     
      if (rect.bottom < 0) {
        topBtn.classList.remove("hidden");
      } else {
        topBtn.classList.add("hidden");
      }
    });


    topBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });