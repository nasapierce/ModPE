//### Craftable Mobs Mod By Darkserver ###//
//### Credit to: ###//
//### Thecactigod - Helping with earlier verions, and his Ocelot ###//
//### Darkcube_lord704 - Helping with earlier versions, ###//
//### MyNameIsAnti - For letting me use his render types in earlier versions. ###////### Sinopysis (Idk how to spell Dx ) - Wither in earlier versions ###//

// TODO //
//make soul function
//make minimizer work
//finish helmets

//### Modpack info - Ids ###//
var ghastTearId = 599;
var enderPearlId = 600
var spiderEyeId = 601
var enderEyeId = 602
var rawMuttonId = 603
var cookedMuttonId = 604
var goldNuggetId = 605
var guideId = 606
var batId = 607
var caveSpiderId = 608
var chickenId = 609
var babyChickenId = 610
var cowId = 611
var babyCowId = 612
var creeperId = 613
var endermanId = 614
var ghastId = 615
var jockeyCreeperId = 616
var jockeySkeletonId = 617
var jockeyPigZombieId = 618
var jockeyZombieId = 619
var caveJockeyCreeperId = 620
var caveJockeySkeletonId = 621
var caveJockeyPigZombieId = 622
var caveJockeyZombieId = 623
var lavaslimeId = 624
var minimizerId = 625
var mooshroomId = 626
var babyMooshroomId = 627
var pigId = 628
var babyPigId = 629
var pigZombieId = 630
var babyPigZombieId = 631
var sheepId = 632
var babySheepId = 633
var silverfishId = 634
var skeletonId = 635
var babySkeletonId = 636
var slimeId = 637
var soulId = 638
var spiderId = 639
var squidId = 640
var babySquidId = 641
var villagerId = 642
var butcherId = 643
var farmerId = 644
var librarianId = 645
var priestId = 646
var smithId = 647
var babyVillagerId = 648
var babyButcherId = 649
var babyFarmerId = 650
var babyLibrarianId = 651
var babyPriestId = 652
var babySmithId = 653
var wolfId = 654
var babyWolfId = 655
var zombieId = 656
var babyZombieId = 657

//### vars ###//
CraftableMobs = {};
CraftableMobs.META = null;
CraftableMobs.META_MAPPED = null;
CraftableMobs.version = "1.0.0 Indev";
var interactiveBlocks = [26,52,54,58,61,62,64,96,107];
var animalAgeMobs = [10,11,12,13,14,15,16,17,32,34,36];
var spawnItems = [];
var eatAPI = {};
var nowAmount, nowId, nowData, lastAmount, lastId, lastData, lookBlock, nowSlotId, lastSlotId;
var tick = 0;
var guideBtnActive = false;
var foodItems = [260,282,297,319,320,349,350,357,360,363,364,365,366,367,391,392,393,400,rawMuttonId,cookedMuttonId,spiderEyeId];
var invBlocks = [54,58,60,61,62,250,251,252,253]; //250-253 is for better storage.

//### End of Modpack Info ###//

CraftableMobs.itemSpawner = function(id,texture,textureData,name,stackLimit,entityTypes,animalAge,skin){
	ModPE.setItem(id,texture,textureData,name,stackLimit);
	Item.setCategory(id,3,0);
	spawnItems.push([id, [entityTypes[0],entityTypes[1]], animalAge, skin]);
};

ModPE.setItem(guideId,"guide",0,"Craftable Mobs Guide",1);
ModPE.setItem(enderPearlId,"ender_pearl",0,"Ender Pearl",16);
ModPE.setItem(goldNuggetId,"gold_nugget",0,"Gold Nugget",64);
ModPE.setFoodItem(spiderEyeId,"spider_eye",0,1,"Spider Eye",64); //Gives poison with eatHook
ModPE.setItem(enderEyeId,"ender_eye",0,"Ender Eye",16);
ModPE.setFoodItem(rawMuttonId,"mutton",0,2,"Raw Mutton",64);
ModPE.setFoodItem(cookedMuttonId,"mutton",1,6,"Cooked Mutton",64);
ModPE.setItem(soulId,"soul",0,"Soul",64);
ModPE.setItem(minimizerId,"minimizer",0,"Minimizer",1);
ModPE.setItem(ghastTearId,"ghast_tear",0,"Ghast Tear",64);

CraftableMobs.itemSpawner(batId,"bat",0,"Bat",64,[EntityType.BAT],0);
CraftableMobs.itemSpawner(caveSpiderId,"cavespider",0,"Cave Spider",64,[EntityType.CAVE_SPIDER],0);
CraftableMobs.itemSpawner(chickenId,"chicken",0,"Chicken",64,[EntityType.CHICKEN],0);
CraftableMobs.itemSpawner(babyChickenId,"chicken",0,"Baby Chicken",64,[EntityType.CHICKEN],-24000);
CraftableMobs.itemSpawner(cowId,"cow",0,"Cow",64, [EntityType.COW],0);
CraftableMobs.itemSpawner(babyCowId,"cow",0,"Baby Cow",64, [EntityType.COW],-24000);
CraftableMobs.itemSpawner(creeperId,"creeper",0,"Creeper",64, [EntityType.CREEPER],0);
CraftableMobs.itemSpawner(endermanId,"enderman",0,"Enderman",64, [EntityType.ENDERMAN],0);
CraftableMobs.itemSpawner(ghastId,"ghast",0,"Ghast",64, [EntityType.GHAST],0);
CraftableMobs.itemSpawner(jockeyCreeperId,"jockey",3,"Creeper Jockey",64,[EntityType.CREEPER,EntityType.SPIDER],0);
CraftableMobs.itemSpawner(jockeyPigZombieId,"jockey",2,"Pigman Jockey",64,[EntityType.PIG_ZOMBIE,EntityType.SPIDER],0);
CraftableMobs.itemSpawner(jockeySkeletonId,"jockey",0,"Skeleton Jockey",64,[EntityType.SKELETON,EntityType.SPIDER],0);
CraftableMobs.itemSpawner(jockeyZombieId,"jockey",1,"Zombie Jockey",64,[EntityType.ZOMBIE,EntityType.SPIDER],0);
CraftableMobs.itemSpawner(caveJockeySkeletonId,"jockey",5,"Skeleton Jockey",64,[EntityType.SKELETON,EntityType.CAVE_SPIDER],0);
CraftableMobs.itemSpawner(caveJockeyZombieId,"jockey",6,"Zombie Jockey",64,[EntityType.ZOMBIE,EntityType.CAVE_SPIDER],0);
CraftableMobs.itemSpawner(caveJockeyPigZombieId,"jockey",7,"Pigman Jockey",64,[EntityType.PIG_ZOMBIE,EntityType.CAVE_SPIDER],0);
CraftableMobs.itemSpawner(caveJockeyCreeperId,"jockey",8,"Creeper Jockey",64,[EntityType.CREEPER,EntityType.CAVE_SPIDER],0);
CraftableMobs.itemSpawner(lavaslimeId,"lavaslime",0,"Magmacube",64, [EntityType.LAVA_SLIME],0);
CraftableMobs.itemSpawner(mooshroomId,"mushroomcow",0,"Mooshroom",64, [EntityType.MUSHROOM_COW],0);
CraftableMobs.itemSpawner(babyMooshroomId,"mushroomcow",0,"Baby Mooshroom",64, [EntityType.MUSHROOM_COW],-24000);
CraftableMobs.itemSpawner(pigId,"pig",0,"Pig",64, [EntityType.PIG],0);
CraftableMobs.itemSpawner(babyPigId,"pig",0,"Baby Pig",64, [EntityType.PIG],-24000);
CraftableMobs.itemSpawner(pigZombieId,"pigzombie",0,"Pigman",64, [EntityType.PIG_ZOMBIE],0);
CraftableMobs.itemSpawner(babyPigZombieId,"pigzombie",0,"Baby Pigman",64, [EntityType.PIG_ZOMBIE],-24000);
CraftableMobs.itemSpawner(sheepId,"sheep",0,"Sheep",64, [EntityType.SHEEP],0);
CraftableMobs.itemSpawner(babySheepId,"sheep",0,"Baby Sheep",64, [EntityType.SHEEP],-24000);
CraftableMobs.itemSpawner(silverfishId,"silverfish",0,"Silverfish",64, [EntityType.SILVERFISH],0);
CraftableMobs.itemSpawner(skeletonId,"skeleton",0,"Skeleton",64, [EntityType.SKELETON],0);
CraftableMobs.itemSpawner(babySkeletonId,"skeleton",0,"Baby Skeleton",64, [EntityType.SKELETON],-24000);
CraftableMobs.itemSpawner(slimeId,"slime",0,"Slime",64, [EntityType.SLIME],0);
CraftableMobs.itemSpawner(spiderId,"spider",0,"Spider",64, [EntityType.SPIDER],0);
CraftableMobs.itemSpawner(squidId,"squid",0,"Squid",64, [EntityType.SQUID],0);
CraftableMobs.itemSpawner(babySquidId,"squid",0,"Baby Squid",64, [EntityType.SQUID],-24000);
CraftableMobs.itemSpawner(villagerId,"villager",5,"Villager",64, [EntityType.VILLAGER],0,"mob/villager/villager.png");
CraftableMobs.itemSpawner(farmerId,"villager",0,"Farmer",64, [EntityType.VILLAGER],0,"mob/villager/farmer.png");
CraftableMobs.itemSpawner(librarianId,"villager",1,"Librarian",64, [EntityType.VILLAGER],0,"mob/villager/librarian.png");
CraftableMobs.itemSpawner(priestId,"villager",2,"Priest",64, [EntityType.VILLAGER],0,"mob/villager/priest.png");
CraftableMobs.itemSpawner(butcherId,"villager",4,"Butcher",64, [EntityType.VILLAGER],0,"mob/villager/butcher.png");
CraftableMobs.itemSpawner(smithId,"villager",3,"Smith",64, [EntityType.VILLAGER],0,"mob/villager/smith.png");
CraftableMobs.itemSpawner(babyVillagerId,"villager",5,"Baby Villager",64, [EntityType.VILLAGER],-24000,"mob/villager/villager.png");
CraftableMobs.itemSpawner(babyFarmerId,"villager",0,"Baby Farmer",64, [EntityType.VILLAGER],-24000,"mob/villager/farmer.png");
CraftableMobs.itemSpawner(babyLibrarianId,"villager",1,"Baby Librarian",64, [EntityType.VILLAGER],-24000,"mob/villager/librarian.png");
CraftableMobs.itemSpawner(babyPriestId,"villager",2,"Baby Priest",64, [EntityType.VILLAGER],-24000,"mob/villager/priest.png");
CraftableMobs.itemSpawner(babyButcherId,"villager",4,"Baby Butcher",64, [EntityType.VILLAGER],-24000,"mob/villager/butcher.png");
CraftableMobs.itemSpawner(babySmithId,"villager",3,"Baby Smith",64, [EntityType.VILLAGER],-24000,"mob/villager/smith.png");
CraftableMobs.itemSpawner(wolfId,"wolf",0,"Wolf",64, [EntityType.WOLF],0);
CraftableMobs.itemSpawner(babyWolfId,"wolf",0,"Baby Wolf",64, [EntityType.WOLF],-24000);
CraftableMobs.itemSpawner(zombieId,"zombie",0,"Zombie",64, [EntityType.ZOMBIE],0);
CraftableMobs.itemSpawner(babyZombieId,"zombie",0,"Baby Zombie",64, [EntityType.ZOMBIE],-24000);

//### Recipes ###//
Item.addCraftRecipe(enderEyeId,1,0,[enderPearlId,1,0,331,1,0]); //ender eye
Item.addShapedRecipe(266,1,0,["aaa","aaa","aaa"],["a",goldNuggetId,0]); //nuggets > gold
Item.addShapedRecipe(goldNuggetId,9,0,["a  ","   ","   "],["a",266,0]); //gold > nuggets
Item.addShapedRecipe(52,1,0,["aaa","a a","aaa"],["a",101,0]); //Mob Spawner
Item.addFurnaceRecipe(rawMuttonId,cookedMuttonId,0);//cooked mutton
Item.addCraftRecipe(batId,2,0,[1,1,0,319,1,0]); //Bat
Item.addShapedRecipe(caveSpiderId,1,0,["ses","efe","ses"],["s",287,0,"f",367,0,"e",spiderEyeId,0]); //Cavespider
Item.addShapedRecipe(chickenId,1,0,["fff","ccc","fff"],["c",365,0,"f",288,0]); //Chicken
Item.addShapedRecipe(chickenId,1,0,["eee","eee","eee"],["e",344,0]); //Chicken
Item.addCraftRecipe(chickenId,1,0,[babyChickenId,2,0]); //Chicken
Item.addCraftRecipe(babyChickenId,2,0,[3,1,0,chickenId,1,0]); //Baby Chicken
Item.addShapedRecipe(cowId,1,0,["lbl","bbb","lbl"],["l",334,0,"b",363,0]); //Cow
Item.addCraftRecipe(cowId,1,0,[babyCowId,2,0]); //Cow
Item.addCraftRecipe(babyCowId,2,0,[3,1,0,cowId,1,0]); //Baby Cow
Item.addShapedRecipe(creeperId,4,0,["ggg","gfg","ggg"],["g",289,0,"f",367,0]); //Creeper
Item.addShapedRecipe(endermanId,1,0,["eee","e e","eee"],["e",enderPearlId,0]); //Enderman
//Item.addShapedRecipe(ghastId,3,0,["ggg","hhh","ggg"],["g",367,0,"h",370,0]); //Ghast
Item.addShapedRecipe(jockeySkeletonId,1,0,["   "," j "," s "],["j",skeletonId,0,"s",spiderId,0]); //Jockey Skeleton
Item.addShapedRecipe(jockeyZombieId,1,0,["   "," j "," s "],["j",zombieId,0,"s",spiderId,0]); //Jockey Zombie
Item.addShapedRecipe(jockeyPigZombieId,1,0,["   "," j "," s "],["j",pigZombieId,0,"s",spiderId,0]); //Jockey Pigman
Item.addShapedRecipe(jockeyCreeperId,1,0,["   "," j "," s "],["j",creeperId,0,"s",spiderId,0]); //Jockey Creeper
Item.addShapedRecipe(caveJockeySkeletonId,1,0,["   "," j "," s "],["j",skeletonId,0,"s",caveSpiderId,0]); //Cave Jockey Skeleton
Item.addShapedRecipe(caveJockeyZombieId,1,0,["   "," j "," s "],["j",zombieId,0,"s",caveSpiderId,0]); //Cave Jockey Zombie
Item.addShapedRecipe(caveJockeyPigZombieId,1,0,["   "," j "," s "],["j",pigZombieId,0,"s",caveSpiderId,0]); //Cave Jockey Pigman
Item.addShapedRecipe(caveJockeyCreeperId,1,0,["   "," j "," s "],["j",creeperId,0,"s",caveSpiderId,0]); //Cave Jockey Creeper
Item.addShapedRecipe(minimizerId,1,0,["p  ","ps ","psc"],["p",pigId,0,"s",sheepId,0,"c",cowId,0]); //Minimizer
Item.addShapedRecipe(mooshroomId,1,0,["mmm","mcm","mmm"],["m",40,0,"c",cowId,0]); //Mooshroom
Item.addCraftRecipe(mooshroomId,1,0,[babyMooshroomId,2,0]); //Mooshroom
Item.addCraftRecipe(babyMooshroomId,2,0,[3,1,0,mooshroomId,1,0]); //Baby Mooshroom
Item.addShapedRecipe(pigId,4,0,["ppp","p p","ppp"],["p",319,0]); //Pig
Item.addCraftRecipe(pigId,1,0,[babyPigId,2,0]); //Pig
Item.addCraftRecipe(babyPigId,2,0,[3,1,0,pigId,1,0]); //Baby Pig
Item.addShapedRecipe(pigZombieId,1,0,["nfn","fsf","nfn"],["n",goldNuggetId,0,"f",367,0,"s",283,0]); //Pig Zombie
Item.addCraftRecipe(pigZombieId,1,0,[babyPigZombieId,2,0]); //Pig Zombie
Item.addCraftRecipe(babyPigZombieId,2,0,[3,1,0,pigZombieId,1,0]); //Baby Pig Zombie
Item.addShapedRecipe(sheepId,2,0,["www","wmw","www"],["w",35,0,"m",rawMuttonId,0]); //Sheep
Item.addCraftRecipe(sheepId,1,0,[babySheepId,2,0]); //Sheep
Item.addShapedRecipe(babySheepId,2,0,["da ","   ","   "],["d",3,0,"a",sheepId,0]); //Baby Sheep
Item.addShapedRecipe(silverfishId,2,0,[" i "," f ","   "],["i",265,0,"f",349,0]); //Silverfish
Item.addShapedRecipe(skeletonId,2,0,["bab","aoa","bab"],["b",352,0,"a",262,0,"o",261,0]); //Skeleton
//Item.addCraftRecipe(Baby skeletonId,2,0,[3,1,0,skeletonId,1,0]); //Baby Skeleton
//Item.addCraftRecipe(soulId,1,0,[264,1,0,ender_eyeId,1,0]); //Soul
Item.addShapedRecipe(spiderId,4,0,["ses","e e","ses"],["s",287,0,"e",spiderEyeId,0]); //Spider
Item.addShapedRecipe(squidId,2,0,["iii","i i","iii"],["i",351,0]); //Squid
Item.addCraftRecipe(squidId,1,0,[babySquidId,2,0]); //Squid
Item.addCraftRecipe(babySquidId,2,0,[3,1,0,squidId,1,0]); //Baby Squid
Item.addCraftRecipe(villagerId,2,0,[388,1,0,324,1,0]); //Villager
Item.addCraftRecipe(villagerId,1,0,[babyVillagerId,2,0]); //Villager
Item.addShapedRecipe(farmerId,2,0,["   ","www","ddd"],["d",3,0,"w",296,0]); //Villager Farmer
Item.addCraftRecipe(farmerId,1,0,[babyFarmerId,2,0]); //Villager
Item.addShapedRecipe(librarianId,2,0,["bbb","bsb","bbb"],["b",340,0,"s",47,0]); //Villager Librarian
Item.addCraftRecipe(librarianId,1,0,[babyLibrarianId,2,0]); //Villager
Item.addShapedRecipe(priestId,2,0,[" s ","sss"," s "],["s",280,0]); //Villager Priest
Item.addCraftRecipe(priestId,1,0,[babyPriestId,2,0]); //Villager
Item.addShapedRecipe(smithId,2,0,[" i "," f "," c "],["i",265,0,"f",61,0,"c",263,0]); //Villager Smith
Item.addShapedRecipe(smithId,3,0,[" g "," f "," c "],["g",266,0,"f",61,0,"c",263,0]); //Villager Smith
Item.addCraftRecipe(smithId,1,0,[babySmithId,2,0]); //Villager
Item.addCraftRecipe(butcherId,2,0,[275,1,0,pigId,1,0]); //Villager Butcher
Item.addCraftRecipe(butcherId,2,0,[286,1,0,pigId,1,0]); //Villager Butcher
Item.addCraftRecipe(butcherId,3,0,[258,1,0,pigId,1,0]); //Villager Butcher
Item.addCraftRecipe(butcherId,4,0,[279,1,0,pigId,1,0]); //Villager Butcher
Item.addCraftRecipe(butcherId,1,0,[babyButcherId,2,0]); //Villager
Item.addCraftRecipe(babyVillagerId,2,0,[3,2,0,villagerId,1,0]); //Baby Villager
Item.addCraftRecipe(babyFarmerId,2,0,[3,1,0,farmerId,1,0]); //Baby Villager Farmer
Item.addCraftRecipe(babyLibrarianId,2,0,[3,1,0,librarianId,1,0]); //Baby Villager Librarian
Item.addCraftRecipe(babyPriestId,2,0,[3,1,0,priestId,1,0]); //Baby Villager Priest
Item.addCraftRecipe(babySmithId,2,0,[3,1,0,smithId,1,0]); //Baby Villager Smith
Item.addCraftRecipe(babyButcherId,2,0,[3,1,0,butcherId,1,0]); //Baby Villager Butcher
Item.addShapedRecipe(wolfId,2,0,["w w"," s ","w w"],["w",35,0,"s",sheepId,0]); //Wolf
Item.addCraftRecipe(wolfId,1,0,[babyWolfId,2,0]); //Wolf
Item.addCraftRecipe(babyWolfId,1,0,[wolfId,1,0,3,1,0]); //Baby Wolf
Item.addShapedRecipe(zombieId,4,0,["fff","fwf","fff"],["f",367,0,"w",288,0]); //Zombie
Item.addCraftRecipe(zombieId,1,0,[babyZombieId,2,0]); //Zombie
Item.addCraftRecipe(babyZombieId,2,0,[3,1,0,zombieId,1,0]); //Baby Zombie

function newLevel(){
	Server.sendChat("BlockLauncher, enable scripts");
	CraftableMobs.getcompatableScripts();
	for(var i in spawnItems){
		Player.addItemCreativeInv(spawnItems[i][0],1,0);
	}
}

function useItem(x,y,z,itemId,blockId,side,itemData,blockData){
	//### Spawning Mobs ###//
	if(interactiveBlocks.indexOf(blockId)==-1){
		for(var i in spawnItems){
			if(itemId==spawnItems[i][0]){
				switch(side){
					case 0:
						if(!spawnItems[i][1][1]){
							var mob = Level.spawnMob(x,y-1,z,spawnItems[i][1][0]);
						}
						if(spawnItems[i][1][1]){
							var mob = Level.spawnMob(x,y-1,z,spawnItems[i][1][0]);
							var mob2 = Level.spawnMob(x,y-1,z,spawnItems[i][1][1]);
							Entity.rideAnimal(mob,mob2);
						}
						if(spawnItems[i][2]==-24000){
							Entity.setAnimalAge(mob,spawnItems[i][2]);
						}
						if(spawnItems[i][3]){
							Entity.setMobSkin(mob,spawnItems[i][3]);
						}
						break;
					case 1:
						if(!spawnItems[i][1][1]){
							var mob = Level.spawnMob(x,y+1,z,spawnItems[i][1][0]);
						}
						if(spawnItems[i][1][1]){
							var mob = Level.spawnMob(x,y+1,z,spawnItems[i][1][0]); 
							var mob2 = Level.spawnMob(x,y+1,z,spawnItems[i][1][1]); 
							Entity.rideAnimal(mob,mob2);
						}
						if(spawnItems[i][2]==-24000){
							Entity.setAnimalAge(mob,spawnItems[i][2]);
						}
						if(spawnItems[i][3]){
							Entity.setMobSkin(mob,spawnItems[i][3]);
						}
						break;
					case 2:
						if(!spawnItems[i][1][1]){
							var mob = Level.spawnMob(x,y,z-1,spawnItems[i][1][0]);
						}
						if(spawnItems[i][1][1]){
							var mob = Level.spawnMob(x,y,z-1,spawnItems[i][1][0]); 
							var mob2 = Level.spawnMob(x,y,z-1,spawnItems[i][1][1]); 
							Entity.rideAnimal(mob,mob2);
						}
						if(spawnItems[i][2]==-24000){
							Entity.setAnimalAge(mob,spawnItems[i][2]);
						}
						if(spawnItems[i][3]){
							Entity.setMobSkin(mob,spawnItems[i][3]);
						}
						break;
					case 3:
						if(!spawnItems[i][1][1]){
							var mob = Level.spawnMob(x,y,z+1,spawnItems[i][1][0]);
						}
						if(spawnItems[i][1][1]){
							var mob = Level.spawnMob(x,y,z+1,spawnItems[i][1][0]); 
							var mob2 = Level.spawnMob(x,y,z+1,spawnItems[i][1][1]); 
							Entity.rideAnimal(mob,mob2);
						}
						if(spawnItems[i][2]==-24000){
							Entity.setAnimalAge(mob,spawnItems[i][2]);
						}
						if(spawnItems[i][3]){
							Entity.setMobSkin(mob,spawnItems[i][3]);
						}
						break;
					case 4:
						if(!spawnItems[i][1][1]){
							var mob = Level.spawnMob(x-1,y,z,spawnItems[i][1][0]);
						}
						if(spawnItems[i][1][1]){
							var mob = Level.spawnMob(x-1,y,z,spawnItems[i][1][0]); 
							var mob2 = Level.spawnMob(x-1,y,z,spawnItems[i][1][1]); 
							Entity.rideAnimal(mob,mob2);
						}
						if(spawnItems[i][2]==-24000){
							Entity.setAnimalAge(mob,spawnItems[i][2]);
						}
						if(spawnItems[i][3]){
							Entity.setMobSkin(mob,spawnItems[i][3]);
						}
						break;
					case 5:
						if(!spawnItems[i][1][1]){
							var mob = Level.spawnMob(x+1,y,z,spawnItems[i][1][0]);
						}
						if(spawnItems[i][1][1]){
							var mob = Level.spawnMob(x+1,y,z,spawnItems[i][1][0]); 
							var mob2 = Level.spawnMob(x+1,y,z,spawnItems[i][1][1]); 
							Entity.rideAnimal(mob,mob2);
						}
						if(spawnItems[i][2]==-24000){
							Entity.setAnimalAge(mob,spawnItems[i][2]);
						}
						if(spawnItems[i][3]){
							Entity.setMobSkin(mob,spawnItems[i][3]);
						}
						break;
				}
				Player.removeFromCarriedItem(1);
			}
		}
	}
	//### Spawners ###//
	if(blockId==52){
		for(var i in spawnItems){
			if(itemId==spawnItems[i][0]){
				Level.setSpawnerEntityType(x,y,z,spawnItems[i][1][0]);
				Player.removeFromCarriedItem(1);
			}
		}
	}
}

function modTick(){
	ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
		if(CraftableMobs.META == null)
    	    eval("CraftableMobs.META = "+new java.lang.String(ModPE.getBytesFromTexturePack("images/items.meta"))+";");
    	if(CraftableMobs.META_MAPPED == null)
        	CraftableMobs.META_MAPPED = CraftableMobs.META.map(function(e) {
            	return e.name;
        	});
		if(Player.getCarriedItem()==guideId&&!guideBtnActive){
			guideBtnActive=true;
			CraftableMobs.init();
		}
		if(Player.getCarriedItem()!==guideId&&guideBtnActive){
			guideBtnActive=false;
			GUI.dismiss();
		}
	}}));
	eatAPI.modTick();
}

function attackHook(a, v){
	ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
		if(v==Player.getEntity()){
			GuideBg.dismiss();
			GuideExit.dismiss();
		}
	}}));
	if(Player.getCarriedItem()==minimizerId){
		preventDefault();
		if(animalAgeMobs.indexOf(Entity.getEntityTypeId(v))>=0){
			if(Entity.getAnimalAge(v)>=0){
				Entity.setAnimalAge(v,-24000);
			}
			if(Entity.getAnimalAge(v)<0){
				Entity.setAnimalAge(v,0);
			}
			
		}
	}
	for(var i in spawnItems){
		if(Player.getCarriedItem()==spawnItems[i][0]){
			preventDefault();
			if(!spawnItems[i][1][1]){
				var mob = Level.spawnMob(Entity.getX(v),Entity.getY(v),Entity.getZ(v),spawnItems[i][1][0]); 
				Entity.rideAnimal(mob,v);
			}
			if(spawnItems[i][1][1]){
				var mob = Level.spawnMob(Entity.getX(v),Entity.getY(v),Entity.getZ(v),spawnItems[i][1][0]); 
				var mob2 = Level.spawnMob(Entity.getX(v),Entity.getY(v),Entity.getZ(v),spawnItems[i][1][1]); 
				Entity.rideAnimal(mob,v); 
				Entity.rideAnimal(mob2,mob);
			}
			if(spawnItems[i][2]==-24000){
				Entity.setAnimalAge(mob,spawnItems[i][2]);
			}
			if(spawnItems[i][3]){
				Entity.setMobSkin(mob,spawnItems[i][3]);
			}
			Player.removeFromCarriedItem(1);
		}
	}
}

function deathHook(m, v){
	ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
		if(v==Player.getEntity()){
			GuideBg.dismiss();
			GuideExit.dismiss();
		}
	}}));
	for(var i in spawnItems){
		if(!spawnItems[1][1]){
			if(Entity.getEntityTypeId(v)==spawnItems[1][0]){
				var drop = Math.floor(Math.random()*100)+1;
				if(drop==1){
					Level.dropItem(Entity.getX(v),Entity.getY(v),Entity.getZ(v),0,spawnItems[i][0],1,0);
				}
			}
		}
	}
	if(Entity.getEntityTypeId(v)==EntityType.PIG && Player.getCarriedItem()==340){
		Player.removeCarriedItem(1);
		Level.dropItem(Entity.getX(v),Entity.getY(v),Entity.getZ(v),0,guideId,1,0);
	}
	if(Entity.getEntityTypeId(v)==EntityType.ENDERMAN){
		var drop = Math.floor(Math.random()*2);
		if(drop==1){
			Level.dropItem(Entity.getX(v),Entity.getY(v),Entity.getZ(v),0,enderPearlId,1,0);
		}
	}
	if((Entity.getEntityTypeId(v)==EntityType.SPIDER||Entity.getEntityTypeId(v)==EntityType.CAVE_SPIDER)&&(Player.getEntity()==m||Entity.getTypeId(m)==EntityType.WOLF)){
		var drop = Math.floor(Math.random()*2);
		if(drop==1){
			Level.dropItem(Entity.getX(v),Entity.getY(v),Entity.getZ(v),0,spiderEyeId,1,0);
		}
	}
	if(Entity.getEntityTypeId(v)==EntityType.SHEEP){
		var drop = Math.floor(Math.random()*2);
		if(drop==0){
			Level.dropItem(Entity.getX(v),Entity.getY(v),Entity.getZ(v),0,rawMuttonId,1,0);
		}
		if(drop==1){
			Level.dropItem(Entity.getX(v),Entity.getY(v),Entity.getZ(v),0,rawMuttonId,2,0);
		}
	}
	if(Entity.getEntityTypeId(v)==EntityType.PIG_ZOMBIE){
		var drop = Math.floor(Math.random()*2);
		var sword = Math.floor(Math.random()*250)+1;
		if(sword==250){
			var damage = Math.floor(Math.random()*33);
			Level.dropItem(Entity.getX(v),Entity.getY(v),Entity.getZ(v),0,283,1,damage);
		}
		if(drop==1){
			Level.dropItem(Entity.getX(v),Entity.getY(v),Entity.getZ(v),0,goldNuggetId,1,0);
		}
	}
	if(Entity.getEntityTypeId(v)==EntityType.SKELETON){
		var sword = Math.floor(Math.random()*250)+1;
		if(sword==250){
			var damage = Math.floor(Math.random()*385);
			Level.dropItem(Entity.getX(v),Entity.getY(v),Entity.getZ(v),0,261,1,damage);
		}
	}
	if(Entity.getEntityTypeId(v)==EntityType.GHAST){
		var drop = Math.floor(Math.random()*2);
		if(drop==1){
			Level.dropItem(Entity.getX(v),Entity.getY(v),Entity.getZ(v),0,ghastTearId,1,0);
		}
	}
}

function leaveGame(){
	ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
		try{
			if(GUI != null){
				GUI.dismiss();
				GUI = null;
			}
			if(GuideBg != null){
				GuideBg.dismiss();
				GuideBg = null;
			}
			if(GuideContent != null){
				GuideContent.dismiss();
				GuideContent = null;
			}
			if(GuideExit != null){
				GuideExit.dismiss();
				GuideExit = null;
			}
		}
		catch(e){
			print(e);
		}
	}}));
}

CraftableMobs.getcompatableScripts = function() {
    var scripts = net.zhuoweizhang.mcpelauncher.ScriptManager.scripts;
    for(var i = 0; i < scripts.size(); i++) {
        var script = scripts.get(i);
        var scope = script.scope;
        if(org.mozilla.javascript.ScriptableObject.hasProperty(scope, "Inventory") && org.mozilla.javascript.ScriptableObject.hasProperty(scope, "BetterStorage") && org.mozilla.javascript.ScriptableObject.hasProperty(scope, "storageBlocks"))
           invBlocks.push(250,251,252,253);
	}
};

eatAPI.modTick = function(){
	lookBlock = Player.getPointedBlockId();
	nowId = Player.getCarriedItem();
	nowData = Player.getCarriedItemData();
	nowAmount = Player.getCarriedItemCount();
	nowSlotId = Player.getSelectedSlotId();
	if(foodItems.indexOf(nowId)>=0){
		tick++;
		if(tick==10){
			tick=0;
			if(nowId==lastId&&nowData==lastData&&(lastAmount-1)==nowAmount&&invBlocks.indexOf(lookBlock)==-1){
				eatHook(lastId);
			}
			lastId = Player.getCarriedItem();
			lastData = Player.getCarriedItemData();
			lastAmount = Player.getCarriedItemCount();
			lastSlotId = Player.getSelectedSlotId();
		}
	}
	if(nowId==0){
		if(foodItems.indexOf(lastId)>=0&&lastAmount==1&&nowSlotId==lastSlotId&&invBlocks.indexOf(lookBlock)==-1){
			eatHook(lastId);
			lastId=0;
		}
		else{
			lastId=0;
		}
	}
	if(foodItems.indexOf(nowId)==-1&&nowId!==0){
		lastId=0;
	}
};

function eatHook(foodId){
	if(foodId==spiderEyeId){
		Entity.addEffect(Player.getEntity(), MobEffect.poison, 30 * 20, 1, true, false);
	}
}

Player.removeFromCarriedItem = function(amount){
	if(Level.getGameMode()==0){
		if(Player.getCarriedItemCount()>=2)Entity.setCarriedItem(Player.getEntity(),Player.getCarriedItem(),Player.getCarriedItemCount()-amount,Player.getCarriedItemData());
		else if(Player.getCarriedItemCount()<=1)Entity.setCarriedItem(Player.getEntity(),0,0,0);
	}
};

//### GUI ###//
var GUI, GuideBg, GuideContent, GuideExit, GuideBack;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

CraftableMobs.init = function(){
	ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
		try{
			var layout = new android.widget.LinearLayout(ctx);
			layout.setOrientation(1);
			var menuBtn = new MinecraftButton();
			menuBtn.setText("Guide");
			menuBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					CraftableMobs.guide();
				}
			}));
			layout.addView(menuBtn);
			GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
			GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
			GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);
		}
		catch(err){
			clientMessage("Error in init: "+err);
		}
	}}));
};

CraftableMobs.guide = function(){
	ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
		try{
			GuideBg = new android.widget.PopupWindow(ctx);
			GuideContent = new android.widget.PopupWindow(ctx);
			var exitLayout = new android.widget.LinearLayout(ctx);
			var dirtLayout = new android.widget.RelativeLayout(ctx);
			var contentLayout = new android.widget.RelativeLayout(ctx);
			
			var introduction = new MinecraftButton();
			introduction.setText("Introduction");
			introduction.setX(ctx.getWindowManager().getDefaultDisplay().getWidth()/4);
			introduction.setY(dip2px(8));
			introduction.setLayoutParams(new android.view.ViewGroup.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth()/2, dip2px(48)));
			introduction.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					content = "Welcome to the Craftable Mobs mod!"
						+ "\nThis mod is a Port of Naruto1310's Craftable Animals mod from PC, the mod adds 50+ Items/Tools having to do with Animals"
						+ "\nThe mod is fully SMP compatible (hopefully).";
					contentLayout.removeAllViews();
					contentLayout.addView(backBtn);
					contentText.setText(content);
					contentLayout.addView(contentText);
				}
			}));
			contentLayout.addView(introduction);
			
			var craftingAnimals = new MinecraftButton();
			craftingAnimals.setText("Crafting Animals");
			craftingAnimals.setX(ctx.getWindowManager().getDefaultDisplay().getWidth()/4);
			craftingAnimals.setY(dip2px(64));
			craftingAnimals.setLayoutParams(new android.view.ViewGroup.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth()/2, dip2px(48)));
			craftingAnimals.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					print("W.I.P...");
					//contentLayout.removeAllViews();
					//contentLayout.addView(backBtn);
					//contentLayout.addView(craftingUI);
				}
			}));
			contentLayout.addView(craftingAnimals);
			
			var craftingUI = new android.view.View(ctx);
			var craftingImg = new android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createScaledBitmap(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/GUI_Crafting_Table.png")), dip2px(260), dip2px(136), false));
			craftingUI.setBackgroundDrawable(craftingImg);
			craftingUI.setLayoutParams(new android.view.ViewGroup.LayoutParams(dip2px(260), dip2px(136)));
			craftingUI.setX(ctx.getWindowManager().getDefaultDisplay().getWidth()/2-dip2px(130));
			craftingUI.setY(ctx.getWindowManager().getDefaultDisplay().getHeight()/2-dip2px(68));
			
			var usingAnimals = new MinecraftButton();
			usingAnimals.setText("Using Animals");
			usingAnimals.setX(ctx.getWindowManager().getDefaultDisplay().getWidth()/4);
			usingAnimals.setY(dip2px(120));
			usingAnimals.setLayoutParams(new android.view.ViewGroup.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth()/2, dip2px(48)));
			usingAnimals.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					content = "Once an animal is crafted, it will be locked into a single slot in the inventory. In this state, it will not wander off, require food or show any other sign of being alive. Animals can be awakened from this state by holding them and tapping on a block. "
						+ "After an animal has been placed it is indistinguishable from a naturally spawned one."
						+ "\nA team of mostly independent scientists has confirmed, that animals do not suffer while being locked into the inventory.";
					contentLayout.removeAllViews();
					contentLayout.addView(backBtn);
					contentText.setText(content);
					contentLayout.addView(contentText);
				}
			}));
			contentLayout.addView(usingAnimals);
			
			var stackingAnimals = new MinecraftButton();
			stackingAnimals.setText("Stacking Animals");
			stackingAnimals.setX(ctx.getWindowManager().getDefaultDisplay().getWidth()/4);
			stackingAnimals.setY(dip2px(176));
			stackingAnimals.setLayoutParams(new android.view.ViewGroup.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth()/2, dip2px(48)));
			stackingAnimals.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					content = "Animals can be stacked on top of each other. Tapping a living animal while holding a crafted one will make it ride it. This works multiple times, so it is possible to create huge towers of animals."
						+ "\nThis way, it is also possible to place animals in boats or minecarts.";
					contentLayout.removeAllViews();
					contentLayout.addView(backBtn);
					contentText.setText(content);
					contentLayout.addView(contentText);
				}
			}));
			contentLayout.addView(stackingAnimals);
			
			var babyAnimals = new MinecraftButton();
			babyAnimals.setText("Baby Animals");
			babyAnimals.setX(ctx.getWindowManager().getDefaultDisplay().getWidth()/4);
			babyAnimals.setY(dip2px(232));
			babyAnimals.setLayoutParams(new android.view.ViewGroup.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth()/2, dip2px(48)));
			babyAnimals.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					content = "Animals that have baby versions can be turned into babys before placing them. To do this place the animal in a crafting grid alongside a block of dirt. A red star will indicate that an animal is a baby. Two babys can be combined back to the regular animal.";
					contentLayout.removeAllViews();
					contentLayout.addView(backBtn);
					contentText.setText(content);
					contentLayout.addView(contentText);
				}
			}));
			contentLayout.addView(babyAnimals);
			
			var more = new MinecraftButton();
			more.setText("More...");
			more.setX(ctx.getWindowManager().getDefaultDisplay().getWidth()/4);
			more.setY(dip2px(288));
			more.setLayoutParams(new android.view.ViewGroup.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth()/2, dip2px(48)));
			more.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					contentLayout.removeAllViews();
					contentLayout.addView(backBtn);
					contentLayout.addView(minimizer);
					contentLayout.addView(animalSoul);
					contentLayout.addView(emptySpawner);
					contentLayout.addView(guideBook);
					contentLayout.addView(animalDrops);
					contentLayout.addView(about);
				}
			}));
			contentLayout.addView(more);
			
			var minimizer = new MinecraftButton();
			minimizer.setText("Minimizer");
			minimizer.setX(ctx.getWindowManager().getDefaultDisplay().getWidth()/4);
			minimizer.setY(dip2px(8));
			minimizer.setLayoutParams(new android.view.ViewGroup.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth()/2, dip2px(48)));
			minimizer.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					content = "The minimizer has the ability to shrink animals into baby or let them grow up, instantly."
						+ "\nTapping an animal will turn it into a baby. Tapping them again will make them an adult."
						+ "\nThis will only work on animals that have baby versions.";
					contentLayout.removeAllViews();
					contentLayout.addView(backBtn);
					contentText.setText(content);
					contentLayout.addView(contentText);
				}
			}));
			
			var animalSoul = new MinecraftButton();
			animalSoul.setText("Animal Soul");
			animalSoul.setX(ctx.getWindowManager().getDefaultDisplay().getWidth()/4);
			animalSoul.setY(dip2px(64));
			animalSoul.setLayoutParams(new android.view.ViewGroup.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth()/2, dip2px(48)));
			animalSoul.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					content = "The animal soul can capture animals in their current form an release them again."
						+ "\nIt captures animals exactly how they are, including their health, equipment, their name, whether something is riding on them ...";				
					contentLayout.removeAllViews();
					contentLayout.addView(backBtn);
					contentText.setText(content);
					contentLayout.addView(contentText);
				}
			}));
			
			var emptySpawner = new MinecraftButton();
			emptySpawner.setText("Empty Spawner");
			emptySpawner.setX(ctx.getWindowManager().getDefaultDisplay().getWidth()/4);
			emptySpawner.setY(dip2px(120));
			emptySpawner.setLayoutParams(new android.view.ViewGroup.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth()/2, dip2px(48)));
			emptySpawner.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					content = "The empty spawner is a craftable spawner."
						+ "\nAfter being placed it is inactive at first. To activate it, right click it with an animal. From that point on it behaves like a regular spawner.";
						+ "\n\nAfter that it can still be changed into a different spawner using a different animal."
						//+ "\n\nA spawner in a minecart can be created and used in the same way.";
						+ "\n\nOnce a spawner has been activated, it works independent of the mod, so it is safe to give the map away to people that don't have the mod."
						//+ "\n\nPowering a spawner with redstone will make it pause. This feature depends on the mod and will not work when giving the map away or uninstalling the mod.";
					contentLayout.removeAllViews();
					contentLayout.addView(backBtn);
					contentText.setText(content);
					contentLayout.addView(contentText);
				}
			}));
			
			var guideBook = new MinecraftButton();
			guideBook.setText("Guide Book");
			guideBook.setX(ctx.getWindowManager().getDefaultDisplay().getWidth()/4);
			guideBook.setY(dip2px(176));
			guideBook.setLayoutParams(new android.view.ViewGroup.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth()/2, dip2px(48)));
			guideBook.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					content = "The guide book explains all the features of this mod."
					+ "\nIt can be obtained by slaying a pig while holding a regular book.";
					contentLayout.removeAllViews();
					contentLayout.addView(backBtn);
					contentText.setText(content);
					contentLayout.addView(contentText);
				}
			}));
			
			var animalDrops = new MinecraftButton();
			animalDrops.setText("Drops");
			animalDrops.setX(ctx.getWindowManager().getDefaultDisplay().getWidth()/4);
			animalDrops.setY(dip2px(232));
			animalDrops.setLayoutParams(new android.view.ViewGroup.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth()/2, dip2px(48)));
			animalDrops.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					content = "Every time an animal dies, there is a small chance of that animal dropping itself as an item."
						+ "\nThis happens independently of whether the animal was killed by a player or not."
						+ "\nBy default this chance is 1%. It can be adjusted or turned off completely using the settings.";
					contentLayout.removeAllViews();
					contentLayout.addView(backBtn);
					contentText.setText(content);
					contentLayout.addView(contentText);
				}
			}));
			
			var about = new MinecraftButton();
			about.setText("About");
			about.setX(ctx.getWindowManager().getDefaultDisplay().getWidth()/4);
			about.setY(dip2px(288));
			about.setLayoutParams(new android.view.ViewGroup.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth()/2, dip2px(48)));
			about.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					content = "Craftable Mobs mod"
						+ "\n\nVersion: " + CraftableMobs.version;
						+ "\nLatest version: "
					contentLayout.removeAllViews();
					contentLayout.addView(backBtn);
					contentText.setText(content);
					contentLayout.addView(contentText);
				}
			}));
			
			var contentText = new android.widget.TextView(ctx);
			contentText.setTextSize(14);
			contentText.setText("");
			contentText.setY(dip2px(64));
			contentText.setGravity(android.view.Gravity.CENTER);
			contentText.setTypeface(MinecraftButtonLibrary.ProcessedResources.font);
			contentText.setLineSpacing(dip2px(14), 1);
			
			var backBtn = new MinecraftButton();
			backBtn.setText("Back");
			backBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					contentLayout.removeAllViews();
					contentLayout.addView(introduction);
					contentLayout.addView(craftingAnimals);
					contentLayout.addView(usingAnimals);
					contentLayout.addView(stackingAnimals);
					contentLayout.addView(babyAnimals);
					contentLayout.addView(more);
					
				}
			}));
			
			var exitBtn = new MinecraftButton();
			exitBtn.setText("X");
			exitBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					GuideContent.dismiss();
					GuideBg.dismiss();
					GuideExit.dismiss();
				}
			}));
			exitLayout.addView(exitBtn);
			
			var background = new android.view.View(ctx);
			var dirt = new android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createScaledBitmap(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/background.png")), dip2px(64), dip2px(64), false));
			dirt.setColorFilter(android.graphics.Color.rgb(70, 70, 70), android.graphics.PorterDuff.Mode.MULTIPLY);
			dirt.setTileModeXY(android.graphics.Shader.TileMode.REPEAT, android.graphics.Shader.TileMode.REPEAT);
			background.setBackgroundDrawable(dirt);
			dirtLayout.addView(background);
			
			GuideBg.setContentView(dirtLayout);
			GuideBg.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth());
			GuideBg.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
			GuideBg.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
			GuideBg.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 0, 0);
			
			GuideContent.setContentView(contentLayout);
			GuideContent.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth());
			GuideContent.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
			GuideContent.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
			GuideContent.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
			
			GuideExit = new android.widget.PopupWindow(exitLayout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
			GuideExit.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
			GuideExit.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
		}
		catch(err){
			clientMessage("Error in guide"+err);
		}
	}}));
};

CraftableMobs.renderItem = function(name, data, x, y, scale) {
    var item = CraftableMobs.getItemImage(name, data);
    item = android.graphics.Bitmap.createScaledBitmap(item, dip2px(item.getWidth())*scale, dip2px(item.getHeight())*scale, false);
    var view = new android.view.View(ctx);
    view.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(item));
    var params = new android.widget.RelativeLayout.LayoutParams(item.getWidth(), item.getHeight());
    params.setMargins(dip2px(x), dip2px(y), 0, 0);
    view.setLayoutParams(params);
    return view;
};

CraftableMobs.getItemImage = function(text, data) {
    var items = android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/items-opaque.png"));
    var uvs = CraftableMobs.META[CraftableMobs.META_MAPPED.indexOf(text)].uvs[data];
    return android.graphics.Bitmap.createBitmap(items, uvs[0]*items.getWidth(), uvs[1]*items.getHeight(), uvs[2]*items.getWidth()-uvs[0]*items.getWidth(), uvs[3]*items.getHeight()-uvs[1]*items.getHeight());
};

function dip2px(dips){
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

var BlockImageLoader = {};

BlockImageLoader.TGA = null;

BlockImageLoader.META = null;

BlockImageLoader.META_MAPPED = null;

BlockImageLoader.init = function(tga) {
	if(tga instanceof android.graphics.Bitmap)
		BlockImageLoader.TGA = tga;
	
	if(BlockImageLoader.META == null)
		BlockImageLoader.META = eval(new java.lang.String(ModPE.getBytesFromTexturePack("images/terrain.meta"))+'');
		
	if(BlockImageLoader.META_MAPPED == null)
		BlockImageLoader.META_MAPPED = BlockImageLoader.META.map(function(e) {
			return e.name;
		});
		
	if(BlockImageLoader.TGA == null)
		BlockImageLoader.TGA = net.zhuoweizhang.mcpelauncher.texture.tga.TGALoader.load(ModPE.openInputStreamFromTexturePack("images/terrain-atlas.tga"), false);
};

BlockImageLoader.getBlockBitmap = function(name, data) {
	var uvs = BlockImageLoader.META[BlockImageLoader.META_MAPPED.indexOf(name)].uvs[data];
	var x = uvs[0]*BlockImageLoader.TGA.getWidth();
	var y = uvs[1]*BlockImageLoader.TGA.getHeight();
	var width = uvs[2]*BlockImageLoader.TGA.getWidth()-x;
	width = Math.ceil(width);
	var height = uvs[3]*BlockImageLoader.TGA.getHeight()-y;
	height = Math.ceil(height);
	return android.graphics.Bitmap.createBitmap(BlockImageLoader.TGA, x, y, width, height);
};

BlockImageLoader.create = function(left, right, top, hasNoShadow) {
	if(BlockImageLoader.TGA == null || BlockImageLoader.META == null)
		throw new Error("BlockImageLoader hasn't been initialized");
	
	if(!Array.isArray(left) || !Array.isArray(right) || !Array.isArray(top))
		throw new Error("Illegal argument type");
	
	var temp = android.graphics.Bitmap.createBitmap(51, 57, android.graphics.Bitmap.Config.ARGB_8888);
	left = BlockImageLoader.getBlockBitmap(left[0], left[1]);
	right = BlockImageLoader.getBlockBitmap(right[0], right[1]);
	top = BlockImageLoader.getBlockBitmap(top[0], top[1]);
	
	left = BlockImageLoader.createLeft(left);
	right = BlockImageLoader.createRight(right);
	top = BlockImageLoader.createTop(top);
	
	var canv = new android.graphics.Canvas(temp);
	var p = new android.graphics.Paint();
	if(hasNoShadow != false)
		p.setColorFilter(new android.graphics.PorterDuffColorFilter(android.graphics.Color.rgb(255-65, 255-65, 255-65), android.graphics.PorterDuff.Mode.MULTIPLY));
	canv.drawBitmap(left, 0, temp.getHeight()-left.getHeight(), p);
	if(hasNoShadow != false)
	 p.setColorFilter(new android.graphics.PorterDuffColorFilter(android.graphics.Color.rgb(255-130, 255-130, 255-130), android.graphics.PorterDuff.Mode.MULTIPLY));
	canv.drawBitmap(right, 25, temp.getHeight()-right.getHeight(), p);
	canv.drawBitmap(top, 0, 0, null);
	return temp;
};

BlockImageLoader.createLeft = function(src) {
	src = android.graphics.Bitmap.createScaledBitmap(src, 25, 32, false);
	var mSrc = [0, 0, 25, 0, 25, 32, 0, 32];
	var mDst = [0, 0, 25, 12, 25, 44, 0, 32];
	var mtrx = new android.graphics.Matrix();
	mtrx.setPolyToPoly(mSrc, 0, mDst, 0, 4);
	return android.graphics.Bitmap.createBitmap(src, 0, 0, src.getWidth(), src.getHeight(), mtrx, false);
};

BlockImageLoader.createRight = function(src) {
	src = android.graphics.Bitmap.createScaledBitmap(src, 26, 32, false);
	var mSrc = [0, 0, 26, 0, 26, 32, 0, 32];
	var mDst = [0, 12, 26, 0, 26, 32, 0, 44]
	var mtrx = new android.graphics.Matrix();
	mtrx.setPolyToPoly(mSrc, 0, mDst, 0, 4);
	return android.graphics.Bitmap.createBitmap(src, 0, 0, src.getWidth(), src.getHeight(), mtrx, false);
};

BlockImageLoader.createTop = function(src) {
	src = android.graphics.Bitmap.createScaledBitmap(src, 32, 32, false);
	var mSrc = [0, 0, 32, 0, 32, 32, 0, 32];
	var mDst = [0, 13.5, 25, 0, 51, 13.5, 25, 26];
	var mtrx = new android.graphics.Matrix();
	mtrx.setPolyToPoly(mSrc, 0, mDst, 0, 4);
	return android.graphics.Bitmap.createBitmap(src, 0, 0, src.getWidth(), src.getHeight(), mtrx, false);
};

BlockImageLoader.init();

//### Button Library by Desno365 ###//

var MinecraftButtonLibrary = {};

// Customization
// These are the default values of the library, you can change them to make the buttons look how you want to.
MinecraftButtonLibrary.defaultButtonPadding = 8;
MinecraftButtonLibrary.defaultButtonTextSize = 16;
MinecraftButtonLibrary.defaultButtonTextLineSpacing = 4;
MinecraftButtonLibrary.defaultButtonTextColor = "#FFDDDDDD";
MinecraftButtonLibrary.defaultButtonTextPressedColor = "#FFFBFF97";
MinecraftButtonLibrary.defaultButtonTextShadowColor = "#FF292929";

// Variables
MinecraftButtonLibrary.Resources = {};
MinecraftButtonLibrary.ProcessedResources = {};

MinecraftButtonLibrary.context = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
MinecraftButtonLibrary.metrics = new android.util.DisplayMetrics();
MinecraftButtonLibrary.context.getWindowManager().getDefaultDisplay().getMetrics(MinecraftButtonLibrary.metrics);
MinecraftButtonLibrary.sdcard = new android.os.Environment.getExternalStorageDirectory();
MinecraftButtonLibrary.LOG_TAG = "Minecraft Button Library ";

MinecraftButtonLibrary.ProcessedResources.font = null;
MinecraftButtonLibrary.ProcessedResources.mcNormalNineDrawable = null;
MinecraftButtonLibrary.ProcessedResources.mcPressedNineDrawable = null;

//########################################################################################################################################################
// LIBRARY
//########################################################################################################################################################

function MinecraftButton(enableSound)
{
	if(enableSound == null)
		enableSound = true;

	var button = new android.widget.Button(MinecraftButtonLibrary.context);
	button.setTextSize(MinecraftButtonLibrary.defaultButtonTextSize);
	button.setOnTouchListener(new android.view.View.OnTouchListener()
	{
		onTouch: function(v, motionEvent)
		{
			var action = motionEvent.getActionMasked();
			if(action == android.view.MotionEvent.ACTION_DOWN)
			{
				// button pressed
				MinecraftButtonLibrary.changeToPressedState(v);
			}
			if(action == android.view.MotionEvent.ACTION_CANCEL || action == android.view.MotionEvent.ACTION_UP)
			{
				// button released
				MinecraftButtonLibrary.changeToNormalState(v);
				
				var rect = new android.graphics.Rect(v.getLeft(), v.getTop(), v.getRight(), v.getBottom());
				if(rect.contains(v.getLeft() + motionEvent.getX(), v.getTop() + motionEvent.getY())) // detect if the event happens inside the view
				{
					// onClick will run soon

					// play sound
					if(enableSound)
						Level.playSoundEnt(Player.getEntity(), "random.click", 100, 30);
				}
			}
			if(action == android.view.MotionEvent.ACTION_MOVE)
			{
				var rect = new android.graphics.Rect(v.getLeft(), v.getTop(), v.getRight(), v.getBottom());
				if(rect.contains(v.getLeft() + motionEvent.getX(), v.getTop() + motionEvent.getY())) // detect if the event happens inside the view
				{
					// pointer inside the view
					if(v.getTag() == false)
					{
						// restore pressed state
						button.setTag(true); // is pressed?

						MinecraftButtonLibrary.changeToPressedState(v);
					}
				} else
				{
					// pointer outside the view
					if(v.getTag() == true)
					{
						// restore pressed state
						button.setTag(false); // is pressed?

						MinecraftButtonLibrary.changeToNormalState(v);
					}
				}
			}

			return false;
		}
	});
	if (android.os.Build.VERSION.SDK_INT >= 14)
		button.setAllCaps(false);
	MinecraftButtonLibrary.setButtonBackground(button, MinecraftButtonLibrary.ProcessedResources.mcNormalNineDrawable);
	button.setTag(false); // is pressed?
	button.setSoundEffectsEnabled(false);
	button.setGravity(android.view.Gravity.CENTER);
	button.setTextColor(android.graphics.Color.parseColor(MinecraftButtonLibrary.defaultButtonTextColor));
	button.setPadding(MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding));
	button.setLineSpacing(MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonTextLineSpacing), 1);
	// apply custom font with shadow
	button.setTypeface(MinecraftButtonLibrary.ProcessedResources.font);
	button.setPaintFlags(button.getPaintFlags() | android.graphics.Paint.SUBPIXEL_TEXT_FLAG);
	if (android.os.Build.VERSION.SDK_INT >= 19) // KitKat
		button.setShadowLayer(1, Math.round((button.getLineHeight() - MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonTextLineSpacing)) / 8), Math.round((button.getLineHeight() - MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonTextLineSpacing)) / 8), android.graphics.Color.parseColor(MinecraftButtonLibrary.defaultButtonTextShadowColor));
	else
		button.setShadowLayer(0.0001, Math.round((button.getLineHeight() - MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonTextLineSpacing)) / 8), Math.round((button.getLineHeight() - MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonTextLineSpacing)) / 8), android.graphics.Color.parseColor(MinecraftButtonLibrary.defaultButtonTextShadowColor));

	return button;
}

// ######### BUTTON UTILS functions #########

MinecraftButtonLibrary.setButtonBackground = function(button, background)
{
	if (android.os.Build.VERSION.SDK_INT >= 16)
		button.setBackground(background);
	else
		button.setBackgroundDrawable(background);
}

MinecraftButtonLibrary.convertDpToPixel = function(dp)
{
	var density = MinecraftButtonLibrary.metrics.density;

	return (dp * density);
}

MinecraftButtonLibrary.changeToNormalState = function(button)
{
	MinecraftButtonLibrary.setButtonBackground(button, MinecraftButtonLibrary.ProcessedResources.mcNormalNineDrawable);
	button.setTextColor(android.graphics.Color.parseColor(MinecraftButtonLibrary.defaultButtonTextColor));
	// reset pressed padding
	button.setPadding(MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding));
}

MinecraftButtonLibrary.changeToPressedState = function(button)
{
	MinecraftButtonLibrary.setButtonBackground(button, MinecraftButtonLibrary.ProcessedResources.mcPressedNineDrawable);
	button.setTextColor(android.graphics.Color.parseColor(MinecraftButtonLibrary.defaultButtonTextPressedColor));
	// make the effect of a pressed button with padding
	button.setPadding(MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding) + MinecraftButtonLibrary.convertDpToPixel(2), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding) - MinecraftButtonLibrary.convertDpToPixel(2));
}

// ######### END - BUTTON UTILS functions #########


// ######### CREATE NINE PATCH functions #########

MinecraftButtonLibrary.createNinePatchDrawables = function()
{
	var mcButtonNormalBitmap = MinecraftButtonLibrary.getMinecraftButtonBitmap();
	var mcButtonPressedBitmap = MinecraftButtonLibrary.getMinecraftButtonPressedBitmap();

	var mcNormalNinePatch = new android.graphics.NinePatch(mcButtonNormalBitmap, mcButtonNormalBitmap.getNinePatchChunk(), null);
	var mcPressedNinePatch = new android.graphics.NinePatch(mcButtonPressedBitmap, mcButtonPressedBitmap.getNinePatchChunk(), null);

	// here is used a deprecated method that doesn't deals with density
	//noinspection deprecation
	MinecraftButtonLibrary.ProcessedResources.mcNormalNineDrawable = new android.graphics.drawable.NinePatchDrawable(mcNormalNinePatch);
	MinecraftButtonLibrary.ProcessedResources.mcNormalNineDrawable.setFilterBitmap(false);
	//noinspection deprecation
	MinecraftButtonLibrary.ProcessedResources.mcPressedNineDrawable = new android.graphics.drawable.NinePatchDrawable(mcPressedNinePatch);
	MinecraftButtonLibrary.ProcessedResources.mcPressedNineDrawable.setFilterBitmap(false);
}

MinecraftButtonLibrary.getMinecraftButtonBitmap = function()
{
	var density = MinecraftButtonLibrary.metrics.density;

	if(density < 1)
	{
		ModPE.log(MinecraftButtonLibrary.LOG_TAG + "Density: " + density + ", ldpi");
		return MinecraftButtonLibrary.decodeImageFromBase64(MinecraftButtonLibrary.Resources.minecraftButtonStateNormalLDPI);
	}
	if(density >= 1 && density < 1.5)
	{
		ModPE.log(MinecraftButtonLibrary.LOG_TAG + "Density: " + density + ", mdpi");
		return MinecraftButtonLibrary.decodeImageFromBase64(MinecraftButtonLibrary.Resources.minecraftButtonStateNormalMDPI);
	}
	if(density >= 1.5 && density < 2)
	{
		ModPE.log(MinecraftButtonLibrary.LOG_TAG + "Density: " + density + ", hdpi");
		return MinecraftButtonLibrary.decodeImageFromBase64(MinecraftButtonLibrary.Resources.minecraftButtonStateNormalHDPI);
	}
	if(density >= 2 && density < 2.5)
	{
		ModPE.log(MinecraftButtonLibrary.LOG_TAG + "Density: " + density + ", xhdpi");
		return MinecraftButtonLibrary.decodeImageFromBase64(MinecraftButtonLibrary.Resources.minecraftButtonStateNormalXHDPI);
	}
	if(density >= 2.5)
	{
		ModPE.log(MinecraftButtonLibrary.LOG_TAG + "Density: " + density + ", xxhdpi");
		return MinecraftButtonLibrary.decodeImageFromBase64(MinecraftButtonLibrary.Resources.minecraftButtonStateNormalXXHDPI);
	}

	ModPE.log(MinecraftButtonLibrary.LOG_TAG + "Error: " + density + ", xhdpi");
	return MinecraftButtonLibrary.decodeImageFromBase64(MinecraftButtonLibrary.Resources.minecraftButtonStateNormalXHDPI);
}

MinecraftButtonLibrary.getMinecraftButtonPressedBitmap = function()
{
	var density = MinecraftButtonLibrary.metrics.density;

	if(density < 1)
	{
		ModPE.log(MinecraftButtonLibrary.LOG_TAG + "Density: " + density + ", ldpi");
		return MinecraftButtonLibrary.decodeImageFromBase64(MinecraftButtonLibrary.Resources.minecraftButtonStatePressedLDPI);
	}
	if(density >= 1 && density < 1.5)
	{
		ModPE.log(MinecraftButtonLibrary.LOG_TAG + "Density: " + density + ", mdpi");
		return MinecraftButtonLibrary.decodeImageFromBase64(MinecraftButtonLibrary.Resources.minecraftButtonStatePressedMDPI);
	}
	if(density >= 1.5 && density < 2)
	{
		ModPE.log(MinecraftButtonLibrary.LOG_TAG + "Density: " + density + ", hdpi");
		return MinecraftButtonLibrary.decodeImageFromBase64(MinecraftButtonLibrary.Resources.minecraftButtonStatePressedHDPI);
	}
	if(density >= 2 && density < 2.5)
	{
		ModPE.log(MinecraftButtonLibrary.LOG_TAG + "Density: " + density + ", xhdpi");
		return MinecraftButtonLibrary.decodeImageFromBase64(MinecraftButtonLibrary.Resources.minecraftButtonStatePressedXHDPI);
	}
	if(density >= 2.5)
	{
		ModPE.log(MinecraftButtonLibrary.LOG_TAG + "Density: " + density + ", xxhdpi");
		return MinecraftButtonLibrary.decodeImageFromBase64(MinecraftButtonLibrary.Resources.minecraftButtonStatePressedXXHDPI);
	}

	ModPE.log(MinecraftButtonLibrary.LOG_TAG + "Error: " + density + ", xhdpi");
	return MinecraftButtonLibrary.decodeImageFromBase64(MinecraftButtonLibrary.Resources.minecraftButtonStatePressedXHDPI);
}

MinecraftButtonLibrary.decodeImageFromBase64 = function(base64String)
{
	var byteArray = android.util.Base64.decode(base64String, 0);
	return android.graphics.BitmapFactory.decodeByteArray(byteArray, 0, byteArray.length);
}

// ######### END - CREATE NINE PATCH functions #########


// ######### CREATE TYPEFACE functions #########

MinecraftButtonLibrary.createTypeface = function()
{
	MinecraftButtonLibrary.writeFileFromByteArray(android.util.Base64.decode(MinecraftButtonLibrary.Resources.base64Font, 0), MinecraftButtonLibrary.sdcard + "/minecraft.ttf");
	MinecraftButtonLibrary.ProcessedResources.font = android.graphics.Typeface.createFromFile(MinecraftButtonLibrary.sdcard + "/minecraft.ttf");
	MinecraftButtonLibrary.deleteFile(MinecraftButtonLibrary.sdcard + "/minecraft.ttf");
}

MinecraftButtonLibrary.writeFileFromByteArray = function(byteArray, path)
{
	var file = new java.io.File(path);
	if(file.exists())
		file.delete();
	file.createNewFile();
	var stream = new java.io.FileOutputStream(file);
	stream.write(byteArray);
	stream.close();
	byteArray = null;
}

// ######### END - CREATE TYPEFACE functions #########


// ######### UTILS functions #########

MinecraftButtonLibrary.removeResources = function()
{
	MinecraftButtonLibrary.Resources.minecraftButtonStateNormalLDPI = null;
	MinecraftButtonLibrary.Resources.minecraftButtonStateNormalMDPI = null;
	MinecraftButtonLibrary.Resources.minecraftButtonStateNormalHDPI = null;
	MinecraftButtonLibrary.Resources.minecraftButtonStateNormalXHDPI = null;
	MinecraftButtonLibrary.Resources.minecraftButtonStateNormalXXHDPI = null;
	MinecraftButtonLibrary.Resources.minecraftButtonStatePressedLDPI = null;
	MinecraftButtonLibrary.Resources.minecraftButtonStatePressedMDPI = null;
	MinecraftButtonLibrary.Resources.minecraftButtonStatePressedHDPI = null;
	MinecraftButtonLibrary.Resources.minecraftButtonStatePressedXHDPI = null;
	MinecraftButtonLibrary.Resources.minecraftButtonStatePressedXXHDPI = null;

	MinecraftButtonLibrary.Resources.base64Font = null;
}

MinecraftButtonLibrary.deleteFile = function(path)
{
	var file = new java.io.File(path);

	if(file.isDirectory())
	{
		var directoryFiles = file.listFiles();
		for(var i in directoryFiles)
		{
			deleteFile(directoryFiles[i].getAbsolutePath());
		}
		file.delete();
	}

	if(file.isFile())
		file.delete();
}

// ######### END - UTILS functions #########


//########################################################################################################################################################
// RESOURCES IN BASE64
//########################################################################################################################################################

// backgrounds
MinecraftButtonLibrary.Resources.minecraftButtonStateNormalLDPI = "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAGG5wT2wAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAADYHRhkAAAAVG5wVGMAAgIJIAAAACgAAAAAAAACAAAAAgAAAAMAAAACMAAAAAAAAAEAAAAHAAAAAgAAAAf/vLGr/7yxqwAAAAH/vLGr/5WGgQAAAAH/cmVnAAAAAf8oJyoMgs1WAAAASUlEQVQY02Pcs3H1fwY8gAmf5NYtexhYGBgYGG5evYZVwfZDh/GbwPD/PwEFjIwEFBByJAPDfwaWbVv2MGw7eIiBgRFuLrIdDADq5BFxvezsVAAAAABJRU5ErkJggg==";
MinecraftButtonLibrary.Resources.minecraftButtonStateNormalMDPI = "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGG5wT2wAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAADYHRhkAAAAVG5wVGMAAgIJIAAAACgAAAAAAAAEAAAABAAAAAYAAAAEMAAAAAAAAAIAAAAOAAAABAAAAA7/vLGr/7yxqwAAAAH/vLGr/5WGgQAAAAH/cmVnAAAAAf8oJyqdu2NqAAAAT0lEQVQ4y2Pcs3H1fwYKABMDhYCFXI1bt+yhsgtuXr1Gksbthw4PcBgw/P8/0C5gZKSOCwbeAPLDgIFasbANmqa3HTwEDV2M4MYVDdRxAQBscxGJWBLxyQAAAABJRU5ErkJggg==";
MinecraftButtonLibrary.Resources.minecraftButtonStateNormalHDPI = "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGG5wT2wAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAADYHRhkAAAAVG5wVGMAAgIJIAAAACgAAAAAAAAGAAAABgAAAAkAAAAGMAAAAAAAAAMAAAAVAAAABgAAABX/vLGr/7yxqwAAAAH/vLGr/5WGgQAAAAH/cmVnAAAAAf8oJyqPt1DfAAAAV0lEQVRIx2Pcs3H1fwYaAiYGGgOaW8BCC0O3btkzXIPo5tVrVDF0+6HDo6mIAPj/fzSICABGxmEURKMWDFAqYhhWGW0bUu2z7eAhpMyCMxcRk9OGURABAH/ZEZn4HdB3AAAAAElFTkSuQmCC";
MinecraftButtonLibrary.Resources.minecraftButtonStateNormalXHDPI = "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGG5wT2wAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAADYHRhkAAAAVG5wVGMAAgIJIAAAACgAAAAAAAAIAAAACAAAAAwAAAAIMAAAAAAAAAQAAAAcAAAACAAAABz/vLGr/7yxqwAAAAH/vLGr/5WGgQAAAAH/cmVnAAAAAf8oJypkuTlTAAAAZUlEQVRYw2Pcs3H1f4YBBEwMAwxGHcBCbwu3btkzGgWDPA3cvHqNphZuP3R4NApGeDnA8P//aBSM9DTAyDgaBaMOGHXASC8HGEbrgsGWBrahtdO3HTyEVnYTLNxJrQxGo2BwOQAAWckRqcYME3kAAAAASUVORK5CYII=";
MinecraftButtonLibrary.Resources.minecraftButtonStateNormalXXHDPI = "iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGG5wT2wAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAADYHRhkAAAAVG5wVGMAAgIJIAAAACgAAAAAAAAMAAAADAAAABIAAAAMMAAAAAAAAAYAAAAqAAAADAAAACr/vLGr/7yxqwAAAAH/vLGr/5WGgQAAAAH/cmVnAAAAAf8oJypAoV45AAAAg0lEQVRo3u3ZwQmAMAyF4UTcfxFPgtZLL9YZFJwmTtCDINQ0/5sgHzxCQzXPk4njDOI8AABEB4xeBl2XTIUAAAi1he7z+tWgWzmoEAAAvIVaxowKAQDAFmoZVSoEAAAAAAAAAIj7FhIuMgAA+txCqfL3lPZSuYxen1JfnWRUCACAHgEPIUcRyZ0dVsEAAAAASUVORK5CYII=";
MinecraftButtonLibrary.Resources.minecraftButtonStatePressedLDPI = "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAGG5wT2wAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAADYHRhkAAAAVG5wVGMAAgIJIAAAACgAAAAAAAACAAAAAgAAAAIAAAADMAAAAAAAAAEAAAAHAAAAAQAAAAb/KCcqAAAAAf9yZWcAAAABAAAAAQAAAAEAAAABAAAAAQAAAAGZYAV4AAAAb0lEQVQY012OQQqDMBRE34Scwp1QsHgHs7CbGnv9UjzNuIjRxuHD/wzzhq/nMBrKIIENAhA5TUQwS0pUiZIFeK8zEVSAQy5Vpxdq3k3HdYbLq2xTRwBht2T9QxJxSRP588I2d9kmPvqO7ftryb+9AxX7IG5YZYu3AAAAAElFTkSuQmCC";
MinecraftButtonLibrary.Resources.minecraftButtonStatePressedMDPI = "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGG5wT2wAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAADYHRhkAAAAVG5wVGMAAgIJIAAAACgAAAAAAAAEAAAABAAAAAQAAAAGMAAAAAAAAAIAAAAOAAAAAgAAAAz/KCcqAAAAAf9yZWcAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEDO+tuAAAAkklEQVQ4y62SwQrCMAyGvwyfwpswcOwd7EEvbu71Zfg08ZIgi10ZtLm0CSn5/r+R4ToqAGwPRCy3gqV+mdMNgI7KOPnIKaVsgw/WUH++7s0IZCsxhP5Myfa184CgVf5cyJvTgiDarUYixV/wQrtfUC1rjiRim1pPMNlOz8vDSPTQQ++rJ+gvZwA+77WseSevJvgCGagihHTV1j0AAAAASUVORK5CYII=";
MinecraftButtonLibrary.Resources.minecraftButtonStatePressedHDPI = "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGG5wT2wAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAADYHRhkAAAAVG5wVGMAAgIJIAAAACgAAAAAAAAGAAAABgAAAAYAAAAJMAAAAAAAAAMAAAAVAAAAAwAAABL/KCcqAAAAAf9yZWcAAAABAAAAAQAAAAEAAAABAAAAAQAAAAGqizz1AAAAl0lEQVRIx92VwQqAIAyGXfQU3YKg6B3yUJe0Xj+ip1k3+QOHGXhoO+l0Ch/flIZ+ZBMiPjREkIcFSOPE2ymMK1M4il9QIwtnbbIAqbCwZ91mXYgoLoUQ/NQrWavMIiMYQqJHadVUIJK6iAEXZTUaLihrNOY8WyRcBM+7AkQOfh+/L4CLPx+KtQoQdW0TJtdx5tnyIv9/RDcytSKUL7bTXAAAAABJRU5ErkJggg==";
MinecraftButtonLibrary.Resources.minecraftButtonStatePressedXHDPI = "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGG5wT2wAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAADYHRhkAAAAVG5wVGMAAgIJIAAAACgAAAAAAAAIAAAACAAAAAgAAAAMMAAAAAAAAAQAAAAcAAAABAAAABj/KCcqAAAAAf9yZWcAAAABAAAAAQAAAAEAAAABAAAAAQAAAAHs/TEDAAAAqUlEQVRYw+2WwQqAIAyGXfQU3YKg6B3yUJe0Xj+ip1ln/8AhBnrYbroxhe/frzSNM5sg4ktDBHkogDRueLsE68YUDr1Ai5CdtUkNEDkL9fuxKoLqNEDxMRaCv0aR1E8R1OcDRphrEp0gzTgUQQ0akMydQROU9RZggSKo7y1gzptzSRMEf0pFUF4DDv7p/txAE/zrgdhPEZTXwNB3wcZz3XlznphXBMUv8AJ9bSKkEsE9twAAAABJRU5ErkJggg==";
MinecraftButtonLibrary.Resources.minecraftButtonStatePressedXXHDPI = "iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGG5wT2wAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAADYHRhkAAAAVG5wVGMAAgIJIAAAACgAAAAAAAALAAAACwAAAAsAAAARMAAAAAAAAAYAAAAqAAAABgAAACT/KCcqAAAAAf9yZWcAAAABAAAAAQAAAAEAAAABAAAAAQAAAAGV/cSjAAAAzElEQVRo3u2ZQQrCMBBFM9JTuBMEi3cwC93Y6vVFPM14gfzFQIpMfLNMJk0ffD5/WptPZy/Nii0XM9EvDoh2tbHWS3N9V5IXAAD8O8CkbGWptcsFymw8+Jz744qEAABgUBeyWFQJluvw1OVeJAQAAKNmoRLMMBZOQ31CFRICAID8LhQdpVy4UyzbRCcydQAJAQDAqBOZ+7bZJupOJr5+IyEAAMjuQov497Q+b8Kd/Ccvqu5FQgAAkN2Fjod9c+Pzem+bbTr1IyEAAEheX2f8IsSeFAnbAAAAAElFTkSuQmCC";

// font
MinecraftButtonLibrary.Resources.base64Font = "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AICAgID/AP8AAgCAgICAgICAAAAAAQAAAgAAgAOAAAMAABkBMxGAAgABgP6AAAAAAAUAAAAAAgADgAADAAcACwAPABMAACE1IRUlNTMVJREzGQE1MxU9ASEVAQABAP6AgP8AgIABAICAgICAgAGA/oABgICAgICAAAUAAAAAAgADgAADAAcACwAPABMAADE1IRU9ATMVNREzEQE1MxUlNSEVAQCAgP8AgP6AAQCAgICAgIABgP6AAYCAgICAgAAAAAUAAAEAAgACgAADAAcACwAPABMAABE1MxUhNTMVJTUhFSU1MxUhNTMVgAEAgP6AAQD+gIABAIABAICAgICAgICAgICAgAAAAAEAAACAAoADAAALAAAlESE1IREzESEVIREBAP8AAQCAAQD/AIABAIABAP8AgP8AAAEAAP+AAIABAAADAAAVETMRgIABgP6AAAEAAAGAAoACAAADAAARNSEVAoABgICAAAEAAAAAAIABAAADAAAxETMRgAEA/wAAAAUAAAAAAoADgAADAAcACwAPABMAADE1MxU1ETMZATUzFTURMxkBNTMVgICAgICAgIABAP8AAQCAgIABAP8AAQCAgAAABQAAAAACgAOAAAMABwAPABcAGwAAMzUhFQE1MxUBETMRMxUjFSERIzUzNTMRATUhFYABgP8AgP6AgICAAYCAgID+AAGAgIABgICA/wACgP6AgIABgICA/YACgICAAAAAAQAAAAACgAOAAAsAADE1IREjNTM1MxEhFQEAgICAAQCAAgCAgP0AgAAAAAAGAAAAAAKAA4AABwALAA8AEwAXABsAADERMxUhNTMRATUzFT0BIRUBNTMVBREzEQE1IRWAAYCA/gCAAQD+AIABgID+AAGAAQCAgP8AAQCAgICAgAEAgICAAQD/AAEAgIAAAAAABwAAAAACgAOAAAMABwALAA8AEwAXABsAADM1IRUlNTMVIREzEQE1IRUBNTMVBREzEQE1IRWAAYD+AIABgID+gAEA/gCAAYCA/gABgICAgICAAQD/AAEAgIABAICAgAEA/wABAICAAAADAAAAAAKAA4AAAwAHABMAABM1MxU9ATMVExEhETMVIREjNSERgICAgP4AgAGAgAEAAgCAgICAgP2AAQABAIABgID8gAAAAAAEAAAAAAKAA4AAAwAHAAsAEwAAMzUhFSU1MxUhETMRAREhFSEVIRWAAYD+AIABgID9gAKA/gABgICAgICAAYD+gAGAAYCAgIAAAAAABQAAAAACgAOAAAMABwAPABMAFwAAMzUhFTURMxEhETMVIRUhGQE1MxU9ASEVgAGAgP2AgAGA/oCAAQCAgIABAP8AAgCAgP8AAgCAgICAgAADAAAAAAKAA4AAAwAHAA8AACERMxkBNTMVNREhFSMRIREBAICA/oCAAoABgP6AAYCAgIABAIABAP6AAAAHAAAAAAKAA4AAAwAHAAsADwATABcAGwAAMzUhFSURMxEhETMRATUhFSURMxEhETMRATUhFYABgP4AgAGAgP4AAYD+AIABgID+AAGAgICAAQD/AAEA/wABAICAgAEA/wABAP8AAQCAgAAAAAAFAAAAAAKAA4AAAwAHAAsAEwAXAAAzNSEVPQEzFQERMxEBNSE1IREzEQE1IRWAAQCA/gCAAYD+gAGAgP4AAYCAgICAgAGAAQD/AP8AgIABAP4AAgCAgAAAAgAAAAAAgAKAAAMABwAAMREzEQMRMxGAgIABAP8AAYABAP8AAAAAAAIAAP+AAIACgAADAAcAABURMxEDETMRgICAgAGA/oACAAEA/wAAAAAHAAAAAAIAA4AAAwAHAAsADwATABcAGwAAITUzFSU1MxUlNTMVJTUzFT0BMxU9ATMVPQEzFQGAgP8AgP8AgP8AgICAgICAgICAgICAgICAgICAgICAgICAAAAAAAIAAACAAoACAAADAAcAAD0BIRUBNSEVAoD9gAKAgICAAQCAgAAAAAAHAAAAAAIAA4AAAwAHAAsADwATABcAGwAAMTUzFT0BMxU9ATMVPQEzFSU1MxUlNTMVJTUzFYCAgID/AID/AID/AICAgICAgICAgICAgICAgICAgICAgAAABgAAAAACgAOAAAMABwALAA8AEwAXAAAhNTMVAzUzFT0BMxUBNTMVBREzEQE1IRUBAICAgID+AIABgID+AAGAgIABAICAgICAAQCAgIABAP8AAQCAgAAAAAQAAAAAAwADgAADAAcADwATAAAzNSEVJREzETcRIREzETMRATUhFYACAP2AgIABAICA/YACAICAgAKA/YCAAYD/AAGA/gACAICAAAACAAAAAAKAA4AACwAPAAAxETMVITUzESMRIRkBNSEVgAGAgID+gAGAAwCAgP0AAgD+AAMAgIAAAAMAAAAAAoADgAADAAcAEwAAJREzEQM1MxUBESEVIRUhFSERIRUCAICAgP2AAgD+gAGA/oABgIABgP6AAgCAgP2AA4CAgID+gIAAAAAFAAAAAAKAA4AAAwAHAAsADwATAAAzNSEVPQEzFSERMxEBNTMVJTUhFYABgID9gIABgID+AAGAgICAgIACgP2AAgCAgICAgAACAAAAAAKAA4AAAwALAAAlETMRBREhFSERIRUCAID9gAIA/oABgIACgP2AgAOAgP2AgAAAAQAAAAACgAOAAAsAADERIRUhFSEVIREhFQKA/gABAP8AAgADgICAgP6AgAABAAAAAAKAA4AACQAAMREhFSEVIRUhEQKA/gABAP8AA4CAgID+AAAABAAAAAACgAOAAAMACQANABEAADM1IRU1ESM1IREhETMZATUhFYABgIABAP2AgAIAgICAAYCA/gACgP2AAoCAgAAAAAABAAAAAAKAA4AACwAAMREzESERMxEjESERgAGAgID+gAOA/wABAPyAAgD+AAAAAAABAAAAAAGAA4AACwAAMTUzESM1IRUjETMVgIABgICAgAKAgID9gIAAAwAAAAACgAOAAAMABwALAAAzNSEVJTUzFSERMxGAAYD+AIABgICAgICAgAMA/QAABQAAAAACgAOAAAMABwALABMAFwAAIREzEQE1MxUDNTMVAREzESEVIREBNTMVAgCA/wCAgID+AIABAP8AAYCAAYD+gAGAgIABAICA/YADgP8AgP4AAwCAgAAAAAABAAAAAAKAA4AABQAAMREzESEVgAIAA4D9AIAAAwAAAAACgAOAAAMACwATAAABNTMVAREzFTMVIxEhESM1MzUzEQEAgP6AgICAAYCAgIACAICA/gADgICA/YACgICA/IAAAAAAAwAAAAACgAOAAAMACwATAAABNTMVAREzFTMVIxEhESM1MxEzEQEAgP6AgICAAYCAgIACAICA/gADgICA/YABgIABgPyAAAAABAAAAAACgAOAAAMABwALAA8AADM1IRUlETMRIREzEQE1IRWAAYD+AIABgID+AAGAgICAAoD9gAKA/YACgICAAAIAAAAAAoADgAADAA0AAAE1MxUBESEVIRUhFSERAgCA/YACAP6AAYD+gAKAgID9gAOAgICA/gAABgAAAAACgAOAAAMABwALAA8AEwAXAAAzNSEVMzUzFSU1MxUhETMRJREzEQE1IRWAAQCAgP8AgP4AgAGAgP4AAYCAgICAgICAAoD9gIACAP4AAgCAgAAAAAMAAAAAAoADgAADAAcAEQAAIREzEQM1MxUBESEVIRUhFSERAgCAgID9gAIA/oABgP6AAgD+AAKAgID9gAOAgICA/gAABgAAAAACgAOAAAMABwALAA8AEwAXAAAzNSEVJTUzFSERMxEBNSEVJTUzFT0BIRWAAYD+AIABgID+AAGA/gCAAgCAgICAgAGA/oABgICAgICAgICAAAAAAAEAAAAAAoADgAAHAAAhESE1IRUhEQEA/wACgP8AAwCAgP0AAAMAAAAAAoADgAADAAcACwAAMzUhFSURMxEhETMRgAGA/gCAAYCAgICAAwD9AAMA/QAAAAAFAAAAAAKAA4AAAwAHAAsADwATAAAhNTMVJREzETMRMxEBETMRIREzEQEAgP8AgICA/gCAAYCAgICAAQD/AAEA/wABAAIA/gACAP4AAAAAAAMAAAAAAoADgAADAAsAEwAAATUzFQERMxEzFSMVITUjNTMRMxEBAID+gICAgAGAgICAAQCAgP8AA4D9gICAgIACgPyAAAAAAAkAAAAAAoADgAADAAcACwAPABMAFwAbAB8AIwAAMREzESERMxEBNTMVMzUzFSU1MxUlNTMVMzUzFSU1MxUhNTMVgAGAgP4AgICA/wCA/wCAgID+AIABgIABgP6AAYD+gAGAgICAgICAgICAgICAgICAgIAABQAAAAACgAOAAAMABwALAA8AEwAAIREzEQE1MxUzNTMVJTUzFSE1MxUBAID/AICAgP4AgAGAgAKA/YACgICAgICAgICAgAAABQAAAAACgAOAAAUACQANABEAFwAAMREzFSEVATUzFT0BMxU9ATMVPQEhNSERgAIA/gCAgID+AAKAAQCAgAEAgICAgICAgICAgID/AAAAAAABAAAAAAGAA4AABwAAMREhFSERIRUBgP8AAQADgID9gIAAAAAFAAAAAAKAA4AAAwAHAAsADwATAAAhNTMVJREzEQE1MxUlETMRATUzFQIAgP8AgP8AgP8AgP8AgICAgAEA/wABAICAgAEA/wABAICAAAAAAAEAAAAAAYADgAAHAAAxNSERITUhEQEA/wABgIACgID8gAAAAAUAAAIAAoADgAADAAcACwAPABMAABE1MxUhNTMVJTUzFTM1MxUlNTMVgAGAgP4AgICA/wCAAgCAgICAgICAgICAgIAAAQAA/4ACgAAAAAMAABU1IRUCgICAgAAAAQAAAwABAAOAAAMAABE1IRUBAAMAgIAAAwAAAAACgAKAAAMADQARAAA9ATMdATUhNSE1ITUzEQE1IRWAAYD+gAGAgP4AAYCAgICAgICAgP4AAgCAgAAAAAMAAAAAAoADgAADAAcAEQAAJREzEQE1IRUBETMRMxUjESEVAgCA/oABAP4AgICAAYCAAYD+gAGAgID+AAOA/oCA/wCAAAAAAAUAAAAAAoACgAADAAcACwAPABMAADM1IRU9ATMVIREzEQE1MxUlNSEVgAGAgP2AgAGAgP4AAYCAgICAgAGA/oABAICAgICAAAMAAAAAAoADgAADAAcAEQAANREzGQE1IRUBNSERIzUzETMRgAEA/wABgICAgIABgP6AAYCAgP4AgAEAgAGA/IAAAAAAAwAAAAACgAKAAAMADQARAAAzNSEVJREzFSE1MxEhFRE1IRWAAgD9gIABgID+AAGAgICAAYCAgP8AgAGAgIAAAAIAAAAAAgADgAALAA8AADMRIzUzNTMVIRUhGQE1IRWAgICAAQD/AAEAAgCAgICA/gADAICAAAAAAwAA/4ACgAKAAAMABwARAAAVNSEVAREzEQE1ITUhESE1IRECAP4AgAGA/oABgP6AAgCAgIABgAEA/wD/AICAAQCA/YAAAAAAAwAAAAACgAOAAAMABwAPAAAhETMRATUhFQERMxEzFSMRAgCA/oABAP4AgICAAgD+AAIAgID+AAOA/oCA/oAAAAIAAAAAAIADgAADAAcAADERMxEDNTMVgICAAoD9gAMAgIAAAAQAAP+AAoADAAADAAcACwAPAAAXNSEVJREzESERMxEDNTMVgAGA/gCAAYCAgICAgICAAQD/AAIA/gACgICAAAAFAAAAAAIAA4AAAwAHAAsADwAXAAAhNTMVJTUzFQM1MxU9ATMVAREzETMVIxEBgID/AICAgID+AICAgICAgICAAQCAgICAgP4AA4D+AID/AAAAAAACAAAAAAEAA4AAAwAHAAAzNTMVJREzEYCA/wCAgICAAwD9AAAEAAAAAAKAAoAAAwAHAA0AEQAAAREzERMRMxEhESEVIxEBNTMVAQCAgID9gAEAgAEAgAEAAQD/AP8AAgD+AAKAgP4AAgCAgAACAAAAAAKAAoAAAwAJAAAhETMRIREhFSERAgCA/YACAP6AAgD+AAKAgP4AAAQAAAAAAoACgAADAAcACwAPAAAzNSEVJREzESERMxEBNSEVgAGA/gCAAYCA/gABgICAgAGA/oABgP6AAYCAgAADAAD/gAKAAoAAAwAPABMAAAERMxEBETMVMxUjFSEVIRETNSEVAgCA/YCAgIABgP6AgAEAAQABAP8A/oADAICAgID/AAKAgIAAAAAAAwAA/4ACgAKAAAMABwATAAAZATMZATUhFRMRITUhNSM1MzUzEYABAID+gAGAgICAAQABAP8AAQCAgP2AAQCAgICA/QAAAAAAAwAAAAACgAKAAAMACwAPAAABNTMVAREzFTMVIxETNSEVAgCA/YCAgICAAQABgICA/oACgICA/oACAICAAAAAAAUAAAAAAoACgAADAAcACwAPABMAADE1IRU9ATMVJTUhFSU1MxU9ASEVAgCA/gABgP4AgAIAgICAgICAgICAgICAgIAAAgAAAAABgAOAAAMADwAAITUzFSURIzUzETMRMxUjEQEAgP8AgICAgICAgIABgIABAP8AgP6AAAACAAAAAAKAAoAAAwAJAAA1ETMRFTUhETMRgAGAgIACAP4AgIACAP2AAAAAAAUAAAAAAoACgAADAAcACwAPABMAACE1MxUlNTMVMzUzFSURMxEhETMRAQCA/wCAgID+AIABgICAgICAgICAgAGA/oABgP6AAAIAAAAAAoACgAADAA0AADURMxEVNTMRMxEzETMRgICAgICAAgD+AICAAQD/AAIA/YAAAAAJAAAAAAKAAoAAAwAHAAsADwATABcAGwAfACMAADE1MxUhNTMVJTUzFTM1MxUlNTMVJTUzFTM1MxUlNTMVITUzFYABgID+AICAgP8AgP8AgICA/gCAAYCAgICAgICAgICAgICAgICAgICAgICAgAAAAwAA/4ACgAKAAAMABwAPAAAXNSEVAREzEQE1ITUhETMRgAGA/gCAAYD+gAGAgICAgAGAAYD+gP8AgIABgP2AAAMAAAAAAoACgAAHAAsAEwAAMTUzNTMVIRUBNTMVPQEhNSEVIxWAgAGA/oCA/oACgICAgICAAQCAgICAgICAAAAFAAAAAAIAA4AAAwAHAAsADwATAAAhNSEVJREzEQE1MxU1ETMZATUhFQEAAQD+gID/AICAAQCAgIABAP8AAQCAgIABAP8AAQCAgAAAAQAAAAAAgAOAAAMAADERMxGAA4D8gAAABQAAAAACAAOAAAMABwALAA8AEwAAMTUhFTURMxkBNTMVJREzEQE1IRUBAICA/wCA/oABAICAgAEA/wABAICAgAEA/wABAICAAAAAAAQAAAKAAwADgAADAAcACwAPAAARNTMVITUhFSU1IRUhNTMVgAEAAQD+AAEAAQCAAoCAgICAgICAgIAAAAIAAAAAAIADgAADAAcAADERMxEDNTMVgICAAoD9gAMAgIAAAAMAAAAAAgADAAADAAcACwAAMzUhFSURMxkBNSEVgAGA/gCAAYCAgIACAP4AAgCAgAAAAAACAAAAAAIAAwAADwATAAAxNTMRIzUzNTMVMxUjESEVATUzFYCAgICAgAEA/wCAgAEAgICAgP8AgAKAgIAAAAAABQAAAQABgAKAAAMABwALAA8AEwAAETUzFTM1MxUlNTMVJTUzFTM1MxWAgID/AID/AICAgAEAgICAgICAgICAgICAAAAFAAAAAAKAA4AAEwAXABsAHwAjAAAhNSM1MzUjNTM1MxUzFSMVMxUjFQE1MxUzNTMVJTUzFSE1MxUBAICAgICAgICAgP8AgICA/gCAAYCAgICAgICAgICAgAKAgICAgICAgICAAAAAAAIAAAAAAIADgAADAAcAADERMxEDETMRgICAAYD+gAIAAYD+gAAAAAAFAAD/gAKAAwAABwALAA8AEwAbAAAFNSM1IRUjFRM1MxUhETMRATUzFSU1MzUzFTMVAQCAAYCAgID9gIABgID+AICAgICAgICAAQCAgAGA/oABAICAgICAgIAAAAMAAAAAAwADgAAHAAsADwAAAREhFSMVMxUXESERBxEhEQEAAQCAgID+AIADAAEAAYCAgICAAoD9gIADgPyAAAABAAABAAGAAwAABwAAGQEhNSE1IREBAP8AAYABAAEAgID+AAAKAAAAAAKAAoAAAwAHAAsADwATABcAGwAfACMAJwAAITUzFTM1MxUlNTMVMzUzFSU1MxUzNTMVJTUzFTM1MxUlNTMVMzUzFQEAgICA/gCAgID+AICAgP8AgICA/wCAgICAgICAgICAgICAgICAgICAgICAgICAgIAAAAAAAQAAAIACgAGAAAUAACU1ITUhEQIA/gACgICAgP8AAAABAIABAAIAAYAAAwAAEzUhFYABgAEAgIAAAAAAAwAAAAADAAOAAAUADQARAAABESERIxUFNSM1MxEhEQcRIREBAAEAgAEAgID+AIADAAEAAYD/AICAgIABgP2AgAOA/IAAAAAAAQAAAwACgAOAAAMAABE1IRUCgAMAgIAAAgAAAgABgAOAAAMABwAAATUjFQcRIREBAICAAYACgICAgAGA/oAAAAIAAP+AAoADAAADAA8AABU1IRUBESE1IREzESEVIRECgP6A/wABAIABAP8AgICAAQABAIABAP8AgP8AAAIAAAIAAQADgAAFAAkAABkBMxUzFQM1MxWAgICAAgABAICAAQCAgAABAAACAAEAA4AABwAAETUzNSM1IRGAgAEAAgCAgID+gAAAAAABAYADAAKAA4AAAwAAATUhFQGAAQADAICAAAAAAQAA/4ACgAMAAAkAABURMxEhETMRIRWAAYCA/gCAA4D9gAKA/QCAAAMAAAAAAoADAAADAA0AEQAAETUzFRMRIzUzNSM1IREzETMRgICAgIABAICAAgCAgP4AAYCAgID9AAMA/QAAAAABAAABgACAAgAAAwAAETUzFYABgICAAAACAID/gAIAAIAAAwAHAAAXNSEVPQEzFYABAICAgICAgIAAAAABAAACgACAA4AAAwAAGQEzEYACgAEA/wAAAAAAAgAAAgABgAOAAAMABwAAATUjFQcRIREBAICAAYACgICAgAGA/oAAAAoAAAAAAoACgAADAAcACwAPABMAFwAbAB8AIwAnAAAxNTMVMzUzFSU1MxUzNTMVJTUzFTM1MxUlNTMVMzUzFSU1MxUzNTMVgICA/wCAgID/AICAgP4AgICA/gCAgICAgICAgICAgICAgICAgICAgICAgICAgIAAAAgAAAAAAoADgAADAAkADQARABUAGQAdACEAADE1MxUhETMVMxUlETMRJTUzFSU1MxU1ETMRJREzESU1MxWAAQCAgP4AgAEAgP6AgID+AIABgICAgAEAgICAAQD/AICAgICAgIABAP8AgAEA/wCAgIAAAAAABwAAAAACgAOAAAMABwANABEAFQAZAB0AADE1MxU1ETMRBTUjESERATUzFTURMxElETMRJTUzFYCAAQCAAQD+gICA/gCAAYCAgICAAQD/AICAAQD+gAGAgICAAQD/AIABAP8AgICAAAAHAAAAAAKAA4AAAwAHAA0AEQAVAB0AIQAAMTUzFTURMxEFNSMRIREBNTMVNREzESE1MzUjNSERATUzFYCAAQCAAQD+gICA/gCAgAEAAQCAgICAAQD/AICAAQD+gAGAgICAAQD/AICAgP6AAQCAgAAABgAAAAACgAOAAAMABwALAA8AEwAXAAAzNSEVPQEzFSERMxkBNTMVPQEzFQM1MxWAAYCA/YCAgICAgICAgICAAQD/AAEAgICAgIABAICAAAADAAAAAAKAA4AACwAPABMAADERMxUhNTMRIxEhGQE1IRUBNSEVgAGAgID+gAGA/gABAAIAgID+AAEA/wACAICAAQCAgAAAAAADAAAAAAKAA4AACwAPABMAADERMxUhNTMRIxEhGQE1IRUDNSEVgAGAgID+gAGAgAEAAgCAgP4AAQD/AAIAgIABAICAAAUAAAAAAoADgAALAA8AEwAXABsAADERMxUhNTMRIxEhGQE1IRUlNTMVITUzFSU1IRWAAYCAgP6AAYD+AIABgID+AAGAAgCAgP4AAQD/AAIAgICAgICAgICAgAAABQAAAAADAAOAAAsADwAXABsAHwAAMREzFSE1MxEjESERAzUzHQE1ITUhFSMVATUhFSE1MxWAAYCAgP6AgIABAAEAgP6AAQABAIACAICA/gABAP8AAoCAgICAgICAAQCAgICAAAQAAAAAAoADgAALAA8AEwAXAAAxETMVITUzESMRIRkBNSEVATUzFTM1MxWAAYCAgP6AAYD+gICAgAIAgID+AAEA/wACAICAAQCAgICAAAAAAwAAAAACgAOAAAsADwATAAAxETMVITUzESMRIRkBNSEVATUzFYABgICA/oABgP8AgAIAgID+AAEA/wACAICAAQCAgAABAAAAAAKAA4AAFQAAMREzFTM1IzUhFSEVMxUjESEVIREjEYCAgAIA/wCAgAEA/oCAAwCAgICAgID+gIACAP4AAAAAAAcAAP+AAoADgAADAAcACwAPABMAFwAbAAAFNSEVPQEzFSU1IRU9ATMVIREzEQE1MxUlNSEVAQABAID+AAGAgP2AgAGAgP4AAYCAgICAgICAgICAgIACAP4AAYCAgICAgAAAAAACAAAAAAKAA4AACwAPAAAxESEVIRUhFSEVIRUBNSEVAoD+AAEA/wACAP2AAQACgICAgICAAwCAgAAAAAACAAAAAAKAA4AACwAPAAAxESEVIRUhFSEVIRUBNSEVAoD+AAEA/wACAP8AAQACgICAgICAAwCAgAAAAAAFAAAAAAKAA4AACQANABEAFQAZAAAxETMVIRUhFSEVATUhFSU1MxUhNTMVJTUhFYABAP8AAgD+AAGA/gCAAYCA/gABgAIAgICAgAIAgICAgICAgICAgAAAAwAAAAACgAOAAAsADwATAAAxESEVIRUhFSEVIRUBNTMVMzUzFQKA/gABAP8AAgD+AICAgAKAgICAgIADAICAgIAAAAACAAAAAAIAA4AACwAPAAAzNTMRIzUhFSMRMxUBNSEVgICAAYCAgP4AAQCAAYCAgP6AgAMAgIAAAAIAgAAAAoADgAALAA8AADM1MxEjNSEVIxEzFQM1IRWAgIABgICAgAEAgAGAgID+gIADAICAAAAABAAAAAACgAOAAAsADwATABcAADM1MxEjNSEVIxEzFQE1MxUhNTMVJTUhFYCAgAGAgID+AIABgID+AAGAgAGAgID+gIACgICAgICAgIAAAAADAAAAAAGAA4AACwAPABMAADE1MxEjNSEVIxEzFQE1MxUzNTMVgIABgICA/oCAgICAAYCAgP6AgAMAgICAgAAAAgAAAAADAAOAAAMAEwAAJREzEQURIzUzESEVIREzFSMRIRUCgID9gICAAgD+gICAAYCAAoD9gIABgIABgID/AID/AIAAAAAABQAAAAADAAOAAAMACwAVABkAHQAAATUzFQERMxEzFSMRITUjNTMRIzUhEQE1IRUhNTMVAQCA/oCAgIABgICAgAEA/gABAAEAgAEAgID/AAMA/wCA/oCAgAGAgP0AAwCAgICAAAUAAAAAAoADgAADAAcACwAPABMAADM1IRUlETMRIREzEQE1IRUBNSEVgAGA/gCAAYCA/gABgP4AAQCAgIABgP6AAYD+gAGAgIABAICAAAAABQAAAAACgAOAAAMABwALAA8AEwAAMzUhFSURMxEhETMRATUhFQM1IRWAAYD+AIABgID+AAGAgAEAgICAAYD+gAGA/oABgICAAQCAgAAAAAAHAAAAAAKAA4AAAwAHAAsADwATABcAGwAAMzUhFSURMxEhETMRATUhFSU1MxUhNTMVJTUhFYABgP4AgAGAgP4AAYD+AIABgID+AAGAgICAAYD+gAGA/oABgICAgICAgICAgIAABwAAAAADAAOAAAMABwALAA8AFwAbAB8AADM1IRUlETMRIREzEQE1Mx0BNSE1IRUjFQE1IRUhNTMVgAGA/gCAAYCA/YCAAQABAID+gAEAAQCAgICAAYD+gAGA/oACAICAgICAgIABAICAgIAABgAAAAACgAOAAAMABwALAA8AEwAXAAAzNSEVJREzESERMxEBNSEVJTUzFSE1MxWAAYD+AIABgID+AAGA/gCAAYCAgICAAgD+AAIA/gACAICAgICAgIAAAAkAAACAAoADAAADAAcACwAPABMAFwAbAB8AIwAAPQEzFSE1MxUlNTMVMzUzFSU1MxUlNTMVMzUzFSU1MxUhNTMVgAGAgP4AgICA/wCA/wCAgID+AIABgICAgICAgICAgICAgICAgICAgICAgICAgAADAAAAAAKAA4AAAwANABcAAAERMxEBNSMRMxEzFSEVNREjNSE1IRUzEQEAgP8AgICAAQCA/wABgIABAAGA/oD/AIACgP4AgICAAgCAgID9gAAAAAAEAAAAAAKAA4AAAwAHAAsADwAAMzUhFSURMxEhETMRATUhFYABgP4AgAGAgP2AAQCAgIACAP4AAgD+AAKAgIAABAAAAAACgAOAAAMABwALAA8AADM1IRUlETMRIREzEQE1IRWAAYD+AIABgID/AAEAgICAAgD+AAIA/gACgICAAAYAAAAAAoADgAADAAcACwAPABMAFwAAMzUhFSURMxEhETMRATUzFSE1MxUlNSEVgAGA/gCAAYCA/YCAAYCA/gABgICAgAGA/oABgP6AAgCAgICAgICAAAAFAAAAAAKAA4AAAwAHAAsADwATAAAzNSEVJREzESERMxEBNTMVMzUzFYABgP4AgAGAgP4AgICAgICAAgD+AAIA/gACgICAgIAAAAAABgAAAAACgAOAAAMABwALAA8AEwAXAAAhETMRATUzFTM1MxUlNTMVITUzFQE1IRUBAID/AICAgP4AgAGAgP2AAQABgP6AAYCAgICAgICAgIABAICAAAAAAAMAAP+AAoADAAADAAcAEwAAJREzEQE1IRUBETMRMxUjESEVIRUCAID+gAEA/gCAgIABgP6AgAGA/oABgICA/YADgP8AgP8AgIAAAAAEAAAAAAKAA4AAAwANABEAFQAAPQEzHQE1ITUhNSE1MxEBNSEVATUhFYABgP6AAYCA/gABgP4AAQCAgICAgICAgP4AAgCAgAEAgIAABAAAAAACgAOAAAMADQARABUAAD0BMx0BNSE1ITUhNTMRATUhFQM1IRWAAYD+gAGAgP4AAYCAAQCAgICAgICAgP4AAgCAgAEAgIAAAAYAAAAAAoADgAADAA0AEQAVABkAHQAAPQEzHQE1ITUhNSE1MxEBNSEVJTUzFSE1MxUlNSEVgAGA/oABgID+AAGA/gCAAYCA/gABgICAgICAgICA/gACAICAgICAgICAgIAAAAAGAAAAAAMAA4AAAwANABEAGQAdACEAAD0BMx0BNSE1ITUhNTMRATUzHQE1ITUhFSMVATUhFSE1MxWAAYD+gAGAgP2AgAEAAQCA/oABAAEAgICAgICAgICA/gACgICAgICAgIABAICAgIAAAAAFAAAAAAKAA4AAAwANABEAFQAZAAA9ATMdATUhNSE1ITUzEQE1IRUBNTMVMzUzFYABgP6AAYCA/gABgP6AgICAgICAgICAgID+AAIAgIABAICAgIAAAAAABAAAAAACgAOAAAMADQARABUAAD0BMx0BNSE1ITUhNTMRATUhFQE1MxWAAYD+gAGAgP4AAYD/AICAgICAgICAgP4AAgCAgAEAgIAAAAQAAAAAAoACgAADABUAGQAdAAA9ATMdATUzNSM1MzUzFTM1MxEhFSEVATUzFTM1MxWAgICAgICA/wABAP4AgICAgICAgICAgICAgP8AgIACAICAgIAAAAAHAAD/gAKAAwAAAwAHAAsADwATABcAGwAABTUhFT0BMxUlNSEVPQEzFSERMxEBNTMVJTUhFQEAAQCA/gABgID9gIABgID+AAGAgICAgICAgICAgICAAYD+gAEAgICAgIAAAAAABAAAAAACgAOAAAMADQARABUAADM1IRUlETMVITUzESEVETUhFQE1IRWAAgD9gIABgID+AAGA/gABAICAgAGAgID/AIABgICAAQCAgAAAAAAEAAAAAAKAA4AAAwANABEAFQAAMzUhFSURMxUhNTMRIRURNSEVAzUhFYACAP2AgAGAgP4AAYCAAQCAgIABgICA/wCAAYCAgAEAgIAABgAAAAACgAOAAAMADQARABUAGQAdAAAzNSEVJREzFSE1MxEhFRE1IRUlNTMVITUzFSU1IRWAAgD9gIABgID+AAGA/gCAAYCA/gABgICAgAGAgID/AIABgICAgICAgICAgIAAAAUAAAAAAoADgAADAA0AEQAVABkAADM1IRUlETMVITUzESEVETUhFQE1MxUzNTMVgAIA/YCAAYCA/gABgP6AgICAgICAAYCAgP8AgAGAgIABAICAgIAAAAACAAAAAAEAA4AAAwAHAAAzETMRATUhFYCA/wABAAKA/YADAICAAAAAAgAAAAABAAOAAAMABwAAMREzEQM1IRWAgAEAAoD9gAMAgIAABAAAAAACgAOAAAMABwALAA8AACERMxEBNTMVITUzFSU1IRUBAID+gIABgID+AAGAAoD9gAKAgICAgICAgAAAAAMAgAAAAgADgAADAAcACwAAIREzEQE1MxUzNTMVAQCA/wCAgIACgP2AAwCAgICAAAQAAAAAAwADgAADAA8AEwAXAAAhETMRIREzFSE1IRUjFSEZATUhFSE1MxUCAID9gIABAAEAgP6AAQABAIACAP4AAwCAgICA/gADAICAgIAABQAAAAACgAOAAAMABwALAA8AEwAAMzUhFSURMxEhETMRATUhFQE1IRWAAYD+AIABgID+AAGA/gABAICAgAGA/oABgP6AAYCAgAEAgIAAAAAFAAAAAAKAA4AAAwAHAAsADwATAAAzNSEVJREzESERMxEBNSEVAzUhFYABgP4AgAGAgP4AAYCAAQCAgIABgP6AAYD+gAGAgIABAICAAAAAAAcAAAAAAoADgAADAAcACwAPABMAFwAbAAAzNSEVJREzESERMxEBNSEVJTUzFSE1MxUlNSEVgAGA/gCAAYCA/gABgP4AgAGAgP4AAYCAgIABgP6AAYD+gAGAgICAgICAgICAgAAHAAAAAAMAA4AAAwAHAAsADwAXABsAHwAAMzUhFSURMxEhETMRATUzHQE1ITUhFSMVATUhFSE1MxWAAYD+AIABgID9gIABAAEAgP6AAQABAICAgIABgP6AAYD+gAIAgICAgICAgAEAgICAgAAGAAAAAAKAA4AAAwAHAAsADwATABcAADM1IRUlETMRIREzEQE1IRUBNTMVMzUzFYABgP4AgAGAgP4AAYD+gICAgICAgAGA/oABgP6AAYCAgAEAgICAgAAAAwAAAIACgAMAAAMABwALAAAlNTMVATUhFQE1MxUBAID+gAKA/oCAgICAAQCAgAEAgIAAAAMAAAAAAoACgAADAA0AFwAAATUzFQE1IxEzETMVIRU1ESM1ITUhFTMRAQCA/wCAgIABAID/AAGAgAEAgID/AIABgP8AgICAAQCAgID+gAAAAwAAAAACgAOAAAMACQANAAA1ETMRFTUhETMRATUhFYABgID9gAEAgAIA/gCAgAIA/YADAICAAAADAAAAAAKAA4AAAwAJAA0AADURMxEVNSERMxEBNSEVgAGAgP8AAQCAAgD+AICAAgD9gAMAgIAAAAUAAAAAAoADgAADAAkADQARABUAADURMxEVNSERMxEBNTMVITUzFSU1IRWAAYCA/YCAAYCA/gABgIABgP6AgIABgP4AAoCAgICAgICAAAAABAAAAAACgAOAAAMACQANABEAADURMxEVNSERMxEBNTMVMzUzFYABgID+AICAgIACAP4AgIACAP2AAwCAgICAAAQAAP+AAoADgAADAAcADwATAAAXNSEVAREzEQE1ITUhETMRATUhFYABgP4AgAGA/oABgID9gAEAgICAAYABgP6A/wCAgAGA/YADAICAAAAAAwAA/4ACgAOAAAMABwATAAAlETMRATUhFQERMxEzFSMRIRUhFQIAgP6AAQD+AICAgAGA/oCAAYD+gAGAgID9gAQA/oCA/wCAgAAAAAUAAP+AAoADgAADAAcADwATABcAABc1IRUBETMRATUhNSERMxEBNTMVMzUzFYABgP4AgAGA/oABgID+AICAgICAgAGAAYD+gP8AgIABgP2AAwCAgICAAAACAAAAAAKAA4AAAwATAAA1ETMRFTUzESM1IRUhFTMVIxEhFYCAgAIA/wCAgAEAgAKA/YCAgAKAgICAgP6AgAAABQAAAAACgAKAAAMABwALAA8AGwAAMzUzFTM1IRUlETMZATUzFRkBMxUzNSM1IREhFYCAgAEA/YCAgICAgAEA/wCAgICAgAGA/oABgICA/oABgICAgP6AgAAAAAAHAAAAAAKAA4AAAwAHAAsADwATABcAGwAAIREzEQE1MxUzNTMVJTUzFSE1MxUBNTMVMzUzFQEAgP8AgICA/gCAAYCA/gCAgIABgP6AAYCAgICAgICAgIABAICAgIAAAAABAAABgAMAAgAAAwAAETUhFQMAAYCAgAACAAACAAEAA4AAAwAHAAAZATMZATUzFYCAAgABAP8AAQCAgAACAAACAAEAA4AAAwAHAAARNTMVNREzEYCAAgCAgIABAP8AAAACAAD/gAEAAQAAAwAHAAAVNTMVNREzEYCAgICAgAEA/wAAAAACAAACAAEAA4AAAwAHAAATNTMVJREzEYCA/wCAAgCAgIABAP8AAAAABAAAAgACAAOAAAMABwALAA8AABkBMxEzETMRATUzFTM1MxWAgID/AICAgAIAAQD/AAEA/wABAICAgIAABAAAAgACAAOAAAMABwALAA8AABE1MxUzNTMVJREzETMRMxGAgID/AICAgAIAgICAgIABAP8AAQD/AAAABAAA/4ACAAEAAAMABwALAA8AABU1MxUzNTMVJREzETMRMxGAgID/AICAgICAgICAgAEA/wABAP8AAAAAAQAAAAABgAMAAAsAADMRIzUzETMRMxUjEYCAgICAgAGAgAEA/wCA/oAAAAABAAABgAEAAoAAAwAAGQEhEQEAAYABAP8AAAAAAwAAAAACgACAAAMABwALAAAxNTMVMzUzFTM1MxWAgICAgICAgICAgAAAAAADAAAAAAEAAYAAAwAHAAsAADM1MxUlNTMVPQEzFYCA/wCAgICAgICAgICAAAMAAAAAAQABgAADAAcACwAAMTUzFT0BMxUlNTMVgID/AICAgICAgICAgAAAAwAAAAACgAOAAAMAFwAbAAAhNSEVJTUjNTM1IzUzNTMVIRUhFSEVIRURNSEVAQABgP4AgICAgIABAP8AAQD/AAGAgICAgICAgICAgICAgAKAgIAAAgAAAgAEgAOAAAcAEwAAExEjNSEVIxEhESERIxEjFSM1IxGAgAGAgAEAAoCAgICAAgABAICA/wABgP6AAQCAgP8AAAAAACABhgABAAAAAAAAASUCTAABAAAAAAABAAkDhgABAAAAAAACAAcDoAABAAAAAAADABEDzAABAAAAAAAEABEEAgABAAAAAAAFAAsELAABAAAAAAAGAAkETAABAAAAAAAHAGMFHgABAAAAAAAIABYFsAABAAAAAAAJAAUF0wABAAAAAAAKASUIJQABAAAAAAALAB8JiwABAAAAAAAMABEJzwABAAAAAAANACgKMwABAAAAAAAOAC4KugABAAAAAAATABsLIQADAAEECQAAAkoAAAADAAEECQABABIDcgADAAEECQACAA4DkAADAAEECQADACIDqAADAAEECQAEACID3gAD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IgAgAGYAbwBuAHQAIABpAHMAIAB1AG4AZABlAHIAIABDAHIAZQBhAHQAaQB2AGUAIABDAG8AbQBtAG8AbgBzACAATABpAGMAZQBuAHMAZQAgACgAUwBoAGEAcgBlACAAQQBsAGkAawBlACkALgANAAoADQAKAFQAaABlACAAIgBEAGoARABDAEgAIgAgAG4AYQBtAGUAIABpAHMAIABvAHcAbgAgAGIAeQAgAG0AZQAgACgAZABqAGQAYwBoAC4AYwBvAG0AKQAuAA0ACgANAAoAVABoAGUAIAAiAE0AaQBuAGUAYwByAGEAZgB0ACIAIABmAG8AbgB0ACAAcwB0AHkAbABlACAAdwBhAHMAIABtAGEAZABlACAAYgB5ACAATgBvAHQAYwBoAC4ADQAKAA0ACgBUAGgAZQAgACIATQBpAG4AZQBjAHIAYQBmAHQAIgAgAGcAYQBtAGUAIABpAHMAIABvAHcAbgAgAGIAeQAgAE0AbwBqAGEAbgBnACAAUwBwAGUAYwBpAGYAaQBjAGEAdABpAG8AbgBzAC4AAFRoaXMgIk1pbmVjcmFmdCIgZm9udCB3YXMgYWRhcHRlZCBpbnRvIFRydWVUeXBlIGZpbGUgYnkgbWUgKERqRENIKS4NCg0KVGhpcyAiTWluZWNyYWZ0IiBmb250IGlzIHVuZGVyIENyZWF0aXZlIENvbW1vbnMgTGljZW5zZSAoU2hhcmUgQWxpa2UpLg0KDQpUaGUgIkRqRENIIiBuYW1lIGlzIG93biBieSBtZSAoZGpkY2guY29tKS4NCg0KVGhlICJNaW5lY3JhZnQiIGZvbnQgc3R5bGUgd2FzIG1hZGUgYnkgTm90Y2guDQoNClRoZSAiTWluZWNyYWZ0IiBnYW1lIGlzIG93biBieSBNb2phbmcgU3BlY2lmaWNhdGlvbnMuAABoAHQAdABwADoALwAvAGYAbwBuAHQAcwB0AHIAdQBjAHQALgBmAG8AbgB0AHMAaABvAHAALgBjAG8AbQAvAABodHRwOi8vZm9udHN0cnVjdC5mb250c2hvcC5jb20vAABoAHQAdABwADoALwAvAGQAagBkAGMAaAAuAGMAbwBtAC8AAGh0dHA6Ly9kamRjaC5jb20vAABDAHIAZQBhAHQAaQB2AGUAIABDAG8AbQBtAG8AbgBzACAAQQB0AHQAcgBpAGIAdQB0AGkAbwBuACAAUwBoAGEAcgBlACAAQQBsAGkAawBlAABDcmVhdGl2ZSBDb21tb25zIEF0dHJpYnV0aW9uIFNoYXJlIEFsaWtlAABoAHQAdABwADoALwAvAGMAcgBlAGEAdABpAHYAZQBjAG8AbQBtAG8AbgBzAC4AbwByAGcALwBsAGkAYwBlAG4AcwBlAHMALwBiAHkALQBzAGEALwAzAC4AMAAvAABodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS8zLjAvAABNAGkAbgBlAGMAcgBhAGYAdAAgAGkAcwAgAGoAdQBzAHQAIABhAHcAZQBzAG8AbQBlACAAIQAATWluZWNyYWZ0IGlzIGp1c3QgYXdlc29tZSAhAAAAAgAAAAAAAABlADMAAAAAAAAAAAAAAAAAAAAAAAAAAADQAAABAgEDAAMABAAFAAYABwAIAAkACgALAAwADQAOAA8AEAARABIAEwAUABUAFgAXABgAGQAaABsAHAAdAB4AHwAgACEAIgAjACQAJQAmACcAKAApACoAKwAsAC0ALgAvADAAMQAyADMANAA1ADYANwA4ADkAOgA7ADwAPQA+AD8AQABBAEIAQwBEAEUARgBHAEgASQBKAEsATABNAE4ATwBQAFEAUgBTAFQAVQBWAFcAWABZAFoAWwBcAF0AXgBfAGAAYQCjAIQAhQC9AJYA6ACOAIsAnQCpAKQBBACKANoAgwCTAQUBBgCNAQcAiADDAN4BCACeAKoA9QD0APYAogCtAMkAxwCuAGIAYwCQAGQAywBlAMgAygDPAMwAzQDOAOkAZgDTANAA0QCvAGcA8ACRANYA1ADVAGgA6wDtAGoAaQBrAG0AbABuAKAAbwBxAHAAcgBzAHUAdAB2AHcAeAB6AHkAewB9AHwAuAChAH8AfgCAAIEA7ADuALoAsACxALsAswC2ALcAxAEJALQAtQDFAIIAhwCrAL4AvwEKAIwGZ2x5cGgxB3VuaTAwMEQHdW5pMDBBRAd1bmkwMEIyB3VuaTAwQjMHdW5pMDBCNQd1bmkwMEI5DXF1b3RlcmV2ZXJzZWQERXVybwAAAAH//wACAAEAAAAOAAAAGAAAAAAAAgABAAEAzwABAAQAAAACAAAAAAABAAAAAMw9os8AAAAAyO86mAAAAADI8I+a";

//########################################################################################################################################################
// START CREATION OF RESOURCES
//########################################################################################################################################################

new java.lang.Thread(new java.lang.Runnable()
{
	run: function()
	{
		try
		{
			MinecraftButtonLibrary.createNinePatchDrawables();
			MinecraftButtonLibrary.createTypeface();

			MinecraftButtonLibrary.removeResources();
		} catch(e)
		{
			print("Error " + e);
		}
	}
}).start();

