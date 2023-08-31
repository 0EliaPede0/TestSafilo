let contatore = 0;
let giri = {};
let timer = 5000;

// let siti = [
//     "https://sun.fedabo.com/Home/TestSafiloPUno",
//     "https://sun.fedabo.com/Home/TestSafiloPDue",
//     "https://sun.fedabo.com/Home/TestSafiloPTre"
// ];

document.addEventListener("DOMContentLoaded", function () {
    // giri = document.getElementsByClassName("gira");
    giri = 3;
    // startSlide(2);

    startSlideDue(0);
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
        let elemntiGruppo = document.getElementsByClassName("gira");
        contatore = elemntiGruppo.length;
        for (let index = 0; index < elemntiGruppo.length; index++) {
            elemntiGruppo[index].setAttribute("hidden", "");
        }
        elemntiGruppo[numeroAttuale].removeAttribute("hidden", "");
        if (numeroAttuale != contatore - 1) {
            startSlideDue(numeroAttuale + 1);
        }
        else {
            startSlideDue(0);
        }
    }, timer);
}