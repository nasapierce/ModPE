/*
This Mod was made by 
DarkToxicGames

StructureJS API by Arjay_07
Used For More Blocks and More By DarkToxicGames
Thank you Arjay! Best Mcpe/MineBuilder modder
p.s  he also does amazing tuts :)
*/
//Generation
var IO = java.io;
var File = IO.File;
var FileReader = IO.FileReader;
var BufferedReader = IO.BufferedReader;
var String = java.lang.String;
var StringBuilder = java.lang.StringBuilder;

function readFile(file)
{
var str;
var br = new BufferedReader(new FileReader(file));
var data = new StringBuilder();

while((str = br.readLine()) != null)
{
data.append(str);
data.append("\n");
}
return data.toString();
}

function Vertex(x, y, z)
{
this.x = x;
this.y = y;
this.z = z;
}

function Structure(file)
{
var structure = readFile(file);
var line = structure.split("\n");
var v = [];
var id = [];
var dmg = [];

for(var i = 0; i < line.length; i++)
{
var param = line[i].split(":");
var coord = param[0].split("~");
var block = param[1].split(";");
var x = parseInt(coord[0]);
var y = parseInt(coord[1]);
var z = parseInt(coord[2]);
var b = parseInt(block[0]);
var d = parseInt(block[1]);

v.push(new Vertex(x, y, z));
id.push(b);
dmg.push(d==null?0:d);
}
this.positions = v;
this.blockIds = id;
this.damages = dmg;
}

function setStructure(structure, x, y, z)
{

var s = structure.positions;
var id = structure.blockIds;
var d = structure.damages;

for(var i = 0; i < s.length; i++)
{
var p = s[i];
var bId = id[i];
var bDmg = d[i]; 

setTile(x+p.x, y+p.y, z+p.z, bId, bDmg);
}}

function getSurface(x, z)
{
var i = 0;
for(var y = 1; y <= 128; y++)
{
if(Level.getTile(x, y, z) == 0)
{
i = y;
break;
}}
return i;
}
function random(min, max)
{
return Math.floor((Math.random()*max)+min);
}

var genfolder = "/games/com.mojang/genfolder/";
var SDCARD = android.os.Environment.getExternalStorageDirectory();
var quartzorefile = new File(SDCARD + genfolder, "quartzore.xtr");
var quartzore = new Structure(quartzorefile);
var tinfile = new File(SDCARD + genfolder, "tin.xtr");
var tin = new Structure(tinfile);
var copperfile = new File(SDCARD + genfolder, "copper.xtr");
var copper = new Structure(copperfile);
var silverfile = new File(SDCARD + genfolder, "silver.xtr");
var silver = new Structure(silverfile);
var andesitefile = new File(SDCARD + genfolder, "Andesite_vein.xtr");
var andesite = new Structure(andesitefile);
var granitefile = new File(SDCARD + genfolder, "Granite_vein.xtr");
var granite = new Structure(granitefile);
var dioritefile = new File(SDCARD + genfolder, "Diorite_vein.xtr");
var diorite = new Structure(dioritefile);

function spawnStructures()
{
for(var i = 0; i <=100; i++)
{
var x = random(0, 256);
var z = random(0, 256);

setStructure(quartzore, x, getSurface(x, z) - 20, z);
}
for(var i = 0; i <=50 ; i++)
{
var x = random(0, 256);
var z = random(0, 256);

setStructure(tin, x, getSurface(x, z) - 10, z);
}
for(var i = 0; i <=50 ; i++)
{
var x = random(0, 256);
var z = random(0, 256);

setStructure(copper, x, getSurface(x, z) - 30, z);
}
for(var i = 0; i <=50 ; i++)
{
var x = random(0, 256);
var z = random(0, 256);

setStructure(silver, x, getSurface(x, z) - 40, z);
}
/*for(var i = 0; i <=100 ; i++)
{
var x = random(0, 256);
var z = random(0, 256);

setStructure(granite, x, getSurface(x, z) - 15, z);
}
for(var i = 0; i <=100 ; i++)
{
var x = random(0, 256);
var z = random(0, 256);

setStructure(andesite, x, getSurface(x, z) - 15, z);
}
for(var i = 0; i <=100 ; i++)
{
var x = random(0, 256);
var z = random(0, 256);

setStructure(diorite, x, getSurface(x, z) - 15, z);
}*/
}
function newLevel()
{
clientMessage(ChatColor.GREEN+"DarkToxicGames");
var spawned = new File(SDCARD + "/games/com.mojang/minecraftWorlds/" + Level.getWorldDir(), "spawned.txt");
if(!spawned.exists())
{
spawnStructures();
try
{
spawned.createNewFile();
}
catch(e)
{
print(e);
}}}

//vars

var Power_Crystal_Dust = "sugar";
var Power_Crystal = "ruby";
var Empty_Battery = "potion_bottle_empty";
var coal_dust = "book_enchanted";
var iron_dust = "book_writable";
var gold_dust = "glowstone_dust";
var diamond_dust = "book_written";
var tin_dust = "carrot_on_a_stick";
var copper_dust = "skull_skeleton";
var steel_dust = "brewing_stand";
var copper_ingot = "skull_creeper";
var tin_ingot = "skull_wither";
var silver_ingot = "skull_steve";
var steel_ingot = "skull_zombie";
var c = "cobble_compact";
var c0 = [[c,0],[c,0],[c,0],[c,0],[c,0],[c,0]];
var c1 = [[c,1],[c,1],[c,1],[c,1],[c,1],[c,1]];
var c2 = [[c,2],[c,2],[c,2],[c,2],[c,2],[c,2]];
var c3 = [[c,3],[c,3],[c,3],[c,3],[c,3],[c,3]];

var compact_cobble = [[c0],[c1],[c2],[c3]];

var sb = false;
var gm = Level.getGameMode();
var t = "crafting_table";
var s = "sandstone";
var gray = [0x484747];
var colour = [0xffffff, 0xff8000, 0xff80ff, 0x4040ff, 0xffff00, 0x00ff00, 0xff0080, 0x404040,
	      0xc4c4c4, 0x0080c8, 0x800080, 0x000080, 0x804000, 0x008000, 0x800000, 0x000000];
var red = [0xc71818];
//var defaultDestroyTime = [ null, 1.5, 0.6, 0.5, 2, 2, 0, -1, null, null, null/*10*/, null, 0.5, 0.6, 3, 3, 3, 2, 0.2, 0.6, 0.3/*20*/, 3, 3, 10, 0.8, null, 0.2, 0.7, null, null, 4/*30*/, 0, 0, 1, 1.5, 0.8, null, 0, 0, 0, 0 /*40*/, 3, 5, 2, 2, 2, 0, 1.5, 2, 50, 0 /*50*/, 0, null, 2, 2.5, null, 3, 5, 2.5, 0, 0.6/*60*/, 3.5, 3.5, 1, 3, 0.4, 0.7, 2, 1, null, null/*70*/, 5, null, 3, 3, null, null, null, 0.1, 0.5, 0.2 /*80*/, 0.4, 0.6, 0, null, 2, 1, 0.4, 0.3, null, 1 /*90*/, 0.5, null, null, -1, 3, null, 1.5, 1.5, null, 5 /*100*/, 0.3, 1, 0, 0, null, 2, 2, 1.5, null, null /*110*/, 2, null, 2, null, null, null, null, null, null, null /*120*/, null, null, null, null, null, null, 0.8, null, null, null /*130*/, null, null, 2, 2, 2, null, null, 2, null, 0 /*140*/, 0, null, null, null, null, null, null, null, null, null /*150*/, null, 0.4, 3, 0.8, 0.8, 2, 2, null, null, null /*160*/, null, null, null, null, null, null, null, null, 0.5, 0.1 /*170*/, 5, null, null, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5 /*180*/, 1.5, 1, 1, 0.6, 2, 2, null, 3, 0.01, 2 /*190*/, 2, 2, 2, 1, 2, 2, 2, 2, 2, null /*200*/, null, null, 1.5, 1.5, 1.5, 1.5, null, 2, 2, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, 3.5, 50, 5, 0.6, 0.6, null, null, null, null, null, 0 ];

//blocks
Block.defineBlock (33,"Grinder",[["piston_bottom",0],["piston_inner",0],["piston_bottom",0],["piston_bottom",0],["piston_bottom",0],["piston_bottom",0],["piston_bottom",0]],20,0,0);
Block.defineBlock (34,"Piston",[["piston_bottom",0],["piston_top_normal",0],["piston_side",0],["piston_side",0],["piston_side",0],["piston_side",0],["piston_side",0]],1,0,0);
Block.defineBlock (152,"Redstone Block",["redstone_block",0],42,0);
Block.defineBlock (153,"Quartz ore","more_quartz",0, 1,0);
Block.defineBlock (174,"Andesite","andesite",0, 1,0);
Block.defineBlock (175,"Polished Andesite","andesite_polished",0, 1,0);
Block.defineBlock (176,"Diorite","diorite",0, 1,0);
Block.defineBlock (177,"Polished Diorite","diorite_polished",0, 1,0);
Block.defineBlock (178,"Granite","granite",0, false,0);
Block.defineBlock (179,"Polished Granite","granite_polished",0, 1,0);
Block.defineBlock (180,"Dyed Stonebrick","stonebrick",0,98,0);
Block.defineBlock (181,"Dyed Brick","brick",0,45,0);
Block.defineBlock (182,"Dyed Planks","planks",0,5,0);
Block.defineBlock (183,"Dyed Fence","planks",0,85,11);
Block.defineBlock (184,"Dyed GlowStone","glowstone",0,89,0);
Block.defineBlock (185,"Dyed Quartz","quartz_block",0,155,0);
Block.defineBlock (186,"Dyed Sandstone",[[s,4],[s,3],[s,0],[s,0],[s,0],[s,0]],24,0);
//187 is fpr Reddigirl ;)
Block.defineBlock (188,"Red Cobble","cobblestone",0,4,0);
Block.defineBlock (189,"unknown.tile","missing_tile",0);
Block.defineBlock (190,"Tin Ore","tin_ore",0,14,0);
Block.defineBlock (191,"Copper Ore","copper_ore",0,14,0);
Block.defineBlock (192,"Silver Ore","silver_ore",0,14,0);
Block.defineBlock (193,"End Stone",["end_stone",0],4,0,0);
Block.defineBlock (194,"Basalt","stone",0,4,0);
Block.defineBlock (195,"Basalt","cobblestone",0,4,0);
Block.defineBlock (196,"Steel Block",["steel_block",0],42,0);
Block.defineBlock (197,"Tin Block",["tin_block",0],42,0);
Block.defineBlock (198,"Copper Block",["copper_block",0],42,0);
Block.defineBlock (199,"Silver Block",["silver_block",0],42,0);
//Block.defineBlock (200,"Compact Cobble",compact_cobble,0,1,0);

//destroy time
Block.setDestroyTime (33,1);
Block.setDestroyTime (34,1.5);
Block.setDestroyTime (152,0.4);
Block.setDestroyTime (153,3);
Block.setDestroyTime (174,1.5);
Block.setDestroyTime (175,1.5);
Block.setDestroyTime (176,1.5);
Block.setDestroyTime (177,1.5);
Block.setDestroyTime (178,1.5);
Block.setDestroyTime (179,1.5);
Block.setDestroyTime (180,1.5);
Block.setDestroyTime (181,1.5);
Block.setDestroyTime (182,1);
Block.setDestroyTime (183,1);
Block.setDestroyTime (184,0.6);
Block.setDestroyTime (185,2);
Block.setDestroyTime (186,2);
Block.setDestroyTime (188,3);
Block.setDestroyTime (189,0.01);
Block.setDestroyTime (190,2);
Block.setDestroyTime (191,2);
Block.setDestroyTime (192,2);
Block.setDestroyTime (193,2);
Block.setDestroyTime (194,1);
Block.setDestroyTime (195,2);
Block.setDestroyTime (196,2);
Block.setDestroyTime (197,2);
Block.setDestroyTime (198,2);
Block.setDestroyTime (199,2);

//Color
Block.setColor (180, colour);
Block.setColor (181, colour);
Block.setColor (182, colour);
Block.setColor (183, colour);
Block.setColor (184, colour);
Block.setColor (185, colour);
Block.setColor (186, colour);
Block.setColor (188, red);
Block.setColor (194, gray);
Block.setColor (195, gray);

//light level
Block.setLightLevel(184,14);

//items
ModPE.setItem(430,tin_ingot,0,"Tin Ingot");
ModPE.setItem(431,silver_ingot,0,"Silver Ingot");
ModPE.setItem(432,copper_ingot,0,"Copper Ingot");
ModPE.setItem(433,"ender_pearl",0,"Ender Pearl");
ModPE.setItem(434,coal_dust,0,"Coal Dust");
ModPE.setItem(435,iron_dust,0,"Iron Dust");
ModPE.setItem(436,gold_dust,0,"Gold Dust");
ModPE.setItem(437,diamond_dust,0,"Diamond Dust");
ModPE.setItem(438,tin_dust,0,"Tin Dust");
ModPE.setItem(439,copper_dust,0,"Copper Dust");
ModPE.setItem(440,steel_dust,0,"Steel Dust");
ModPE.setItem(441,steel_ingot,0,"Steel Ingot");
ModPE.setItem(442,"record_stal",0,"Missing.Tile");
ModPE.setItem(493,"record_stal",0,"Steel Plate");
ModPE.setItem(494,"record_stal",0,"Machine Casing");
ModPE.setItem(496,Power_Crystal_Dust,0,"Power Crystal Dust");
ModPE.setItem(497,Power_Crystal,0,"Power Crystal");
ModPE.setItem(498,Empty_Battery,0,"Empty Battery"); 

//crafting
Item.addCraftRecipe(152,1,0,[331,9,0]);
Item.addCraftRecipe(331,9,0,[152,1,0]);
Item.addCraftRecipe(406,4,0,[155,1,0]);
Item.addCraftRecipe(174,4,0,[4,2,0,176,2,0]);
Item.addCraftRecipe(176,2,0,[4,2,0,406,2,0]);
Item.addCraftRecipe(178,2,0,[176,2,0,406,2,0]);
Item.addCraftRecipe(175,4,0,[174,4,0]);
Item.addCraftRecipe(177,4,0,[176,4,0]);
Item.addCraftRecipe(179,4,0,[178,4,0]);
Item.addCraftRecipe(193,6,0,[433,3,0,4,6,0]);
Item.addCraftRecipe(433,16,0,[265,6,0,264,2,0]);
Item.addCraftRecipe(34,1,0,[265,1,0,331,1,0,4,4,0,5,3,0])
Item.addCraftRecipe(440,4,0,[434,5,0,435,4,0]);
Item.addCraftRecipe(263,4,0,[434,4,0]);
//Item.addCraftRecipe(493,8,0,[441,4,0]);
//Item.addCraftRecipe(494,8,0,[430,4,0,431,4,0,264,1,0]);
//Item.addCraftRecipe(496,1,0,[331,8,0,437,1,0]);
//Item.addCraftRecipe(498,1,0,[497,2,0,430,6,0]);
Item.addCraftRecipe(33,1,0,[4,4,0,406,4,0,265,1,0]);
Item.addCraftRecipe(196,1,0,[441,9,0]);
Item.addCraftRecipe(441,9,0,[196,1,0]);
Item.addCraftRecipe(197,1,0,[430,9,0]);
Item.addCraftRecipe(430,9,0,[197,1,0]);
Item.addCraftRecipe(198,1,0,[432,9,0]);
Item.addCraftRecipe(432,9,0,[198,1,0]);
Item.addCraftRecipe(199,1,0,[431,9,0]);
Item.addCraftRecipe(431,9,0,[199,1,0]);

//category
Item.setCategory(196,8);
Item.setCategory(197,8);
Item.setCategory(198,8);
Item.setCategory(199,8);
Item.setCategory(441,8);
Item.setCategory(430,8);
Item.setCategory(431,8);
Item.setCategory(432,8);

//furnace
Item.addFurnaceRecipe(190,430,0);
Item.addFurnaceRecipe(191,432,0);
Item.addFurnaceRecipe(192,431,0);
Item.addFurnaceRecipe(153,406,0);
Item.addFurnaceRecipe(438,430,0);
Item.addFurnaceRecipe(439,432,0);
Item.addFurnaceRecipe(435,265,0);
Item.addFurnaceRecipe(436,266,0);
Item.addFurnaceRecipe(437,264,0);
Item.addFurnaceRecipe(440,441,0);
Item.addFurnaceRecipe(496,497,0);

//destroy Block
function destroyBlock(x,y,z,side)
{
var data = Level.getData(x,y,z);
var block = getTile(x,y,z);
var item = getCarriedItem();

if(block == 153)
{
preventDefault();
Level.destroyBlock(x,y,z,false);
Level.dropItem(x,y,z,1,406,4,0);
}
if(block == 180)
{
preventDefault();
Level.destroyBlock(x, y, z, false);
Level.dropItem(x, y, z, 0.5, 98, 1, 0);
}
if(block == 181)
{
preventDefault();
Level.destroyBlock(x, y, z, false);
Level.dropItem(x, y, z, 0.5, 45, 1, 0);
}
if(block == 182)
{
preventDefault();
Level.destroyBlock(x, y, z, false);
Level.dropItem(x, y, z, 0.5, 5, 1, 0);
}
if(block == 183)
{
preventDefault();
Level.destroyBlock(x, y, z, false);
Level.dropItem(x, y, z, 0.5, 85, 1, 0);
}
if(block === 187 && data == 0)
{
preventDefault();
Level.destroyBlock(x, y, z, false);
Level.dropItem(x, y, z, 0.5, 187, 1, 1);
}
if(block === 187 && data == 1)
{
preventDefault();
Level.destroyBlock(x, y, z, false);
Level.dropItem(x, y, z, 0.5, 187, 1, 1);
}
if(block == 184)
{
preventDefault();
Level.destroyBlock(x, y, z, false);
Level.dropItem(x, y, z, 0.5, 89, 1, 0);
}
if(block == 185)
{
preventDefault();
Level.destroyBlock(x, y, z, false);
Level.dropItem(x, y, z, 0.5, 155, 1, 0);
}
if(block == 186)
{
preventDefault();
Level.destroyBlock(x, y, z, false);
Level.dropItem(x, y, z, 0.5, 24, 1, 0);
}
if(block == 190)
{
preventDefault();
Level.destroyBlock(x, y, z, true);
}
if(block == 191)
{
preventDefault();
Level.destroyBlock(x, y, z, true);
}
if(block == 192)
{
preventDefault();
Level.destroyBlock(x, y, z, true);
}
if(block == 194)
{
preventDefault();
Level.destroyBlock(x, y, z, false);
Level.dropItem(x, y, z, 0.5, 195, 1, 0);
}
}

//commands
function procCmd(c)
{
var p = c.split(" ");
var command = p[0];
if(p[0]=="Dev")
{
addItemInventory(189,16);
addItemInventory(500,16);
addItemInventory(499,16);
addItemInventory(433,16);
addItemInventory(493,16);
addItemInventory(494,16);
addItemInventory(496,16);
addItemInventory(497,16);
addItemInventory(498,16);
}
if(p[0]=="give")
{
if(p[1]=="all")
{
clientMessage("use '/give more' to get the rest.");
addItemInventory(33,16);
addItemInventory(34,16);
addItemInventory(152,16);
addItemInventory(153,16);
addItemInventory(174,16);
addItemInventory(175,16);
addItemInventory(176,16);
addItemInventory(177,16);
addItemInventory(178,16);
addItemInventory(179,16);
addItemInventory(188,16);
addItemInventory(190,16);
addItemInventory(191,16);
addItemInventory(192,16);
addItemInventory(193,16);
addItemInventory(194,16);
addItemInventory(195,16);
addItemInventory(196,16);
addItemInventory(197,16);
}
if(p[1]=="more")
{
addItemInventory(198,16);
addItemInventory(199,16);
addItemInventory(430,16);
addItemInventory(431,16);
addItemInventory(432,16);
addItemInventory(433,16);
addItemInventory(434,16);
addItemInventory(435,16);
addItemInventory(436,16);
addItemInventory(437,16);
addItemInventory(438,16);
addItemInventory(439,16);
addItemInventory(440,16);
addItemInventory(441,16);
addItemInventory(499,16);
addItemInventory(500,16);
}
if(p[1]=="g")
{
clientMessage("use /grinder to learn the set up.");
addItemInventory(33,1,0);
addItemInventory(54,2,0);
}
}
if(p[0]=="grinder")
{
clientMessage("The grinder is used to get dust use '/give g' to get the grinder or you can craft it in the crafting table.");
clientMessage("the grinder is set up with a chest on top and bottom");
clientMessage("make sure their both empty and the input is the top and the output is the bottom");
clientMessage("the grinder can only grind one ore at a time. once the ore is in the top tap the grinder");
clientMessage("and dust should be on bottom.");
}
}
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
//use item
function useItem(x, y, z, itemId, blockId, side)
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
else if(lootInChest==264 && lootInChest2==0){
Grind.top(x,y+1,z,0,0,0);
Grind.bot(x,y-1,z,437,0,countInChest);
}
else if(lootInChest==263 && lootInChest2==0){
Grind.top(x,y+1,z,0,0,0);
Grind.bot(x,y-1,z,434,0,countInChest);
}
else if(lootInChest==265 && lootInChest2==0){
Grind.top(x,y+1,z,0,0,0);
Grind.bot(x,y-1,z,435,0,countInChest);
}
else if(lootInChest==266 && lootInChest2==0){
Grind.top(x,y+1,z,0,0,0);
Grind.bot(x,y-1,z,436,0,countInChest);
}
else if(lootInChest==430 && lootInChest2==0){
Grind.top(x,y+1,z,0,0,0);
Grind.bot(x,y-1,z,438,0,countInChest);
}
else if(lootInChest==432 && lootInChest2==0){
Grind.top(x,y+1,z,0,0,0);
Grind.bot(x,y-1,z,439,0,countInChest);
}
else if(lootInChest==441 && lootInChest2==0){
Grind.top(x,y+1,z,0,0,0);
Grind.bot(x,y-1,z,440,0,countInChest);
}
}
var dat = Level.getData(x, y, z);
if (itemId == 351 && (blockId == 180 || blockId == 98))
{
preventDefault();
var theData = Player.getCarriedItemData();
var colour = 15 - theData;
setTile(x, y, z, 180, colour);
addItemInventory(itemId, -1, theData);
}
if (itemId == 351 && (blockId == 181 || blockId == 45))
{
preventDefault();
var theData = Player.getCarriedItemData();
var colour = 15 - theData;
setTile(x, y, z, 181, colour);
addItemInventory(itemId, -1, theData);
}
if (itemId == 351 && (blockId == 182 || blockId == 5))
{
preventDefault();
var theData = Player.getCarriedItemData();
var colour = 15 - theData;
setTile(x, y, z, 182, colour);
addItemInventory(itemId, -1, theData);
}
if (itemId == 351 && (blockId == 183 || blockId == 85))
{
preventDefault();
var theData = Player.getCarriedItemData();
var colour = 15 - theData;
setTile(x, y, z, 183, colour);
addItemInventory(itemId, -1, theData);
}
if (itemId == 351 && (blockId == 184 || blockId == 89))
{
preventDefault();
var theData = Player.getCarriedItemData();
var colour = 15 - theData;
setTile(x, y, z, 184, colour);
addItemInventory(itemId, -1, theData);
}
if (itemId == 351 && (blockId == 185 || blockId == 155))
{
preventDefault();
var theData = Player.getCarriedItemData();
var colour = 15 - theData;
setTile(x, y, z, 185, colour);
addItemInventory(itemId, -1, theData);
}
if (itemId == 351 && (blockId == 186 || blockId == 24))
{
preventDefault();
var theData = Player.getCarriedItemData();
var colour = 15 - theData;
setTile(x, y, z, 186, colour);
addItemInventory(itemId, -1, theData);
}
}