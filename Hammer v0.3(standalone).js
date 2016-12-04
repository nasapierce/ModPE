//Mod By Darkserver follow me on Twitter @pierce_manasseh
var defaultDestroyTime = [ null, 1.5, 0.6, 0.5, 2, 2, 0, -1, null, null, null/*10*/, null, 0.5, 0.6, 3, 3, 3, 2, 0.2, 0.6, 0.3/*20*/, 3, 3, 10, 0.8, null, 0.2, 0.7, null, null, 4/*30*/, 0, 0, 1, 1.5, 0.8, null, 0, 0, 0, 0 /*40*/, 3, 5, 2, 2, 2, 0, 1.5, 2, 50, 0 /*50*/, 0, null, 2, 2.5, null, 3, 5, 2.5, 0, 0.6/*60*/, 3.5, 3.5, 1, 3, 0.4, 0.7, 2, 1, null, null/*70*/, 5, null, 3, 3, null, null, null, 0.1, 0.5, 0.2 /*80*/, 0.4, 0.6, 0, null, 2, 1, 0.4, 0.3, null, 1 /*90*/, 0.5, null, null, -1, 3, null, 1.5, 1.5, null, 5 /*100*/, 0.3, 1, 0, 0, null, 2, 2, 1.5, null, null /*110*/, 2, null, 2, null, null, null, null, null, null, null /*120*/, null, null, null, null, null, null, 0.8, null, null, null /*130*/, null, null, 2, 2, 2, null, null, 2, null, 0 /*140*/, 0, null, null, null, null, null, null, null, null, null /*150*/, null, 0.4, 3, 0.8, 0.8, 2, 2, null, null, null /*160*/, null, null, null, null, null, null, null, null, 0.5, 0.1 /*170*/, 5, null, null, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5 /*180*/, 1.5, 1, 1, 0.6, 2, 2, null, 3, 0.01, 2 /*190*/, 2, 2, 2, 1, 2, 2, 2, 2, 2, null /*200*/, null, null, 1.5, 1.5, 1.5, 1.5, null, 2, 2, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, 3.5, 50, 5, 0.6, 0.6, null, null, null, null, null, 0 ];

ModPE.setItem(390,"axe",4,"Hammer");

Item.addCraftRecipe(390,1,0,[278,1,0,264,2,0,42,4,0]);

var stone = [1,3,4,13,14,15,16,21,22,24,41,42,43,44,45,48,49,56,57,67,73,74,87,89,98,101,108,109,112,114,128,139,155,156,173,247,33,34,152,153,174,175,176,177,178,179,188,190,191,192,193,194,195,196,197,198,199];

function destroyBlock(x, y, z, side)
{

var b0 = Level.getTile(x,y,z);
var b1 = Level.getTile(x-1,y,z);
var b2 = Level.getTile(x+1,y,z);
var b3 = Level.getTile(x-1,y-1,z);
var b4 = Level.getTile(x,y-1,z);
var b5 = Level.getTile(x+1,y-1,z);
var b6 = Level.getTile(x-1,y+1,z);
var b7 = Level.getTile(x,y+1,z);
var b8 = Level.getTile(x+1,y+1,z);

var b9 = Level.getTile(x,y,z);
var b10 = Level.getTile(x,y,z-1);
var b11 = Level.getTile(x,y,z+1);
var b12 = Level.getTile(x,y-1,z-1);
var b13 = Level.getTile(x,y-1,z);
var b14 = Level.getTile(x,y-1,z+1);
var b15 = Level.getTile(x,y+1,z-1);
var b16 = Level.getTile(x,y+1,z);
var b17 = Level.getTile(x,y+1,z+1);

var item = Player.getCarriedItem();

if (item == 390)
{
if(side === 4||side === 5)
{
if (stone.indexOf(b9)>=0)
{
Level.destroyBlock(x,y,z,true);
}
if (stone.indexOf(b10)>=0)
{
Level.destroyBlock(x,y,z-1,true);
}
if (stone.indexOf(b11)>=0)
{
Level.destroyBlock(x,y,z+1,true);
}
if (stone.indexOf(b12)>=0)
{
Level.destroyBlock(x,y-1,z-1,true);
}
if (stone.indexOf(b13)>=0)
{
Level.destroyBlock(x,y-1,z,true);
}
if (stone.indexOf(b14)>=0)
{
Level.destroyBlock(x,y-1,z+1,true);
}
if (stone.indexOf(b15)>=0)
{
Level.destroyBlock(x,y+1,z-1,true);
}
if (stone.indexOf(b16)>=0)
{
Level.destroyBlock(x,y+1,z,true);
}
if (stone.indexOf(b17)>=0)
{
Level.destroyBlock(x,y+1,z+1,true);
}
}

if (side == 2 || side == 3)
{
if (stone.indexOf(b0)>=0)
{
Level.destroyBlock(x,y,z,true);
}
if (stone.indexOf(b1)>=0)
{
Level.destroyBlock(x-1,y,z,true);
}
if (stone.indexOf(b2)>=0)
{
Level.destroyBlock(x+1,y,z,true);
}
if (stone.indexOf(b3)>=0)
{
Level.destroyBlock(x-1,y-1,z,true);
}
if (stone.indexOf(b4)>=0)
{
Level.destroyBlock(x,y-1,z,true);
}
if (stone.indexOf(b5)>=0)
{
Level.destroyBlock(x+1,y-1,z,true);
}
if (stone.indexOf(b6)>=0)
{
Level.destroyBlock(x-1,y+1,z,true);
}
if (stone.indexOf(b7)>=0)
{
Level.destroyBlock(x,y+1,z,true);
}
if (stone.indexOf(b8)>=0)
{
Level.destroyBlock(x+1,y+1,z,true);
}}}}

var sb = false;

function fastDestroy()
{
for(var i = 0; i < 256; i++)
{
Block.setDestroyTime(i, 0.07);
}
Block.setDestroyTime(7,-1);
}
function defaultDestroy()
{
for(var i = 0; i < 256; i++){
Block.setDestroyTime(i, defaultDestroyTime[i]);
}
}

function modTick()
{
if(Player.getCarriedItem() == 390 && sb == false) {
fastDestroy();
sb = true;
}
if(Player.getCarriedItem() !== 390 && sb == true) {
defaultDestroy();
sb = false;
}
}