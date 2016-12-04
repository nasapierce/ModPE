/*
Copyright Darkserver 2014
This copyright license applys to 
every update of Craftable Mobs 
mod since version 0.7.beta4 and 
release version 0.7.0

You May Not:
-Redistribute Code - Please post a forum link
-Claim Code as Yours
-Claim Images as Yours

You May:
-Edit Code for Personal Uses - No posting these edits without permission
-Use for Commercial Uses - I just ask you leave a forum link
-Post a link to Official Topics - Of Mine

Craftable Mobs Mod By 
Darkserver and Thecactigod 
Credits to MyNameIsAnti for His Renders
and Sin0psysS (Lu_Lu54) for Wither Boss and Skeleton
*/

/*
Update 0.7.0
-Wither Boss
-Taller Wither Skeletons
-Slime
crafting
-Magma Slime
crafting
*/
ModPE.overrideTexture("images/mob/ocelot.png","http://i.imgur.com/PVdsLnB.png"); 
ModPE.overrideTexture("images/items.meta","http://dl.dropbox.com/s/xtslmehgje85qko/CM_0.7.meta");
ModPE.overrideTexture("images/items-opaque.png","http://dl.dropbox.com/s/3z9qfwvt4b7pru3/CM_0.7.png");
ModPE.overrideTexture("images/mob/wolf.png","http://dl.dropbox.com/s/31xgqvx7iety4l9/wolf.png");
ModPE.overrideTexture("images/mob/withers.png","http://i.imgur.com/X1g5Kiq.png");
ModPE.overrideTexture("images/mob/enderman.png","http://i.imgur.com/UXzvOmn.png");
ModPE.overrideTexture("images/mob/villager.png","http://i.imgur.com/0dRU59r.png");
ModPE.overrideTexture("images/mob/slime.png","http://dl.dropbox.com/s/2hci3l99vtd0zkl/slime.png");
ModPE.overrideTexture("images/mob/magma_cube.png","http://dl.dropbox.com/s/g6s5a1iwh68tgj2/magma_cube.png");

var r = 0;
var drop = Math.floor((Math.random()*4)+1);
var heads = [496,497,498,499,500,501,502,503,504,493,494];

var Spider = 35;
var Zombie = 32;
var Wither;
var Slime;
var Magma;
/*
Mobs to make; horse 
spider_jockey poisionous_spider 
bat squid ghast horse magma_slime
dog cat mooshroom zombie_villager
baby_zombie baby_pigmen zombie_jockey
*/

ModPE.setItem(489,"magma_cream",0,"Magma Cream");
ModPE.setItem(490,"gold_nugget",0,"Gold Nugget");
ModPE.setItem(491,"ender_pearl",0,"Ender Pearl");
ModPE.setItem(492,"skull_wither",0,"Wither Skull");
ModPE.setItem(495,"skull_wither",0,"Wither Skeleton");
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
ModPE.setItem(509,"head_wither", 0,"Wither Boss");
ModPE.setItem(510,"head_slime", 0,"Slime");
ModPE.setItem(511,"head_magma_slime", 0,"Magma Cube");
ModPE.setFoodItem(493,"spider_eye",0,-2,"Spider eye");
ModPE.setFoodItem(494,"rotten_flesh",0,-1,"Rotten Flesh");

Item.addCraftRecipe(489,1,0,[341,1,0,289,1,0]); //magma cream
Item.addCraftRecipe(341,3,0,[353,4,0,494,4,0,295,1,0]); //slimeball
Item.addCraftRecipe(266,1,0,[490,9,0]); //gold
Item.addCraftRecipe(490,9,0,[266,1,0]); //nuggets
Item.addCraftRecipe(501,1,0,[288,6,0,365,3,0]); //chicken
Item.addCraftRecipe(500,1,0,[334,4,0,363,5,0]); //cow
Item.addCraftRecipe(502,2,0,[319,1,0,35,8,0]); //sheep
Item.addCraftRecipe(503,4,0,[287,4,0,493,4,0]);//spider
Item.addCraftRecipe(504,4,0,[319,8,0]); //pig
Item.addCraftRecipe(497,4,0,[494,8,0,288,1,0]); //zombie
Item.addCraftRecipe(498,2,0,[352,4,0,262,4,0,261,1,0]); //skeleton
Item.addCraftRecipe(499,4,0,[289,8,0,494,1,0]); //creeper
Item.addCraftRecipe(496,2,0,[35,4,0,502,1,0]); //wolf
Item.addCraftRecipe(495,2,0,[263,4,0,272,1,0,263,4,0]); //wither skeleton
Item.addCraftRecipe(505,7,0,[318,4,0,332,4,0,337,1,0]); //Enderman
Item.addCraftRecipe(506,1,0,[35,1,0,319,1,0]); //ocelot
Item.addCraftRecipe(507,2,0,[3,3,0,296,3,0]); //villager
Item.addCraftRecipe(508,4,0,[283,1,0,494,4,0,490,4,0]); //pigmen
Item.addCraftRecipe(509,1,0,[87,4,0,86,1,0,12, 4, 0]); //wither boss
Item.addCraftRecipe(510,4,0,[341,8,0]); //slime
Item.addCraftRecipe(511,4,0,[489,8,0]); //magma cube

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
Wither = Level.spawnMob(x, y+1, z, 32, "mob/withers.png");
Entity.setCarriedItem(Wither, 272, 1, 0);
Entity.setHealth(Wither, 50);
Entity.setRenderType(Wither,wskeletonRenderer.renderType);
addItemInventory(item,-1,0);
}
if(item == 508)
{
Level.spawnMob(x, y+1, z, 36, "mob/pigzombie.png");
addItemInventory(item,-1,0);
}
if(item == 509)
{
wither = Level.spawnMob(x,y+1,z, 12, "mob/withers.png");
Entity.setRenderType(wither, witherRenderer.renderType);
Entity.setHealth(wither, 200);
}
if(item == 510)
{
Slime = Level.spawnMob(x, y+1, z, 10, "mob/slime.png");
Entity.setRenderType(Slime,SlimeRenderer.renderType);
addItemInventory(item,-1,0);
}
if(item == 511)
{
Magma = Level.spawnMob(x, y+1, z, 10, "mob/magma_cube.png");
Entity.setRenderType(Magma,SlimeRenderer.renderType);
addItemInventory(item,-1,0);
}
}

var j=1;
var Xpos;
var Zpos;
var Xdiff;
var Zdiff;
var wsX;
var wsY;
var wsZ;
var withereffect=-1;
var poison=-1;
var tile;
var g=1;
var random;
var alea;
var spawned=0;
var unstuck=-1;
var wskeleton;
var wither;
var countdown=-1;
var count=-1;
var fire=-1;
var ball=-1;
var x;
var y;
var z;
var a;
var b;
var c;
var recurrent=19;
var recurrent2=80;
var height=4;
ModPE.setItem(150,"nether_star",0,"Nether Star");

function spawnWither()
{
countdown=200;
wither = Level.spawnMob(a,b+1,c, 12, "mob/withers.png");
Entity.setRenderType(wither, witherRenderer.renderType);
Entity.setHealth(wither, 200);
wX=Entity.getX(wither);
wY=Entity.getY(wither);
wZ=Entity.getZ(wither);

}

function deathHook(murderer, victim)
{
if(Entity.getMobSkin(victim)=="mob/zombie.png") //now we can use any mob drops depending on skins :D
{
Level.dropItem(Entity.getX(victim), Entity.getY(victim) + 1, Entity.getZ(victim), 0.5, 494, 1, 0);
}
if(Entity.getMobSkin(victim)=="mob/spider.png")
{
Level.dropItem(Entity.getX(victim), Entity.getY(victim) + 1, Entity.getZ(victim), 0.5, 493, 1, 0);
}
if(Entity.getMobSkin(victim)=="mob/wolf.png")
{
Level.dropItem(Entity.getX(victim), Entity.getY(victim) + 1, Entity.getZ(victim), 0.5, 35, 1, 0);
}
if(Entity.getMobSkin(victim)=="mob/withers.png")
{
Level.dropItem(Entity.getX(victim), Entity.getY(victim) + 1, Entity.getZ(victim), 0.5, 263, 1, 0);
}
if(Entity.getMobSkin(victim)=="mob/pigzombie.png")
{
Level.dropItem(Entity.getX(victim), Entity.getY(victim) + 1, Entity.getZ(victim), 0.5, 490, 1, 0);
}
if(Entity.getMobSkin(victim)=="mob/slime.png") 
{
Level.dropItem(Entity.getX(victim), Entity.getY(victim) + 1, Entity.getZ(victim), 0.5, 341, 3, 0);
}
if(Entity.getMobSkin(victim)=="mob/magma_cube.png") 
{
Level.dropItem(Entity.getX(victim), Entity.getY(victim) + 1, Entity.getZ(victim), 0.5, 489, 3, 0);
}
}

function attackHook(attacker, victim)
{
if(Entity.getMobSkin(victim)=="mob/enderman.png")
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

function modTick()
{
if(y-Entity.getY(ball)>=0)
{
setVelY(ball,0.3);
}
else if(y-Entity.getY(ball)<=0)
{
setVelY(ball,-0.25);
}
if(x-Entity.getX(ball)>=0)
{
setVelX(ball,0.32);
}
else if(x-Entity.getX(ball)<=0)
{
setVelX(ball,-0.32);
}
if(z-Entity.getZ(ball)>=0)
{
setVelZ(ball,0.32);
}
else if(z-Entity.getZ(ball)<=0)
{
setVelZ(ball,-0.32);
}
if(countdown==-1)
{
if(getPlayerY()-Entity.getY(wither)<=-10)
{
setVelY(wither,-0.4);
}
if(getPlayerX()-Entity.getX(wither)<=-10)
{
setVelX(wither,-0.4);
}
else if(getPlayerX()-Entity.getX(wither)>=10)
{
setVelX(wither, 0.4);
}
if(getPlayerZ()-Entity.getZ(wither)<=-10)
{
setVelZ(wither,-0.4)
}
else if(getPlayerZ()-Entity.getZ(wither)>=10)
{
setVelZ(wither,0.4)
}
if(getTile(Entity.getX(wither),Entity.getY(wither)-height,Entity.getZ(wither))==0)
{
if(recurrent2>=60)
{
setVelY(wither,-0.1)
}
else
{
setVelY(wither,0)
}
}
else
{
setVelY(wither, 0.4)
}
}
if(fire>=1)
{
fire=fire-1;
}
if(fire==0)
{
fire=70;
if(ball==-1)
{
ball=Level.spawnMob(Entity.getX(wither),Entity.getY(wither)+1,Entity.getZ(wither),12, "mob/withers.png");
x=Player.getX();
y=Player.getY()-2;
z=Player.getZ();
count=42;
Entity.setHealth(ball,100);
Entity.setRenderType(ball, ballRenderer.renderType);
}
}
if(count>=1)
{
count=count-1;
}
if(count==0)
{
count=-1;
Level.explode(Entity.getX(ball),Entity.getY(ball),Entity.getZ(ball),3);
Entity.remove(ball);
ball=-1
}
if(countdown>=1)
{
countdown=countdown-1;
setVelX(wither,0);
setVelY(wither,0.01);
setVelZ(wither,0);
Entity.setHealth(wither,10);
}
if(countdown==0)
{
clientMessage("§0Withered.");
countdown=-1;
Entity.setHealth(wither,200);
Level.explode(Entity.getX(wither),Entity.getY(wither),Entity.getZ(wither),6);
Entity.remove(wither);
wither = Level.spawnMob(wX, wY, wZ, 12, "mob/withers.png");
Entity.setRenderType(wither, witherRenderer.renderType);
Entity.setHealth(wither,140);
fire=70;
}
if(getTile(Entity.getX(ball),Entity.getY(ball)-1,Entity.getZ(ball))==0)
{
}
else
{
Level.explode(Entity.getX(ball),Entity.getY(ball),Entity.getZ(ball),3);
Entity.remove(ball);
ball=-1;
count=-1;
}
if(recurrent>=1)
{
recurrent=recurrent-1;
}
if(recurrent==0)
{
recurrent=5;
if(getTile(Player.getX(),Player.getY()-2,Player.getZ())==129)
{
setVelX(getPlayerEnt(),0);
setVelZ(getPlayerEnt(),0);
}
}
if(recurrent2>=1)
{
recurrent2=recurrent2-1;
}
if(recurrent2==0)
{
recurrent2=80;
height=Math.floor((Math.random()*3)+1);
height=height+1
}
alea=Math.floor((Math.random()*1000)+1)
var time = Level.getTime()-Math.floor(Level.getTime()/19200)*19200;
if(time<(19200/2))
{
}
else
{


if(j!=1)
{
j = j + 1;
}
if(withereffect>=1)
{
withereffect=withereffect-1;
if(poison>=1)
{
poison=poison-1;
if(poison==3)
{
Entity.setHealth(getPlayerEnt(), Entity.getHealth(getPlayerEnt())-1);
setVelX(getPlayerEnt(),0);
setVelY(getPlayerEnt(),0);
setVelZ(getPlayerEnt(),0);
tile=getTile(Player.getX(),Player.getY()+2,Player.getZ())
setTile(Player.getX(),Player.getY()+2,Player.getZ(),173);
Level.destroyBlock(Player.getX(),Player.getY()+2,Player.getZ());
setTile(Player.getX(),Player.getY()+2,Player.getZ(),tile)
}
}
if(poison==0)
{
poison=13
}
}
if(withereffect==0)
{
withereffect=-1;
poison=-1;
}
if(g>=1)
{
g=g-1;
health1=Entity.getHealth(getPlayerEnt())
}
else if(g==0)
{
g=1;
health2=Entity.getHealth(getPlayerEnt());
}
if(unstuck>=1)
{
unstuck=unstuck-1;
if(getTile(Entity.getX(wskeleton),Entity.getY(wskeleton), Entity.getZ(wskeleton))==0)
{
}
else
{
setPosition(Entity.getX(wskeleton),Entity.getY(wskeleton)+1,Entity.getZ(wskeleton))
}
}
if(unstuck==0)
{
unstuck=-1;
}
}
}

function addSlimeToRenderer(renderer)
{
var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rarm = model.getPart("rightArm");
var larm = model.getPart("leftArm");
var rleg = model.getPart("rightLeg");
var lleg = model.getPart("leftLeg");

head.clear();
body.clear();
rarm.clear();
larm.clear();
rleg.clear();
lleg.clear();

body.setTextureOffset(0,0);
body.addBox(0,16,0,8,8,8,0);
}

var SlimeRenderer = Renderer.createHumanoidRenderer();
addSlimeToRenderer(SlimeRenderer);

function addBallToRenderer(renderer)
{
var model2 = renderer.getModel();
model2.getPart("body").clear();
model2.getPart("rightArm").clear()
model2.getPart("leftArm").clear()
model2.getPart("leftLeg").clear()
model2.getPart("rightLeg").clear()
}

var ballRenderer = Renderer.createHumanoidRenderer();
addBallToRenderer(ballRenderer);

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

function addWskeletonToRenderer(renderer)
{
var model3 = renderer.getModel();
var wskeletonHead=model3.getPart("head").clear().setTextureOffset(0,32);
wskeletonHead.addBox(-4, -16, -5, 8, 8, 8, 0);
var wskeletonBody = model3.getPart("body").clear().setTextureOffset(32, 16);
wskeletonBody.addBox(-1, -9, -2, 2, 16, 2, 0);
wskeletonBody.addBox(-6, -7, 0, 12, 4, 2, 0);
wskeletonBody.addBox(-4, -4, -2, 8, 3, 2, 0);
wskeletonBody.addBox(-3, 1, -1, 6, 1, 1, 0);
wskeletonBody.addBox(-3, -3, -1, 1, 4, 1, 0);
wskeletonBody.addBox(2, -3, -1, 1, 4, 1, 0); 
wskeletonBody.addBox(-4, 6, -2, 8, 2, 2, 0);
wskeletonBody.addBox(3.5, -9, 2, 2, 2, -11, 0);
wskeletonBody.addBox(-5.5, -21, -7, 1, 16, 2, 0);
wskeletonBody.addBox(-5.5, -22, -6, 1, 19, 1, 0);
wskeletonBody.addBox(-5.5, -9, 2, 2, 2, -11, 0); model3.getPart("rightArm").clear().setTextureOffset(56, 0);
var wskeletonArms = model3.getPart("leftArm").clear().setTextureOffset(56, 0);
var wskeletonRightLeg = model3.getPart("rightLeg").clear().setTextureOffset(56, 0);
wskeletonRightLeg.addBox(-1, -5, -1, 2, 17, 2, 0);
var wskeletonLeftLeg = model3.getPart("leftLeg").clear().setTextureOffset(56, 0);
wskeletonLeftLeg.addBox(-1, -5, -1, 2, 17, 2, 0);
}

var wskeletonRenderer = Renderer.createHumanoidRenderer();
addWskeletonToRenderer(wskeletonRenderer);

function addWitherToRenderer(renderer)
{
var model = renderer.getModel();
var body = model.getPart("body").clear().setTextureOffset(32, 16); 
body.addBox(-10, 0.5, 1, 19, 2, 4, 0);
body.addBox(-13, -6.5, -1, 7, 6, 6, 0);
body.addBox(6, -6.5, -1, 7, 6, 6, 0);
body.addBox(-2, 0, 2.5, 4, 14, 4, 0);
body.addBox(-6, 4, 2.7, 11, 2.5, 2, 0);
body.addBox(-6, 7, 2.7, 11, 2.5, 2, 0);
body.addBox(-6, 10, 2.7, 11, 2.5, 2, 0);
body.addBox(-2, 10, 4, 3, 6, 3, 0);
body.addBox(-2, 12, 6, 3, 4, 3, 0);
model.getPart("rightArm").clear()
model.getPart("leftArm").clear()
model.getPart("leftLeg").clear()
model.getPart("rightLeg").clear()
}

var witherRenderer = Renderer.createHumanoidRenderer();
addWitherToRenderer(witherRenderer);