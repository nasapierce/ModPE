var path;

var texture = [
	["planks", 0],["planks", 0],["planks", 0],["planks", 0],["planks", 0],["planks", 0],
	["planks", 1],["planks", 1],["planks", 1],["planks", 1],["planks", 1],["planks", 1],
	["planks", 2],["planks", 2],["planks", 2],["planks", 2],["planks", 2],["planks", 2],
	["planks", 3],["planks", 3],["planks", 3],["planks", 3],["planks", 3],["planks", 3],
	["planks", 4],["planks", 4],["planks", 4],["planks", 4],["planks", 4],["planks", 4],
	["planks", 5],["planks", 5],["planks", 5],["planks", 5],["planks", 5],["planks", 5]
];

Block.defineBlock(200, "Animation Block", texture, 5);
Block.setDestroyTime(200, 1.5);
placed = [];

function useItem(x, y, z, item, block, side) {
    if(item === 200) {
    	let sides = [[0, -1, 0], [0, 1, 0], [0, 0, -1], [0, 0, 1], [-1, 0, 0], [1, 0, 0]];
    	Level.setTile(x + sides[side][0], y + sides[side][1], z + sides[side][2], 200, data);
    	placed.push({ x: x + sides[side][0], y: y + sides[side][1], z: z + sides[side][2] });
    }
}

var tick = 20;
var data = 0;

function modTick() {
	tick--;
	if(tick === 0) {
		switch(data) {
			case 0:
				data = 1;
				break;
			case 1:
				data = 2;
				break;
			case 2:
				data = 3;
				break;
			case 3:
				data = 4;
				break;
			case 4:
				data = 5;
				break;
			case 5:
				data = 0;
				break;
		}
		for(let i in placed) {
			Level.setTile(placed[i].x, placed[i].y, placed[i].z, 0, 0);
			Level.setTile(placed[i].x, placed[i].y, placed[i].z, 200, data);
		}
		tick = 20;
	}
}

function newWorld() {
	load(path, "anmBlocks.txt");
	content.split(";");
	for(let i=0;i<content.length;i++) {
		let o = i + 0;
		let t = i + 1;
		let th = i + 2;
		placed.push({ x: content[o], y: content[t], z: content[th] });
	}
}

function leaveGame() {
	for(let i in placed) {
		save(path, placed[i].x+";"+placed[i].y+";"+placed[i].z+";", "anmBlocks.txt");
	}
}

function destroyBlock(x, y, z, side) {
	for(let i in placed) {
		if(placed[i].x === x && placed[i].y === y && placed[i].z === z) {
			placed.splice(i, 1);
			Level.setTile(x, y, z, 0, 0);
		}
	}
}

function save(path, filename, content) {
	try {
		java.io.File(path).mkdirs();
		var newFile = new java.io.File(path, filename);
		newFile.createNewFile(); 
		var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile)); 
		outWrite.append(content); 
		outWrite.close(); 
	} 
	catch(err) { 
		clientMessage(err); 
	} 
} 
function load(path, filename) { 
	var content = ""; 
	if (java.io.File(path + filename).exists()) { 
		var file = new java.io.File(path + filename), 
		fos = new java.io.FileInputStream(file), 
		str = new java.lang.StringBuilder(), ch; 
		while ((ch = fos.read()) != -1) {
			str.append(java.lang.Character(ch)); 
		} 
		content = String(str.toString()); 
		fos.close(); 
	} 
	return content; 
}
