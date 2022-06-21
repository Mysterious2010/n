difference=0;
rightWrist=0;
leftWrist=0;

function setup(){
    video=createCapture(VIDEO)
    video.size(450,400);

    canvas=createCanvas(450,400);
    canvas.position(560,100);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("PoseNet Is Initialized!");
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);

    }
}
 function draw(){
    background('#6C91C2');
 }