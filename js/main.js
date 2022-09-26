// Click tog-show
if (document.querySelector(".tog-show")) {
  let togglesShow = document.querySelectorAll(".tog-show");
  togglesShow.forEach((e) => {
    let togg = true;
    e.addEventListener("click", (evt) => {
      let listItem = document.querySelector(e.getAttribute("data-show"));
      if (togg == true) {
        listItem.style.display = "flex";
        togg = false;
      } else {
        listItem.style.display = "none";
        togg = true;
      }
    });
  });
}

// splide landing
document.addEventListener("DOMContentLoaded", function () {
  var splideOne = new Splide("#landing-slide", {
      type: "loop",
      autoplay: true,
      interval: 3000,
  });

  splideOne.mount();
});
// splide countries
document.addEventListener("DOMContentLoaded", function () {
  var splideOne = new Splide("#countries-slide", {
      type: "loop",
      autoplay: true,
      interval: 3000,
      perPage: 3,

      breakpoints: {
        1300: {
          perPage: 3,
         
        },
        1024: {
          perPage: 2,
      
        },
        640: {
          perPage: 1,
    
        },
      },
  });
  splideOne.mount();
});