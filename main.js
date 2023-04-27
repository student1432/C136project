status = "";

function setup()
{
    canvas = createCanvas(380, 480);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function start()
{
   objectDetecter = ml5.objectDetecter('cocossd', modelLoaded);
   

}