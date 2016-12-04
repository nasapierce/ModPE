// This will output BL constants like ChatColor when you load a world

ModPE.saveWorldFile = function(filename, content) {
	java.io.File(android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftWorlds/" + Level.getWorldDir() + "/").mkdirs();
	var newFile = new java.io.File(android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftWorlds/" + Level.getWorldDir() + "/", filename);
	newFile.createNewFile();
	var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
	outWrite.append(content);
	outWrite.close();
};

var file = [];

function newLevel() {
	constantValues();
	ModPE.saveWorldFile("const",file.join(";\n"));
}

function constantValues() {
	file.push("\nvar ChatColor = {}");
	for(let i in ChatColor) {
		file.push("ChatColor."+i+" = \""+ChatColor[i]+"\"");
	}
	file.push("\nvar ItemCategory = {}");
	for(let i in ItemCategory) {
		file.push("ItemCategory."+i+" = "+ItemCategory[i]);
	}
	file.push("\nvar ParticleType = {}");
	for(let i in ParticleType) {
		file.push("ParticleType."+i+" = "+ParticleType[i]);
	}
	file.push("\nvar EntityType = {}");
	for(let i in EntityType) {
		file.push("EntityType."+i+" = "+EntityType[i]);
	}
	file.push("\nvar EntityRenderType = {}");
	for(let i in EntityRenderType) {
		file.push("EntityRenderType."+i+" = "+EntityRenderType[i]);
	}
	file.push("\nvar ArmorType = {}");
	for(let i in ArmorType) {
		file.push("ArmorType."+i+" = "+ArmorType[i]);
	}
	file.push("\nvar MobEffect = {}");
	for(let i in MobEffect) {
		file.push("MobEffect."+i+" = "+MobEffect[i]);
	}
	file.push("\nvar DimensionId = {}");
	for(let i in DimensionId) {
		file.push("DimensionId."+i+" = "+DimensionId[i]);
	}
	file.push("\nvar BlockFace = {}");
	for(let i in BlockFace) {
		file.push("BlockFace."+i+" = "+BlockFace[i]);
	}
	file.push("\nvar UseAnimation = {}");
	for(let i in UseAnimation) {
		file.push("UseAnimation."+i+" = "+UseAnimation[i]);
	}
	file.push("\nvar Enchantment = {}");
	for(let i in Enchantment) {
		file.push("Enchantment."+i+" = "+Enchantment[i]);
	}
	file.push("\nvar EnchantType = {}");
	for(let i in EnchantType) {
		file.push("EnchantType."+i+" = "+EnchantType[i]);
	}
	file.push("\nvar BlockRenderLayer = {}");
	for(let i in BlockRenderLayer) {
		file.push("BlockRenderLayer."+i+" = "+BlockRenderLayer[i]);
	}
	file.push("\n");
}
