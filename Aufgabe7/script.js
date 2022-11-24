let Deutschland = 83200000;
console.log(" Die Einwohnerzahl von Deutschland im Jahre 2022 bträgt " + Deutschland + " Einwohner. ");
let Deutschland2060 = 81800000;
console.log(" Die Einwohnerzahl von Deutschland im Jahre 2060 bträgt " + Deutschland2060 + "Einwohner. ");
let ProzentD = (1 - Deutschland / Deutschland2060) * 100;
console.log("Die Einwohnerzahl in Deutschland wird bis 2060 um " + ProzentD.toFixed(2) + "% sinken");
let Frankreich = 67800000;
console.log(" Die Einwohnerzahl von Frankreich im Jahre 2022 bträgt " + Frankreich + " Einwohner. ");
let Frankreich2060 = 69700000;
console.log(" Die Einwohnerzahl von Frankreich im Jahre 2060 bträgt " + Frankreich2060 + " Einwohner. ");
let ProzentF = (1 - Frankreich / Frankreich2060) * 100;
console.log("Die Einwohnerzahl in Frankreich wird bis 2060 um " + ProzentF.toFixed(2) + "% steigen");
let Italien = 59000000;
console.log(" Die Einwohnerzahl von Italien im Jahre 2022 bträgt " + Italien + " Einwohner. ");
let Italien2060 = 56000000;
console.log(" Die Einwohnerzahl von Italien im Jahre 2060 bträgt " + Italien2060 + " Einwohner. ");
let ProzentIT = (1 - Italien / Italien2060) * 100;
console.log("Die Einwohnerzahl in Italien wird bis 2060 um " + ProzentIT.toFixed(2) + "% sinken");
let Luxenburg = 600000;
console.log(" Die Einwohnerzahl von Luxenburg im Jahre 2022 bträgt " + Luxenburg + " Einwohner. ");
let Luxenburg2060 = 800000;
console.log(" Die Einwohnerzahl von Luxenburg im Jahre 2060 bträgt " + Luxenburg2060 + " Einwohner. ");
console.log("Die Einwohnerzahl von Luxenburg wird bis 2060 um " + (1 - Luxenburg / Luxenburg2060) * 100 + "% steigen");
let EU = 446800000;
console.log(" Die Einwohnerzahl von der EU im Jahre 2022 bträgt " + EU + " Einwohner. ");
let EU2060 = 432500000;
console.log(" Die Einwohnerzahl von der EU im Jahre 2060 bträgt " + EU2060 + " Einwohner. ");
console.log("Die Einwohnerzahl der EU wird bis 2060 um " + (1 - EU / EU2060) * 100 + "% sinken");
window.addEventListener('load', function () {
    function myfunction(Jahr2022, Jahr2060, Land) {
        /*console.log(" Die Einwohnerzahl von Deutschland im Jahre 2022 bträgt " + Deutschland + " Einwohner. ");*/
        document.querySelector(".Einwohner22").innerHTML = "Die Einwohnerzahl von " + Land + " im Jahre 2022 bträgt " + Jahr2022 + " Einwohner";
        document.querySelector(".Einwohnerzahl22").innerHTML = Jahr2022.toString();
        document.querySelector(".Einwohnerzahl60").innerHTML = Jahr2060.toString();
        document.querySelector(".Wachstumsrate").innerHTML = ((1 - Jahr2022 / Jahr2060) * 100).toFixed(2) + '%';
        document.querySelector("#chart").setAttribute('style', 'height: ' + ((1 - Jahr2022 / Jahr2060) * 100).toString() + '%;');
    }
    document.querySelector(".wrapper1").addEventListener('click', function () { myfunction(Deutschland, Deutschland2060, " Deutschland"); });
    document.querySelector("#wrapper2").addEventListener('click', function () { myfunction(Frankreich, Frankreich2060, " Frankreich"); });
    document.querySelector("#wrapper3").addEventListener('click', function () { myfunction(Italien, Italien2060, " Italien "); });
    document.querySelector(".wrapper4").addEventListener('click', function () { myfunction(Luxenburg, Luxenburg2060, " Luxenburg"); });
    document.querySelector(".chartStarWrapper").addEventListener('click', function () { myfunction(EU, EU2060, " EU"); });
});
//# sourceMappingURL=script.js.map