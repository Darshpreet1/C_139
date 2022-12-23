img = "";
status ="";
objects = [];
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function preload(){
    img = loadImage("dog_cat.jpg");
}

function draw(){
    image(img,0,0,640,420);
    if(status != ""){
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML = "Status : Objects Detected ";

            fill("#ff1a1a");
            percent =floor(objects[i].confidence*100);
            text(objects[i].label+"  "+percent+" % ",objects[i].x,objects[i].y);
            noFill();
            stroke("#ff1a1a");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height) ;      
         }
    }
}

function modelLoaded(){
    console.log("modelLoaded");
    status = true;
    objectDetector.detect(img,gotresult);
}

function gotresult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects = results;
    }}
