/*
ToolTypes
0 - Sword
1 - Pickaxe
2 - Axe
3 - Shovel
4 - Hoe
5 - Shears

Mining Speed - The higher it is, the faster
Nothing - 1
Wood - 2
Stone - 4
Iron - 6
Diamond - 8
Gold - 12

Note: If the player is not holding the correct tool to mine it will mine slower
Also if it is not the correct tool the durability will go down by 2.

To find out the time to mine a block you want to do this
Find the hardness (in defaultDestroyTime)
take the hardness and multiply it by 1.5
then divide it by your tools mining speed.

for example
Cobblestone's hardness is 2
2 * 1.5 = 3 seconds, if the player is not holding the correct tool * 3.33 (10 seconds)
3 seconds / 8 (diamond pickaxe speed)
0.375 or 0.4 seconds
if the player was holding a diamons shovel
2 * 1.5 = 3 * 3.33 = 10 / 8 = 1.25 seconds.
Methods:
Item.addTool( Id, texture, textureOffset, unlocalizedName, localizedName, durability, ToolType, MiningSpeed, AttackDamage);
*/
var axe = [5,17,47,53,54,58,63,64,65,68,85,107,125,126,134,135,136,157,158,162,163,164];
var pick = [1,4,14,15,16,21,22,24,41,42,43,44,45,48,49,52,56,57,61,62,67,71,73,74,79,87,89,97,98,101,102,108,109,112,113,114,121,128,129,133,139,152,155,156,159,172,173,174,245,246,247];
var shovel = [2,3,312,13,60,80,82,99,100,110,198,243];
var sword = [30];
var shears = [31,32,35];
var defaultDestroyTime = [ null, 1.5, 0.6, 0.5, 2, 2, 0, -1, null, null, null /*10*/, null, 0.5, 0.6, 3, 3, 3, 2, 0.2, 0.6, 0.3/*20*/, 3, 3, 10, 0.8, null, 0.2, 0.7, null, null, 4/*30*/, 0, 0, 1, 1.5, 0.8, null, 0, 0, 0, 0 /*40*/, 3, 5, 2, 2, 2, 0, 1.5, 2, 50, 0 /*50*/, 0, 5, 2, 2.5, null, 3, 5, 2.5, 0, 0.6/*60*/, 3.5, 3.5, 1, 3, 0.4, 0.7, 2, 1, null, null/*70*/, 5, null, 3, 3, null, null, null, 0.1, 0.5, 0.2 /*80*/, 0.4, 0.6, 0, null, 2, 1, 0.5, 0.3, null, 1 /*90*/, 0.5, null, null, -1, 3, null, 0.75, 1.5, 0.2, 0.2 /*100*/, 0.3, 1, 1, 0, null, 0.2, 2, 1.5, null, 0.6 /*110*/, 0, null, 2, null, null, null, null, null, null, -1 /*120*/, 3, null, null, null, null, null, 0.2, null, 3, null /*130*/, null, null, 5, 2, 2, 2, null, 2,2 , 0 /*140*/, 0, null, null, null, null, null, null, null, null, null /*150*/, null, 0.4, 3, 0.8, 0.8, 2, 2, 2, 1.25, null /*160*/, 0.2, 2, 2, 2, null, null, null, null, 0.5, 0.1 /*170*/, 0.1, 1.25, 5, 0.5, 0, 1.5, 1.5, 1.5, 1.5, 2 /*180*/, 2, null, 1.5, 2, 0.5, 2, 0.6, 0.6, 0.5, 0.5 /*190*/, 0.5, 0.5, 0.2, 1, 2, 2, 2, 2, 2, null /*200*/, null, null, 1.5, 1.5, 1.5, 1.5, null, 2, 2, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, 3.5, 50, 5, 0.6, 0.6, null, null, null, null, null, 0 ];

Item.addTool(500,"pickaxe",0,"pick","Pick",100,ToolType.Sword,10,3);
Item.addTool(501,"hoe",0,"hoe","Hoe",100,4,10,1);
Item.addTool(502,"axe",0,"axe","Axe",100,2,10,5);
Item.addTool(503,"shovel",0,"shovel","Shovel",100,3,10,3);
Item.addTool(504,"sword",0,"sword","Sword",100,0,2,10);
Item.addTool(505,"shears",0,"shears","Shears",100,5,10,1);

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

var drop = [[1,0,4,1,0],[1,1,1,1,1],[1,2,1,1,2],[1,3,1,1,3],[1,4,1,1,4],[1,5,1,1,5],[1,6,1,1,6],[4,0,4,1,0],[14,0,14,1,0],[15,0,15,1,0],[16,0,263,1,0],[21,0,351,ModPE.rnd(12,8),4][24,0,24,1],[41,0,41,1,0],[42,0,42,1,0],[43,0,44,2],[45,0,45,1,0],[48,0,48,1,0],[49,0,49,1,0],[56,0,264,1,0],[57,0,57,1,0],[67,0,67,1,0],[73,0,331,ModPE.rnd(,3),0],[87,0,87,1,0],[98,0,98,1],[101,0,101,1,0],[108,0,108,1,0],[109,0,109,1,0],[112,0,112,1,0],[114,0,114,1,0],[121,0,121,1,0],[128,0,128,1,0],[129,0,388,1,0],[133,0,133,1,0],[139,0,139,1],[152,0,152,1,0],[155,0,155,1],[156,0,156,1,0],[159,0,159,1],[172,0,172,1,0],[173,0,173,1,0][174,0,174,1,0],[246,0,49,1,0],[247,0,247,1,0]];
var CT = 1;
var ToolType = new Object;
ToolType.Sword = 0;
ToolType.Pickaxe = 1;
ToolType.Axe = 2;
ToolType.Shovel = 3;
ToolType.Hoe = 4;
ToolType.Shears = 5;
var tools = [];
var lastTool;
var lastBlock;
var toolStats = [];

ModPE.rnd = function(max,min){
	return Math.floor(Math.random()*max)+min;
};

Item.addTool = function(id,texture,offset,unlocalName,localName,durability,ToolType,digSpeed,attackDamage){
	ModPE.setItem(id,texture,offset,unlocalName,1);
	ModPE.langEdit("item." + unlocalName + ".name", localName);
	Item.setMaxDamage(id, durability);
	Item.setCategory(id, ItemCategory.TOOL);
	Item.setHandEquipped(id, true);
	toolStats.push([id,durability,ToolType,digSpeed,attackDamage]);
	tools.push(id);
}

Item.damageTool = function(damage){
	var found, maxDamage;
	for(var i in toolStats) if(toolStats[i][0] == Player.getCarriedItem()) {
		found = 1;
		maxDamage = toolStats[i][1];
	}
	if(!found) return;
	if(Player.getCarriedItemData() < maxDamage - 1 - damage) Entity.setCarriedItem(Player.getEntity(), Player.getCarriedItem(), Player.getCarriedItemCount(), Player.getCarriedItemData() + damage);
	else {
		Player.clearInventorySlot(Player.getSelectedSlotId());
		Level.playSoundEnt(Player.getEntity(), "random.break", 100, 100);
	}
}

function setDestroy(blockId,itemId){
	var BT = defaultDestroyTime[blockId];
	for(var i in toolStats){
		if(toolStats[i][0]==itemId){
			if(toolStats[i][2]==2 && axe.indexOf(blockId)>=0){
				CT = 1;
			}
			if(toolStats[i][2]==2 && axe.indexOf(blockId)==-1){
				CT = 3.33;
			}
			if(toolStats[i][2]==1 && pick.indexOf(blockId)>=0){
				CT = 1;
			}
			if(toolStats[i][2]==1 && pick.indexOf(blockId)==-1){
				CT = 3.33;
			}
			if(toolStats[i][2]==3 && shovel.indexOf(blockId)>=0){
				CT = 1;
			}
			if(toolStats[i][2]==3 && shovel.indexOf(blockId)==-1){
				CT = 3.33;
			}
			if(toolStats[i][2]==0 && sword.indexOf(blockId)>=0){
				CT = 1;
			}
			if(toolStats[i][2]==0 && sword.indexOf(blockId)==-1){
				CT = 3.33;
			}
			Block.setDestroyTime(blockId,BT * CT /toolStats[i][3]);
		}
	}
}

function toolModTick(){
	var block = Player.getPointedBlockId();
	var item = Player.getCarriedItem();
	if(tools.indexOf(item)>=0&&!lastBlock){
		setDestroy(block, item);
		lastBlock=block;
		lastTool=item;
	}
	if(tools.indexOf(item)==-1&&lastBlock){
		defaultDestroy(lastBlock);
		lastBlock=0;
		lastTool=0;
	}
	if(lastBlock!==block){
		defaultDestroy(lastBlock);
		lastBlock=0;
	}
	if(lastTool!==item){
		lastBlock=0;
	}
}

function toolUseItem(x,y,z,itemId,blockId,side,itemData,blockData){
	for(var i in toolStats){
		if(itemId==toolStats[i][0] && toolStats[i][2]==4){
			if(blockId==3||blockId==2||blockId==110||blockId==243||blockId==198){
				Level.setTile(x,y,z,60,0);
				Item.damageTool(1);
			}
		}
	}
}

function toolAttackHook(attacker, victim){
	for(var i in toolStats){
		if(toolStats[i][0]==Player.getCarriedItem()){
			Entity.setHealth(victim, (Entity.getHealth(victim)-toolStats[i][4]));
			if(toolStats[i][2]==0){
				Item.damageTool(1);
			}
			else{
				Item.damageTool(2);
			}
		}
	}
}

function toolDestroyBlock(x,y,z,side){
	var block = Level.getTile(x,y,z);
	var data = Level.getData(x,y,z);
	var item = Player.getCarriedItem();
	if(tools.indexOf(item)>=0){
		for(var s in toolStats){
			if(toolStats[s][2]==1){
				for(var i in drop){
					if(block==drop[i][0]&&data==drop[i][1]){
						preventDefault();
						Level.destroyBlock(x,y,z,false);
						if(!drop[i][4]){drop[i][4]==data}
						Level.dropItem(x+0.5,y,z+0.5,0,drop[i][2],drop[i][3],drop[i][4]);
					}
				}
			}
		}
		if(CT==1){
			Item.damageTool(1);
		}
		if(CT==3.33){
			Item.damageTool(2);
		}
	}
}
