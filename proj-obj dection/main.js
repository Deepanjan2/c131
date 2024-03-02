function preload()
{
img = loadImage("dog.jpg");

}
function setup()
{
canvas = createCanvas(600,420);
canvas.center();

}
function draw()
{
image(img,0,0,600,420);
fill("#FF0000");
text("Shiba",53,53);
noFill();
stroke("#FF0000");
rect(50,40,490,370);

}