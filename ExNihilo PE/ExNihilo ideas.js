//Ex-Nihilo PE Ideas-1
//Better barrels
var base = 200;
var s1 = 201;
var s2 = 202;
var s3 = 203;
var s4 = 204;
var lava = 205;
var water = 206;

"flowing_water"
"flowing_lava"

var lavaTex = [["planks",0],["flowing_lava",0],[ "flowing_lava" ,0],[ "flowing_lava" ,0],[ "flowing_lava" ,0],[ "flowing_lava" ,0]]
var waterTex = [[ "planks" ,0],[ "flowing_water" ,0],[ "flowing_water" ,0],[ "flowing_water" ,0],[ "flowing_water" ,0],[ "flowing_water" ,0]]

Player.addItemCreativeInv(base,1,0);
Player.addItemCreativeInv(lava,1,0);
Player.addItemCreativeInv(water,1,0);
Player.addItemCreativeInv(s1,1,0);
Player.addItemCreativeInv(s2,1,0);
Player.addItemCreativeInv(s3,1,0);
Player.addItemCreativeInv(s4,1,0);
Player.addItemCreativeInv(500,1,0);

ModPE.setItem(500,"cauldron",0,"barrel",16);

Block.defineBlock(base,"barrel_base",["planks",0],5,false,0);
Block.defineBlock(lava,"barrel_lava",lavaTex,5,false,0);
Block.defineBlock(water,"barrel_water",waterTex,5,false,0);
Block.defineBlock(s1,"barrel_side1",["planks",0],5,false,0);
Block.defineBlock(s2,"barrel_side2",["planks",0],5,false,0);
Block.defineBlock(s3,"barrel_side3",["planks",0],5,false,0);
Block.defineBlock(s4,"barrel_side4",["planks",0],5,false,0);

Block.setDestroyTime(base,0.5);
Block.setDestroyTime(s1,0.5);
Block.setDestroyTime(s2,0.5);
Block.setDestroyTime(s3,0.5);
Block.setDestroyTime(s4,0.5);

Block.setShape(base,2/16,0/16,2/16,14/16,1/16,14/16);
Block.setShape(water,2/16,0/16,2/16,14/16,13/16,14/16);
Block.setShape(lava,2/16,0/16,2/16,14/16,13/16,14/16);
Block.setShape(s1,2/16,0/16,-2/16,15/16,16/16,-1/16);
Block.setShape(s2,17/16,0/16,2/16,18/16,16/16,15/16);
Block.setShape(s3,1/16,0/16,17/16,15/16,16/16,18/16);
Block.setShape(s4,-2/16,0/16,1/16,-1/16,16/16,14/16);

Block.setRenderLayer(base,1);
Block.setRenderLayer(s1,1);
Block.setRenderLayer(s2,1);
Block.setRenderLayer(s3,1);
Block.setRenderLayer(s4,1);

function useItem(x,y,z,item,block,side){
if(item==500){
Level.setTile(x,y+1,z+1,s1,0);
Level.setTile(x-1,y+1,z,s2,0);
Level.setTile(x,y+1,z-1,s3,0);
Level.setTile(x+1,y+1,z,s4,0);
Level.setTile(x,y+1,z,base,0);
}
}

function startDestroyBlock(x,y,z,side){
var block = Level.getTile(x,y,z);
if(block==lava||block==water){
preventDefault();
}
}

function destroyBlock(x,y,z,side){
var b = Level.getTile(x,y,z);
if(b==s1){
Level.setTile(x,y,z-1,0,0);
Level.setTile(x,y,z-2,0,0);
Level.setTile(x-1,y,z-1,0,0);
Level.setTile(x+1,y,z-1,0,0);
}
if(b==s2){
Level.setTile(x+1,y,z,0,0);
Level.setTile(x+2,y,z,0,0);
Level.setTile(x+1,y,z-1,0,0);
Level.setTile(x+1,y,z+1,0,0);
}
if(b==s4){
Level.setTile(x-1,y,z,0,0);
Level.setTile(x-2,y,z,0,0);
Level.setTile(x-1,y,z-1,0,0);
Level.setTile(x-1,y,z+1,0,0);
}
if(b==s3){
Level.setTile(x,y,z+1,0,0);
Level.setTile(x,y,z+2,0,0);
Level.setTile(x+1,y,z+1,0,0);
Level.setTile(x-1,y,z+1,0,0);
}
if(b==base){
Level.setTile(x-1,y,z,0,0);
Level.setTile(x+1,y,z,0,0);
Level.setTile(x,y,z-1,0,0);
Level.setTile(x,y,z+1,0,0);

}
}