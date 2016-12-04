
//Custom
var Toggle = function(bool){
	this = bool;
};

Toggle.prototype.on = function() {
	this = true;
};

Toggle.prototype.off = function(){
	this = false;
};

Toggle.prototype.toggle = function() {
	this = !this;
};

//ModPE
ModPE.downloadFile = function(url, downloadDir, fileName) {
	var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/" + dowloadDir + (downloadIr.charAt(downloadDir.length - 1) == "/" ? fileName : "/" + fileName));
	file.createNewFile();
	var fos = new java.io.FileOutputStream(file);
	var response = android.net.http.AndroidHttpClient.newInstance("ModPE.downloadFile()").execute(new org.apache.http.client.methods.HttpGet(url)).response.getEntity().writeTo(fos);
	fos.close();
};

//Level
//Level.getPlayer = name => return Server.getAllPlayers[Server.getAllPlayerNames().indexOf(name)];

Level.getAllEntities = function(typeId) {
	var retarr = [];
	for(var i in Entity.getAll()) if(Entity.getEntityTypeId(Entity.getAll()[i]) == typeId || (!typeId && typeId != 0)) retarr.push(Entity.getAll()[i]);
	return retarr;
};

//Level.clearChest = (x, y, z) => if(Level.getTile(x, y, z) == 54) for(var i = 0; i < 27; i++) Level.setChestSlot(x, y, z, i, 0, 0, 0);

Level.spawnJockey = function(x, y, z, mobs) {
	var ents = [];
	if(mobs.length < 2) return [];
	for(var i in mobs) {
		var e = mobs[i];
		if((e > 9 && e < 14) || (e > 31 && e < 37)) ents.push(Level.spawnMob(x, y, z, e, null));
		else {
			if(!(e instanceof Array)) return;
			if(((e[0] < 10 || e[0] > 13) && (e[0] < 32 || e[0] > 36)) || !e[0]) return; 
			var ent = Level.spawnMob(x, y, z, e[0], e[1]);
			if(e[2] || e[2] == 0) Entity.setRenderType(ent, e[2]);
			if(e[3] || e[3] == 0) Entity.setHealth(ent, e[3]);
			if(e[4] || e[4] == 0) Entity.setNameTag(ent, e[4]);
			if(e[5] || e[5] == 0) Entity.setRot(ent, e[5], Entity.getPitch(ent));
			if(e[6] || e[6] == 0) Entity.setRot(ent, Entity.getYaw(ent), e[6]);
		}
	}
	for(var i = ents.length - 1; i; i--) Entity.rideAnimal(ents[i], ents[i - 1]);
	return ents;
};

//Level.extinguishFire = (x, y, z, side) => net.zhuoweizhang.mcpelauncher.ScriptManager.nativeExtinguishFire(x, y, z, side);

//Entity
Entity.duplicate = function(entity, x, y, z) {
	var ent = Level.spawnMob(x, y, z, Entity.getEntityTypeId(entity), Entity.getMobSkin(entity));
	Entity.setAnimalAge(ent, Entity.getAnimalAge(entity));
	Entity.setRenderType(ent, Entity.getRenderType(entity));
	Entity.setRot(ent, Entity.getYaw(entity), Entity.getPitch(entity));
	Entity.setHealth(ent, Entity.getHealth(entity));
	Entity.setVelX(ent, Entity.getVelX(entity));
	Entity.setVelY(ent, Entity.getVelY(entity));
	Entity.setVelZ(ent, Entity.getVelZ(entity));
	Entity.setNameTag(ent, Entity.getNameTag(entity));
};

//Player
//Player.setInventorySlot = (slot, id, amount, damage) => net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSetInventorySlot(slot + 9, id, amount, damage);

//Player.removeCarriedItem = () => Player.clearInventorySlot(Player.getSelectedSlotId());

//Player.removeFromCarriedItem = amount => Entity.setCarriedItem(Player.getEntity(), Player.getCarriedItemCount() - amount ? Player.getCarriedItem() : 512, Player.getCarriedItem(), Player.getCarriedItemCount() - amount, Player.getCarriedItemData());

//Player.addToCarriedItem = amount => Entity.setCarriedItem(Player.getEntity(), Player.getCarriedItem(), Player.getCarriedItemCount() + amount, Player.getCarriedItemData());

Player.removeItemInventory = function(id, amount, damage) {
	if(!amount) amount = 255 * 255;
	if(!damage) damage = 0;
	var count = 0;
	for(var i = 0; i < 255; i++) if(Player.getInventorySlot(i) == id && Player.getInventorySlotData(i) == damage) {
		Player.clearInventorySlot(i);
		count += Player.getInventorySlotCount(i);
	}
	if(count > amount) Player.addItemInventory(id, count - amount, damage);
};

//Player.clearInventory = () => for(var i = 0; i < 255; i++) Player.clearInventorySlot(i);

Player.checkForInventoryItem = function(id, amount, damage) {
	if(!amount) amount = 1;
	if(!damage) damage = 0;
	if(!id) id = 0;
	var count = 0;
	for(var i = 0; i < 255; i++) if(Player.getInventorySlot(i) == id && Player.getInventorySlotData(i) == damage) count += Player.getInventorySlotCount(i);
	return count >= amount;
};

//Item
Item.defineItem = function(id, unlocalizedName, localizedName, stackLimit, maxDamage, category, textureName, additionalTextures) {
	ModPE.setItem(id, textureName, additionalTextures, unlocalizedName, stackLimit ? stackLimit : 64);
	ModPE.langEdit("item." + unlocalizedName + ".name", localizedName);
	Item.setMaxDamage(id, maxDamage);
	Item.setCategory(id, category, 0);
};

Item.defineFoodItem = function(id, unlocalizedName, localizedName, halfHeartsRestored, stackLimit, maxDamage, category, textureName, additionalTextures) {
	ModPE.setFoodItem(id, textureName, additionalTextures, halfHeartsRestored, unlocalizedName, stackLimit ? stackLimit : 64);
	ModPE.langEdit("item." + unlocalizedName + ".name", localizedName);
	Item.setMaxDamage(id, maxDamage);
	Item.setCategory(id, category, 0);
};

//Item.getItemByUnlocalizedName = unlocalizedName) => for(var i = 0; i < 512; i++) if(Item.getName(i, 0, 1)) if(Item.getName(i, 0, 1).split(".")[1] == unlocalizedName) return i;

//Item.setFoil = (id, value) => Item.setProperties(id,{"foil": value});

//Item.setName = (id, damage, name) => if(Item.getName(id, damage, 1)) ModPE.langEdit(Item.getName(id, damage, 1) + ".name", name);

Item.getAllItems = function() {
	var retarr = [];
	for(var i = 0; i < 512; i++) if(Item.getName(i, 0, 1)) if(Item.getName(i, 0, 1).split(".")[0] == "item") retarr.push(i);
	return retarr;
};

//Block
Block.getAllBlocks = function() {
	function is(i) {
		return !Item.getName(i, 0, 1) && (!i || i == 253 || i == 254 || i == 255);
	}
	
	var retarr = [];
	for(var i = 0; i < 256; i++) {
		if(is(i)) retarr.push(i);
		if(Item.getName(i, 0, 1)) if(Item.getName(i, 0, 1).split(".")[0] == "tile") retarr.push(i);
	}
	return retarr;
};

Block.defineBlock = function(id, unlocalizedName, localizedName, textures, baseMaterial, isOpaque, renderShape, destroyTime, explosionResistance, lightLevel, color, renderLayer, shape) {
	com.mojang.minecraftpe.MainActivity.currentMainActivity.get().runOnUiThread({run: function() {
		var ScriptManager = net.zhuoweizhang.mcpelauncher.ScriptManager;
		try {
			ScriptManager.nativeDefineBlock(id, unlocalizedName, ScriptManager.expandTexturesArray(textures).names, ScriptManager.expandTexturesArray(textures).coords, baseMaterial, isOpaque, renderShape);
			ModPE.langEdit("tile." + unlocalizedName + ".name", localizedName);
			Block.setDestroyTime(id, destroyTime);
			Block.setExplosionResistance(id, explosionResistance);
			Block.setLightLevel(id, lightLevel);
			if(color instanceof Array) Block.setColor(id, color);
			Block.setRenderLayer(id, renderLayer);
			if(shape instanceof Array) Block.setShape(id, shape[0], shape[1], shape[2], shape[3], shape[4], shape[5]);
		} catch(e) {}
	}});
};

//Server


