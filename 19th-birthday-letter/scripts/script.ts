$(document).ready(() => {
  $("#flip").click(() => {
    $("#panel").slideDown("slow");
    $("#flip").fadeOut("slow");
  });

  $(".play").click(() => {
    document.querySelector("video")?.play();
    $(".play").fadeOut("slow");
  });
});
