namespace Canvas {

window.addEventListener("load", start);

function start(_event: Event) : void {

    let canvas : HTMLCanvasElement = document.querySelector("canvas");
    let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
    console.log(crc2);

    crc2.fillRect (100, 150,100, 50);

    crc2.beginPath();
    crc2.moveTo(250, 250);
    crc2.lineTo(200, 200);
    crc2.lineTo(300,300);
    crc2.closePath();
    crc2.fill();

}





}