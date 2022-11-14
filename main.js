function preload(){
}

function setup(){
    canvas = createCanvas(1000, 700);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

}

function draw(){
    image(video, 200, 150, 640, 480);
    rect(30, 80, 55, 55);
    rect(900, 80, 55, 55);
    rect(30, 640, 55, 55);
    rect(900, 640, 55, 55);

    rect(87, 90, 810, 30);
    rect(87, 657, 810, 30);
    rect(42, 120, 30, 540);
    rect(915, 120, 30, 540);
}

function take_snapshot(){
    save('photo.png');
}
