$(document).ready(() => {
  // password checker
  for (;;) {
    let password: string | null = prompt(
      "此网站小曹已查看哦，请输入小曹专属口令～\n输入“b”返回主页"
    );
    if (password?.toString() === "我爱小胡") {
      alert("欢迎你～");
      break;
    } else {
      if (password?.toString() === "b") {
        window.location.href = "../index.html";
        break;
      }
      alert("口令错误～");
    }
  }

  $("#flip").click(() => {
    $("#panel").slideDown("slow");
    $("#flip").fadeOut("slow");
  });

  $(".play").click(() => {
    document.querySelector("video")?.play();
    $(".play").fadeOut("slow");
  });
});
