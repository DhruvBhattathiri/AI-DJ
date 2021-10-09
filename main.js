song1 = music.mp3;
song2 = music2.mp3;

leftWristY = 0;
leftWristX = 0;

scoreRightWrist = 0;
scoreLeftWrist = 0;


function preload()
{
 song1 = longSound("music.mp3");
 song2 = longSound("music2.mp3")
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(){
    if(result.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        leftWristY = results[0].pose.keypoints.score;
        console.log("leftWrist score " + leftWrist);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);

    }
}

function draw()
{
    image(video, 0, 0, 600, 500);
    fill("#08638c");
    storke("#002536");

   play_song1 = song1.isplaying();
   play_song2 = song2.isplaying();

   if(scoreLeftWrist > 0.2)
   {
  circle(leftWristX, leftWristY, 50);
  song2.stop();
   
  if(song = false){
    play_song1.play();
    document.getElementById("song").innerHTML = "Peter Pan Song is being played";   
  }
   }

   if(scoreRightWrist > 0.2)
   {
  circle(leftWristX, leftWristY, 50);
  song1.stop();
   
  if(song1 = false){
    play_song2.play();
    document.getElementById("song").innerHTML = "Harry Potter Song is being played";   
  }
   }

}

