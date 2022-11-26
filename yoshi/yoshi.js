"use strict";
$(document).ready(function () {
    var ctx = document.querySelector(".context");
    var ctxStr = "";
    for (var i = 0; i < 10000; i++) {
        ctxStr += "好";
    }
    ctx.innerHTML += ctxStr + "<br>";
});
//# sourceMappingURL=yoshi.js.map