let giri = {};
let timer = 2000;

// let siti = [
//     "https://sun.fedabo.com/Home/TestSafiloPUno",
//     "https://sun.fedabo.com/Home/TestSafiloPDue",
//     "https://sun.fedabo.com/Home/TestSafiloPTre"
// ];

document.addEventListener("DOMContentLoaded", function () {
    // giri = document.getElementsByClassName("gira");
    giri = 3;
    // startSlide(2);
    startSlideDue(2);
});

function startSlide(numeroAttuale) {
    setTimeout(() => {
        let elemntiGruppo = document.getElementsByClassName("gira" + (numeroAttuale - 1));
        for (let index = 0; index < elemntiGruppo.length; index++) {
            elemntiGruppo[index].setAttribute("hidden", "");
        }
        elemntiGruppo = document.getElementsByClassName("gira" + numeroAttuale);
        for (let index = 0; index < elemntiGruppo.length; index++) {
            elemntiGruppo[index].removeAttribute("hidden", "");
        }
        if (numeroAttuale != giri) {
            startSlide(numeroAttuale + 1);
        }
        else {
            setTimeout(() => {
                window.location.reload();
            }, timer);
        }
    }, timer);
}

function startSlideDue(numeroAttuale) {
    setTimeout(() => {
        let elemntiGruppo = document.getElementsByClassName("gira" + (numeroAttuale - 1));
        for (let index = 0; index < elemntiGruppo.length; index++) {
            elemntiGruppo[index].setAttribute("hidden", "");
        }
        elemntiGruppo = document.getElementsByClassName("gira" + numeroAttuale);
        for (let index = 0; index < elemntiGruppo.length; index++) {
            elemntiGruppo[index].removeAttribute("hidden", "");
        }
        if (numeroAttuale != giri) {
            startSlideDue(numeroAttuale + 1);
        }
        else {
            let elemntiGruppo = document.getElementsByTagName("iframe");
            for (let index = 0; index < elemntiGruppo.length; index++) {
                elemntiGruppo[index].setAttribute("hidden", "");
            }
            elemntiGruppo[0].removeAttribute("hidden");
            startSlideDue(2);
            // setTimeout(() => {
            //     window.location.reload();
            // }, timer);
        }
    }, timer);
}