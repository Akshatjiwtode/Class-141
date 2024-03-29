song = "";


function preload(){
    song = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture();
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Model is initiated");
}

function gotPoses(results){

}

function draw(){
    image(video, 0, 0, 600, 500);
}

function play(){
    song.play();
}

function pause(){
    song.pause();
}



