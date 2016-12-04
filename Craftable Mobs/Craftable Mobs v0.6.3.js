// Copyright 2014 Darkserver
//craftable animals mod
//by Darkserver and Thecactigod
ModPE.overrideTexture("images/mob/ocelot.png","http://i.imgur.com/PVdsLnB.png"); 
ModPE.overrideTexture("images/items.meta","http://dl.dropbox.com/s/tqbzqhl5l67o95m/heads.meta");
ModPE.overrideTexture("images/items-opaque.png","http://dl.dropbox.com/s/yrkc2hen9ym72mv/items-opaque.png");
ModPE.overrideTexture("images/mob/wolf.png","http://dl.dropbox.com/s/31xgqvx7iety4l9/wolf.png");
ModPE.overrideTexture("images/mob/wither.png","http://dl.dropbox.com/s/u95yjcfcg051t1n/wither%20skin.png");
ModPE.overrideTexture("images/mob/enderman.png","http://i.imgur.com/UXzvOmn.png");
ModPE.overrideTexture("images/mob/villager.png","http://i.imgur.com/0dRU59r.png");
var r = 0;
var drop = Math.floor((Math.random()*4)+1);
var heads = [496,497,498,499,500,501,502,503,504,493,494];

var Spider = 35;
var Zombie = 32;
var Wither;
//do wither
//do slime
//do horse
//do villager
//do enderman
//do pigman
//do spider jockey
//do poison spider
//do bat

ModPE.setItem(495,"skull_wither",0,"Wither");
ModPE.setItem(496,"head_wolf",0,"Wolf");
ModPE.setItem(497,"skull_zombie",0,"Zombie"); //32
ModPE.setItem(498,"skull_skeleton",0,"Skeleton"); //34
ModPE.setItem(499,"skull_creeper",0,"Creeper"); //33
ModPE.setItem(500,"head_cow",0,"Cow"); //11
ModPE.setItem(501,"head_chicken",0,"Chicken"); //10
ModPE.setItem(502,"head_sheep",0,"Sheep"); //13
ModPE.setItem(503,"head_spider",0,"Spider"); //35
ModPE.setItem(504,"head_pig",0,"Pig"); //12
ModPE.setItem(505,"head_enderman", 0,"Enderman");
ModPE.setItem(506, "head_ocelot", 0,"Ocelot");
ModPE.setItem(507,"head_villager", 0,"Villager");
ModPE.setItem(508,"head_pigman", 0,"Zombie Pigman");
ModPE.setFoodItem(493,"spider_eye",0,-2,"Spider eye");
ModPE.setFoodItem(494,"rotten_flesh",0,-1,"Rotten Flesh");
//add enderpearls in 0.7
//add gold nuggets in 0.7

Item.addCraftRecipe(501,1,0,[288,6,0,365,3,0]); //chicken
Item.addCraftRecipe(500,1,0,[334,4,0,363,5,0]); //cow
Item.addCraftRecipe(502,2,0,[319,1,0,35,8,0]); //sheep
Item.addCraftRecipe(503,4,0,[287,4,0,493,4,0]);//spider
Item.addCraftRecipe(504,4,0,[319,8,0]); //pig
Item.addCraftRecipe(497,4,0,[494,8,0,288,1,0]); //zombie
Item.addCraftRecipe(498,2,0,[352,4,0,262,4,0,261,1,0]); //skeleton
Item.addCraftRecipe(499,4,0,[289,8,0,494,1,0]); //creeper
Item.addCraftRecipe(496,2,0,[35,4,0,502,1,0]);
Item.addCraftRecipe(495,2,0,[263,4,0,272,1,0,263,4,0]);
Item.addCraftRecipe(505,7,0,[318,4,0,332,4,0,337,1,0]);
//in 0.7 will use enderpearls but we have to make a way to get them
//Enderman
Item.addCraftRecipe(506,1,0,[35,1,0,319,1,0]); //ocelot
Item.addCraftRecipe(507,2,0,[3,3,0,296,3,0]); //villager
Item.addCraftRecipe(508,4,0,[283,1,0,494,4,0,266,4,0]); //pigmen

function useItem(x, y, z, item, block, side)
{
if(item == 501)
{
Level.spawnMob(x, y+1, z, 10, "mob/chicken.png");
addItemInventory(item,-1,0);
}
if(item == 500)
{
Level.spawnMob(x, y+1, z, 11, "mob/cow.png");
addItemInventory(item,-1,0);
}
if(item == 502)
{
Level.spawnMob(x, y+1, z, 13, "mob/sheep_"+r+".png");
addItemInventory(item,-1,0);
}
if(item == 503)
{
Level.spawnMob(x, y+1, z, 35, "mob/spider.png");
addItemInventory(item,-1,0);
}
if(item == 504)
{
Level.spawnMob(x, y+1, z, 12, "mob/pig.png");
addItemInventory(item,-1,0);
}
if(item == 505)
{
var ender = Level.spawnMob(x, y+1, z,35,"mob/enderman.png");
Entity.setRenderType(ender,EndermanRenderType.renderType);
addItemInventory(item,-1, 0);
}
if(item == 506)
{
var ocelot = Level.spawnMob(x, y+1, z,11,"mob/ocelot.png");
Entity.setRenderType(ocelot,OcelotRenderType.renderType);
addItemInventory(item,-1, 0);
}
if(item==507)
{
Villager = Level.spawnMob(x, y+1, z, 11, "mob/villager.png");
        Entity.setHealth(Villager, 20);
        Entity.setRenderType(Villager, VillagerRenderType.renderType);
addItemInventory(item,-1);
}
if(item == 497)
{
Level.spawnMob(x, y+1, z, 32, "mob/zombie.png");
addItemInventory(item,-1,0);
}
if(item == 498)
{
Level.spawnMob(x, y+1, z, 34, "mob/skeleton.png");
addItemInventory(item,-1,0);
}
if(item == 499)
{
Level.spawnMob(x, y+1, z, 33, "mob/creeper.png");
addItemInventory(item,-1,0);
}
if(item == 496)
{
Wolf = Level.spawnMob(x,y+1,z,11,"mob/wolf.png");   
Entity.setRenderType(Wolf,WolfRenderType.renderType); 
Entity.setHealth(Wolf, 10);
addItemInventory(item,-1,0);
}
if(item == 495)
{
Wither = Level.spawnMob(x, y+1, z, 32, "mob/wither.png");
Entity.setCarriedItem(Wither, 272, 1, 0);
Entity.setHealth(Wither, 50);
Entity.setRenderType(Wither,12);
addItemInventory(item,-1,0);
}
if(item == 508)
{
Level.spawnMob(x, y+1, z, 36, "mob/pigzombie.png");
addItemInventory(item,-1,0);
}
}

function deathHook(murderer, victim)
{
var en = Entity.getEntityTypeId(victim);


if(en == 32)
{
if(victim !== Wither)
{
Level.dropItem(Entity.getX(victim), Entity.getY(victim) + 1, Entity.getZ(victim), 0.5, 494, 2, 0);
}
}
if(en == 35)
{
if(victim !== ender)
{
Level.dropItem(Entity.getX(victim), Entity.getY(victim) + 1, Entity.getZ(victim), 0.5, 493, 2, 0);
}
}
if(victim == Wolf)
{
Level.dropItem(Entity.getX(victim), Entity.getY(victim) + 1, Entity.getZ(victim), 0.5, 35, 2, 0);
}
if(victim == Wither)
{
Level.dropItem(Entity.getX(victim), Entity.getY(victim) + 1, Entity.getZ(victim), 0.5, 263, 2, 0);
}

}

function attackHook(attacker, victim)
{
if(Entity.getEntityTypeId(victim)==ender) 
	{
		var Teleport = Math.floor((Math.random()*4)+1);
		switch(Teleport)
		{
			case 1:
				setPosition(victim, getPlayerX(),getPlayerY()+2, getPlayerZ()+5);
			break;
		
			case 2:
				setPosition(victim, getPlayerX(),getPlayerY()+2, getPlayerZ()-5);
			break;
		
			case 3:
				setPosition(victim, getPlayerX()+5,getPlayerY()+2, getPlayerZ());
			break;
		
			case 4:
				setPosition(victim, getPlayerX()-5,getPlayerY()+2, getPlayerZ());
			break;
		}
}
}
function addEndermanRenderType(renderer) 
{
    var model = renderer.getModel();
     
    var head = model.getPart("head");
    var body = model.getPart("body");
    var rarm = model.getPart("rightArm");
    var larm = model.getPart("leftArm");
    var rleg = model.getPart("rightLeg");
    var lleg = model.getPart("leftLeg");
     
    head.clear();
    head.setTextureOffset(0, 0);
    head.addBox(-4, -24, -4, 8, 8, 8);
 
    body.clear();
    body.setTextureOffset(0, 12);
    body.addBox(-4, -16, -2, 8, 12, 4);
 
    rarm.clear();
    rarm.setTextureOffset(0, 12);
    rarm.addBox(-1, -18, -2, 2, 30, 2);
 
    larm.clear();
    larm.setTextureOffset(0, 12);
    larm.addBox(-1,-18,-2, 2, 30, 2);
 
    rleg.clear();
    rleg.setTextureOffset(0, 12);
    rleg.addBox(-1, -18, 0, 2, 30, 2);
 
    lleg.clear();
    lleg.setTextureOffset(0, 12);
    lleg.addBox(-1, -18, 0, 2, 30, 2);
}
 
var EndermanRenderType = Renderer.createHumanoidRenderer();
addEndermanRenderType(EndermanRenderType);

function addWolfRenderType(renderer)
{
 
var var2 = 0;
var model = renderer.getModel();
 
var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");
 
head.clear();
head.setTextureOffset(0,0);
head.addBox(0,9,-9,6,6,4,var2); //head
head.setTextureOffset(48,0);
head.addBox(0,7,-8,2,2,1,var2); //ear
head.setTextureOffset(48,0);
head.addBox(4,7,-8,2,2,1,var2); //ear
head.setTextureOffset(50,0);
head.addBox(1.5,12,-12,3,3,4,var2); //nose
 
body.clear();
body.setTextureOffset(30,12);
body.addBox(0,9,0,6,6,9,var2); //body
body.addBox(2,10,8,2,2,8,var2); //tail
body.addBox(-1,8,-6,8,8,6,var2); //mane 
 
lLeg.clear();
lLeg.setTextureOffset(30,12);
lLeg.addBox(1.9,2,7,2,8,2,var2); //front leg
lLeg.addBox(1.9,2,-1,2,8,2,var2); //back leg
 
rLeg.clear();
rLeg.setTextureOffset(30,12);
rLeg.addBox(1.9,2,7,2,8,2,var2); //front leg
rLeg.addBox(1.9,2,-1,2,8,2,var2); //back leg
 
rArm.clear();
lArm.clear();
}

var Wolf;
var WolfRenderType = Renderer.createHumanoidRenderer();
addWolfRenderType(WolfRenderType);


function addOcelotRenderType(renderer) {
var model = renderer.getModel();
     
    var head = model.getPart("head");
    var body = model.getPart("body");
    var rarm = model.getPart("rightArm");
    var larm = model.getPart("leftArm");
    var rleg = model.getPart("rightLeg");
    var lleg = model.getPart("leftLeg");
     
    head.clear();
    head.setTextureOffset(0, 0);
    head.addBox(-1, 14, -7, 5, 4, 5);

    head.setTextureOffset(11, 4);
    head.addBox(-0.5,13,-4,1,1,2);

head.setTextureOffset(11, 6);
head.addBox(2.5,13,-4,1,1,2);

head.setTextureOffset(1, 25);
head.addBox(0, 16, -8, 3, 2, 1);

 head.setRotationPoint(0, 0,0);

    body.clear();
    body.setTextureOffset(24, 10);
    body.addBox(-0.5, 15, -2, 4, 6, 16);
 
    
 rarm.clear();
    larm.clear();
 
    rleg.clear();
    rleg.setTextureOffset(40, 0);
   rleg.addBox(0.9, 2.9, 0, 2, 9, 2);

rleg.setTextureOffset(40, 0);
 rleg.addBox(0.9,6, 11, 2, 5, 2);

    lleg.clear();
    lleg.setTextureOffset(40,0);
    lleg.addBox(0.1, 2.9, 0, 2, 9, 2);
lleg.setTextureOffset(40, 0);
    lleg.addBox(0.1, 6, 11, 2, 5, 2);
}
var OcelotRenderType = Renderer.createHumanoidRenderer();
addOcelotRenderType(OcelotRenderType);

function addVillagerRenderType(renderer) 
{
    var model = renderer.getModel();
     
    var head = model.getPart("head");
    var body = model.getPart("body");
    var rarm = model.getPart("rightArm");
    var larm = model.getPart("leftArm");
    var rleg = model.getPart("rightLeg");
    var lleg = model.getPart("leftLeg");
     
    head.clear();
    head.setTextureOffset(0, -2);
    head.addBox(-2, -10, -2, 8, 10, 8);
    head.setTextureOffset(24, 0);
    head.addBox(1,-3,-4,2,4,2);
 
    body.clear();
    body.setTextureOffset(32, -4);
    body.addBox(-2, 0, -2, 8, 18, 8);
 
    rarm.clear();
    rarm.setTextureOffset(34, 8);
    rarm.addBox(-1, 0, -6, 4, 4, 8);
    rarm.addBox(11, 0, -6, 4, 4, 8);
    rarm.addBox(3, 0, -6, 8, 4, 4);
 
    larm.clear();
 
    rleg.clear();
    rleg.setTextureOffset(0, 23);
    rleg.addBox(0, 6, 0, 4, 5, 4);
 
    lleg.clear();
    lleg.setTextureOffset(0, 23);
    lleg.addBox(0, 6, 0, 4, 5, 4);
}
 
var VillagerRenderType = Renderer.createHumanoidRenderer();
addVillagerRenderType(VillagerRenderType);