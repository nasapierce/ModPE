/*Craftable Mobs Mod By Darkserver
Credit to:
Thecactigod - Helping with earlier verions,
Darkcube_lord704 - Helping with earlier versions,
MyNameIsAnti - For letting me use his render types in earlier versions.

Update: v1.0.0 - 
	Code Formatting - I am doing some serious renavating here guys :3
	Added:
		+Raw Mutton
		+Cooked Mutton
		+Recipe for Spawner
	Fixed:
		Nothing yet
	Deleted:
		-Custom Models :(
*/

//custom functions
Item.setName = function(old, name) {
	ModPE.langEdit("item."+ old +".name", name);
};

Player.removeFromCarriedItem = function(amount) {
	Entity.setCarriedItem(Player.getEntity(), Player.getCarriedItem(), Player.getCarriedItemCount() - amount, Player.getCarriedItemData());
};

Player.addToCarriedItem = function(amount) {
	Entity.setCarriedItem(Player.getEntity(), Player.getCarriedItem(), Player.getCarriedItemCount() + amount, Player.getCarriedItemData());
};

ModPE.setItem(368,"ender_pearl",0,"ender.pearl",16);
ModPE.setItem(371,"gold_nugget",0,"gold.nugget",64);
ModPE.setFoodItem(375,"spider_eye",0,1,"spider.eye",64); //Gives poison with eatHook
ModPE.setItem(381,"ender_eye",0,"ender.eye",16);
ModPE.setFoodItem(423,"mutton",0,2,"raw.mutton",64);
ModPE.setFoodItem(424,"mutton",1,6,"cooked.mutton",64);

ModPE.setItem( 500,"bat",0,"mob.bat",64);
ModPE.setItem( 501,"cavespider",0,"mob.cavespider",64);
ModPE.setItem( 502,"chicken",0,"mob.chicken",64);
ModPE.setItem( 503,"chicken",0,"mob.baby.chicken",64);
ModPE.setItem( 504,"cow",0,"mob.cow",64);
ModPE.setItem( 505,"cow",0,"mob.baby.cow",64);
ModPE.setItem( 506,"creeper",0,"mob.creeper",64);
ModPE.setItem( 507,"enderman",0,"mob.enderman",64);
ModPE.setItem( 508,"ghast",0,"mob.ghast",64);

ModPE.setItem( 508,"jockey",0,"mob.jockey.skeleton",64);
ModPE.setItem( 510,"jockey",1,"mob.jockey.zombie",64);
ModPE.setItem( 511,"jockey",2,"mob.jockey.pig.zombie",64);
ModPE.setItem( 512,"jockey",3,"mob.jockey.creeper",64);

ModPE.setItem( 513,"jockey",5,"mob.cave.jockey.skeleton",64);
ModPE.setItem( 514,"jockey",6,"mob.cave.jockey.zombie",64);
ModPE.setItem( 515,"jockey",7,"mob.cave.jockey.pig.zombie",64);
ModPE.setItem( 516,"jockey",8,"mob.cave.jockey.creeper",64);

ModPE.setItem( 517,"lavaslime",0,"mob.lavaslime.0",64);
ModPE.setItem( 518,"lavaslime",1,"mob.lavaslime.1",64);
ModPE.setItem( 519,"lavaslime",2,"mob.lavaslime.2",64);
ModPE.setItem( 520,"lavaslime",3,"mob.lavaslime.3",64);

ModPE.setItem( 521,"minimizer",0,"minimizer",64);

ModPE.setItem( 522,"mushroomcow",0,"mob.mushroom.cow",64);
ModPE.setItem( 523,"mushroomcow",0,"mob.baby.mushroom.cow",64);
ModPE.setItem( 524,"pig",0,"mob.pig",64);
ModPE.setItem( 525,"pig",0,"mob.baby.pig",64);
ModPE.setItem( 526,"pig",1,"mob.pig.saddle",64);
ModPE.setItem( 527,"pig",1,"mob.baby.pig.saddle",64);
ModPE.setItem( 528,"pigzombie",0,"mob.pig.zombie",64);
ModPE.setItem( 529,"pigzombie",0,"mob.baby.pig.zombie",64);

ModPE.setItem( 530,"sheep",0,"mob.sheep.wht",64);
ModPE.setItem( 531,"sheep",1,"mob.sheep.org",64);
ModPE.setItem( 532,"sheep",10,"mob.sheep.prp",64);
ModPE.setItem( 533,"sheep",11,"mob.sheep.blu",64);
ModPE.setItem( 534,"sheep",12,"mob.sheep.brn",64);
ModPE.setItem( 535,"sheep",13,"mob.sheep.grn",64);
ModPE.setItem( 536,"sheep",14,"mob.sheep.red",64);
ModPE.setItem( 537,"sheep",15,"mob.sheep.blk",64);
ModPE.setItem( 538,"sheep",16,"mob.sheep.non",64);
ModPE.setItem( 539,"sheep",2,"mob.sheep.mgn",64);
ModPE.setItem( 540,"sheep",3,"mob.sheep.lblu",64);
ModPE.setItem( 541,"sheep",4,"mob.sheep.ylw",64);
ModPE.setItem( 542,"sheep",5,"mob.sheep.lme",64);
ModPE.setItem( 543,"sheep",6,"mob.sheep.pnk",64);
ModPE.setItem( 544,"sheep",7,"mob.sheep.lgy",64);
ModPE.setItem( 545,"sheep",8,"mob.sheep.dgy",64);
ModPE.setItem( 546,"sheep",9,"mob.sheep.cyn",64);
ModPE.setItem( 547,"sheep",0,"mob.baby.sheep.wht",64);
ModPE.setItem( 548,"sheep",1,"mob.baby.sheep.org",64);
ModPE.setItem( 549,"sheep",10,"mob.baby.sheep.prp",64);
ModPE.setItem( 550,"sheep",11,"mob.baby.sheep.blu",64);
ModPE.setItem( 551,"sheep",12,"mob.baby.sheep.brn",64);
ModPE.setItem( 552,"sheep",13,"mob.baby.sheep.grn",64);
ModPE.setItem( 553,"sheep",14,"mob.baby.sheep.red",64);
ModPE.setItem( 554,"sheep",15,"mob.baby.sheep.blk",64);
ModPE.setItem( 555,"sheep",16,"mob.baby.sheep.non",64);
ModPE.setItem( 556,"sheep",2,"mob.baby.sheep.mgn",64);
ModPE.setItem( 557,"sheep",3,"mob.baby.sheep.lblu",64);
ModPE.setItem( 558,"sheep",4,"mob.baby.sheep.ylw",64);
ModPE.setItem( 559,"sheep",5,"mob.baby.sheep.lme",64);
ModPE.setItem( 560,"sheep",6,"mob.baby.sheep.pnk",64);
ModPE.setItem( 561,"sheep",7,"mob.baby.sheep.lgy",64);
ModPE.setItem( 562,"sheep",8,"mob.baby sheep.dgy",64);
ModPE.setItem( 563,"sheep",9,"mob.baby.sheep.cyn",64);

ModPE.setItem( 564,"silverfish",0,"mob.silverfish",64);
ModPE.setItem( 565,"skeleton",0,"mob.skeleton",64);

ModPE.setItem( 566,"slime",0,"mob.slime.0",64);
ModPE.setItem( 567,"slime",1,"mob.slime.1",64);
ModPE.setItem( 568,"slime",2,"mob.slime.2",64);
ModPE.setItem( 569,"slime",3,"mob.slime.3",64);
ModPE.setItem( 570,"slime",4,"mob.slime.4",64);

ModPE.setItem( 571,"soul",0,"soul",64);

ModPE.setItem( 572,"spider",0,"mob.spider",64);

ModPE.setItem( 573,"squid",0,"mob.squid",64);
ModPE.setItem( 574,"squid",0,"mob.baby.squid",64);

ModPE.setItem( 575,"villager",5,"mob.villager",64);
ModPE.setItem( 576,"villager",0,"mob.villager.farmer",64);
ModPE.setItem( 577,"villager",1,"mob.villager.librarian",64);
ModPE.setItem( 578,"villager",2,"mob.villager.priest",64);
ModPE.setItem( 579,"villager",3,"mob.villager.smith",64);
ModPE.setItem( 580,"villager",5,"mob.baby.villager",64);
ModPE.setItem( 581,"villager",0,"mob.baby.villager.farmer",64);
ModPE.setItem( 582,"villager",1,"mob.baby.villager.librarian",64);
ModPE.setItem( 583,"villager",2,"mob.baby.villager.priest",64);
ModPE.setItem( 584,"villager",3,"mob.baby.villager.smith",64);

ModPE.setItem( 585,"wolf",0,"mob.wolf",64);
ModPE.setItem( 586,"wolf",1,"mob.wolf.tamed",64);
ModPE.setItem( 587,"wolf",2,"mob.wolf.angry",64);
ModPE.setItem( 588,"wolf",0,"mob.baby wolf",64);
ModPE.setItem( 589,"wolf",1,"mob.baby.wolf.tamed",64);
ModPE.setItem( 590,"wolf",2,"mob.baby.wolf.angry",64);

ModPE.setItem( 591,"zombie",0,"mob.zombie",64);
ModPE.setItem( 592,"zombie",0,"mob.baby.zombie",64);


//recipes
Item.addShapedRecipe(266,1,0,["aaa","aaa","aaa"],["a",371,0]); //nuggets > gold
Item.addShapedRecipe(371,9,0,["a  ","   ","   "],["a",266,0]); //gold > nuggets
Item.addShapedRecipe(52,1,0,["aaa","a a","aaa"],["a",101,0]); //Mob Spawner
Item.addFurnaceRecipe(423,424,0);//cooked mutton

Item.addShapedRecipe(500,2,0,["s  ","p  ","   "],["s",1,0,"p",319,0]); //Bat
Item.addShapedRecipe(501,1,0,["ses","efe","ses"],["s",287,0,"f",367,0,"e",375,0]); //Cavespider
Item.addShapedRecipe(502,1,0,["fff","ccc","fff"],["c",365,0,"f",288,0]); //Chicken
Item.addShapedRecipe(502,1,0,["eee","eee","eee"],["e",344,0]); //Chicken
Item.addShapedRecipe(503,2,0,["da ","   ","   "],["d",3,0,"a",502,0]); //Baby Chicken
Item.addShapedRecipe(504,1,0,["lbl","bbb","lbl"],["l",334,0,"b",363,0]); //Cow
Item.addShapedRecipe(505,2,0,["da ","   ","   "],["d",3,0,"a",504,0]); //Baby Cow
Item.addShapedRecipe(506,4,0,["ggg","gfg","ggg"],["g",289,0,"f",367,0]); //Creeper
Item.addShapedRecipe(507,1,0,["eee","e e","eee"],["e",368,0]); //Enderman
//Item.addShapedRecipe(508,3,0,["ggg","hhh","ggg"],["g",367,0,"h",370,0]); //Ghast
Item.addShapedRecipe(509,1,0,["   "," j "," s "],["s",572,0,"j",565,0]); //Jockey Skeleton
Item.addShapedRecipe(510,1,0,["   "," j "," s "],["s",572,0,"j",591,0]); //Jockey Zombie
Item.addShapedRecipe(511,1,0,["   "," j "," s "],["s",572,0,"j",528,0]); //Jockey Pigman
Item.addShapedRecipe(512,1,0,["   "," j "," s "],["s",572,0,"j",506,0]); //Jockey Creeper
Item.addShapedRecipe(513,1,0,["   "," j "," s "],["s",501,0,"j",565,0]); //Cave Jockey Skeleton
Item.addShapedRecipe(514,1,0,["   "," j "," s "],["s",501,0,"j",591,0]); //Cave Jockey Zombie
Item.addShapedRecipe(515,1,0,["   "," j "," s "],["s",501,0,"j",528,0]); //Cave Jockey Pigman
Item.addShapedRecipe(516,1,0,["   "," j "," s "],["s",501,0,"j",506,0]); //Cave Jockey Creeper
//Item.addShapedRecipe(517,4,0,["ccc","c c","ccc"],["c",378,0]); //Magmacube
//Item.addShapedRecipe(518,1,0,["mm ","mm ","   "],["m",517,0]); //Magmacube
//Item.addShapedRecipe(519,1,0,["mm ","mm ","   "],["m",518,0]); //Magmacube
//Item.addShapedRecipe(520,1,0,["mm ","mm ","   "],["m",519,0]); //Magmacube
Item.addShapedRecipe(521,1,0,["p  ","ps ","psc"],["p",524,0,"s",530,0,"c",504,0]); //Minimizer
Item.addShapedRecipe(522,1,0,["mmm","mcm","mmm"],["m",40,0,"c",504,0]); //Mooshroom
Item.addShapedRecipe(523,2,0,["da ","   ","   "],["d",3,0,"a",522,0]); //Baby Mooshroom
Item.addShapedRecipe(524,4,0,["ppp","p p","ppp"],["p",319,0]); //Pig
Item.addShapedRecipe(525,2,0,["da ","   ","   "],["d",3,0,"a",524,0]); //Baby Pig
Item.addShapedRecipe(526,1,0,["   "," s "," p "],["p",524,0,"s",329,0]); //Saddled Pig
Item.addShapedRecipe(527,1,0,["   "," s "," p "],["p",525,0,"s",329,0]); //Saddled Baby Pig
Item.addShapedRecipe(528,1,0,["nfn","fsf","nfn"],["n",371,0,"f",367,0,"s",283,0]); //Pig Zombie
Item.addShapedRecipe(529,2,0,["da ","   ","   "],["d",3,0,"a",528,0]); //Baby Pig Zombie
Item.addShapedRecipe(530,2,0,["www","wmw","www"],["w",35,0,"m",423,0]); //Sheep
Item.addShapedRecipe(531,2,0,["www","wmw","www"],["w",35,1,"m",423,0]); //Sheep
Item.addShapedRecipe(532,2,0,["www","wmw","www"],["w",35,10,"m",423,0]); //Sheep
Item.addShapedRecipe(533,2,0,["www","wmw","www"],["w",35,11,"m",423,0]); //Sheep
Item.addShapedRecipe(534,2,0,["www","wmw","www"],["w",35,12,"m",423,0]); //Sheep
Item.addShapedRecipe(535,2,0,["www","wmw","www"],["w",35,13,"m",423,0]); //Sheep
Item.addShapedRecipe(536,2,0,["www","wmw","www"],["w",35,14,"m",423,0]); //Sheep
Item.addShapedRecipe(537,2,0,["www","wmw","www"],["w",35,15,"m",423,0]); //Sheep
Item.addShapedRecipe(539,2,0,["www","wmw","www"],["w",35,2,"m",423,0]); //Sheep
Item.addShapedRecipe(540,2,0,["www","wmw","www"],["w",35,3,"m",423,0]); //Sheep
Item.addShapedRecipe(541,2,0,["www","wmw","www"],["w",35,4,"m",423,0]); //Sheep
Item.addShapedRecipe(542,2,0,["www","wmw","www"],["w",35,5,"m",423,0]); //Sheep
Item.addShapedRecipe(543,2,0,["www","wmw","www"],["w",35,6,"m",423,0]); //Sheep
Item.addShapedRecipe(544,2,0,["www","wmw","www"],["w",35,7,"m",423,0]); //Sheep
Item.addShapedRecipe(545,2,0,["www","wmw","www"],["w",35,8,"m",423,0]); //Sheep
Item.addShapedRecipe(546,2,0,["www","wmw","www"],["w",35,9,"m",423,0]); //Sheep
Item.addShapedRecipe(547,2,0,["da ","   ","   "],["d",3,0,"a",530,0]); //Baby Sheep
Item.addShapedRecipe(548,2,0,["da ","   ","   "],["d",3,0,"a",531,0]); //Baby Sheep
Item.addShapedRecipe(549,2,0,["da ","   ","   "],["d",3,0,"a",532,0]); //Baby Sheep
Item.addShapedRecipe(550,2,0,["da ","   ","   "],["d",3,0,"a",533,0]); //Baby Sheep
Item.addShapedRecipe(551,2,0,["da ","   ","   "],["d",3,0,"a",534,0]); //Baby Sheep
Item.addShapedRecipe(552,2,0,["da ","   ","   "],["d",3,0,"a",535,0]); //Baby Sheep
Item.addShapedRecipe(553,2,0,["da ","   ","   "],["d",3,0,"a",536,0]); //Baby Sheep
Item.addShapedRecipe(554,2,0,["da ","   ","   "],["d",3,0,"a",537,0]); //Baby Sheep
Item.addShapedRecipe(556,2,0,["da ","   ","   "],["d",3,0,"a",539,0]); //Baby Sheep
Item.addShapedRecipe(557,2,0,["da ","   ","   "],["d",3,0,"a",540,0]); //Baby Sheep
Item.addShapedRecipe(558,2,0,["da ","   ","   "],["d",3,0,"a",541,0]); //Baby Sheep
Item.addShapedRecipe(559,2,0,["da ","   ","   "],["d",3,0,"a",542,0]); //Baby Sheep
Item.addShapedRecipe(560,2,0,["da ","   ","   "],["d",3,0,"a",543,0]); //Baby Sheep
Item.addShapedRecipe(561,2,0,["da ","   ","   "],["d",3,0,"a",544,0]); //Baby Sheep
Item.addShapedRecipe(562,2,0,["da ","   ","   "],["d",3,0,"a",545,0]); //Baby Sheep
Item.addShapedRecipe(563,2,0,["da ","   ","   "],["d",3,0,"a",546,0]); //Baby Sheep
Item.addShapedRecipe(564,2,0,[" i "," f ","   "],["i",265,0,"f",349,0]); //Silverfish
Item.addShapedRecipe(565,2,0,["bab","aoa","bab"],["b",352,0,"a",262,0,"o",261,0]); //Skeleton
//Item.addShapedRecipe(566,4,0,["sss","s s","sss"],["s",341,0]); //Slime
//Item.addShapedRecipe(567,1,0,["ss ","ss ","   "],["s",566,0]); //Slime
//Item.addShapedRecipe(568,1,0,["ss ","ss ","   "],["s",567,0]); //Slime
//Item.addShapedRecipe(569,1,0,["ss ","ss ","   "],["s",568,0]); //Slime
//Item.addShapedRecipe(570,1,0,["ss ","ss ","   "],["s",569,0]); //Slime
//Item.addShapedRecipe(571,1,0,["de ","   ","   "],["d",264,0,"e",381,0]); //Soul
Item.addShapedRecipe(572,4,0,["ses","e e","ses"],["s",287,0,"e",375,0]); //Spider
Item.addShapedRecipe(573,2,0,["iii","i i","iii"],["i",351,0]); //Squid
Item.addShapedRecipe(574,2,0,["da ","   ","   "],["d",3,0,"a",573,0]); //Baby Squid
Item.addShapedRecipe(575,2,0,["   ","ed ","   "],["e",388,0,"d",324,0]); //Villager
Item.addShapedRecipe(576,2,0,["   ","www","ddd"],["d",3,0,"w",296,0]); //Villager farmer
Item.addShapedRecipe(577,2,0,["bbb","bsb","bbb"],["b",340,0,"s",47,0]); //Villager librarian
Item.addShapedRecipe(578,2,0,[" s ","sss"," s "],["s",280,0]); //Villager priest
Item.addShapedRecipe(579,2,0,[" i "," f "," c "],["i",265,0,"f",61,0,"c",263,0]); //Villager smith
Item.addShapedRecipe(579,3,0,[" g "," f "," c "],["g",266,0,"f",61,0,"c",263,0]); //Villager smith
Item.addShapedRecipe(580,2,0,["da ","   ","   "],["d",3,0,"a",575,0]); //Baby Villager
Item.addShapedRecipe(581,2,0,["da ","   ","   "],["d",3,0,"a",576,0]); //Baby Villager farmer
Item.addShapedRecipe(582,2,0,["da ","   ","   "],["d",3,0,"a",577,0]); //Baby Villager librarian
Item.addShapedRecipe(583,2,0,["da ","   ","   "],["d",3,0,"a",578,0]); //Baby Villager priest
Item.addShapedRecipe(584,2,0,["da ","   ","   "],["d",3,0,"a",579,0]); //Baby Villager smith
Item.addShapedRecipe(585,2,0,["w w"," s ","w w"],["w",35,0,"s",530,0]); //Wolf
//Item.addShapedRecipe(586,1,0,["   ","   ","   "],["",0,0]); //Wolf
//Item.addShapedRecipe(587,1,0,["   ","   ","   "],["",0,0]); //Wolf
Item.addShapedRecipe(588,2,0,["da ","   ","   "],["d",3,0,"a",585,0]); //Baby Wolf
//Item.addShapedRecipe(589,1,0,["   ","   ","   "],["",0,0]); //Baby Wolf
//Item.addShapedRecipe(590,1,0,["   ","   ","   "],["",0,0]); //Baby Wolf
Item.addShapedRecipe(591,4,0,["fff","fwf","fff"],["f",367,0,"w",288,0]); //Zombie
Item.addShapedRecipe(592,2,0,["da ","   ","   "],["d",3,0,"a",591,0]); //Baby Zombie

/*
//dying sheep in craft table
for(var  i=530;i<545;i++){
	for(var s=530;s<545;s++){
		var x;
		if(s==530){x=15}
		if(s==531){x=14}
		if(s==532){x=5}
		if(s==533){x=4}
		if(s==534){x=3}
		if(s==535){x=2}
		if(s==536){x=1}
		if(s==537){x=0}
		if(s==539){x=13}
		if(s==540){x=12}
		if(s==541){x=11}
		if(s==542){x=10}
		if(s==543){x=9}
		if(s==544){x=7}
		if(s==545){x=8}
		if(s==546){x=6}
		if(s!==538){Item.addCraftRecipe(i,1,0,[351,1,x,s,1,0]);}
	}
}
//dye
*/

//Lang Edit
Item.setName("ender.pearl","Ender Pearl");
Item.setName("gold.nugget","Gold Nugget");
Item.setName("spider.eye","Spider Eye");
Item.setName("ender.eye","Ender Eye");
Item.setName("raw.mutton","Raw Mutton");
Item.setName("cooked.mutton","Cooked Mutton");
Item.setName("mob.bat","Bat");
Item.setName("mob.cavespider","Cave Spider");
Item.setName("mob.chicken","Chicken");
Item.setName("mob.baby.chicken","Baby Chicken");
Item.setName("mob.cow","Cow");
Item.setName("mob.baby.cow","Baby Cow");
Item.setName("mob.creeper","Creeper");
Item.setName("mob.enderman","Enderman");
Item.setName("mob.ghast","Ghast");
Item.setName("mob.jockey.skeleton","Spider Jockey");
Item.setName("mob.jockey.creeper","Spider Jockey");
Item.setName("mob.jockey.pig.zombie","Spider Jockey");
Item.setName("mob.jockey.zombie","Spider Jockey");
Item.setName("mob.cave.jockey.skeleton","Cave Spider Jockey");
Item.setName("mob.cave.jockey.zombie","Cave Spider Jockey");
Item.setName("mob.cave.jockey.creeper","Cave Spider Jockey");
Item.setName("mob.cave.jockey.pig.zombie","Cave Spider Jockey");
Item.setName("mob.lavaslime.0","Magmacube");
Item.setName("mob.lavaslime.1","Magmacube");
Item.setName("mob.lavaslime.2","Magmacube");
Item.setName("mob.lavaslime.3","Magmacube");
Item.setName("minimizer","Minimizer");
Item.setName("mob.mushroom.cow","Mooshroom");
Item.setName("mob.baby.mushroomcow","Baby Mooshroom");
Item.setName("mob.pig","Pig");
Item.setName("mob.baby.pig","Baby Pig");
Item.setName("mob.pig.saddled","Saddled Pig");
Item.setName("mob.baby.pig.saddled","Saddled Baby Pig");
Item.setName("mob.pig.zombie","Pigman");
Item.setName("mob.baby.pig.zombie","Baby Pigman");
Item.setName("mob.sheep.wht","Sheep");
Item.setName("mob.sheep.org","Sheep Orange");
Item.setName("mob.sheep.prp","Sheep Purple");
Item.setName("mob.sheep.blu","Sheep Blue");
Item.setName("mob.sheep.brn","Sheep Brown");
Item.setName("mob.sheep.grn","Sheep Green");
Item.setName("mob.sheep.red","Sheep Red");
Item.setName("mob.sheep.blk","Sheep Black");
Item.setName("mob.sheep.non","Sheep Sheard");
Item.setName("mob.sheep.mgn","Sheep Magenta");
Item.setName("mob.sheep.lblu","Sheep Light Blue");
Item.setName("mob.sheep.ylw","Sheep Yellow");
Item.setName("mob.sheep.lme","Sheep Lime");
Item.setName("mob.sheep.pnk","Sheep Pink");
Item.setName("mob.sheep.lgy","Sheep Light Gray");
Item.setName("mob.sheep.dgy","Sheep Dark Gray");
Item.setName("mob.sheep.cyn","Sheep Cyan");
Item.setName("mob.baby.sheep.wht","Baby Sheep");
Item.setName("mob.baby.sheep.org","Baby Sheep Orange");
Item.setName("mob.baby.sheep.prp","Baby Sheep Purple");
Item.setName("mob.baby.sheep.blu","Baby Sheep Blue");
Item.setName("mob.baby.sheep.brn","Baby Sheep Brown");
Item.setName("mob.baby.sheep.grn","Baby Sheep Green");
Item.setName("mob.baby.sheep.red","Baby Sheep Red");
Item.setName("mob.baby.sheep.blk","Baby Sheep Black");
Item.setName("mob.baby.sheep.non","Baby Sheep Sheard");
Item.setName("mob.baby.sheep.mgn","Baby Sheep Magenta");
Item.setName("mob.baby.sheep.lblu","Baby Sheep Light Blue");
Item.setName("mob.baby.sheep.ylw","Baby Sheep Yellow");
Item.setName("mob.baby.sheep.lme","Baby Sheep Lime");
Item.setName("mob.baby.sheep.pnk","Baby Sheep Pink");
Item.setName("mob.baby.sheep.lgy","Baby Sheep Light Gray");
Item.setName("mob.baby.sheep.dgy","Baby Sheep Dark Gray");
Item.setName("mob.baby.sheep.cyn","Baby Sheep Cyan");
Item.setName("mob.silverfish","Silverfish");
Item.setName("mob.skeleton","Skeleton");
Item.setName("mob.slime.0","Slime");
Item.setName("mob.slime.1","Slime");
Item.setName("mob.slime.2","Slime");
Item.setName("mob.slime.3","Slime");
Item.setName("mob.slime.4","Slime");
Item.setName("soul","Soul");
Item.setName("mob.spider","Spider");
Item.setName("mob.squid","Squid");
Item.setName("mob.baby.squid","Baby Squid");
Item.setName("mob.villager","Villager");
Item.setName("mob.villager.farmer","Farmer");
Item.setName("mob.villager.librarian","Librarian");
Item.setName("mob.villager.priest","Priest");
Item.setName("mob.villager.smith","Smith");
Item.setName("mob.baby.villager","Baby Villager");
Item.setName("mob.baby.villager.farmer","Baby Farmer");
Item.setName("mob.baby.villager.librarian","Baby Librarian");
Item.setName("mob.baby.villager.priest","Baby Priest");
Item.setName("mob.baby.villager.smith","Baby Smith");
Item.setName("mob.wolf","Wolf");
Item.setName("mob.wolf.tamed","Wolf Tamed");
Item.setName("mob.wolf.angry","Wolf Angry");
Item.setName("mob.baby.wolf","Baby Wolf");
Item.setName("mob.baby.wolf.tamed","Baby Wolf Tamed");
Item.setName("mob.baby.wolf.angry","Baby Wolf Angry");
Item.setName("mob.zombie","Zombie");
Item.setName("mob.baby.zombie","Baby Zombie");
