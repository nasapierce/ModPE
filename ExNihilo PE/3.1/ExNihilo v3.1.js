//Ex Nihilo P.E.
/*
This Mod was ported by Darkserver
what you can do:
edit code for PERSONAL uses
use code for commercial uses

what you CANT do:
redistribute: no adfly, no links except to my mod page
claim code as yours
edit code and say its all yours

■■■■    ■■■  ■■■■  ■  ■  ■■■■ ■■■■■ ■■■■  ■   ■ ■■■■■ ■■■■       ■
■   ■  ■   ■ ■   ■ ■ ■  ■     ■     ■   ■ ■   ■ ■     ■   ■      ■  
■    ■ ■■■■■ ■■■■■ ■■    ■■■  ■■■   ■■■■■ ■   ■ ■■■   ■■■■■   ■ ■■■ ■
■   ■  ■   ■ ■   ■ ■ ■      ■ ■     ■   ■  ■ ■  ■     ■   ■    ■■■■■
■■■■   ■   ■ ■   ■ ■  ■ ■■■■  ■■■■■ ■   ■   ■   ■■■■■ ■   ■


*/
//variables

//colors
var goldcolor = [0xFFCC33];
var ironcolor = [0xD9CBC5];
var whitecolor = [0xFFFFFF];
var cuald = [0xE5E4E2 ];
//message on login
function newLevel()
{
clientMessage(ChatColor.BLUE + "Welcome, to Ex Nihilo MCPE, Made By ");
clientMessage(ChatColor.RED + " Erasmus_Crowley" + ChatColor.BLUE + " and ported by" + ChatColor.RED + " The DarkToxicGames Team");
}

//blocks
Block.defineBlock (209,"Dust","endframe_eye",0,2,0);
Block.defineBlock (210,"Gold Dust","endframe_eye",0,2,0);
Block.defineBlock (211,"Iron Dust","endframe_eye",0,2,0);
Block.defineBlock (212,"Iron Gravel","endframe_top",0,2,0);
Block.defineBlock (213,"Gold Gravel","repeater_off",0,2,0);
Block.defineBlock (214,"Oak sieve",[["planks",0],["crafting_table",0],["planks",0],["planks",0],["planks",0],["planks",0]],5,0);
Block.defineBlock (215,"Infected Leaves","leaves",4,18,0);
Block.defineBlock (228,"Oak Barrel",[["planks",0],["cauldron_top",0],["planks",0],["planks",0],["planks",0],["planks",0]],5,0);
Block.setShape (228,1/16,0/16,1/16,15/16,16/16,15/16);
Block.defineBlock (229,"Spruce Barrel",[["planks",1],["cauldron_top",0],["planks",1],["planks",1],["planks",1],["planks",1]],5,0);
Block.setShape (229,1/16,0/16,1/16,15/16,16/16,15/16);
Block.defineBlock (230,"Birch Barrel",[["planks",2],["cauldron_top",0],["planks",2],["planks",2],["planks",2],["planks",2]],5,0);
Block.setShape (230,1/16,0/16,1/16,15/16,16/16,15/16);
Block.defineBlock (231,"Jungle Barrel",[["planks",3],["cauldron_top",0],["planks",3],["planks",3],["planks",3],["planks",3]],5,0);
Block.setShape (231,1/16,0/16,1/16,15/16,16/16,15/16);
Block.defineBlock (232,"Stone Barrel",[["stone_slab",0],["emerald_block",0],["stone_slab",0],["stone_slab",0],["stone_slab",0],["stone_slab",0]],1,0);
Block.setShape (232,1/16,0/16,1/16,15/16,16/16,15/16);
Block.defineBlock(233,"Oak Barrel Water",[["planks",0],["emerald_ore",0],["planks",0],["planks",0],["planks",0],["planks",0]],5,0);
Block.setShape (233,1/16,0/16,1/16,15/16,16/16,15/16);
Block.defineBlock(234,"Spruce Barrel Water",[["planks",1],["emerald_ore",0],["planks",1],["planks",1],["planks",1],["planks",1]],5,0);
Block.setShape (234,1/16,0/16,1/16,15/16,16/16,15/16);
Block.defineBlock(235,"Birch Barrel Water",[["planks",2],["emerald_ore",0],["planks",2],["planks",2],["planks",2],["planks",2]],5,0);
Block.setShape (235,1/16,0/16,1/16,15/16,16/16,15/16);
Block.defineBlock(236,"Stone Barrel Water",[["stone_slab",0],["quartz_ore",0],["stone_slab",0],["stone_slab",0],["stone_slab",0],["stone_slab",0]],1,0);
Block.setShape (236,1/16,0/16,1/16,15/16,16/16,15/16);
Block.setDestroyTime(228,.5);
Block.setDestroyTime(229,.5);
Block.setDestroyTime(230,.5);
Block.setDestroyTime(231,.5);
Block.setDestroyTime(232,1);
Block.setDestroyTime(233,.5);
Block.setDestroyTime(234,.5);
Block.setDestroyTime(235,.5);
Block.setDestroyTime(236,1);
Block.defineBlock(240,"Crucible",[["cauldron_side",0],["cauldron_top",0],["cauldron_inner",0],["cauldron_side",0],["cauldron_side",0],["cauldron_side",0]]);

Block.setRenderLayer(240,1);

//destroy time
Block.setDestroyTime (209,.5);
Block.setDestroyTime (210,.5);
Block.setDestroyTime (211,.5);
Block.setDestroyTime (212,.5);
Block.setDestroyTime (213,.5);
Block.setDestroyTime (214,.5);
Block.setDestroyTime (215,.2);

//colors
Block.setColor (215,whitecolor);
Block.setColor (210,goldcolor);
Block.setColor (211,ironcolor);
//Items
//change 440-440 && 451-451
ModPE.setItem (440,"diamond_horse_armor",0,"Broken Gold");
ModPE.setItem (441,"comparator",0,"Broken Iron");
ModPE.setItem (442,"ender_eye",0,"Crushed Iron");
ModPE.setItem (443,"ender_pearl",0,"Crushed Gold");
ModPE.setFoodItem (444,"cauldron",0,6,"Silk worm");
ModPE.setItem (445,"brewing_stand",0,"Crook");
ModPE.setItem (446,"blaze_rod",0,"Wooden Hammer");
ModPE.setItem (447,"book_enchanted",0,"Stone Hammer");
ModPE.setItem (448,"boat",0,"Iron Hammer");
ModPE.setItem (449,"book_written",0,"Diamond Hammer");
ModPE.setItem (450,"book_writable",0,"Gold Hammer");
ModPE.setItem (451,"blaze_powder",0,"Silk Mesh");
//skip 456-459!!

ModPE.setItem (460,"clay_ball",0,"Porcaline");

//using Hammers
function useItem (x, y, z, itemId, blockId, side)
{
var item = getCarriedItem();
var drop = Math.floor((Math.random()*5)+1);

if (item==446||item==447||item==448||item==449||item==450)
{
if (blockId==4)
{
Level.destroyBlock(x,y,z,false);
Level.dropItem(x,y,z,1,13,1,0);
}}
if (item==446||item==447||item==448||item==449||item==450)
{
if (blockId==13)
{
Level.destroyBlock(x,y,z,false);
Level.dropItem(x,y,z,1,12,1,0);
}}
if (item==446||item==447||item==448||item==449||item==450)
{
if (blockId==12)
{
Level.destroyBlock(x,y,z,false);
Level.dropItem(x,y,z,1,209,1,0);
}}
if (item==446||item==447||item==448||item==449||item==450)
{
if (blockId==15)
{
if (drop==1||drop==2||drop==3)
{
Level.destroyBlock(x,y,z,false);
Level.dropItem(x,y,z,1,441,4,0);
}
if (drop==4||drop==5)
{
Level.destroyBlock(x,y,z,false);
Level.dropItem(x,y,z,1,441,5,0);
}}}
if (item==446||item==447||item==448||item==449||item==450)
{
if (blockId==212)
{
if (drop==1||drop==2||drop==3)
{
Level.destroyBlock(x,y,z,false);
Level.dropItem(x,y,z,1,442,4,0);
}
if (drop==4||drop==5)
{
Level.destroyBlock(x,y,z,false);
Level.dropItem(x,y,z,1,442,5,0);
}}}
if (item==446||item==447||item==448||item==449||item==450)
{
if (blockId==211)
{
if (drop==1||drop==2||drop==3)
{
Level.destroyBlock(x,y,z,false);
Level.dropItem(x,y,z,1,442,4,0);
}
if (drop==4||drop==5)
{
Level.destroyBlock(x,y,z,false);
Level.dropItem(x,y,z,1,442,5,0);
}}}
if (item==446||item==447||item==448||item==449||item==450)
{
if (blockId==14)
{
if (drop==1||drop==2||drop==3)
{
Level.destroyBlock(x,y,z,false);
Level.dropItem(x,y,z,1,440,4,0);
}
if (drop==4||drop==5)
{
Level.destroyBlock(x,y,z,false);
Level.dropItem(x,y,z,1,440,5,0);
}}}
if (item==446||item==447||item==448||item==449||item==450)
{
if (blockId==213)
{
if (drop==1||drop==2||drop==3)
{
Level.destroyBlock(x,y,z,false);
Level.dropItem(x,y,z,1,443,4,0);
}
if (drop==4||drop==5)
{
Level.destroyBlock(x,y,z,false);
Level.dropItem(x,y,z,1,443,5,0);
}}}
if (item==446||item==447||item==448||item==449||item==450)
{
if (blockId==210)
{
if (drop==1||drop==2||drop==3)
{
Level.destroyBlock(x,y,z,false);
Level.dropItem(x,y,z,1,443,4,0);
}
if (drop==4||drop==5)
{
Level.destroyBlock(x,y,z,false);
Level.dropItem(x,y,z,1,443,5,0);
}}}

//Silk worm on leaves
if (item==444&&blockId==18)
   {
   addItemInventory(444,-1);
   setTile(x, y, z, 215);
}

//sieve usage
var dirt = Math.floor((Math.random()*9)+1);
var sand = Math.floor((Math.random()*5)+1);
var gravel = Math.floor((Math.random()*14.)+1);
var dust = Math.floor((Math.random()*4)+1);
var amount = Math.floor((Math.random()*2)+1);

//dirt
if (itemId==3&&blockId==214)
{
preventDefault();
addItemInventory (3,-1,0);
 if (dirt==1)
 {
 Level.dropItem(x,y,z,1,295,amount,0);
 }
 if (dirt==2)
 {
 Level.dropItem(x,y,z,1,338,amount,0);
 }
if (dirt==3)
 {
 Level.dropItem(x,y,z,1,361,amount,0);
 }
if (dirt==4)
 {
 Level.dropItem(x,y,z,1,362,amount,0);
 }
if (dirt==5)
 {
 Level.dropItem(x,y,z,1,6,amount,0);
 }
if (dirt==6)
 {
 Level.dropItem(x,y,z,1,6,amount,1);
 }
if (dirt==7)
 {
 Level.dropItem(x,y,z,1,6,amount,2);
 }
if (dirt==8)
 {
 Level.dropItem(x,y,z,1,392,amount,0);
 }
if (dirt==9)
 {
 Level.dropItem(x,y,z,1,391,amount,0);
 }}
 
 //gravel
 if (itemId==13&&blockId==214)
 {
 preventDefault();
 addItemInventory(13,-1);
 if (gravel==1||gravel==7||gravel==8||gravel==13)
 {
 Level.dropItem(x,y,z,1,318,amount,0);
 }
 if (gravel==2||gravel==9)
 {
 Level.dropItem(x,y,z,1,441,amount,0);
 }
 if (gravel==3||gravel==11)
 {
 Level.dropItem(x,y,z,1,440,amount,0);
 }
 if (gravel==4||gravel==12)
 {
 Level.dropItem(x,y,z,1,263,amount,0);
 }
 if (gravel==5||gravel==14)
 {
 Level.dropItem(x,y,z,1,351,amount,4);
 }
 if (gravel==6)
 {
 Level.dropItem(x,y,z,1,264,1,0);
 }}
 
 //sand
 if (itemId==12&&blockId==214)
 {
 preventDefault();
 addItemInventory (12,-1);
 if (sand==1)
 {
 Level.dropItem(x,y,z,1,442,amount,0);
 }
 if (sand==2)
 {
 Level.dropItem(x,y,z,1,443,amount,0);
 }
 if (sand==3)
 {
 Level.dropItem(x,y,z,1,81,amount,0);
 }
 if (sand==4)
 {
 Level.dropItem(x,y,z,1,351,amount,3);
 }
 if (sand==5)
 {
 Level.dropItem(x,y,z,1,6,amount,3);
 }}
 
 //dust
 if (itemId==209&&blockId==214)
 {
 preventDefault();
 addItemInventory (209,-1);
 if (dust==1)
 {
 Level.dropItem(x,y,z,1,351,amount,15);
 }
 if (dust==2)
 {
 Level.dropItem(x,y,z,1,331,amount,0);
 }
 if (dust==3)
 {
 Level.dropItem(x,y,z,1,348,amount,0);
 }
 if (dust==4)
 {
 Level.dropItem(x,y,z,1,289,amount,0);
 }}
 
}
 
//command
function procCmd(cmd)
{
var arg = cmd.split(" ");
if (arg[0] == "giveall")
{
addItemInventory(209,64);
addItemInventory(210,64);
addItemInventory(211,64);
addItemInventory(212,64);
addItemInventory(213,64);
addItemInventory(214,64);
addItemInventory(215,64);
addItemInventory(440,64);
addItemInventory(441,64);
addItemInventory(442,64);
addItemInventory(443,64);
addItemInventory(444,64);
addItemInventory(445,1);
addItemInventory(446,1);
addItemInventory(447,1);
addItemInventory(447,1);
addItemInventory(448,1);
addItemInventory(449,1);
addItemInventory(450,1);
addItemInventory(451,64);
addItemInventory(228,1);
addItemInventory(229,1);
addItemInventory(230,1);
addItemInventory(231,1);
addItemInventory(232,1);
addItemInventory(325,1,8);
}}

//silky leaves usage
function destroyBlock(x,y,z,side)
{
var block = getTile(x,y,z);
var item = getCarriedItem();
 
if(block == 215&&item==445)
{
var random = Math.floor((Math.random()*9)+1);

if(random == 3)
{
preventDefault();
Level.destroyBlock(x,y,z,false);
Level.dropItem(x,y,z,1,287,1,0);
}
if(random == 2)
{
preventDefault();
Level.destroyBlock(x,y,z,false);
Level.dropItem(x,y,z,1,444,1,0);
}}
if(block == 215)
{
var random = Math.floor((Math.random()*15)+1);

if(random == 3)
{
preventDefault();
Level.destroyBlock(x,y,z,false);
Level.dropItem(x,y,z,1,287,1,0);
}
if(random == 2)
{
preventDefault();
Level.destroyBlock(x,y,z,false);
Level.dropItem(x,y,z,1,444,1,0);
}}
if(block == 18)
{
var random = Math.floor((Math.random()*32)+1);

if(random == 3)
{
preventDefault();
Level.destroyBlock(x,y,z,false);
Level.dropItem(x,y,z,1,444,1,0);
}}
if(block == 18&&item == 445)
{
var apple = Math.floor((Math.random()*100)+1);

if(apple == 1)
{
preventDefault();
Level.destroyBlock(x,y,z,false);
Level.dropItem(x,y,z,1,260,1,0);
}}
if(block == 18&&item == 445)
{
var sapling = Math.floor((Math.random()*10)+1);

if(sapling == 1)
{
preventDefault();
Level.destroyBlock(x,y,z,false);
Level.dropItem(x,y,z,1,6,1,0);
}}

}