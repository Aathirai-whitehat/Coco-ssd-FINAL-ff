img="";
status="";
objects=[];

function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(600,400);
    canvas.center();
    objectdetector=ml5.objectDetector("cocossd",modelloaded);
}


function modelloaded(){
    console.log("Model has been loaded");
    status="True";
    document.getElementById("status").innerHTML="Status : Detecting objects";
    objectdetector.detect(img,gotresults);
}

function gotresults(error,results) {
    if (error){
        console.log(error);
    }
    else {
        console.log(results);
        objects = results;
    }
}

function draw(){
    image(img,0,0,600,400);

    if(status != ""){
        for ( i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML="Object detected";
            console.log("hi");
            accuracy= floor(objects[i].confidence * 100) + " %";
            fill("#FF0000");
            text(objects[i].label + " " + accuracy , objects[i].x , objects[i].y);
            stroke("#FF0000");
            noFill();
            rect(objects[i].x , objects[i].y ,objects[i].height , objects[i].width);
        }
    }

}