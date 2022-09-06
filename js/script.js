let mixerPortofolio = mixitup(".work-container", {
  selectors: {
    target: ".work-card",
  },
  animation: {
    duration: 300,
  },
});

const linkwork = document.querySelectorAll(".work-item");
function activework() {
  linkwork.forEach((L) => L.classList.remove("active-work"));
  this.classList.add("active-work");
}
linkwork.forEach((L) => L.addEventListener("click", activework));

let swipertestimonial = new Swiper(".testimonial-container", {
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

/*scroll section*/

const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/* dark light theme */
let sunicon = document.querySelector(".modeicon .moon");
let moonicon = document.querySelector(".modeicon .sun");
sunicon.addEventListener("click", function () {
  sunicon.classList.add("hidden");
  moonicon.classList.remove("hidden");
  document.body.classList.add("darkmode");
});
moonicon.addEventListener("click", function () {
  moonicon.classList.add("hidden");
  sunicon.classList.remove("hidden");

  document.body.classList.remove("darkmode");
});
