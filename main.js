song_1="";
song_2="";
function preload(){
    song_1=loadSong("Ranjha - Shershaah 128 Kbps.mp3");
    song_2=loadSong("Stay(PaglaSongs).mp3");
}
function setup(){
  canvas=createCanvas(500,500);
  canvas.center();
  video=createCapture(VIDEO);
  video.hide();

}
function draw(){
    image(video,0,0,500,500);

}

