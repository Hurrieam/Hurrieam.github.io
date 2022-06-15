"use strict";
$(document).ready(function () {
    $("#flip").click(function () {
        $("#panel").slideDown("slow");
        $("#flip").fadeOut("slow");
    });
    $(".play").click(function () {
        var _a;
        (_a = document.querySelector("video")) === null || _a === void 0 ? void 0 : _a.play();
        $(".play").fadeOut("slow");
    });
});
//# sourceMappingURL=script.js.map