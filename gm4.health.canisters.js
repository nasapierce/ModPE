
var am = false;
var sp = false;
var du = 2 * 20;

ModPE.setFoodItem(322,"apple_golden",0,4,"golden.apple",64);
ModPE.setItem(510,"apple",0,"health.canister.teir.1",64);
ModPE.setItem(511,"apple",0,"health.canister.teir.2",64);

Item.addShapedRecipe(322,1,0,["ggg","gag","ggg"],["g",266,0,"a",260,0]);
Item.addShapedRecipe(510,1,0,["oio","dgd","oio"],["o",49,0,"i",42,0,"d",264,0,"g",322,0]);
Item.addShapedRecipe(511,1,0,["eie","dgd","eie"],["e",121,0,"i",42,0,"d",264,0,"g",322,0]);

ModPE.langEdit("item.golden.apple.name","§6Golden Apple");
ModPE.langEdit("item.health.canister.tier.1.name","Health Canister §aTier 1");
ModPE.langEdit("item.health.canister.tier.2.name","Health Canister §6Tier 2");


var check = 40;

function modTick(){
	check--;
	if(check==0){
		if(Player.checkForInventoryItem(510)==1){
			Player.addEffect(MobEffect.healthBoost,2*20/*2 sec*/,1,false,true);
		}
		if(Player.checkForInventoryItem(510)==2){
			Player.addEffect(MobEffect.healthBoost,2*20/*2 sec*/,2,false,true);
		}
		if(Player.checkForInventoryItem(510)==3){
			Player.addEffect(MobEffect.healthBoost,2*20/*2 sec*/,3,false,true);
		}
		if(Player.checkForInventoryItem(510)==4){
			Player.addEffect(MobEffect.healthBoost,2*20/*2 sec*/,4,false,true);
		}
		else{
			Player.removeEffect(MobEffect.healthBoost);
		}
		check = 40;
	}
}

function procCmd(command) {
	var cmd = command.split(" ");
	if(cmd[0] == "mod") {
		Player.addItemInventory(510,1,0);
		Player.addItemInventory(511,1,0);
	}
}


Player.checkForInventoryItem = function(id, amount, damage) {
	if(!amount) amount = 1;
	if(!damage) damage = 0;
	if(!id) id = 0;
	var count = 0;
	for(var i = 0; i < 44; i++) if(Player.getInventorySlot(i) == id && Player.getInventorySlotData(i) == damage) count += Player.getInventorySlotCount(i);
	return count;
};

Player.addEffect = function(effect,duration,amplification,ambeint,showParticles){
	Entity.addEffect(Player.getEntity(),effect,duration,amplification,ambeint,showParticles);
};

Player.removeEffect = function(effect){
	Entity.removeEffect(Player.getEntity(),effect);
};

Player.removeAllEffects = function(){
	Entity.removeAllEffects(Player.getEntity());
};
