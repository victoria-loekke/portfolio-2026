
    const buttons = document.querySelectorAll("[data-view]");
    const layouts = document.querySelectorAll("[data-layout]");
    document.querySelector('[data-view="project"]').classList.add("active");

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

    const galleryItems = document.querySelectorAll(".gallery-item");

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");

    const closeLightbox = document.getElementById("closeLightbox");

    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    const images = [...galleryItems].map((item) => item.dataset.image);

    let currentIndex = 0;

    function openLightbox(index) {
      currentIndex = index;

      lightboxImg.src = images[currentIndex];

      lightbox.classList.remove("hidden");

      document.body.style.overflow = "hidden";
    }

    function closeBox() {
      lightbox.classList.add("hidden");

      document.body.style.overflow = "";
    }

    function showNext() {
      currentIndex = (currentIndex + 1) % images.length;

      lightboxImg.src = images[currentIndex];
    }

    function showPrev() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;

      lightboxImg.src = images[currentIndex];
    }

    galleryItems.forEach((item) => {
      item.addEventListener("click", () => {
        openLightbox(Number(item.dataset.index));
      });
    });

    closeLightbox.addEventListener("click", closeBox);

    nextBtn.addEventListener("click", showNext);

    prevBtn.addEventListener("click", showPrev);

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        closeBox();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (lightbox.classList.contains("hidden")) return;

      if (e.key === "Escape") closeBox();

      if (e.key === "ArrowRight") showNext();

      if (e.key === "ArrowLeft") showPrev();
    });

    const videos = document.querySelectorAll(".project-video");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;

          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.4,
      },
    );

    videos.forEach((video) => {
      observer.observe(video);
    });
