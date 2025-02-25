const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    // Tutup semua accordion sebelum membuka yang baru
    accordions.forEach((item) => {
      if (item !== accordion) {
        item.classList.remove("active");
        item.querySelector(".text").style.height = 0;
      }
    });

    // Toggle active class untuk yang diklik
    accordion.classList.toggle("active");

    // Atur tinggi konten agar animasi smooth
    const text = accordion.querySelector(".text");
    if (accordion.classList.contains("active")) {
      text.style.height = text.scrollHeight + "px";
    } else {
      text.style.height = 0;
    }
  });
});
