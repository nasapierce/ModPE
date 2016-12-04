/*
Craftable Mobs Mod By 
Darkserver, Thecactigod, And Darkcube_lord704 
Credit to MyNameIsAnti for His Amazing Render Types, 
and Sin0psysS (Lu_Lu54) for The Wither Boss, Wither Skeleton, and Snow Golem Render Types.
Thanks to MyNameIsDan for the Rabbit render type

new in v1.0.0
	Code Formatting
	Added Raw and Cooked:
		Mutton (dropped by sheep)
*/
ModPE.overrideTexture("images/items-opaque.png","http://dl.dropbox.com/s/xgozd7041iwveg5/cm-1.0.0.b1.png?dl=0");
ModPE.overrideTexture("images/mob/magmacube.png","http://dl.dropbox.com/s/g6s5a1iwh68tgj2/magma_cube.png?dl=0");
ModPE.overrideTexture("images/ingame.images","http://dl.dropbox.com/s/313ua06oepjydcr/ingame.images?dl=0");

var r = Math.floor((Math.random()*15)+0);
var spider = 35;
var zombie = 32;
var magma;
var mobType;
var mobHealth;
var mobSkin;
var ids = [342,343,358,349,350,367,368,371,372,373,374,375,378,379,380,382,384,385,386,387,389,390,395,396,423,424,460]
var decor =[342,343,358,368,371,372,373,374,378,379,380,382,384,385,386,389,390,395,396,461]
var food =[349,350,367,375,423,424]

for(var i=0; i<28; i++){
Player.addItemCreativeInv(ids[i],1,0);
}

ModPE.setItem(342,"record_blocks",0,"skull_jockey");
ModPE.setItem(343,"record_mall",0,"skull_mooshroom");
ModPE.setItem(358,"quiver",0,"skull_wolf");
ModPE.setFoodItem(349,"fish_raw",0,2,"raw_fish");
ModPE.setFoodItem(350,"fish_cooked",0,5,"cooked_fish");
ModPE.setFoodItem(367,"rotten_flesh",0,-2,"rotten_flesh");
ModPE.setItem(368,"ender_pearl",0,"ender_pearl",16);
ModPE.setItem(371,"gold_nugget",0,"gold_nugget");
ModPE.setItem(372,"skull_zombie",0,"skull_zombie");
ModPE.setItem(373,"skull_skeleton",0,"skull_skeleton");
ModPE.setItem(374,"skull_creeper",0,"skull_creeper");
ModPE.setFoodItem(375,"spider_eye",0,-1,"spider_eye");
ModPE.setItem(378,"magma_cream",0,"magma_cream");
ModPE.setItem(379,"record_chirp",0,"skull_cow");
ModPE.setItem(380,"record_cat",0,"skull_chicken");
ModPE.setItem(382,"record_strad",0,"skull_sheep");
ModPE.setItem(384,"record_ward",0,"skull_spider");
ModPE.setItem(385,"record_mellohi",0,"skull_pig");
ModPE.setItem(386,"record_far", 0,"skull_enderman");
ModPE.setItem(387,"record_13", 0,"skull_ocelot");
ModPE.setItem(389,"record_11", 0,"skull_villager");
ModPE.setItem(390,"record_stal", 0,"skull_pigman");
ModPE.setItem(395,"record_wait", 0,"skull_slime");
ModPE.setItem(396,"potion_bottle_drinkable", 0,"skull_magmacube");
ModPE.setFoodItem(423,"fireworks",0,2,"raw_mutton",64);
ModPE.setFoodItem(424,"experience_bottle",0,6,"cooked_mutton",64);
ModPE.setItem(460,"potion_bottle_empty",0,"skull_silverfish");
ModPE.setItem(461,"ruby",0,"mob_soul",1);

Item.addShapedRecipe(266,1,0,["aaa","aaa","aaa"],["a",371,0]); //nuggets > gold
Item.addShapedRecipe(341,3,0,["a a"," b ","a a"],["a",3,0,"b",295,0]); //slimeball
Item.addShapedRecipe(342,1,0,["   "," b "," a "],["a",384,0,"b",373,0]); //spider jockey
Item.addShapedRecipe(343,1,0,["aaa","aba","aaa"],["a",40,0,"b",379,0]); //mooshroom
Item.addShapedRecipe(358,2,0,["a a"," b ","a a"],["a",35,0,"b",382,0]); //wolf
Item.addShapedRecipe(371,9,0,["a  ","   ","   "],["a",266,0]); //gold > nuggets
Item.addShapedRecipe(372,4,0,["aaa","aba","aaa"],["a",367,0,"b",288,0]); //zombie
Item.addShapedRecipe(373,2,0,["aba","bcb","aba"],["a",352,0,"b",262,0,"c",261,0]); //skeleton
Item.addShapedRecipe(374,4,0,["aaa","aba","aaa"],["a",289,0,"b",367,0]); //creeper
Item.addShapedRecipe(379,1,0,["aba","bbb","aba"],["a",334,0,"b",363,0]); //cow
Item.addShapedRecipe(380,1,0,["aaa","bbb","aaa"],["a",288,0,"b",365,0]); //chicken
Item.addShapedRecipe(380,1,0,["aaa","aaa","aaa"],["a",344,0]); //chicken alt
Item.addShapedRecipe(382,2,0,["bbb","bab","bbb"],["a",423,0,"b",35,0]); //sheep
Item.addShapedRecipe(384,4,0,["aba","b b","aba"],["a",287,0,"b",375,0]);//spider
Item.addShapedRecipe(385,4,0,["aaa","a a","aaa"],["a",319,0]); //pig
Item.addShapedRecipe(386,7,0,["aaa","a a","aaa"],["a",368,0]); //Enderman
//Item.addShapedRecipe(387,1,0,["   ","ab ","   "],["a",35,0,"b",319,0]); //ocelot
Item.addShapedRecipe(389,2,0,["   ","aaa","bbb"],["b",3,0,"a",296,0]); //villager
Item.addShapedRecipe(390,4,0,["cbc","bab","cbc"],["a",283,0,"b",367,0,"c",371,0]); //pigmen
Item.addShapedRecipe(395,4,0,["aaa","a a","aaa"],["a",341,0]); //slime
Item.addShapedRecipe(396,4,0,["aaa","a a","aaa"],["a",378,0]); //magma cube
//Item.addShapedRecipe(460,2,0,["   ","ab ","   "],["a",265,0,"b",349,0]); //silverfish
//Item.addShapedRecipe(461,1,0,["   ","ab ","   "],["a",264,0,"b",368,0]); //Mob Soul
//Item.addShapedRecipe(52,1,0,["aaa","a a","aaa"],["a",101,0]); //Mob spawner
Item.addFurnaceRecipe(423,424,0);

ModPE.langEdit("item.mob_soul.name","Mob Soul");
ModPE.langEdit("item.raw_fish.name","Raw Fish");
ModPE.langEdit("item.cooked_fish.name","Cooked Fish");
ModPE.langEdit("item.rotten_flesh.name","Rotten Flesh");
ModPE.langEdit("item.ender_pearl.name","Ender Pearl");
ModPE.langEdit("item.gold_nugget.name","Gold Nugget");
ModPE.langEdit("item.spider_eye.name","Spider Eye");
ModPE.langEdit("item.magma_cream.name","Magma Cream");
ModPE.langEdit("item.skull_jockey.name","Jockey");
ModPE.langEdit("item.skull_magmacube.name","Magma Cube");
ModPE.langEdit("item.skull_mooshroom.name","Mooshroom");
ModPE.langEdit("item.skull_wolf.name","Wolf");
ModPE.langEdit("item.skull_zombie.name","Zombie");
ModPE.langEdit("item.skull_skeleton.name","Skeleton");
ModPE.langEdit("item.skull_creeper.name","Creeper");
ModPE.langEdit("item.skull_cow.name","Cow");
ModPE.langEdit("item.skull_chicken.name","Chicken");
ModPE.langEdit("item.skull_sheep.name","Sheep");
ModPE.langEdit("item.skull_spider.name","Spider");
ModPE.langEdit("item.skull_pig.name","Pig");
ModPE.langEdit("item.skull_enderman.name","Enderman");
ModPE.langEdit("item.skull_ocelot.name","Ocelot");
ModPE.langEdit("item.skull_villager.name","Villager");
ModPE.langEdit("item.skull_pigman.name","Pigman");
ModPE.langEdit("item.skull_slime.name","Slime");
ModPE.langEdit("item.raw_mutton.name","Raw Mutton");
ModPE.langEdit("item.cooked_mutton.name","Cooked Mutton");
ModPE.langEdit("item.skull_silverfish.name","Silver Fish");

function useItem(x, y, z, item, block, side) {
var dat = Player.getCarriedItemData();
if(block!==26||block!==52||block!==54||block!==58||block!==61||block!==62||block!==64||block!==96||block!==107||block!==183||block!==184||block!==185||block!==186||block!==187||block!==245){
	if(item==380) { //chicken
		Level.spawnMob(x, y+1, z, 10, "mob/chicken.png");
		removeItem(item,1,0);
	}
	if(item==379) { //cow
		Level.spawnMob(x, y+1, z, 11, "mob/cow.png");
		removeItem(item,1,0);
	}
	if(item==382) { //sheep
		Level.spawnMob(x, y+1, z, 13, "mob/sheep_"+r+".png");
		removeItem(item,1,0);
	}
	if(item==384) { //spider
		Level.spawnMob(x, y+1, z, 35, "mob/spider.png");
		removeItem(item,1,0);
	}
	if(item==385) { //pig
		Level.spawnMob(x, y+1, z, 12, "mob/pig.png");
		removeItem(item,1,0);
	}
	if(item==386) { //Enderman
		Level.spawnMob(x, y+1, z, 38,"mob/enderman.png");
		removeItem(item,1,0);
	}
	if(item==387) { //ocelot
		var ocelot = Level.spawnMob(x, y+1, z, 10,"mob/ocelot.png");
		Entity.setRenderType(ocelot,OcelotRenderType.renderType);
		removeItem(item,1,0);
	}
	if(item==389) { //villager
		Level.spawnMob(x, y+1, z, 15, "mob/villager/villager.png");
		removeItem(item,1,0);
	}
	if(item==372) { //zombie
		Level.spawnMob(x, y+1, z, 32, "mob/zombie.png");
		removeItem(item,1,0);
	}
	if(item==373) { //skeleton
		Level.spawnMob(x, y+1, z, 34, "mob/skeleton.png");
		removeItem(item,1,0);
	}
	if(item==374) { //creeper
		Level.spawnMob(x, y+1, z, 33, "mob/creeper.png");
		removeItem(item,1,0);
	}
	if(item==358) { //wolf
		Level.spawnMob(x,y+1,z, 14,"mob/wolf.png");   
		removeItem(item,1,0);
	}
	if(item==390) { //pigman
		Level.spawnMob(x, y+1, z, 36, "mob/pigzombie.png");
		removeItem(item,1,0);
	}
	if(item==395) { //slime
		Level.spawnMob(x, y+1, z, 37, "mob/slime.png");
		removeItem(item,1,0);
	}
	if(item==396) { //magma cube
		magma = Level.spawnMob(x, y+1, z, 37, "mob/magmacube.png");
		removeItem(item,1,0);
	}
	if(item==460) { //silverfish
		magma = Level.spawnMob(x, y+1, z, 39, "mob/silverfish.png");
		removeItem(item,1,0);
	}
	if(item==343) { //mooshroom
		Level.spawnMob(x, y+1, z, 16, "mob/mooshroom.png");
		removeItem(item,1,0);
	}
	if(item==342) { //spider jockey
		skelly=Level.spawnMob(x, y+1, z, 34);
		spider=Level.spawnMob(x, y+1, z,35);
		rideAnimal(skelly, spider); 
		removeItem(item,1,0);
	}
	}
}

function deathHook(murderer, victim) {
	var drop = Math.floor((Math.random()*2)+1);
	var no = Math.floor(Math.random()*3);
	var rareDrop = Math.floor((Math.random()*250));
	var enderpearl = Math.floor((Math.random()*1));
	if(no!==3){
		if(Entity.getMobSkin(victim)=="mob/zombie.png") {
			if(rareDrop==250){
				Level.dropItem(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 0, 265, 1, 0);
			}
			Level.dropItem(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 0, 367, drop, 0);
		}
		if(Entity.getMobSkin(victim)=="mob/spider.png") {
			if(murderer==Player.getEntity()){
				Level.dropItem(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 0, 375, enderpearl, 0);
			}
		}
		if(Entity.getMobSkin(victim)=="mob/pigzombie.png") {
			Level.dropItem(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 0, 367, enderpearl, 0);
			Level.dropItem(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 0, 371, enderpearl, 0);
		}
		if(Entity.getMobSkin(victim)=="mob/slime.png") {
			Level.dropItem(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 0, 341, drop, 0);
		}
		for(var i=0; i<15; i++){
			if(Entity.getMobSkin(victim)=="mob/sheep_"+i+".png") {
				Level.dropItem(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 0, 423, drop, 0);
			}
		}
		if(Entity.getMobSkin(victim)=="mob/magmacube.png") {
			Level.dropItem(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 0, 378, enderpearl, 0);
		}
		if(Entity.getMobSkin(victim)=="mob/enderman.png") {
			Level.dropItem(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 0, 368, enderpearl, 0);
		}
	}
}
/*
function attackHook(attacker, victim) {
	var item = Player.getCarriedItem();
	var x = Entity.getX(victim);
	var y = Entity.getY(victim);
	var z = Entity.getZ(victim);
	if(item==461) {
		preventDefault();
		if(Entity.getMobSkin(victim)=="mob/chicken.png") {
			Entity.remove(victim);
			Level.dropItem(x, y, z,0,460,1,0);
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
	}
} 
*/
/*Ocelot
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
//Ocelot*/

function removeItem(item, amount, data){
if(Level.getGameMode()!==1){
	var count = Player.getCarriedItemCount();
	var data = Player.getCarriedItemData();
	var newcount = count - amount;
	Entity.setCarriedItem(Player.getEntity(), parseInt(item), newcount, data);
}
}