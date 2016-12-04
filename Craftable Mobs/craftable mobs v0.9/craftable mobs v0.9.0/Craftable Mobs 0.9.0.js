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
Darkserver, Thecactigod, And Darkcube_lord704 
Credits to MyNameIsAnti for His Amazing Render Types, 
and Sin0psysS (Lu_Lu54) for The Wither Boss, Wither Skeleton, and Snow Golem Render Types.
*/
//ModPE.overrideTexture("images/mob/ocelot.png","http://i.imgur.com/PVdsLnB.png"); 
//ModPE.overrideTexture("images/items.meta","http://dl.dropbox.com/s/nl80zqi0cgl1fwh/CM_0.8.meta");
//ModPE.overrideTexture("images/items-opaque.png","http://dl.dropbox.com/s/ubv8nynso3qfz81/CM_0.8.png");
//ModPE.overrideTexture("images/mob/withers.png","http://i.imgur.com/X1g5Kiq.png");
//ModPE.overrideTexture("images/mob/snow_golem.png","");

var r = Math.floor((Math.random()*15)+0);
var floating;
var Spider = 35;
var Zombie = 32;
var Wither;
var Magma;
var ghast;

var fall=0;
var falling=0;
var velX;
var velY;
var velZ;
var a;
var b;
var c;
var i;
var j;
var target;
var fire=25;
var basic;
var head;
var body;
var rightArm;
var leftArm;
var snowGolem;
var snowGolemRenderer = Renderer.createHumanoidRenderer();
addSnowGolemToRenderer(snowGolemRenderer);
/*TODO 
Mobs to make; 
horse 
poisionous spider 
bat 
squid 
cat 
zombie villager
baby zombie 
baby pigmen 
zombie jockey or chicken jockey??
baby ocelot
giant
*/

//ModPE.setItem(485,"head_snowGolem",0,"Snow Golem");
//ModPE.setItem(486,"head_ghast",0,"Ghast");
ModPE.setItem(487,"record_blocks",0,"skull_jockey");
ModPE.setItem(488,"record_mall",0,"skull_mooshroom");
ModPE.setItem(489,"magma_cream",0,"magma_cream");
ModPE.setItem(490,"gold_nugget",0,"gold_nugget");
ModPE.setItem(491,"ender_pearl",0,"ender_pearl",16);
ModPE.setItem(492,"skull_wither",0,"wither_skull");
ModPE.setItem(495,"skull_wither",0,"skull_wither");
ModPE.setItem(496,"quiver",0,"skull_wolf");
ModPE.setItem(497,"skull_zombie",0,"skull_zombie");
ModPE.setItem(498,"skull_skeleton",0,"skull_skeleton");
ModPE.setItem(499,"skull_creeper",0,"skull_creeper");
ModPE.setItem(500,"record_chirp",0,"skull_cow");
ModPE.setItem(501,"record_cat",0,"skull_chicken");
ModPE.setItem(502,"record_strad",0,"skull_sheep");
ModPE.setItem(503,"record_ward",0,"skull_spider");
ModPE.setItem(504,"record_mellohi",0,"skull_pig");
ModPE.setItem(505,"record_far", 0,"skull_enderman");
ModPE.setItem(506,"record_13", 0,"skull_ocelot");
ModPE.setItem(507,"record_11", 0,"skull_villager");
ModPE.setItem(508,"record_stal", 0,"skull_pigman");
ModPE.setItem(509,"skull_wither", 0,"skull_boss");
ModPE.setItem(510,"record_wait", 0,"skull_slime");
ModPE.setItem(511,"skull_magmacube", 0,"skull_magmacube");
ModPE.setFoodItem(493,"spider_eye",0,-1,"spider_eye");
ModPE.setFoodItem(494,"rotten_flesh",0,-2,"rotten_flesh");
//ModPE.setItem(484,"fish_raw",0,"skull_silverfish");
//ModPE.setFoodItem(483,"fish_raw",0,"raw_fish");
//ModPE.setFoodItem(482,"fish_cooked",0,"cooked_fish");
ModPE.setItem(481,"book_enchanted",0,"Mob Capture",1);

//Item.addShapedRecipe(484,2,0,["   ","ab ","   "],["a",265,0,"b",483,0]);
Item.addShapedRecipe(487,1,0,["   "," b "," a "],["a",503,0,"b",498,0]); //spider jockey
Item.addShapedRecipe(488,1,0,["aaa","aba","aaa"],["a",40,0,"b",500,0]); //mooshroom
//Item.addShapedRecipe(489,1,0,["   ","ab ","   "],["a",341,0,"b",289,0]); //magma cream
Item.addShapedRecipe(341,3,0,["a a","   ","a a"],["a",3,0,"b",295,0,"c",353,0]); //slimeball
Item.addShapedRecipe(266,1,0,["aaa","aaa","aaa"],["a",490,0]); //nuggets > gold
Item.addShapedRecipe(490,9,0,["a  ","   ","   "],["a",266,0]); //gold > nuggets
Item.addShapedRecipe(501,1,0,["aaa","bbb","aaa"],["a",288,0,"b",365,0]); //chicken
Item.addShapedRecipe(500,1,0,["aba","bbb","aba"],["a",334,0,"b",363,0]); //cow
Item.addShapedRecipe(502,2,0,["bbb","bab","bbb"],["a",319,0,"b",35,0]); //sheep
Item.addShapedRecipe(503,4,0,["aba","b b","aba"],["a",287,0,"b",493,0]);//spider
Item.addShapedRecipe(504,4,0,["aaa","a a","aaa"],["a",319,0]); //pig
Item.addShapedRecipe(497,4,0,["aaa","aba","aaa"],["a",494,0,"b",288,0]); //zombie
Item.addShapedRecipe(498,2,0,["aba","bcb","aba"],["a",352,0,"b",262,0,"c",261,0]); //skeleton
Item.addShapedRecipe(499,4,0,["aaa","aba","aaa"],["a",289,0,"b",494,0]); //creeper
Item.addShapedRecipe(496,2,0,["a a"," b ","a a"],["a",35,0,"b",502,0]); //wolf
//Item.addShapedRecipe(495,2,0,["aca","cbc","aca"],["a",263,0,"b",272,0,"c",263,0]); //wither skeleton
Item.addShapedRecipe(505,7,0,["aaa","a a","aaa"],["a",491,0]); //Enderman
Item.addShapedRecipe(506,1,0,["   ","ab ","   "],["a",35,0,"b",319,0]); //ocelot
Item.addShapedRecipe(507,2,0,["   ","aaa","bbb"],["b",3,0,"a",296,0]); //villager
Item.addShapedRecipe(508,4,0,["cbc","bab","cbc"],["a",283,0,"b",494,0,"c",490,0]); //pigmen
//Item.addShapedRecipe(509,1,0,["","",""],[87,4,0,86,1,0,12, 4, 0]); //wither boss
Item.addShapedRecipe(510,4,0,["aaa","a a","aaa"],["a",341,0]); //slime
//Item.addShapedRecipe(511,4,0,["","",""],[489,8,0]); //magma cube
//Item.addShapedRecipe(485,1,0,["","",""],[86,1,0,80,4,0]); //snow golem
//Item.addShapedRecipe(486,1,0,["","",""],[3,1,0]); //ghast [beta recipe]
Item.addShapedRecipe(52,1,0,["aaa","a a","aaa"],["a",101,0]); //monster spawner

function useItem(x, y, z, item, block, side) {
 if(item == 501) { //chicken
  Level.spawnMob(x, y+1, z, 10, "mob/chicken.png");
  addItemInventory(item,-1,0);
 }
 if(item == 500) { //cow
  Level.spawnMob(x, y+1, z, 11, "mob/cow.png");
  addItemInventory(item,-1,0);
 }
 if(item == 502) { //sheep
  Level.spawnMob(x, y+1, z, 13, "mob/sheep_"+r+".png");
  addItemInventory(item,-1,0);
 }
 if(item == 503) { //spider
  Level.spawnMob(x, y+1, z, 35, "mob/spider.png");
  addItemInventory(item,-1,0);
 }
 if(item == 504) { //pig
  Level.spawnMob(x, y+1, z, 12, "mob/pig.png");
  addItemInventory(item,-1,0);
 }
 if(item == 505) { //Enderman
  Level.spawnMob(x, y+1, z, 38,"mob/enderman.png");
  addItemInventory(item,-1, 0);
 }
 if(item == 506) { //ocelot
  var ocelot = Level.spawnMob(x, y+1, z, 10,"mob/ocelot.png");
   Entity.setRenderType(ocelot,OcelotRenderType.renderType);
  addItemInventory(item,-1, 0);
 }
 if(item==507) { //villager
  Level.spawnMob(x, y+1, z, 15, "mob/villager/villager.png");
  addItemInventory(item,-1);
 }
 if(item == 497) { //zombie
  Level.spawnMob(x, y+1, z, 32, "mob/zombie.png");
  addItemInventory(item,-1,0);
 }
 if(item == 498) { //skeleton
  Level.spawnMob(x, y+1, z, 34, "mob/skeleton.png");
  addItemInventory(item,-1,0);
 }
 if(item == 499) { //creeper
  Level.spawnMob(x, y+1, z, 33, "mob/creeper.png");
  addItemInventory(item,-1,0);
 }
 if(item == 496) { //wolf
  Level.spawnMob(x,y+1,z, 14,"mob/wolf.png");   
  addItemInventory(item,-1,0);
 }
 if(item == 495) { //wither skeleton
  Wither = Level.spawnMob(x, y+1, z, 36, "mob/withers.png");
   Entity.setCarriedItem(Wither, 272, 1, 0);
   Entity.setHealth(Wither, 50);
  // Entity.setRenderType(Wither,wskeletonRenderer.renderType);
  addItemInventory(item,-1,0);
 }
 if(item == 508) { //pigman
  Level.spawnMob(x, y+1, z, 36, "mob/pigzombie.png");
  addItemInventory(item,-1,0);
 }
 if(item == 509) { //wither
  wither = Level.spawnMob(x,y+1,z, 12, "mob/withers.png");
   Entity.setRenderType(wither, witherRenderer.renderType);
   Entity.setHealth(wither, 200);
  addItemInventory(item,-1,0);
 }
 if(item == 510) { //slime
  Level.spawnMob(x, y+1, z, 37, "mob/slime.png");
  addItemInventory(item,-1,0);
 }
 if(item == 511) { //magma cube
  Magma = Level.spawnMob(x, y+1, z, 37, "mob/magmacube.png");
  addItemInventory(item,-1,0);
 }
 if(item == 488) { //mooshroom
  Level.spawnMob(x, y+1, z, 16, "mob/mooshroom.png");
  addItemInventory(item,-1,0);
 }
 if(item == 487) { //spider jockey
  skelly=Level.spawnMob(x, y+1, z, 34);
  spider=Level.spawnMob(x, y+1, z,35);
   rideAnimal(skelly, spider); 
  addItemInventory(item,-1,0);
 }
 /* if(item == 486) { //ghast
  ghast = Level.spawnMob(x, y+1, z, 32, "mob/ghast.png");
   Entity.setRenderType(ghast,ghastRenderer.renderType);
  addItemInventory(item,-1,0);
 } */
 /* if(item == 485) { //snow golem
  snowGolem = Level.spawnMob(x,y+6,z, 12, "mob/snow_golem.png");
   Entity.setRenderType(snowGolem, snowGolemRenderer.renderType);
  spawned=1;
  addItemInventory(item,-1,0);
 } */
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

function spawnWither() {
  countdown=200;
  wither = Level.spawnMob(a,b+1,c, 12, "mob/withers.png");
   Entity.setRenderType(wither, witherRenderer.renderType);
   Entity.setHealth(wither, 200);
   wX=Entity.getX(wither);
   wY=Entity.getY(wither);
   wZ=Entity.getZ(wither);
}

function deathHook(murderer, victim) {
var drop = Math.floor((Math.random()*3)+0);
var edrop = Math.floor((Math.random()*1)+0);

 if(Entity.getMobSkin(victim)=="mob/zombie.png") {
  Level.dropItem(Entity.getX(victim), Entity.getY(victim) + 1, Entity.getZ(victim), 0.5, 494, drop, 0);
 }
 if(Entity.getMobSkin(victim)=="mob/spider.png") {
  Level.dropItem(Entity.getX(victim), Entity.getY(victim) + 1, Entity.getZ(victim), 0.5, 493, drop, 0);
 }
 if(Entity.getMobSkin(victim)=="mob/withers.png") {
  Level.dropItem(Entity.getX(victim), Entity.getY(victim) + 1, Entity.getZ(victim), 0.5, 263, 1, 0);
 }
 if(Entity.getMobSkin(victim)=="mob/pigzombie.png") {
  Level.dropItem(Entity.getX(victim), Entity.getY(victim) + 1, Entity.getZ(victim), 0.5, 494, drop, 0);
  Level.dropItem(Entity.getX(victim), Entity.getY(victim) + 1, Entity.getZ(victim), 0.5, 490, drop, 0);
 }
 if(Entity.getMobSkin(victim)=="mob/slime.png") {
  Level.dropItem(Entity.getX(victim), Entity.getY(victim) + 1, Entity.getZ(victim), 0.5, 341, drop, 0);
 }
 if(Entity.getMobSkin(victim)=="mob/magmacube.png") {
  Level.dropItem(Entity.getX(victim), Entity.getY(victim) + 1, Entity.getZ(victim), 0.5, 489, 2, 0);
 }
 if(Entity.getMobSkin(victim)=="mob/enderman.png") {
  Level.dropItem(Entity.getX(victim), Entity.getY(victim) + 1, Entity.getZ(victim), 0.5, 491, edrop, 0);
 }
}

function attackHook(attacker, victim) {
 if(victim!=snowGolem) {
  target=victim;
 }
 var item = Player.getCarriedItem();
 if(item==481) {
  preventDefault();
  if(Entity.getMobSkin(victim)=="mob/chicken.png") {
   Entity.remove(victim);
   Level.dropItem(x, y, z,0,501,1,0);
  }
  if(Entity.getMobSkin(victim)=="mob/cow.png") {
   Entity.remove(victim);
   Level.dropItem(x, y, z,0,500,1,0);
  }
  if(Entity.getMobSkin(victim)=="mob/sheep.png") {
   Entity.remove(victim);
   Level.dropItem(x, y, z,0,502,1,0);
  }
  if(Entity.getMobSkin(victim)=="mob/spider.png") {
   Entity.remove(victim);
   Level.dropItem(x, y, z,0,503,1,0);
  }
  if(Entity.getMobSkin(victim)=="mob/pig.png") {
   Entity.remove(victim);
   Level.dropItem(x, y, z,0,504,1,0);
  }
  if(Entity.getMobSkin(victim)=="mob/enderman.png") {
   Entity.remove(victim);
   Level.dropItem(x, y, z,0,505,1,0);
  }
  if(Entity.getMobSkin(victim)=="mob/ocelot.png") {
   Entity.remove(victim);
   Level.dropItem(x, y, z,0,506,1,0);
  }
  if(Entity.getMobSkin(victim)=="mob/villager/villager.png") {
   Entity.remove(victim);
   Level.dropItem(x, y, z,0,507,1,0);
  }
  if(Entity.getMobSkin(victim)=="mob/zombie.png") {
   Entity.remove(victim);
   Level.dropItem(x, y, z,0,497,1,0);
  }
  if(Entity.getMobSkin(victim)=="mob/skeleton.png") {
   Entity.remove(victim);
   Level.dropItem(x, y, z,0,498,1,0);
  }
  if(Entity.getMobSkin(victim)=="mob/creeper.png") {
   Entity.remove(victim);
   Level.dropItem(x, y, z,0,499,1,0);
  }
  if(Entity.getMobSkin(victim)=="mob/wolf.png") {
   Entity.remove(victim);
   Level.dropItem(x, y, z,0,496,1,0);
  }
  if(Entity.getMobSkin(victim)=="mob/pigzombie.png") {
   Entity.remove(victim);
   Level.dropItem(x, y, z,0,508,1,0);
  }
  if(Entity.getMobSkin(victim)=="mob/withers.png") {
   Entity.remove(victim);
   Level.dropItem(x, y, z,0,495,1,0);
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

if(getTile(Entity.getX(ghast)+1,Entity.getY(ghast)+1,Entity.getZ(ghast))>0|| getTile(Entity.getX(ghast)-1,Entity.getY(ghast)+1,Entity.getZ(ghast))>0||getTile(Entity.getX(ghast),Entity.getY(ghast)+1,Entity.getZ(ghast)+1)>0||getTile(Entity.getX(ghast),Entity.getY(ghast)+1,Entity.getZ(ghast)-1)>0)
{
floating=true;
}
if(floating==true){
Entity.setVelY(ghast, 0.5, 0.5, 0.5);
floating=false;
}

if(getTile(Entity.getX(snowGolem),Entity.getY(snowGolem),Entity.getZ(snowGolem))==0&&getTile(Entity.getX(snowGolem),Entity.getY(snowGolem)-1,Entity.getZ(snowGolem))!=0&&getTile(Entity.getX(snowGolem),Entity.getY(snowGolem)-1,Entity.getZ(snowGolem))!=78)
{
setTile(Entity.getX(snowGolem),Entity.getY(snowGolem),Entity.getZ(snowGolem),78);
}

//No fall damage system
//chicky power RPZ x)

if(falling==0&&getTile(Entity.getX(snowGolem),Entity.getY(snowGolem)-4,Entity.getZ(snowGolem))==0 )
{
falling=1;
}
if(falling==1&&fall==0&&getTile(Entity.getX(snowGolem),Entity.getY(snowGolem)-4,Entity.getZ(snowGolem))!=0)
{
a=Entity.getX(snowGolem);
b=Entity.getY(snowGolem)-3;
c=Entity.getZ(snowGolem);
velX = Entity.getVelX(snowGolem);
velY = Entity.getVelY(snowGolem);
velZ = Entity.getVelZ(snowGolem);
fall=Level.spawnMob(Entity.getX(snowGolem),Entity.getY(snowGolem)-2,Entity.getZ(snowGolem),10);
rideAnimal(snowGolem,fall);
Entity.setRenderType(fall,1);
}
if(getTile(Entity.getX(fall),Entity.getY(fall)-1,Entity.getZ(fall))!=0)
{
Entity.remove(fall);
falling=0;
fall=0;
setPosition(snowGolem,a,b,c);
setVelX(snowGolem,velX);
setVelY(snowGolem,velY);
setVelZ(snowGolem,velZ);
}
setVelX(fall,velX);
setVelY(fall,velY);
setVelZ(fall,velZ);

//Attacking hostile mobs eZ

if(fire==0)
{
if(spawned==1)
{
fire=25;
for(j=1;j<200;j++)
{
i=j;
if(i!=getPlayerEnt())
{
if(Entity.getX(snowGolem)-Entity.getX(i)>=-7&&Entity.getX(snowGolem)-Entity.getX(i)<=7&&Entity.getZ(snowGolem)-Entity.getZ(i)>=-7&&Entity.getZ(snowGolem)-Entity.getZ(i)<=7&&shot==0)
{
if(Entity.getEntityTypeId(i)>=30&&Entity.getEntityTypeId()<=40)
{
ball=Level.spawnMob(Entity.getX(snowGolem),Entity.getY(snowGolem)+2,Entity.getZ(snowGolem) ,81)
setVelX(ball,(Entity.getX(i)-Entity.getX(snowGolem))/5);
setVelY(ball,(Entity.getY(i)-Entity.getY(snowGolem))/5);
setVelZ(ball,(Entity.getZ(i)-Entity.getZ(snowGolem))/5);
shot=1;
}
}
else if( Entity.getX(snowGolem)-Entity.getX(target)>=-7&&Entity.getX(snowGolem)-Entity.getX(target)<=7&&Entity.getZ(snowGolem)-Entity.getZ(target)>=-7&&Entity.getZ(snowGolem)-Entity.getZ(target)<=7&&shot==0)
{
ball=Level.spawnMob(Entity.getX(snowGolem),Entity.getY(snowGolem)+2,Entity.getZ(snowGolem) ,81)
setVelX(ball,(Entity.getX(target)-Entity.getX(snowGolem))/5);
setVelY(ball,(Entity.getY(target)-Entity.getY(snowGolem))/5);
setVelZ(ball,(Entity.getZ(target)-Entity.getZ(snowGolem))/5);
shot=1;
}
}
}
}
}
if(fire>=1)
{
fire=fire-1
shot=0;
}
}

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

function addghastRenderType(renderer)
{
var varSize = 2
var model = renderer.getModel();

var body = model.getPart("body").clear();
var rLeg = model.getPart("rightLeg").clear();
var lLeg = model.getPart("leftLeg").clear();
var head = model.getPart("head").clear();
var rarm = model.getPart("rightArm").clear();
var larm = model.getPart("leftArm").clear();

  body.addBox(0, -15, 0, 16, 16, 16, 2);
  body.addBox(1, -0, 6, 2, 10, 2, 0);
  body.addBox(0.3, -0, 0, 2, 10, 2, 0);
  body.addBox(1.3, -0, 13, 2, 10, 2, 0);
  body.addBox(6.5, -0, 0, 2, 12, 2, 0);
  body.addBox(13.4, -0, 0, 2, 10, 2, 0);
  body.addBox(13, -0, 14, -6, 10, 2, 0);
  body.addBox(6.5, -0, 13, 2, 12, 2, 0);
  body.addBox(13, -0, 12, 2, 10, 2, 0);
}

var ghastRenderer = Renderer.createHumanoidRenderer();
addghastRenderType(ghastRenderer);

function addWitchRenderType(renderer) 
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
     head.addBox(-6, -10, -2, 8, 10, 8);
     head.setTextureOffset(24, 0);
     head.addBox(-3,-3,-4,2,4,2);
     head.setTextureOffset(8, 47);
     head.addBox(-7, -12, -3, 10, 2, 10);
     head.addBox(-6, -16, -2, 8, 4, 8);
     head.addBox(-5, -20, -1, 6, 24, 6);
     head.addBox(-4, -22, 0, 4, 2, 4);
 
    body.clear();
     body.setTextureOffset(34, -4);
     body.addBox(-6, 0, -2, 8, 18, 8);
 
    rarm.clear();
     rarm.setTextureOffset(34, 8);
     rarm.addBox(-5, 0, -6, 4, 4, 8);
     rarm.addBox(7, 0, -6, 4, 4, 8);
     rarm.addBox(-1, 0, -6, 8, 4, 4);
 
    larm.clear();

    rleg.clear();
     rleg.setTextureOffset(0, 23);
     rleg.addBox(-4, 6, 0, 4, 5, 4);
 
    lleg.clear();
     lleg.setTextureOffset(0, 23);
     lleg.addBox(-4, 6, 0, 4, 5, 4);
}
 
var WitchRenderType = Renderer.createHumanoidRenderer();
addWitchRenderType(WitchRenderType);

function addHorseRenderType(renderer) 
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
    head.addBox(-1, -5, -3, 4, 13, 8);
	body.setTextureOffset(18, 0);
    head.addBox(-1, -7, 2, 1, 2, 1);
	body.setTextureOffset(18, 0);
    head.addBox(2, -7, 2, 1, 2, 1);
	body.setTextureOffset(18, 0);
    head.addBox(-1, -5, -7, 4.4, 2, 4);
	body.setTextureOffset(18, 0);
    head.addBox(-1, -2.4, -7, 4.4, 2, 4);
 
    body.clear();
    body.setTextureOffset(18, 0);
    body.addBox(-4, 3, 3, 10, 10, 20);
	body.setTextureOffset(18, 0);
    body.addBox(-4, 3, -1, 3, 5, 4);
	body.setTextureOffset(18, 0);
    body.addBox(3, 3, -1, 3, 5, 4);
	body.setTextureOffset(18, 0);
    body.addBox(-1, 8, -1, 4, 5, 4);
 
    rarm.clear();

 
    larm.clear();
 
    rleg.clear();
    rleg.setTextureOffset(0, 22);
    rleg.addBox(-3, 9, -2, 4, 3, 4);
	rleg.setTextureOffset(0, 22);
    rleg.addBox(-3, 9, 19, 4, 3, 4);
	rleg.setTextureOffset(18, 0);
    rleg.addBox(-2, 4, -1, 3, 5, 3);
	rleg.setTextureOffset(18, 0);
    rleg.addBox(-2, 4, 20, 3, 5, 3);
	rleg.setTextureOffset(18, 0);
    rleg.addBox(-2, -4, -1, 3, 8, 4);
	rleg.setTextureOffset(18, 0);
    rleg.addBox(-2, 1, 19, 3, 3, 4);
 
    lleg.clear();
    lleg.setTextureOffset(0, 22);
    lleg.addBox(1, 9, -2, 4, 3, 4);
	lleg.setTextureOffset(0, 22);
	lleg.addBox(1, 9, 19, 4, 3, 4);
	lleg.setTextureOffset(18, 0);
    lleg.addBox(1, 4, -1, 3, 5, 3);
	lleg.setTextureOffset(18, 0);
    lleg.addBox(1, 4, 20, 3, 5, 3);
	lleg.setTextureOffset(18, 0);
    lleg.addBox(1, -4, -1, 3, 8, 4);
	lleg.setTextureOffset(18, 0);
    lleg.addBox(1, 1, 19, 3, 3, 4);
}
 
var HorseRenderType = Renderer.createHumanoidRenderer();
addHorseRenderType(HorseRenderType);

function addSnowGolemToRenderer(renderer)
{
basic = renderer.getModel();
head = basic.getPart("head").clear().setTextureOffset(0,0);
head.addBox(-4,-9,-4,8,8,8,0);

body = basic.getPart("body").clear().setTextureOffset(25,12);
body.addBox(-4.5,-1,-4.5,9,9,9,0); 
body.addBox(-5,8,-5,10,10,10,0.8);

rightArm = basic.getPart("rightArm").clear().setTextureOffset(0,16);
rightArm.addBox(-2,-2,0,2,12,2,0);

leftArm = basic.getPart("leftArm").clear().setTextureOffset(0,16);
leftArm.addBox(0,-2,0,2,12,2,0);

basic.getPart("rightLeg").clear();
basic.getPart("leftLeg").clear()
}

function procCmd(c) {
 var cmd = c.split(" ");
 if(cmd[0]=="heads") { //487-511
//  Player.addItemInventory(486,16);
  Player.addItemInventory(487,16);
  Player.addItemInventory(488,16);
  Player.addItemInventory(489,16);
  Player.addItemInventory(490,16);
  Player.addItemInventory(491,16);
  Player.addItemInventory(492,16);
  Player.addItemInventory(493,16);
  Player.addItemInventory(494,16);
  Player.addItemInventory(495,16);
  Player.addItemInventory(496,16);
  Player.addItemInventory(497,16);
  Player.addItemInventory(498,16);
  Player.addItemInventory(499,16);
  Player.addItemInventory(500,16);
  Player.addItemInventory(501,16);
  Player.addItemInventory(502,16);
  Player.addItemInventory(503,16);
  Player.addItemInventory(504,16);
  Player.addItemInventory(505,16);
  Player.addItemInventory(506,16);
  Player.addItemInventory(507,16);
  Player.addItemInventory(508,16);
  Player.addItemInventory(509,16);
  Player.addItemInventory(510,16);
 // Player.addItemInventory(511,16);
 }
}

function newLevel()
{
spawned=0;
clientMessage("<CM>Welcome to Craftable mobs v0.9.0 use /heads to get all the spawners");
}
/*
function deathHook(entity)
{
if(entity==snowGolem)
{
spawned=0;
}
} */