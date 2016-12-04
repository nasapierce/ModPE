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
	file.push("ModPE");
	for(var i in Object.keys(ModPE)){
		file.push(Object.keys(ModPE)[i]);
	}
	file.push("\nBlock");
	for(var i in Object.keys(Block)){
		file.push(Object.keys(Block)[i]);
	}
	file.push("\nLevel");
	for(var i in Object.keys(Level)){
		file.push(Object.keys(Level)[i]);
	}
	file.push("\nEntity");
	for(var i in Object.keys(Entity)){
		file.push(Object.keys(Entity)[i]);
	}
	file.push("\nServer");
	for(var i in Object.keys(Server)){
		file.push(Object.keys(Server)[i]);
	}
	file.push("\nItem");
	for(var i in Object.keys(Item)){
		file.push(Object.keys(Item)[i]);
	}
	file.push("\nPlayer");
	for(var i in Object.keys(Player)){
		file.push(Object.keys(Player)[i]);
	}
}
