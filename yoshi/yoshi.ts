$(() => {
    const ctx: HTMLElement = document.querySelector(".context") as HTMLElement;

    let ctxStr: String = "";

    for (let i = 0; i < 10000; i++) {
        ctxStr += "好";
    }

    ctx.innerHTML += ctxStr + "<br>";
});
