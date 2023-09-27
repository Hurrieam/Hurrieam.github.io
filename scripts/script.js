"use strict";
$(function () {
    var data = [
        {
            desc: "飓风小站博客",
            git_repo: "Hurrieam's blog",
            url: "https://hurrieam.github.io/Hurrieam/",
            is_latest: true
        },
        {
            desc: "学生成绩录入系统",
            git_repo: "InfoGetter.git",
            url: "https://hurrieam.github.io/InfoGetter/",
            is_latest: false
        },
        {
            desc: "计算器",
            git_repo: "HCalc.git",
            url: "https://hurrieam.github.io/HCalc/",
            is_latest: false
        },
        {
            desc: "幸运儿生成器",
            git_repo: "LuckyDogGenerator.git",
            url: "https://hurrieam.github.io/LuckyDogGenerator/",
            is_latest: false
        },
        {
            desc: "青年大学习截图获取器3.0",
            git_repo: "QingNianDaXueXiCracker.git",
            url: "https://hurrieam.github.io/QingNianDaXueXiCracker/",
            is_latest: true
        },
        {
            desc: "灯火阑珊飓风搜索",
            git_repo: "DengHuoLanShanSearcher.git",
            url: "https://hurrieam.github.io/DengHuoLanShanSearcher/",
            is_latest: false
        },
        {
            desc: "飓风记账",
            git_repo: "InvincibleManager.git",
            url: "https://hurrieam.github.io/InvincibleManager/",
            is_latest: false
        },
        {
            desc: "光阴似箭计时器",
            git_repo: "TimeFlies.git",
            url: "https://hurrieam.github.io/TimeFlies/",
            is_latest: false
        },
        {
            desc: "24点",
            git_repo: "24-points.git",
            url: "https://hurrieam.github.io/24-points/",
            is_latest: false
        },
        {
            desc: "小曹的19岁生日小作文",
            git_repo: "19th-birthday-letter",
            url: "./19th-birthday-letter/index.html",
            is_latest: false
        },
        {
            desc: "🉑️喜欢你🌶️",
            git_repo: "heart",
            url: "./heart/index.html",
            is_latest: false
        },
        {
            desc: "一周年礼物D",
            git_repo: "annipres-d",
            url: "./annipres-d/index.html",
            is_latest: false
        },
        {
            desc: "敏感词检测系统",
            git_repo: "sensitivewordjudge.git",
            url: "https://github.com/Hurrieam/sensitivewordjudge",
            is_latest: true
        },
        {
            desc: "西安交通大学城市学院简介",
            git_repo: "xjtucc-briefintro",
            url: "./xjtucc-briefintro/index.html",
            is_latest: false
        },
        {
            desc: "更多",
            git_repo: "More... ",
            url: "https://github.com/Hurrieam",
            is_latest: false
        },
    ];
    $(".jumbotron").append("<a href=\"".concat(data[0].url, "\">").concat(data[0].desc, " | ").concat(data[0].git_repo, "</a>"));
    if (data[0].is_latest) {
        $(".jumbotron > a").addClass("new");
    }
    var idx = 1;
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var datum = data_1[_i];
        if (idx === 1) {
            idx++;
            continue;
        }
        $(".row").append("<div class=\"col-sm-4\"><h3>".concat(datum.desc, "</h3><a href=\"").concat(datum.url, "\">").concat(datum.git_repo, "</a></div>"));
        if (datum.is_latest) {
            $(".row > div:nth-child(".concat(idx - 1, ") > h3")).addClass("new");
        }
        idx++;
    }
});
//# sourceMappingURL=script.js.map