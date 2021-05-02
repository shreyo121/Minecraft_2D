var canvas=new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
blockimagewidth=30;
blockimageheight=30;
var player_object="";
var blockimageobject="";
function player_update(){
fabric.Image.fromURL("player.png", function(Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(150);
player_object.set({
    top:player_y,
    left:player_x
});
canvas.add(player_object);    
});
}
function block_update(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        blockimageobject=Img;
        blockimageobject.scaleToWidth(blockimagewidth);
        blockimageobject.scaleToHeight(blockimageheight);
        blockimageobject.set({
        top:player_y,
        left:player_x
    }); 
    canvas.add(blockimageobject);    
    });
    }
    window.addEventListener("keydown", mykeydown);
    function mykeydown (e){
        keypressed=e.keyCode;
        console.log(keypressed)
       if (keypressed=="67"){
           console.log ("C");
        block_update("cloud.jpg")
       }
       if (keypressed=="70"){
        console.log ("F");
     block_update("dark_green.png") }

     if (keypressed=="68"){
        console.log ("D");
     block_update("ground.png") }

     if (keypressed=="71"){
        console.log ("G");
     block_update("light_green.png") }

     if (keypressed=="82"){
        console.log ("R");
     block_update("roof.jpg") }

     if (keypressed=="79"){
        console.log ("O");
     block_update("trunk.jpg") }

     if (keypressed=="76"){
        console.log ("L");
     block_update("unique.png") }

     if (keypressed=="66"){
        console.log ("B");
     block_update("wall.jpg") }

     if (keypressed=="83"){
        console.log ("S");
     block_update("yellow_wall.png") }

     if (keypressed=="38"){
        console.log ("Up");
     Up ();} if (keypressed=="40"){
        console.log ("Down");
     Down ();} if (keypressed=="37"){
        console.log ("Left");
     Left ();} if (keypressed=="39"){
        console.log ("Right");
     Right ();} 
     if (e.shiftKey==true && keypressed=="80"){
         console.log ("shiftp");
      blockimageheight=blockimageheight+10
      document.getElementById("current_height").innerHTML=blockimageheight

      blockimagewidth=blockimagewidth+10
      document.getElementById("current_width").innerHTML=blockimagewidth
     } 

     if (e.shiftKey==true && keypressed=="77"){
        console.log ("shiftm");
     blockimageheight=blockimageheight-10
     document.getElementById("current_height").innerHTML=blockimageheight

     blockimagewidth=blockimagewidth-10
     document.getElementById("current_width").innerHTML=blockimagewidth
    } 
    }