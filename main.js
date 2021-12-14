function preload(){

}
function setup(){
    canvas=createCanvas(700,300);
    canvas.position(110,280)
    video=createCapture(VIDEO)
    video.hide()
}
function draw(){
    image(video,50,50,600,200);
    fill(255,200,150);
    circle(25,25,50);
    fill(150,100,0);
    rect(50,10,600,30);  
    fill(255,200,150);
    circle(675,25,50)
    fill(150,100,0);
    rect(10,50,30,200);
    fill(225,200,150);
    circle(25,275,50);
    fill(150,100,0);
    rect(50,260,600,30);
    fill(225,200,150);
    circle(675,275,50);
    fill(150,100,0);
    rect(660,50,30,200)
}
function download(){
    save("image.png")
}