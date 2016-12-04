
Block.defineBlock(33,"Grinder",[["piston_bottom",0],["piston_inner",0],["piston_bottom",0],["piston_bottom",0],["piston_bottom",0],["piston_bottom",0],["piston_bottom",0]],20,0,0);
Block.setDestroyTime(33,1.5);

Item.addCraftRecipe(33,1,0,[4,4,0,406,4,0,265,1,0]);

var count = 0;

var Grind = new Object();
Grind.grinding = true;
Grind.top = GrindBlock;
Grind.bot = GrindBlock2;
function GrindBlock(x,y,z,itemId,dataId,howMuch)
{
Level.setChestSlot(x,y,z,0,itemId,dataId,howMuch);
Level.playSound(x,y,z,"random.break",10,10);
}
function GrindBlock2(x,y,z,itemId,dataId,howMuch)
{
Level.setChestSlot(x,y,z,0,itemId,dataId,howMuch);
}
function useItem(x,y,z,itemId,blockId,side)
{
var Chest2 = Level.getTile(x,y-1,z);
var Chest = Level.getTile(x,y+1,z);
if(blockId==33&&Chest==54&&Chest2==54)
{
var lootInChest = Level.getChestSlot(x,y+1,z,0);
var countInChest = Level.getChestSlotCount(x,y+1,z,0);
var dataInChest = Level.getChestSlotData(x,y+1,z,0);
var lootInChest2 = Level.getChestSlot(x,y-1,z,0.);
var countInChest2 = Level.getChestSlotCount(x,y-1,z,0);
var dataInChest2 = Level.getChestSlotData(x,y-1,z,0);

Grind.grinding=true;
if(lootInChest==15 && lootInChest2==0){
Grind.top(x,y+1,z,0,0,0);
Grind.bot(x,y-1,z,435,0,countInChest*2);
}
else if(lootInChest==14 && lootInChest2==0){
Grind.top(x,y+1,z,0,0,0);
Grind.bot(x,y-1,z,436,0,countInChest*2);
}
else if(lootInChest==56 && lootInChest2==0){
Grind.top(x,y+1,z,0,0,0);
Grind.bot(x,y-1,z,437,0,countInChest*2);
}
else if(lootInChest==73 && lootInChest2==0){
Grind.top(x,y+1,z,0,0,0);
Grind.bot(x,y-1,z,331,0,countInChest*8);
}
else if(lootInChest==199 && lootInChest2==0){
Grind.top(x,y+1,z,0,0,0);
Grind.bot(x,y-1,z,406,0,countInChest*8);
}
else if(lootInChest==21 && lootInChest2==0){
Grind.top(x,y+1,z,0,0,0);
Grind.bot(x,y-1,z,351,4,countInChest*8);
}
else if(lootInChest==16 && lootInChest2==0){
Grind.top(x,y+1,z,0,0,0);
Grind.bot(x,y-1,z,434,0,countInChest*2);
}
else if(lootInChest==74 && lootInChest2==0){
Grind.top(x,y+1,z,0,0,0);
Grind.bot(x,y-1,z,331,0,countInChest*8);
}
else if(lootInChest==352 && lootInChest2==0){
Grind.top(x,y+1,z,0,0,0);
Grind.bot(x,y-1,z,351,15,countInChest*6);
}
else if(lootInChest==190 && lootInChest2==0){
Grind.top(x,y+1,z,0,0,0);
Grind.bot(x,y-1,z,438,0,countInChest*2);
}
else if(lootInChest==191 && lootInChest2==0){
Grind.top(x,y+1,z,0,0,0);
Grind.bot(x,y-1,z,439,0,countInChest*2);
}

}
}