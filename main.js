canvas= new fabric.Canvas("myCanvas");
block_image_width=30;
block_image_height=30;
player_x=10;
player_y=10;
var player_object= "";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,left:player_x
        });
        canvas.add(player_object); 
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(150);
        block_image_object.scaleToHeight(140);
        block_image_object.set({
            top:player_y,left:player_x
        });
        canvas.add(block_image_object); 
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    var getnumber= e.keyCode;
    if (e.shiftKey==true && getnumber=='80'){
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if (e.shiftKey==true && getnumber=='77'){
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(getnumber=='38'){
        up();
        console.log("up");
    }
    if(getnumber=='40'){
        down();
        console.log("down");
    }
    if(getnumber=='37'){
        left();
        console.log("left");
    }
    if(getnumber=='39'){
        right();
        console.log("right");
    }
    if(getnumber=='70'){
        new_image('ironmanface.jpg');
        console.log("f");
    }
    if(getnumber=='66'){
        new_image('spidermanbody.jpg')
        console.log("b");
    }
    if(getnumber=='76'){
        new_image('hulk legs.jpg')
        console.log("l");
    }
    if(getnumber=='82'){
        new_image('thor right hand.jpg')
        console.log("r");
    }
    if(getnumber=='72'){
        new_image('captain america left hand.jpg')
        console.log("h");
    }
}
function up(){
    if (player_y>=0){
        player_y=player_y-block_image_height;
        console.log("block image height =" + block_image_height);
        console.log("Up arrow pressed, x="+player_x+ ", y="+player_y);
        canvas.remove(player_object);
        player_update();

    }
}
function down(){
    if (player_y<=460){
        player_y=player_y+block_image_height;
        console.log("block image height =" + block_image_height);
        console.log("Down arrow pressed, x="+player_x+ ", y="+player_y);
        canvas.remove(player_object);
        player_update();
        
    }
}
function right(){
    if (player_x<=650){
        player_x=player_x+block_image_width;
        console.log("block image height =" + block_image_height);
        console.log("Right arrow pressed, x="+player_x+ ", y="+player_y);
        canvas.remove(player_object);
        player_update();
        
    }
}
function left(){
    if (player_x>=0){
        player_x=player_x-block_image_width;
        console.log("block image height =" + block_image_height);
        console.log("Left arrow pressed, x="+player_x+ ", y="+player_y);
        canvas.remove(player_object);
        player_update();
        
    }
}
