$(function() {
  // owl carousel script starts
  if ($("#main-banner-carousel").length) {
    $("#main-banner-carousel").owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplaySpeed: 2000,
      autoplayHoverPause: true, 
      autoWidth: false,
      dots: true,
      margin: 0,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        320: {
          items: 1 
        }
      }
    });
  }

  // scroll header script here
  window.onscroll = function() {
    scrollHeader();
  };
  // Get the header
  var header = $(".navbar-bottom-menu");
  var body = $("body");
  function scrollHeader() {
    // adding sticky class
    if (window.pageYOffset > 105) {
      $(header).addClass("sticky");
    } else {
      // removing sticky class
      $(header).removeClass("sticky");
    }
  }

  // navbar toggler script
  $(".navbar-toggler").on("click", function() {
    $(".collapse").toggleClass("show");
    $("body").toggleClass("layer-open");
    // $(header).toggleClass("sticky-not");
    $(".navbar-close").show();
  });
  $(".navbar-close").on("click", function() {
    $(".collapse").toggleClass("show");
    $(".navbar-close").hide();
    $("body").toggleClass("layer-open");
    // $(header).toggleClass("sticky-not");
    $(".dark-overlay").click(function() {
      $(".collapse").removeClass("show");
      $("body").removeClass("layer-open");
    });
  });
});

//cf kur line çhart
var xValues = [26.07,27.07,28.07,29.07,30.07,31.07,1.08,2.08,3.08,4.08,5.08];

new Chart("cfChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [1.20,1.19,1.19,1.17,1.17,1.15,1.15,1.13,1.10,1.08,1.07], //usd
      borderColor: "green",
      fill: false
    }, { 
      data: [1.23,1.22,1.21,1.19,1.18,1.17,1.17,1.15,1.12,1.10,1.09], //eur
      borderColor: "blue",
      fill: false
    }, { 
      data: [1.46,1.43,1.42,1.39,1.38,1.37,1.36,1.35,1.32,1.29,1.28], //gbp
      borderColor: "orange",
      fill: false
    }
  ]
  },
  options: {
    legend: {display: false}
  }
});

var dateTryValues = [26.07,27.07,28.07,29.07,30.07,31.07,1.08,2.08,3.08,4.08];

new Chart("cfChart2", {
  type: "line",
  data: {
    labels: dateTryValues,
    datasets: [{ 
      data: [14.84,15.01,15.07,15.22,15.24,15.60,15.57,15.80,16.33,16.68,16.67], //try
      borderColor: "red",
      fill: false
    }
  ]
  },
  options: {
    legend: {display: false}
  }
});
