ModPE.saveFile = function(filename, content) {
	java.io.File(android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftWorlds/" + Level.getWorldDir() + "/").mkdirs();
	var newFile = new java.io.File(android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftWorlds/" + Level.getWorldDir() + "/", filename);
	newFile.createNewFile();
	var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
	outWrite.append(content);
	outWrite.close();
};

ModPE.loadFile = function(filename) {
	var content = "";
	if (java.io.File( android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftWorlds/" + Level.getWorldDir() + "/" + filename).exists()) {
		var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftWorlds/" + Level.getWorldDir() + "/" + filename),
			fos = new java.io.FileInputStream(file),
			str = new java.lang.StringBuilder(),
			ch;
		while ((ch = fos.read()) != -1) {
			str.append(java.lang.Character(ch));
		}
		content = String(str.toString());
		fos.close();
	}
	return content;
};

var vacuumhoppers = [];

function useItem(x, y, z, itemId, blockId, side, itemData, blockData) {
	if(itemId == 777 && blockId == 154 && Entity.isSneaking(Player.getEntity())) {
		if(vacuumhoppers.indexOf([x, y, z]) == -1) {
			preventDefault();
			vacuumhoppers.push([x, y, z]);
			addItemInventory(777, -1, 0);
		}
	}
}

function destroyBlock(x, y, z, data) {
	if(Level.getTile(x, y, z) == 154 && vacuumhoppers.indexOf([x, y, z]) >= 0) {
		vacuumhoppers.splice(vacuumhoppers.indexOf([x, y, z]), 1);
		Level.dropItem(x, y, z, 0, 777, 1, 0);
	}
}

function newLevel() {
	Player.addItemCreativeInv(777, 0, 5);
	vacuumhoppers = [];
	var content = ModPE.loadFile("vacuumhoppers.dat");
	if(content != "") {
		var arr = content.split(";");
		var larr = arr.length;
		for(var i=0;i<larr;i++) {
			var par = arr[i].split(",");
			vacuumhoppers.push([parseInt(par[0]), parseInt(par[1]), parseInt(par[2])]);
		}
	}
}

function leaveGame() {
	ModPE.saveFile("vacuumhoppers.dat", vacuumhoppers.join(";"));
}

function modTick() {
	var ents = Entity.getAll();
	for(var i in ents) {
		for(var j in vacuumhoppers) {
			var a = Math.sqrt(Math.pow(vacuumhoppers[j][0] - Entity.getX(ents[i]), 2) + Math.pow(vacuumhoppers[j][1] - Entity.getY(ents[i]), 2) + Math.pow(vacuumhoppers[j][2] - Entity.getZ(ents[i]), 2));
			if(Entity.getEntityTypeId(ents[i]) !== EntityType.PLAYER && a < 10) { //10 blocks away...
				Entity.setVelX(ents[i], vacuumhoppers[j][0] - Entity.getX(ents[i]) + 0.5);
				Entity.setVelY(ents[i], vacuumhoppers[j][1] - Entity.getY(ents[i]) + 1.5);
				Entity.setVelZ(ents[i], vacuumhoppers[j][2] - Entity.getZ(ents[i]) + 0.5);
			}
		}
	}
}

ModPE.setItem(777, "camera", 0, "Vacuum Hopper", 16);
Item.addShapedRecipe(777, 1, 0, [" r ","idi"," r "], ["d", 264, 0, "i", 265, 0, "r", 331, 0]);
