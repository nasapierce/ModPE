
String.prototype.hasCharacters = function(char) {
	var c = 0, temp = this.toString(), l = temp.length;
	for(var i=0;i<l;i++) {if(temp[i] == char) c++;}
	return c;
};

String.prototype.insert = function (index, string) {
  if (index > 0)
    return this.toString().substring(0, index) + string + this.toString().substring(index, this.toString().length);
  else
    return string + this.toString();
};

if(typeof String.repeat === "undefined") {
	String.prototype.repeat = function(x) {
		var temp = "";
		for(var i=0;i<x;i++) temp += this.toString();
		return temp;
	};
}

if(typeof String.startsWith === "undefined") {
	String.prototype.startsWith = function(str) {
		if(this.toString().substring(0,str.length) === str) return true;
		else return false;
	};
}

if(typeof String.endsWith === "undefined") {
	String.prototype.endsWith = function(str) {
		if(this.toString().substring(this.toString().length - str.length, this.toString().length) === str) return true;
		else return false;
	};
}

if(typeof String.includes === "undefined") {
	String.prototype.includes = function(str) {
		if(this.toString().indexOf(str) >= 0) return true;
		else return false;
	};
}

String.prototype.substitute = function() {
	var temp = this.toString();
	var characterCount = temp.hasCharacters("$");
	for(var i=0;i<characterCount;i++) {
		temp = temp.replace(temp.substring(temp.indexOf("${"),temp.indexOf("}")+1) , eval(temp.substring(temp.indexOf("${")+2, temp.indexOf("}"))));
	}
	return temp;
};



var TagEntity;

function newLevel() {
	Level.setTile(0, 125, 0, 7, 0);
	Level.setTile(1, 126, 0, 7, 0);
	Level.setTile(0, 126, 1, 7, 0);
	Level.setTile(-1, 126, 0, 7, 0);
	Level.setTile(0, 126, -1, 7, 0);
	Level.setTile(0, 127, 0, 7, 0);
	getTagEntity();
}

function getTagEntity() {
	var ents = Entity.getAll();
	for(var i in ents) {
		if(Entity.getNameTag(ents[i]) == "Darkserver.TagEntity") {
			TagEntity = ents[i];
			return;
		}
	}
	TagEntity = new Level.spawnCow(0.5, 126, 0.5);
}

function blockdata(x, y, z, datatag) {
	Entity.setExtraData(TagEntity, "Darkserver.BlockTag."+x+";"+y+";"+z, datatag);
}

function getblockdata(x, y, z) {
	return Entity.getExtraData(TagEntity, "Darkserver.BlockTag."+x+";"+y+";"+z);
}

function clear(item, data, maxCount) {
	var tempMaxCount = maxCount;
	if(!item && !data && !maxCount) {
		for(var slot=0;slot<128;slot++) Player.clearInventorySlot(slot);
	} else if(!data && !maxCount) {
		for(var slot=0;slot<128;slot++) {
			if(Player.getInventorySlot(slot) == item) Player.clearInventorySlot(slot);
		}
	} else if(!maxCount) {
		for(var slot=0;slot<128;slot++) {
			if(Player.getInventorySlot(slot) == item && Player.getInventorySlotData(slot) == data) Player.clearInventorySlot(slot);
		}
	} else {
		for(var slot=0;slot<128;slot++) {
			if(Player.getInventorySlot(slot) == item && Player.getInventorySlotData(slot) == data) {
				if(Player.getInventorySlotCount(slot) == maxCount) Player.clearInventorySlot(slot);
				else if(Player.getInventorySlotCount(slot) > maxCount) Player.setInventorySlot(slot, item, data, Player.getInventorySlotCount(slot) - maxCount);
				else if(Player.getInventorySlotCount(slot) < tempMaxCount) {
					var c = Player.getInventorySlotCount(slot);
					Player.clearInventorySlot(slot);
					tempMaxCount -= c;
				}
			}
		}
	}
}

function clone(x1, y1, z1, x2, y2, z2, x, y, z) {
	
}

var helpPages = [
	[
		"/blockdata <x> <y> <z> <datatag>",
		"/clear [item] [data] [maxCount]",
		"/help [page|command name]",
		"/? [page|command name]"
	]
];
var helpCommand = {
	"blockdata": "",
	"clear": ""
};

function procCmd(cmd, x, y, z) {
	preventDefault();
	//if x, y, z are set I will presume its a command block
	//else x, y, z = Player position
	x = x ? x : Player.getX();
	y = y ? y : Player.getY();
	z = z ? z : Player.getZ();
	var p = cmd.split(" ");
	switch(p[0]) {
		case "blockdata": {
			if(p[1].indexOf("~") == 0) x += parseInt(p[1].split("~")[1]);
			if(p[2].indexOf("~") == 0) y += parseInt(p[2].split("~")[1]);
			if(p[3].indexOf("~") == 0) z += parseInt(p[3].split("~")[1]);
			blockdata(x, y, z, p[4]);
		} break;
		case "clear": {
			clear(p[1], p[2], p[3]);
		}
		case "help": {
			var msg;
			if(!helpCommand[p[1]]) {
				var pg = parseInt(p[1]) ? p[1] : 0;
				if(pg >= helpPages.length) pg = 0;
				msg = helpPages[pg].join("\n");
			} else {
				msg = helpCommand[p[1]];
			}
			clientMessage(msg);
		} break;
		case "?": {
			var msg;
			if(!helpCommand[p[1]]) {
				var pg = parseInt(p[1]) ? p[1] : 0;
				if(pg >= helpPages.length) pg = 0;
				msg = helpPages[pg].join("\n");
			} else {
				msg = helpCommand[p[1]];
			}
			clientMessage(msg);
		} break;
		default:
			clientMessage(ChatColor.RED + "Error: " + p[0] + " is not a command!");
	}
}
