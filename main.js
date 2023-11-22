song="";

function preload(){
    song=loadSound("xd.mp3")
}

scoreRightWrist=0;
scoreLeftWrist=0;

rightWristX=0;
rightWristY=0;

leftWristX=0;
leftWristY=0;

function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("poseNet");

}
function gotPoses(results){
    if (results.length>0) {
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;

        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;

        rightWristY = results[0].pose.rightWrist.y;
        leftWristY = results[0].pose.leftWrist.y;

        console.log("posicion en x:"+ rightWristX+ " posicion izquierda X:"+ leftWristX)
        console.log("posicion en y:"+ rightWristY+ " posicion izquierda y:"+ leftWristY)  
    }
}
function draw(){
    image(video, 0, 0, 600, 500);
    fill("#FF0000");
    stroke("#FF0000");
    if (scoreRightWrist>0.2) {
        circle(rightWristX,rightWristY, 20);
        if (rightWristY>=0 && rightWristY<=100) {
            


            song.rate(0.5)
            document.getElementById("volume").innerHTML="0.5";

            
        }

        if (rightWristY>=100 && rightWristY<=200) {
            


            song.rate(1)
            document.getElementById("volume").innerHTML="1";

            
        }

        if (rightWristY>=200 && rightWristY<=300) {
            


            song.rate(1.5)
            document.getElementById("volume").innerHTML="1.5";

            
        }

        if (rightWristY>=300 && rightWristY<=400) {
            


            song.rate(2)
            document.getElementById("volume").innerHTML="2";

            
        }

        if (rightWristY>=400 && rightWristY<=500) {
            


            song.rate(2.5)
            document.getElementById("volume").innerHTML="2.5";

            
        }
        


    }

   if (scoreLeftWrist>0.2) {
    circle(leftWristX, leftWristY, 20);
    InNumeberlefyWristY=Number(leftWristX);
    new_leftwristY=floor(InNumeberlefyWristY *2);
    leftWristY_divide_100=new_leftwristY/1000;
    document.getElementById("volumen").innerHTML="volumen "+leftWristY_divide_1000;
    song.setVolume(leftWristY_divide_1000);
   
    
   }


}

function play(){
    song.play();
    song.setVolumen(1);
    song.rate(1);
}
