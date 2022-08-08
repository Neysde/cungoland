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
var xValues = [26.07,27.07,28.07,29.07,30.07,31.07,1.08,2.08,3.08,4.08,5.08,6.08,7.08,8.08];

new Chart("cfChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [1.20,1.19,1.19,1.17,1.17,1.15,1.15,1.13,1.10,1.08,1.07,1.07,1.06,1.04], //usd
      borderColor: "green",
      fill: false
    }, { 
      data: [1.23,1.22,1.21,1.19,1.18,1.17,1.17,1.15,1.12,1.10,1.09,1.08,1.07,1.06], //eur
      borderColor: "blue",
      fill: false
    }, { 
      data: [1.46,1.43,1.42,1.39,1.38,1.37,1.36,1.35,1.32,1.29,1.28,1.29,1.28,1.26], //gbp
      borderColor: "orange",
      fill: false
    }
  ]
  },
  options: {
    legend: {display: false}
  }
});

var dateTryValues = [26.07,27.07,28.07,29.07,30.07,31.07,1.08,2.08,3.08,4.08,5.08,6.08,7.08,8.08];

new Chart("cfChart2", {
  type: "line",
  data: {
    labels: dateTryValues,
    datasets: [{ 
      data: [14.84,15.01,15.07,15.22,15.24,15.60,15.57,15.80,16.33,16.68,16.67,16.65,16.85,17.24], //try
      borderColor: "red",
      fill: false
    }
  ]
  },
  options: {
    legend: {display: false}
  }
});

var popNameValues = ["Çüngolu", "Türk", "Arap", "Alman", "Diğer"];
var popPercentageValues = [83, 6, 5, 5, 1];
var barColors = [
  "#000000",
  "#FF0000",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("cungoPopulationChart", {
  type: "pie",
  data: {
    labels: popNameValues,
    datasets: [{
      backgroundColor: barColors,
      data: popPercentageValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Çüngoland Nüfus"
    }
  }
});

var popEthnicNameValues = ["Alman", "Türk", "Norveçli", "Flemenk", "Diğer"];
var popEthnicPercentageValues = [44, 26, 17, 3, 10];
var barColors = [
  "#FF8A00",
  "#FF0000",
  "#004DFF",
  "#00D8FF",
  "#1e7145"
];

new Chart("cungoEthnicPopulationChart", {
  type: "pie",
  data: {
    labels: popEthnicNameValues,
    datasets: [{
      backgroundColor: barColors,
      data: popEthnicPercentageValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Çüngoland Etnik Nüfus"
    }
  }
});

var popReligionValues = ["Protestan", "Dinsiz", "Müslüman", "Katolik", "Diğer"];
var popReligionPercentageValues = [44, 26, 17, 3, 10];
var barColors = [
  "#FF0000",
  "#000000",
  "#9EFF00",
  "#000EFF",
  "#1e7145"
];

new Chart("cungoReligionChart", {
  type: "pie",
  data: {
    labels: popReligionValues,
    datasets: [{
      backgroundColor: barColors,
      data: popReligionPercentageValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Çüngoland Dini Dağılım"
    }
  }
});

var refugeeValues = ["Suriyeli", "Afgan", "Pakistanlı", "Kuzey Afrikalı"];
var refugeeNumberValues = [36500, 18300, 300, 2500];
var barColors = ["red", "brown","green","orange"];

new Chart("refugeeChart", {
  type: "bar",
  data: {
    labels: refugeeValues,
    datasets: [{
      backgroundColor: barColors,
      data: refugeeNumberValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Çüngoland Mülteci Sayısı"
    }
  }
});

var sectorValues = ["Hizmet", "Tarım", "Sanayi"];
var sectorPercentageValues = [68, 8, 24];
var barColors = [
  "#FF8A00",
  "#00FF20",
  "#426969",
];

new Chart("cungoSectorChart", {
  type: "pie",
  data: {
    labels: sectorValues,
    datasets: [{
      backgroundColor: barColors,
      data: sectorPercentageValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Çüngoland Sektör Dağılımı"
    }
  }
});
