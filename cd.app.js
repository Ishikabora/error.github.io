img="";
Status = "";
objects = [];


function preload(){
    img = loadImage('cd.jpg');
  }
  
  
  function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modalLoaded);
    document.getElementById("status").innerHTML = "Status : Dectecting Objects";
  }
  
function modalLoaded()
{
  console.log("Modal Loaded");
  Status = true;
  objectDetector.detect(img , gotResults);
}

function gotResults(error,results)
{
  if (error)
  {
    console.log(error);
  }
   console.log(results);
}

function draw(){
      image(img, 0, 200,  440, 420);
      if(Status != "")
      {
        for(i = 0; i < objects.length; i++)
        {
          document.getElementById("status").innerHTML = "Objects Detected";
          fill("#FF0000");
          percent = floor(objects[i].confidence * 100);
          text(objects[i].label+" "+percent+"%", objects[i].x, objects[i].y);
          noFill();
        stroke("#FF0000");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
      }
     }