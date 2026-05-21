    const btn = document.getElementById("theme-toggle");

    function updateThemeLabel() {
      if (document.documentElement.classList.contains("dark")) {
        btn.textContent = "light mode";
      } else {
        btn.textContent = "dark mode";
      }
    }

    updateThemeLabel();

    btn?.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");

      if (document.documentElement.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }

      updateThemeLabel();
    });