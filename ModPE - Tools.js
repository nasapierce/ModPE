var tools = [];

Item.addTool = function(id, texture, meta, name, durability, tooltype, digSpeed, attackDamage) {
	ModPE.setItem(id, texture, meta, name, 1);
	Item.setMaxDamage(id, durability);
	Item.setCategory(id, ItemCategory.TOOL);
	Item.setHandEquipped(id, true);
	tools[id] = {
		durability: durability,
		tooltype: tooltype,
		digSpeed: digSpeed,
		attackDamage: attackDamage
	};
};

var ToolType = {
	Sword: 0,
	Pickaxe: 1,
	Axe: 2,
	Shovel: 3,
	Hoe: 4,
	Shears: 5
};

var ToolsBlocks = {
	Sword: [30,103],
	Pickaxe: [1,4,14,15,16,21,24,27,28,43,44,45,48,49,52,56,61,62,66,67,70,73,74,79,87,97,98,108,109,112,113,114,116,121,128,129,139,145,151,153,156,157,159,172,174,245,22,41,42,57,71,101,117,118,133,147,148,152,167,173,247],
	Axe: [5,17,25,47,53,54,58,63,64,65,68,72,85,86,91,96,99,100,103,106,107,127,146,151,157,158,162,163,164,178,183,184,185,186,187,193,194,195,196,197],
	Shovel: [2,3,12,13,60,78,80,82,88,110,170,198,243],
	Hoe: [],
	Shears: [18,19,30,35,161,175]
};

//default destroy time for blocks
var defaultDestroyTime = [];
for(var i=0;i<256;i++) {
	defaultDestroyTime[i] = Block.getDestroyTime(i, 0);
}

//test tools
Item.addTool(500,"pickaxe",0,"pick","Pick",100,ToolType.Sword,10,3);
Item.addTool(501,"hoe",0,"hoe","Hoe",100,ToolType.Hoe,10,1);
Item.addTool(502,"axe",0,"axe","Axe",100,ToolType.Axe,10,5);
Item.addTool(503,"shovel",0,"shovel","Shovel",100,ToolType.Shovel,10,3);
Item.addTool(504,"sword",0,"sword","Sword",100,ToolType.Sword,2,10);
Item.addTool(505,"shears",0,"shears","Shears",100,ToolType.Shears,10,1);


function newLevel(){
	
}

function modTick(){
	toolModTick();
}

function useItem(x,y,z,itemId,blockId,side,itemData,blockData){
	toolUseItem(x,y,z,itemId,blockId,side,itemData,blockData);
}

function attackHook(attacker,victim){
	toolAttackHook(attacker, victim);
}

function destroyBlock(x,y,z,side){
	toolDestroyBlock(x,y,z,side);
}

//############ ModPE - Tool Api ############//
//############# By Darkserver ##############//

ModPE.rnd = function(max, min) {
	return Math.floor(Math.random()*max)+min;
};

//item drops
var drop = [[1,0,4,1,0],[1,1,1,1,1],[1,2,1,1,2],[1,3,1,1,3],[1,4,1,1,4],[1,5,1,1,5],[1,6,1,1,6],[4,0,4,1,0],[14,0,14,1,0],[15,0,15,1,0],[16,0,263,1,0],[21,0,351,ModPE.rnd(12,8),4][24,0,24,1],[41,0,41,1,0],[42,0,42,1,0],[43,0,44,2],[45,0,45,1,0],[48,0,48,1,0],[49,0,49,1,0],[56,0,264,1,0],[57,0,57,1,0],[67,0,67,1,0],[73,0,331,ModPE.rnd(0,3),0],[87,0,87,1,0],[98,0,98,1],[101,0,101,1,0],[108,0,108,1,0],[109,0,109,1,0],[112,0,112,1,0],[114,0,114,1,0],[121,0,121,1,0],[128,0,128,1,0],[129,0,388,1,0],[133,0,133,1,0],[139,0,139,1],[152,0,152,1,0],[155,0,155,1],[156,0,156,1,0],[159,0,159,1],[172,0,172,1,0],[173,0,173,1,0][174,0,174,1,0],[246,0,49,1,0],[247,0,247,1,0]];
var lastTool;
var lastBlock;

Item.damageTool = function(damage) {
	var maxDurability = tools[Player.getCarriedItem()].durability;
	if(Player.getCarriedItemData() < maxDurability - damage) Entity.setCarriedItem(Player.getEntity(), Player.getCarriedItem(), Player.getCarriedItemCount(), Player.getCarriedItemData() + damage);
	else {
		Player.clearInventorySlot(Player.getSelectedSlotId());
		Level.playSoundEnt(Player.getEntity(), "random.break", 100, 100);
	}
};

function isCorrectTool(tooltype, blockId) {
	var type;
	switch(tooltype) {
		case ToolType.Axe:
			type = "Axe";
			break;
		case ToolType.Pickaxe:
			type = "Pickaxe";
			break;
		case ToolType.Shovel:
			type = "Shovel";
			break;
		case ToolType.Sword:
			type = "Sword";
			break;
		case ToolType.Shears:
			type = "Shears";
			break;
		case ToolType.Hoe:
			type = "Hoe";
			break;
	}
	if(ToolsBlocks[type].indexOf(blockId)==-1) return;
	else return true;
}

function setDefaultDestroyTime(blockId) {
	Block.setDestroyTime(blockId, defaultDestroyTime[i]);
}

function isPlayerOnGround() {
	if(Level.getTile(Player.getX(), Player.getY()-1, Player.getZ()) != 0 && Level.getTile(Player.getX(), Player.getY()-1, Player.getZ()) != 8 && Level.getTile(Player.getX(), Player.getY()-1, Player.getZ()) != 9 && Level.getTile(Player.getX(), Player.getY()-1, Player.getZ()) != 10 && Level.getTile(Player.getX(), Player.getY()-1, Player.getZ()) != 11) return true;
	else return false;
}

function setDestroyTime(blockId, itemId){
	var T = tools[itemId];
	var BH = defaultDestroyTime[blockId];
	var CT;
	var SG;
	if(isCorrectTool(T.tooltype, blockId)) CT = 1;
	if(!isCorrectTool(T.tooltype, blockId)) CT = 3.33;
	if(isPlayerOnGround()) SG = 1;
	if(!isPlayerOnGround()) SG = 5;
	Block.setDestroyTime(blockId, (((BH*CT)/T.digSpeed)*SG));
}

function toolModTick(){
	var block = Player.getPointedBlockId();
	var item = Player.getCarriedItem();
	if(block) {
		if( tools[item] && !lastBlock ) {
			setDestroyTime(block, item);
			lastBlock = block;
			lastTool = item;
		}
		if( !tools[item] && lastBlock ) {
			setDefaultDestroyTime(lastBlock);
			lastBlock = 0;
			lastTool = 0;
		}
		if( lastBlock != block ) {
			setDefaultDestroyTime(lastBlock);
			lastBlock = 0;
		}
		if( lastTool != item ) {
			lastBlock = 0;
		}
	}
}

function toolUseItem(x,y,z,itemId,blockId,side,itemData,blockData){
	if(tools[itemId].tooltype == ToolType.Hoe) {
		if(blockId==3||blockId==2||blockId==110||blockId==243||blockId==198){
			Level.setTile(x,y,z,60,0);
			Item.damageTool(1);
		}
	}
}

function toolAttackHook(attacker, victim){
	if(tools[Player.getCarriedItem()]) {
		Entity.setHealth(victim, (Entity.getHealth(victim) - tools[Player.getCarriedItem()].attackDamage));
		if(tools[Player.getCarriedItem()].tooltype == ToolType.Sword) {
			Item.damageTool(1);
		} else {
			Item.damageTool(2);
		}
	}
}

function toolDestroyBlock(x,y,z,side){
	var block = Level.getTile(x,y,z);
	var data = Level.getData(x,y,z);
	var item = Player.getCarriedItem();
	if(tools[item]){
		if(tools[item].tooltype==ToolType.Pickaxe){
			for(var i in drop){
				if(block==drop[i][0]&&data==drop[i][1]){
					preventDefault();
					Level.destroyBlock(x,y,z,false);
					if(!drop[i][4]){drop[i][4]==data}
					Level.dropItem(x+0.5,y,z+0.5,0,drop[i][2],drop[i][3],drop[i][4]);
				}
			}
		}
		if(isCorrectTool(tools[item].tooltype, block)) {
			Item.damageTool(1);
		} else {
			Item.damageTool(2);
		}
	}
}
