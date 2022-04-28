$(document).ready(function () {
  AOS.init();
  var i = 2;
  $(`.active-1`);
  setTimeout(function () {
    $(`.active-1`).css("display", "none");
  }, 2900);
  setInterval(function () {
    if (i > 5) {
      i = 1;
    }
    console.log(i);

    $(`.feature-card-${i}`).toggleClass("active");
    if (i > 3) {
      $(`.active-${i}`).css("display", "block");
    } else {
      $(`.active-${i}`).css("display", "block");
    }
    setTimeout(function () {
      // toggle another class
      console.log("another");
      $(`.feature-card-${i}`).removeClass("active");
      $(`.active-${i}`).css("display", "none").animate({ left: "0px" });
      i++;
    }, 2900);
  }, 3000);

  $(".nav-item .nav-link").bind("click", function (event) {
    console.log(event.target.outerText);
    $("html, body").animate(
      {
        scrollTop: $(`#${event.target.outerText}`).offset().top,
      },
      500
    );

    event.preventDefault();
    var clickedItem = $(this);
    $(".nav-item .nav-link").each(function () {
      $(this).removeClass("active");
    });
    clickedItem.addClass("active");
  });

  $("#news-slider").owlCarousel({
    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [980, 2],
    itemsMobile: [600, 1],
    navigation: true,
    navigationText: ["", ""],
    pagination: true,
    autoPlay: true,
  });
  $("#features-slider").owlCarousel({
    items: 1,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [980, 2],
    itemsMobile: [600, 1],
    navigation: false,
    center: true,
    dots: false,
    navigationText: ["", ""],
    pagination: true,
    autoPlay: true,
  });
  $(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
});
// const navLinks = document.querySelectorAll('.nav-item')
// const menuToggle = document.getElementById('navbarTogglerDemo01')
// const bsCollapse = new bootstrap.Collapse(menuToggle)
// navLinks.forEach((l) => {
//     l.addEventListener('click', () => { bsCollapse.toggle() })
// })
let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
