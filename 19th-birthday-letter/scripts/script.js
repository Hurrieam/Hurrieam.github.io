"use strict";
$(function () {
    // password checker
    for (;;) {
        var password = prompt("此网站小曹已查看哦，请输入小曹专属口令～\n输入“b”返回主页");
        if ((password === null || password === void 0 ? void 0 : password.toString()) === "我爱小胡") {
            alert("欢迎你～");
            break;
        }
        else {
            if ((password === null || password === void 0 ? void 0 : password.toString()) === "b") {
                window.location.href = "../index.html";
                break;
            }
            alert("口令错误～");
        }
    }
    $("#flip").on('click', function () {
        $("#panel").slideDown("slow");
        $("#flip").fadeOut("slow");
    });
});
//# sourceMappingURL=script.js.map