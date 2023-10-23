$(document).ready(function(){

  $("body").vegas({
    slides: [
      { src: "../img/index/scroll01.jpg" },
      { src: "../img/index/scroll02.jpg" },
      { src: "../img/index/scroll03.jpg" }
    ],
    delay: 10000,
    transition: "zoomOut",
    transitionDuration: 3000
  });

});
