/* ArmoryPE was a WIP project for me when I wanted more Armor and such */

// ModPack Info
/* Not good, I forgot all the vars, lets, or consts. What was I thinking? */
copper_ingot_id = 407;
copper_dust_id = 408;
copper_helmet_id = 409;
copper_chest_id = 410;
copper_legs_id = 411;
copper_boots_id = 412;
tin_ingot_id = 413;
tin_dust_id = 414;
iron_dust_id = 415;
gold_dust_id = 416;
bronze_ingot_id = 417;
bronze_dust_id = 418;
bronze_helmet_id = 419;
bronze_chest_id = 420;
bronze_legs_id = 421;
bronze_boots_id = 422;
steel_ingot_id = 423;
steel_dust_id = 424;
steel_helmet_id = 425;
steel_chest_id = 426;
steel_legs_id = 427;
steel_boots_id = 428;
ruby_id = 429;
sapphire_id = 430;
emerald_helmet_id = 431;
emerald_chest_id = 432;
emerald_legs_id = 433;
emerald_boots_id = 434;
obsidian_helmet_id = 435;
obsidian_chest_id = 436;
obsidian_legs_id = 437;
obsidian_boots_id = 438;
copper_sword_id = 439;
bronze_sword_id = 440;
steel_sword_id = 441;
ruby_sword_id = 442;
sapphire_sword_id = 443;
emerald_sword_id = 444;
obsidian_sword_id = 445;
copper_pick_id = 446;
bronze_pick_id = 447;
steel_pick_id = 448;
ruby_pick_id = 449;
sapphire_pick_id = 450;
emerald_pick_id = 451;
obsidian_pick_id = 452;
copper_axe_id = 453;
bronze_axe_id = 454;
steel_axe_id = 455;
ruby_axe_id = 456;
sapphire_axe_id = 474;
emerald_axe_id = 475;
obsidian_axe_id = 476;
copper_shovel_id = 460;
bronze_shovel_id = 461;
steel_shovel_id = 462;
ruby_shovel_id = 463;
sapphire_shovel_id = 464;
emerald_shovel_id = 465;
obsidian_shovel_id = 466;
copper_hoe_id = 467;
bronze_hoe_id = 468;
steel_hoe_id = 469;
ruby_hoe_id = 470;
sapphire_hoe_id = 471;
emerald_hoe_id = 472;
obsidian_hoe_id = 473;
diamond_bucket_id = 477;
diamond_bucket_water_id = 478;
diamond_bucket_lava_id = 479;
diamond_bucket_milk_id = 480;
gold_bucket_id = 481;
gold_bucket_water_id = 482;
gold_bucket_lava_id = 483;
gold_bucket_milk_id = 484;
motus_erupit_id = 485;
nocte_oculus_id = 486;
aethereum_id = 487;
spiritus_id = 488;
ignem_boots = 489;
clypeus_id = 490;
cor_factorem_id = 491;
crura_id = 492;
sanitatem_id = 493;
fortitudo_id = 494;
fodienda_id = 495;
magnet_on_id = 496;
magnet_off_id = 497;

copper_ore_id = 200;
tin_ore_id = 201;
ruby_ore_id = 202;
sapphire_ore_id = 203;
grinder_id = 204;


/* Here are the arrays I used for tools */

// wood type blocks
var axe = [5,17,47,53,54,58,63,64,65,68,85,107,125,126,134,135,136,157,158,162,163,164];
// stone type blocks
var pick = [1,4,14,15,16,21,22,24,41,42,43,44,45,48,49,52,56,57,61,62,67,71,73,74,79,87,89,97,98,101,102,108,109,112,113,114,121,128,129,133,139,152,155,156,159,172,173,174,245,246,247];
// dirt type blocks
var shovel = [2,3,312,13,60,80,82,99,100,110,198,243];
// cobweb...
var sword = [30];
// wool...
var shears = [35];
// yay destroy times, note: I absolutely hated puting this in my code
var defaultDestroyTime = [ null, 1.5, 0.6, 0.5, 2, 2, 0, -1, null, null, null /*10*/, null, 0.5, 0.6, 3, 3, 3, 2, 0.2, 0.6, 0.3/*20*/, 3, 3, 10, 0.8, null, 0.2, 0.7, null, null, 4/*30*/, 0, 0, 1, 1.5, 0.8, null, 0, 0, 0, 0 /*40*/, 3, 5, 2, 2, 2, 0, 1.5, 2, 50, 0 /*50*/, 0, 5, 2, 2.5, null, 3, 5, 2.5, 0, 0.6/*60*/, 3.5, 3.5, 1, 3, 0.4, 0.7, 2, 1, null, null/*70*/, 5, null, 3, 3, null, null, null, 0.1, 0.5, 0.2 /*80*/, 0.4, 0.6, 0, null, 2, 1, 0.5, 0.3, null, 1 /*90*/, 0.5, null, null, -1, 3, null, 0.75, 1.5, 0.2, 0.2 /*100*/, 0.3, 1, 1, 0, null, 0.2, 2, 1.5, null, 0.6 /*110*/, 0, null, 2, null, null, null, null, null, null, -1 /*120*/, 3, null, null, null, null, null, 0.2, null, 3, null /*130*/, null, null, 5, 2, 2, 2, null, 2,2 , 0 /*140*/, 0, null, null, null, null, null, null, null, null, null /*150*/, null, 0.4, 3, 0.8, 0.8, 2, 2, 2, 1.25, null /*160*/, 0.2, 2, 2, 2, null, null, null, null, 0.5, 0.1 /*170*/, 0.1, 1.25, 5, 0.5, 0, 1.5, 1.5, 1.5, 1.5, 2 /*180*/, 2, null, 1.5, 2, 0.5, 2, 0.6, 0.6, 0.5, 0.5 /*190*/, 0.5, 0.5, 0.2, 1, 2, 2, 2, 2, 2, null /*200*/, null, null, 1.5, 1.5, 1.5, 1.5, null, 2, 2, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, 3.5, 50, 5, 0.6, 0.6, null, null, null, null, null, 0 ];
// add food item id's here - Haha, my eathook, 'member that? 
var foodItems = [260,282,297,319,320,349,350,357,360,363,364,365,366,367,391,392,393,400,diamond_bucket_milk_id,gold_bucket_milk_id];
// add inventory blocks here - or farming... 
// this array was so when you were in a chest, eathook wouldn't think you ate something
var invBlocks = [54,58,60,61,62];

// wow, confusing varibles GO!
var nowAmount, nowId, nowData, lastAmount, lastId, lastData, eHlastBlock, nowSlotId, lastSlotId;
var ToolType = new Object; // here I could've just done TooType = {};
var tools = []; // why did I put new Object above, but not new Array(); here? the world may never know
var lastTool; 
var lastBlock;
var toolStats = [];
var tick = 0;
var droppedItems = [];
var magnet = false; // oh, my magnet code is in here

Player.checkForInventoryItem = function(id, amount, damage) {
	if(!amount) amount = 1;
	if(!damage) damage = 0;
	if(!id) id = 0;
	var count = 0;
	for(var i = 0; i < 44; i++) if(Player.getInventorySlot(i) == id && Player.getInventorySlotData(i) == damage) count += Player.getInventorySlotCount(i);
	return count >= amount;
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

function entityAddedHook(entity){
	if(Entity.getEntityTypeId(entity)==64){
    	droppedItems.push(entity);
	}
}

function entityRemovedHook(entity){
    for(var i in droppedItems){
		if(Entity.getEntityTypeId(entity)==droppedItems[i]){
			droppedItems.splice(droppedItems.indexOf(entity), 1);
		}
	}
}

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

function modTick(){
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
	eHlastBlock = Player.getPointedBlockId();
	nowId = Player.getCarriedItem();
	nowData = Player.getCarriedItemData();
	nowAmount = Player.getCarriedItemCount();
	nowSlotId = Player.getSelectedSlotId();
	if(foodItems.indexOf(nowId)>=0){
		tick++;
		if(tick==10){
			tick=0;
			if(nowId==lastId){
				if(nowData==lastData){
					if((lastAmount-1)==nowAmount){
						if(invBlocks.indexOf(eHlastBlock)==-1){
							eatHook(lastId);
						}
					}
				}
			}
			lastId = Player.getCarriedItem();
			lastData = Player.getCarriedItemData();
			lastAmount = Player.getCarriedItemCount();
			lastSlotId = Player.getSelectedSlotId();
		}
	}
	if(nowId==0){
		if(foodItems.indexOf(lastId)>=0){
			if(lastAmount==1){
				if(nowSlotId==lastSlotId){
					if(invBlocks.indexOf(eHlastBlock)==-1){
						eatHook(lastId);
						lastId=0; 
					}
				}
			}
		}
	}
	if(foodItems.indexOf(nowId)==-1){ 
		if(nowId!==0){ 
			lastId=0;
		}
	}
	for(var i in droppedItems){
		if(Math.sqrt(Math.pow(Player.getX() - Entity.getX(droppedItems[i]), 2) +  Math.pow(Player.getZ() - Entity.getZ(droppedItems[i]), 2)) < 10 && magnet){
			Entity.setVelX(droppedItems[i], Player.getX()-Entity.getX(droppedItems[i]));
			Entity.setVelY(droppedItems[i], Player.getY()-Entity.getY(droppedItems[i])-1);
			Entity.setVelZ(droppedItems[i], Player.getZ()-Entity.getZ(droppedItems[i]));
		}
	}
	if(Player.checkForInventoryItem(magnet_on_id)&&!magnet){
		magnet = true;
	}
	if(Player.checkForInventoryItem(magnet_off_id)&&magnet){
		magnet = false;
	}
}

var CT = 1;

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

function defaultDestroy(id){
	Block.setDestroyTime(id,defaultDestroyTime[id]);
}

Player.switchCarriedItem = function(item){
	Entity.setCarriedItem(Player.getEntity(),item,1,0);
};

Player.removeCarriedItem = function(amount){
	if(Player.getCarriedItemCount()>=2)Entity.setCarriedItem(Player.getEntity(),Player.getCarriedItem(),Player.getCarriedItemCount()-amount,Player.getCarriedItemData());
	if(Player.getCarriedItemCount()<=1)Entity.setCarriedItem(Player.getEntity(),0,0,0);
};

function useItem(x,y,z,item,block,side){
	if(item==magnet_on_id){
		Player.switchCarriedItem(magnet_off_id);
	}
	if(item==magnet_off_id){
		Player.switchCarriedItem(magnet_on_id);
	}
	for(var i in toolStats){
		if(item==toolStats[i][0] && toolStats[i][2]==4){
			if(block==3||block==2||block==110||block==243||block==198){
				Level.setTile(x,y,z,60,0);
				Item.damageTool(1);
			}
		}
	}
	if(item==diamond_bucket_id){
		if(side==0){
			if(Level.getTile(x,y-1,z)==9){
				Level.setTile(x,y-1,z,0);
				Player.removeCarriedItem(1);
				Player.addItemInventory(diamond_bucket_water_id,1,0);
			}
			if(Level.getTile(x,y-1,z)==11){
				Level.setTile(x,y-1,z,0);
				Player.removeCarriedItem(1);
				Player.addItemInventory(diamond_bucket_lava_id,1,0);
			}
		}
		if(side==1){
			if(Level.getTile(x,y+1,z)==9){
				Level.setTile(x,y+1,z,0);
				Player.removeCarriedItem(1);
				Player.addItemInventory(diamond_bucket_water_id,1,0);
			}
			if(Level.getTile(x,y+1,z)==11){
				Level.setTile(x,y+1,z,0);
				Player.removeCarriedItem(1);
				Player.addItemInventory(diamond_bucket_lava_id,1,0);
			}
		}
		if(side==4){
			if(Level.getTile(x-1,y,z)==9){
				Level.setTile(x-1,y,z,0);
				Player.removeCarriedItem(1);
				Player.addItemInventory(diamond_bucket_water_id,1,0);
			}
			if(Level.getTile(x-1,y,z)==11){
				Level.setTile(x-1,y,z,0);
				Player.removeCarriedItem(1);
				Player.addItemInventory(diamond_bucket_lava_id,1,0);
			}
		}
		if(side==5){
			if(Level.getTile(x+1,y,z)==9){
				Level.setTile(x+1,y,z,0);
				Player.removeCarriedItem(1);
				Player.addItemInventory(diamond_bucket_water_id,1,0);
			}
			if(Level.getTile(x+1,y,z)==11){
				Level.setTile(x+1,y,z,0);
				Player.removeCarriedItem(1);
				Player.addItemInventory(diamond_bucket_lava_id,1,0);
			}
		}
		if(side==2){
			if(Level.getTile(x,y,z-1)==9){
				Level.setTile(x,y,z-1,0);
				Player.removeCarriedItem(1);
				Player.addItemInventory(diamond_bucket_water_id,1,0);
			}
			if(Level.getTile(x,y,z-1)==11){
				Level.setTile(x,y,z-1,0);
				Player.removeCarriedItem(1);
				Player.addItemInventory(diamond_bucket_lava_id,1,0);
			}
		}
		if(side==3){
			if(Level.getTile(x,y,z+1)==9){
				Level.setTile(x,y,z+1,0);
				Player.removeCarriedItem(1);
				Player.addItemInventory(diamond_bucket_water_id,1,0);
			}
			if(Level.getTile(x,y,z+1)==11){
				Level.setTile(x,y,z+1,0);
				Player.removeCarriedItem(1);
				Player.addItemInventory(diamond_bucket_lava_id,1,0);
			}
		}
	}
	if(item==gold_bucket_id){
		if(side==0){
			if(Level.getTile(x,y-1,z)==9){
				Level.setTile(x,y-1,z,0);
				Player.removeCarriedItem(1);
				Player.addItemInventory(gold_bucket_water_id,1,0);
			}
			if(Level.getTile(x,y-1,z)==11){
				Level.setTile(x,y-1,z,0);
				Player.removeCarriedItem(1);
				Player.addItemInventory(gold_bucket_lava_id,1,0);
			}
		}
		if(side==1){
			if(Level.getTile(x,y+1,z)==9){
				Level.setTile(x,y+1,z,0);
				Player.removeCarriedItem(1);
				Player.addItemInventory(gold_bucket_water_id,1,0);
			}
			if(Level.getTile(x,y+1,z)==11){
				Level.setTile(x,y+1,z,0);
				Player.removeCarriedItem(1);
				Player.addItemInventory(gold_bucket_lava_id,1,0);
			}
		}
		if(side==4){
			if(Level.getTile(x-1,y,z)==9){
				Level.setTile(x-1,y,z,0);
				Player.removeCarriedItem(1);
				Player.addItemInventory(gold_bucket_water_id,1,0);
			}
			if(Level.getTile(x-1,y,z)==11){
				Level.setTile(x-1,y,z,0);
				Player.removeCarriedItem(1);
				Player.addItemInventory(gold_bucket_lava_id,1,0);
			}
		}
		if(side==5){
			if(Level.getTile(x+1,y,z)==9){
				Level.setTile(x+1,y,z,0);
				Player.removeCarriedItem(1);
				Player.addItemInventory(gold_bucket_water_id,1,0);
			}
			if(Level.getTile(x+1,y,z)==11){
				Level.setTile(x+1,y,z,0);
				Player.removeCarriedItem(1);
				Player.addItemInventory(gold_bucket_lava_id,1,0);
			}
		}
		if(side==2){
			if(Level.getTile(x,y,z-1)==9){
				Level.setTile(x,y,z-1,0);
				Player.removeCarriedItem(1);
				Player.addItemInventory(gold_bucket_water_id,1,0);
			}
			if(Level.getTile(x,y,z-1)==11){
				Level.setTile(x,y,z-1,0);
				Player.removeCarriedItem(1);
				Player.addItemInventory(gold_bucket_lava_id,1,0);
			}
		}
		if(side==3){
			if(Level.getTile(x,y,z+1)==9){
				Level.setTile(x,y,z+1,0);
				Player.removeCarriedItem(1);
				Player.addItemInventory(gold_bucket_water_id,1,0);
			}
			if(Level.getTile(x,y,z+1)==11){
				Level.setTile(x,y,z+1,0);
				Player.removeCarriedItem(1);
				Player.addItemInventory(gold_bucket_lava_id,1,0);
			}
		}
	}
	if(item==diamond_bucket_water_id){
		if(invBlocks.indexOf(block)==-1){
			switch(side){
				case 0:
					Level.setTile(x,y-1,z,9,0);
					Player.removeCarriedItem(1);
					Player.addItemInventory(diamond_bucket_id,1,0);
					break;
				case 1:
					Level.setTile(x,y+1,z,9,0);
					Player.removeCarriedItem(1);
					Player.addItemInventory(diamond_bucket_id,1,0);
					break;
				case 4:
					Level.setTile(x-1,y,z,9,0);
					Player.removeCarriedItem(1);
					Player.addItemInventory(diamond_bucket_id,1,0);
					break;
				case 5:
					Level.setTile(x+1,y,z,9,0);
					Player.removeCarriedItem(1);
					Player.addItemInventory(diamond_bucket_id,1,0);
					break;
				case 2:
					Level.setTile(x,y,z-1,9,0);
					Player.removeCarriedItem(1);
					Player.addItemInventory(diamond_bucket_id,1,0);
					break;
				case 3:
					Level.setTile(x,y,z+1,9,0);
					Player.removeCarriedItem(1);
					Player.addItemInventory(diamond_bucket_id,1,0);
					break;
			}
		}
	}
	if(item==diamond_bucket_lava_id){
		if(invBlocks.indexOf(block)==-1){
			switch(side){
				case 0:
					Level.setTile(x,y-1,z,11,0);
					Player.removeCarriedItem(1);
					Player.addItemInventory(diamond_bucket_id,1,0);
					break;
				case 1:
					Level.setTile(x,y+1,z,11,0);
					Player.removeCarriedItem(1);
					Player.addItemInventory(diamond_bucket_id,1,0);
					break;
				case 4:
					Level.setTile(x-1,y,z,11,0);
					Player.removeCarriedItem(1);
					Player.addItemInventory(diamond_bucket_id,1,0);
					break;
				case 5:
					Level.setTile(x+1,y,z,11,0);
					Player.removeCarriedItem(1);
					Player.addItemInventory(diamond_bucket_id,1,0);
					break;
				case 2:
					Level.setTile(x,y,z-1,11,0);
					Player.removeCarriedItem(1);
					Player.addItemInventory(diamond_bucket_id,1,0);
					break;
				case 3:
					Level.setTile(x,y,z+1,11,0);
					Player.removeCarriedItem(1);
					Player.addItemInventory(diamond_bucket_id,1,0);
					break;
			}
		}
	}
	if(item==gold_bucket_water_id){
		if(invBlocks.indexOf(block)==-1){
			switch(side){
				case 0:
					Level.setTile(x,y-1,z,9,0);
					Player.removeCarriedItem(1);
					Player.addItemInventory(gold_bucket_id,1,0);
					break;
				case 1:
					Level.setTile(x,y+1,z,9,0);
					Player.removeCarriedItem(1);
					Player.addItemInventory(gold_bucket_id,1,0);
					break;
				case 4:
					Level.setTile(x-1,y,z,9,0);
					Player.removeCarriedItem(1);
					Player.addItemInventory(gold_bucket_id,1,0);
					break;
				case 5:
					Level.setTile(x+1,y,z,9,0);
					Player.removeCarriedItem(1);
					Player.addItemInventory(gold_bucket_id,1,0);
					break;
				case 2:
					Level.setTile(x,y,z-1,9,0);
					Player.removeCarriedItem(1);
					Player.addItemInventory(gold_bucket_id,1,0);
					break;
				case 3:
					Level.setTile(x,y,z+1,9,0);
					Player.removeCarriedItem(1);
					Player.addItemInventory(gold_bucket_id,1,0);
					break;
			}
		}
	}
	if(item==gold_bucket_lava_id){
		if(invBlocks.indexOf(block)==-1){
			switch(side){
				case 0:
					Level.setTile(x,y-1,z,11,0);
					Player.removeCarriedItem(1);
					Player.addItemInventory(gold_bucket_id,1,0);
					break;
				case 1:
					Level.setTile(x,y+1,z,11,0);
					Player.removeCarriedItem(1);
					Player.addItemInventory(gold_bucket_id,1,0);
					break;
				case 4:
					Level.setTile(x-1,y,z,11,0);
					Player.removeCarriedItem(1);
					Player.addItemInventory(gold_bucket_id,1,0);
					break;
				case 5:
					Level.setTile(x+1,y,z,11,0);
					Player.removeCarriedItem(1);
					Player.addItemInventory(gold_bucket_id,1,0);
					break;
				case 2:
					Level.setTile(x,y,z-1,11,0);
					Player.removeCarriedItem(1);
					Player.addItemInventory(gold_bucket_id,1,0);
					break;
				case 3:
					Level.setTile(x,y,z+1,11,0);
					Player.removeCarriedItem(1);
					Player.addItemInventory(gold_bucket_id,1,0);
					break;
			}
		}
	}
}

function attackHook(attacker,victim){
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
	if(Entity.getEntityTypeId(victim)==11){
		preventDefault();
		if(Player.getCarriedItem()==diamond_bucket_id){
			Player.switchCarriedItem(diamond_bucket_milk_id,1,0);
		}
		if(Player.getCarriedItem()==gold_bucket_id){
			Player.switchCarriedItem(gold_bucket_milk_id,1,0);
		}
	}
}

ModPE.rnd = function(max,min){
	return Math.floor(Math.random()*max)+min;
};

// look at this monster, It hurts my eyes
var drop = [
[1,0,4,1,0],[1,1,1,1,1],[1,2,1,1,2],
[1,3,1,1,3],[1,4,1,1,4],[1,5,1,1,5],
[1,6,1,1,6],[4,0,4,1,0],[14,0,14,1,0],
[15,0,15,1,0],[16,0,263,1,0],[21,0,351,ModPE.rnd(12,8),4]
[24,0,24,1],[41,0,41,1,0],[42,0,42,1,0],
[43,0,44,2],[45,0,45,1,0],[48,0,48,1,0],
[49,0,49,1,0],[56,0,264,1,0],[57,0,57,1,0],
[67,0,67,1,0],[73,0,331,ModPE.rnd(4,3),0],[87,0,87,1,0],
[98,0,98,1],[101,0,101,1,0],[108,0,108,1,0],
[109,0,109,1,0],[112,0,112,1,0],[114,0,114,1,0],
[121,0,121,1,0],[128,0,128,1,0],[129,0,388,1,0],
[133,0,133,1,0],[139,0,139,1],[152,0,152,1,0],
[155,0,155,1],[156,0,156,1,0],[159,0,159,1],
[172,0,172,1,0],[173,0,173,1,0][174,0,174,1,0],
[246,0,49,1,0],[247,0,247,1,0],[copper_ore_id,0,copper_ore_id,1,0],
[tin_ore_id,0,tin_ore_id,1,0],[ruby_ore_id,0,ruby_id,1,0],[sapphire_ore_id,0,sapphire_id,1,0],
[grinder_id,0,grinder_id,1,0],
];

function destroyBlock(x,y,z,side){
	//clientMessage("Debug: destroyBlock()");
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

function eatHook(foodId){
	if(foodId==diamond_bucket_milk_id){
		Player.removeAllEffects();
		Player.addItemInventory(diamond_bucket_id,1,0);
	}
	if(foodId==gold_bucket_milk_id){
		Player.removeAllEffects();
		Player.addItemInventory(gold_bucket_id,1,0);
	}
}

var name = function(item,name){
	ModPE.langEdit("item."+item+".name",name);
};
var Bname = function(block,name){
	ModPE.langEdit("tile."+block+".name",name);
};

/*
ToolTypes
0 - Sword
1 - Pickaxe
2 - Axe
3 - Shovel
4 - Hoe
5 - Shears
*/
/*
Motus Erupit - Speed Boots
Nocte Oculus - Night Vision Helmet
Aethereum - Invisibility Chestplate
Spiritus - Water Breathing Helmet
Ignem Boots - Fire Resistance Boots
Clypeus - Resistance - Shield
Cor Factorem - Regeneration Leggings
Crura - Jump Boost Leggings
Sanitatem - HealthBoost Chestplate
Fortitudo - Strength Sword
Fodienda - Haste Pickaxe
*/

Block.defineBlock(copper_ore_id,"copper_ore",["copper_ore",0]);
Block.setDestroyTime(copper_ore_id,1.5);
Block.defineBlock(tin_ore_id,"tin_ore",["tin_ore",0]);
Block.setDestroyTime(tin_ore_id,1.5);
Block.defineBlock(ruby_ore_id,"ruby_ore",["ruby_ore",0]);
Block.setDestroyTime(ruby_ore_id,1.5);
Block.defineBlock(sapphire_ore_id,"sapphire_ore",["sapphire_ore",0]);
Block.setDestroyTime(sapphire_ore_id,1.5);
Block.defineBlock(grinder_id,"grinder",[["piston_bottom",0],["stonecutter",2],["piston_bottom",0],["piston_bottom",0],["piston_bottom",0],["piston_bottom",0]]);
Block.setDestroyTime(grinder_id,1.5);

ModPE.setItem(copper_ingot_id,"copper_ingot",0,"copper_ingot",64);
ModPE.setItem(copper_dust_id,"copper_dust",0,"copper_dust",64);
ModPE.setItem(tin_ingot_id,"tin_ingot",0,"tin_ingot",64);
ModPE.setItem(tin_dust_id,"tin_dust",0,"tin_dust",64);
ModPE.setItem(iron_dust_id,"iron_dust",0,"iron_dust",64);
ModPE.setItem(gold_dust_id,"gold_dust",0,"gold_dust",64);
ModPE.setItem(ruby_id,"ruby",0,"ruby",64);
ModPE.setItem(sapphire_id,"ruby",1,"sapphire",64);
ModPE.setItem(bronze_ingot_id,"bronze_ingot",0,"bronze_ingot",64);
ModPE.setItem(bronze_dust_id,"bronze_dust",0,"bronze_dust",64);
ModPE.setItem(steel_ingot_id,"steel_ingot",0,"steel_ingot",64);
ModPE.setItem(steel_dust_id,"steel_dust",0,"steel_dust",64);
ModPE.setItem(diamond_bucket_id,"diamond_bucket",0,"diamond_bucket",16);
ModPE.setItem(diamond_bucket_lava_id,"diamond_bucket_lava",0,"diamond_bucket_lava",1);
ModPE.setItem(diamond_bucket_water_id,"diamond_bucket_water",0,"diamond_bucket_water",1);
ModPE.setFoodItem(diamond_bucket_milk_id,"diamond_bucket_milk",0,0,"diamond_bucket_milk",1);
ModPE.setItem(gold_bucket_id,"gold_bucket",0,"gold_bucket",16);
ModPE.setItem(gold_bucket_lava_id,"gold_bucket_lava",0,"gold_bucket_lava",1);
ModPE.setItem(gold_bucket_water_id,"gold_bucket_water",0,"gold_bucket_water",1);
ModPE.setFoodItem(gold_bucket_milk_id,"gold_bucket_milk",0,0,"gold_bucket_milk",1);
ModPE.setItem(magnet_on_id,"magnet",1,"magnet",1);
ModPE.setItem(magnet_off_id,"magnet",0,"magnet",1);

/*
motus_erupit_id
nocte_oculus_id
aethereum_id
spiritus_id
ignem_boots
//clypeus_id //shield
cor_factorem_id
crura_id
sanitatem_id
*/

/* No... Spaces... readability... is... dead... */
Item.defineArmor(copper_helmet_id,"copper_helmet",0,"copper_helmet","armor/copper_layer_1.png",2,96,ArmorType.helmet);
Item.defineArmor(copper_chest_id,"copper_chest",0,"copper_chest","armor/copper_layer_1.png",4,130,ArmorType.chestplate);
Item.defineArmor(copper_legs_id,"copper_legs",0,"copper_legs","armor/copper_layer_2.png",3,152,ArmorType.leggings);
Item.defineArmor(copper_boots_id,"copper_boots",0,"copper_boots","armor/copper_layer_1.png",2,115,ArmorType.boots);
Item.defineArmor(bronze_helmet_id,"bronze_helmet",0,"bronze_helmet","armor/bronze_layer_1.png",3,126,ArmorType.helmet);
Item.defineArmor(bronze_chest_id,"bronze_chest",0,"bronze_chest","armor/bronze_layer_1.png",4,176,ArmorType.chestplate);
Item.defineArmor(bronze_legs_id,"bronze_legs",0,"bronze_legs","armor/bronze_layer_2.png",4,174,ArmorType.leggings);
Item.defineArmor(bronze_boots_id,"bronze_boots",0,"bronze_boots","armor/bronze_layer_1.png",2,130,ArmorType.boots);
Item.defineArmor(steel_helmet_id,"steel_helmet",0,"steel_helmet","armor/steel_layer_1.png",3,241,ArmorType.helmet);
Item.defineArmor(steel_chest_id,"steel_chest",0,"steel_chest","armor/steel_layer_1.png",7,364,ArmorType.chestplate);
Item.defineArmor(steel_legs_id,"steel_legs",0,"steel_legs","armor/steel_layer_2.png",5,257,ArmorType.leggings);
Item.defineArmor(steel_boots_id,"steel_boots",0,"steel_boots","armor/steel_layer_1.png",3,204,ArmorType.boots);
Item.defineArmor(emerald_helmet_id,"emerald_helmet",0,"emerald_helmet","armor/emerald_layer_1.png",4,364,ArmorType.helmet);
Item.defineArmor(emerald_chest_id,"emerald_chest",0,"emerald_chest","armor/emerald_layer_1.png",6,529,ArmorType.chestplate);
Item.defineArmor(emerald_legs_id,"emerald_legs",0,"emerald_legs","armor/emerald_layer_2.png",6,496,ArmorType.leggings);
Item.defineArmor(emerald_boots_id,"emerald_boots",0,"emerald_boots","armor/emerald_layer_1.png",4,430,ArmorType.boots);
Item.defineArmor(obsidian_helmet_id,"obsidian_helmet",0,"obsidian_helmet","armor/obsidian_layer_1.png",5,412,ArmorType.helmet);
Item.defineArmor(obsidian_chest_id,"obsidian_chest",0,"obsidian_chest","armor/obsidian_layer_1.png",8,560,ArmorType.chestplate);
Item.defineArmor(obsidian_legs_id,"obsidian_legs",0,"obsidian_legs","armor/obsidian_layer_2.png",8,544,ArmorType.leggings);
Item.defineArmor(obsidian_boots_id,"obsidian_boots",0,"obsidian_boots","armor/obsidian_layer_1.png",4,474,ArmorType.boots);

Item.addTool(copper_sword_id, "copper_sword", 0, "copper_sword", "Copper Sword", 96, 0, 0, 0);
Item.addTool(bronze_sword_id, "bronze_sword", 0, "bronze_sword", "Bronze Sword", 157, 0, 0, 0);
Item.addTool(ruby_sword_id, "ruby_sword", 0, "ruby_sword", "Ruby Sword", 251, 0, 0, 0);
Item.addTool(sapphire_sword_id, "sapphire_sword", 0, "sapphire_sword", "Sapphire Sword", 251, 0, 0, 0);
Item.addTool(steel_sword_id, "steel_sword", 0, "steel_sword", "Steel Sword", 567, 0, 0, 0);
Item.addTool(emerald_sword_id, "emerald_sword", 0, "emerald_sword", "Emerald Sword", 1562, 0, 0, 0);
Item.addTool(obsidian_sword_id, "obsidian_sword", 0, "obsidian_sword", "Obsidian Sword", 1800, 0, 0, 0);
Item.addTool(fortitudo_id, "sword", 0, "fortitudo", "§cFortitudo", 2400, 0, 0, 0);

Item.addTool(copper_pick_id, "copper_pick", 0, "copper_pick", "Copper Pickaxe", 96, 1, 3, 0);
Item.addTool(bronze_pick_id, "bronze_pick", 0, "bronze_pick", "Bronze Pickaxe", 157, 1, 5, 0);
Item.addTool(ruby_pick_id, "ruby_pickaxe", 0, "ruby_pick", "Ruby Pickaxe", 251, 1, 6, 0);
Item.addTool(sapphire_pick_id, "sapphire_pickaxe", 0, "sapphire_pick", "Sapphire Pickaxe", 251, 1, 6, 0);
Item.addTool(steel_pick_id, "steel_pick", 0, "steel_pick", "Steel Pickaxe", 567, 1, 7, 0);
Item.addTool(emerald_pick_id, "emerald_pickaxe", 0, "emerald_pick", "Emerald Pickaxe", 1562, 1, 8, 0);
Item.addTool(obsidian_pick_id, "obsidian_pickaxe", 0, "obsidian_pick", "Obsidian Pickaxe", 1800, 1, 10, 0);
Item.addTool(fodienda_id, "pickaxe", 0, "fodienda", "§e§kFodienda", 2400, 1, 10, 0);

Item.addTool(copper_axe_id, "copper_axe", 0, "copper_axe", "Copper Axe", 96, 2, 3, 0);
Item.addTool(bronze_axe_id, "bronze_axe", 0, "bronze_axe", "Bronze Axe", 157, 2, 5, 0);
Item.addTool(ruby_axe_id, "ruby_axe", 0, "ruby_axe", "Ruby Axe", 251, 2, 6, 0);
Item.addTool(sapphire_axe_id, "sapphire_axe", 0, "sapphire_axe", "Sapphire Axe", 251, 2, 6, 0);
Item.addTool(steel_axe_id, "steel_axe", 0, "steel_axe", "Steel Axe", 567, 2, 7, 0);
Item.addTool(emerald_axe_id, "emerald_axe", 0, "emerald_axe", "Emerald Axe", 1562, 2, 8, 0);
Item.addTool(obsidian_axe_id, "obsidian_axe", 0, "obsidian_axe", "Obsidian Axe", 1800, 2, 10, 0);

Item.addTool(copper_shovel_id, "copper_shovel", 0, "copper_shovel", "Copper Shovel", 96, 3, 3, 0);
Item.addTool(bronze_shovel_id, "bronze_shovel", 0, "bronze_shovel", "Bronze Shovel", 157, 3, 5, 0);
Item.addTool(ruby_shovel_id, "ruby_shovel", 0, "ruby_shovel", "Ruby Shovel", 251, 3, 6, 0);
Item.addTool(sapphire_shovel_id, "sapphire_shovel", 0, "sapphire_shovel", "Sapphire Shovel", 251, 3, 6, 0);
Item.addTool(steel_shovel_id, "steel_shovel", 0, "steel_shovel", "Steel Shovel", 567, 3, 7, 0);
Item.addTool(emerald_shovel_id, "emerald_shovel", 0, "emerald_shovel", "Emerald Shovel", 1562, 3, 8, 0);
Item.addTool(obsidian_shovel_id, "obsidian_shovel", 0, "obsidian_shovel", "Obsidian Shovel", 1800, 3, 10, 0);

Item.addTool(copper_hoe_id, "copper_hoe", 0, "copper_hoe", "Copper Hoe", 96, 4, 0, 1);
Item.addTool(bronze_hoe_id, "bronze_hoe", 0, "bronze_hoe", "Bronze Hoe", 157, 4, 0, 1);
Item.addTool(ruby_hoe_id, "ruby_hoe", 0, "ruby_hoe", "Ruby Hoe", 251, 4, 0, 1);
Item.addTool(sapphire_hoe_id, "sapphire_hoe", 0, "sapphire_hoe", "Sapphire Hoe", 251, 4, 0, 1);
Item.addTool(steel_hoe_id, "steel_hoe", 0, "steel_hoe", "Steel Hoe", 567, 4, 0, 1);
Item.addTool(emerald_hoe_id, "emerald_hoe", 0, "emerald_hoe", "Emerald Hoe", 1562, 4, 0, 1);
Item.addTool(obsidian_hoe_id, "obsidian_hoe", 0, "obsidian_hoe", "Obsidian Hoe", 1800, 4, 0, 1);

Item.addShapedRecipe(diamond_bucket_id,1,0,["   ","g g"," g "],["g",264,0]);
Item.addShapedRecipe(gold_bucket_id,1,0,["   ","g g"," g "],["g",266,0]);

Item.addShapedRecipe(copper_helmet_id,1,0,["aaa","a a","   "],["a",copper_ingot_id,0]);
Item.addShapedRecipe(bronze_helmet_id,1,0,["aaa","a a","   "],["a",bronze_ingot_id,0]);
Item.addShapedRecipe(steel_helmet_id,1,0,["aaa","a a","   "],["a",steel_ingot_id,0]);
Item.addShapedRecipe(emerald_helmet_id,1,0,["aaa","a a","   "],["a",388,0]);
Item.addShapedRecipe(obsidian_helmet_id,1,0,["aaa","a a","   "],["a",49,0]);
Item.addCraftRecipe(bronze_dust_id,2,0,[copper_dust_id,1,0,tin_dust_id,1,0]);
Item.addCraftRecipe(steel_dust_id,2,0,[iron_dust_id,1,0,263,1,0]);
Item.addShapedRecipe(copper_chest_id,1,0,["a a","aaa","aaa"],["a",copper_ingot_id,0]);
Item.addShapedRecipe(bronze_chest_id,1,0,["a a","aaa","aaa"],["a",bronze_ingot_id,0]);
Item.addShapedRecipe(steel_chest_id,1,0,["a a","aaa","aaa"],["a",steel_ingot_id,0]);
Item.addShapedRecipe(emerald_chest_id,1,0,["a a","aaa","aaa"],["a",388,0]);
Item.addShapedRecipe(obsidian_chest_id,1,0,["a a","aaa","aaa"],["a",49,0]);
Item.addShapedRecipe(copper_legs_id,1,0,["aaa","a a","a a"],["a",copper_ingot_id,0]);
Item.addShapedRecipe(bronze_legs_id,1,0,["aaa","a a","a a"],["a",bronze_ingot_id,0]);
Item.addShapedRecipe(steel_legs_id,1,0,["aaa","a a","a a"],["a",steel_ingot_id,0]);
Item.addShapedRecipe(emerald_legs_id,1,0,["aaa","a a","a a"],["a",388,0]);
Item.addShapedRecipe(obsidian_legs_id,1,0,["aaa","a a","a a"],["a",49,0]);
Item.addShapedRecipe(copper_boots_id,1,0,["   ","a a","a a"],["a",copper_ingot_id,0]);
Item.addShapedRecipe(bronze_boots_id,1,0,["   ","a a","a a"],["a",bronze_ingot_id,0]);
Item.addShapedRecipe(steel_boots_id,1,0,["   ","a a","a a"],["a",steel_ingot_id,0]);
Item.addShapedRecipe(emerald_boots_id,1,0,["   ","a a","a a"],["a",388,0]);
Item.addShapedRecipe(obsidian_boots_id,1,0,["   ","a a","a a"],["a",49,0]);

Item.addShapedRecipe(copper_sword_id,1,0,[" a "," a "," s "],["a",copper_ingot_id,0,"s",280,0]);
Item.addShapedRecipe(bronze_sword_id,1,0,[" a "," a "," s "],["a",bronze_ingot_id,0,"s",280,0]);
Item.addShapedRecipe(steel_sword_id,1,0,[" a "," a "," s "],["a",steel_ingot_id,0,"s",280,0]);
Item.addShapedRecipe(emerald_sword_id,1,0,[" a "," a "," s "],["a",388,0,"s",280,0]);
Item.addShapedRecipe(obsidian_sword_id,1,0,[" a "," a "," s "],["a",49,0,"s",280,0]);
Item.addShapedRecipe(ruby_sword_id,1,0,[" a "," a "," s "],["a",ruby_id,0,"s",280,0]);
Item.addShapedRecipe(sapphire_sword_id,1,0,[" a "," a "," s "],["a",sapphire_id,0,"s",280,0]);

Item.addShapedRecipe(copper_pick_id,1,0,["aaa"," s "," s "],["a",copper_ingot_id,0,"s",280,0]);
Item.addShapedRecipe(bronze_pick_id,1,0,["aaa"," s "," s "],["a",bronze_ingot_id,0,"s",280,0]);
Item.addShapedRecipe(steel_pick_id,1,0,["aaa"," s "," s "],["a",steel_ingot_id,0,"s",280,0]);
Item.addShapedRecipe(emerald_pick_id,1,0,["aaa"," s "," s "],["a",388,0,"s",280,0]);
Item.addShapedRecipe(obsidian_pick_id,1,0,["aaa"," s "," s "],["a",49,0,"s",280,0]);
Item.addShapedRecipe(ruby_pick_id,1,0,["aaa"," s "," s "],["a",ruby_id,0,"s",280,0]);
Item.addShapedRecipe(sapphire_pick_id,1,0,["aaa"," s "," s "],["a",sapphire_id,0,"s",280,0]);

Item.addShapedRecipe(copper_axe_id,1,0,["aa ","as "," s "],["a",copper_ingot_id,0,"s",280,0]);
Item.addShapedRecipe(bronze_axe_id,1,0,["aa ","as "," s "],["a",bronze_ingot_id,0,"s",280,0]);
Item.addShapedRecipe(steel_axe_id,1,0,["aa ","as "," s "],["a",steel_ingot_id,0,"s",280,0]);
Item.addShapedRecipe(emerald_axe_id,1,0,["aa ","as "," s "],["a",388,0,"s",280,0]);
Item.addShapedRecipe(obsidian_axe_id,1,0,["aa ","as "," s "],["a",49,0,"s",280,0]);
Item.addShapedRecipe(ruby_axe_id,1,0,["aa ","as "," s "],["a",ruby_id,0,"s",280,0]);
Item.addShapedRecipe(sapphire_axe_id,1,0,["aa ","as "," s "],["a",sapphire_id,0,"s",280,0]);

Item.addShapedRecipe(copper_shovel_id,1,0,[" a "," s "," s "],["a",copper_ingot_id,0,"s",280,0]);
Item.addShapedRecipe(bronze_shovel_id,1,0,[" a "," s "," s "],["a",bronze_ingot_id,0,"s",280,0]);
Item.addShapedRecipe(steel_shovel_id,1,0,[" a "," s "," s "],["a",steel_ingot_id,0,"s",280,0]);
Item.addShapedRecipe(emerald_shovel_id,1,0,[" a "," s "," s "],["a",388,0,"s",280,0]);
Item.addShapedRecipe(obsidian_shovel_id,1,0,[" a "," s "," s "],["a",49,0,"s",280,0]);
Item.addShapedRecipe(ruby_shovel_id,1,0,[" a "," s "," s "],["a",ruby_id,0,"s",280,0]);
Item.addShapedRecipe(sapphire_shovel_id,1,0,[" a "," s "," s "],["a",sapphire_id,0,"s",280,0]);

Item.addShapedRecipe(copper_hoe_id,1,0,["aa "," s "," s "],["a",copper_ingot_id,0,"s",280,0]);
Item.addShapedRecipe(bronze_hoe_id,1,0,["aa "," s "," s "],["a",bronze_ingot_id,0,"s",280,0]);
Item.addShapedRecipe(steel_hoe_id,1,0,["aa "," s "," s "],["a",steel_ingot_id,0,"s",280,0]);
Item.addShapedRecipe(emerald_hoe_id,1,0,["aa "," s "," s "],["a",388,0,"s",280,0]);
Item.addShapedRecipe(obsidian_hoe_id,1,0,["aa "," s "," s "],["a",49,0,"s",280,0]);
Item.addShapedRecipe(ruby_hoe_id,1,0,["aa "," s "," s "],["a",ruby_id,0,"s",280,0]);
Item.addShapedRecipe(sapphire_hoe_id,1,0,["aa "," s "," s "],["a",sapphire_id,0,"s",280,0]);

Item.addShapedRecipe(grinder_id,1,0,["aaa","ifi","aaa"],["a",4,0,"i",265,0,"f",318,0]);

Item.addFurnaceRecipe(copper_ore_id,copper_ingot_id,0);
Item.addFurnaceRecipe(copper_dust_id,copper_ingot_id,0);
Item.addFurnaceRecipe(tin_ore_id,tin_ingot_id,0);
Item.addFurnaceRecipe(tin_dust_id,tin_ingot_id,0);
Item.addFurnaceRecipe(bronze_dust_id,bronze_ingot_id,0);
Item.addFurnaceRecipe(steel_dust_id,steel_ingot_id,0);
Item.addFurnaceRecipe(iron_dust_id,265,0);
Item.addFurnaceRecipe(gold_dust_id,266,0);

name("copper_ingot","Copper Ingot");
name("copper_dust","Copper Dust");
name("copper_helmet","Copper Helmet");
name("copper_chest","Copper Chestplate");
name("copper_legs","Copper Leggings");
name("copper_boots","Copper Boots");
name("tin_ingot","Tin Ingot");
name("tin_dust","Tin Dust");
name("iron_dust","Iron Dust");
name("gold_dust","Gold Dust");
name("bronze_ingot","Bronze Ingot");
name("bronze_dust","Bronze Dust");
name("bronze_helmet","Bronze Helmet");
name("bronze_chest","Bronze Chestplate");
name("bronze_legs","Bronze Leggings");
name("bronze_boots","Bronze Boots");
name("steel_ingot","Steel Ingot");
name("steel_dust","Steel Dust");
name("steel_helmet","Steel Helmet");
name("steel_chest","Steel Chestplate");
name("steel_legs","Steel Leggings");
name("steel_boots","Steel Boots");
name("emerald_helmet","Emerald Helmet");
name("emerald_chest","Emerald Chestplate");
name("emerald_legs","Emerald Leggings");
name("emerald_boots","Emerald Boots");
name("obsidian_helmet","Obsidian Helmet");
name("obsidian_chest","Obsidian Chestplate");
name("obsidian_legs","Obsidian Leggings");
name("obsidian_boots","Obsidian Boots");
name("ruby","Ruby");
name("sapphire","Sapphire");
name("diamond_bucket","Diamond Bucket");
name("diamond_bucket_lava","Diamond Lava Bucket");
name("diamond_bucket_water","Diamond Water Bucket");
name("diamond_bucket_milk","Diamond Milk Bucket");
name("gold_bucket","Gold Bucket");
name("gold_bucket_lava","Gold Lava Bucket");
name("gold_bucket_water","Gold Water Bucket");
name("gold_bucket_milk","Gold Milk Bucket");
name("magnet","Magnet");
Bname("copper_ore","Copper Ore");
Bname("tin_ore","Tin Ore");
Bname("ruby_ore","Ruby Ore");
Bname("sapphire_ore","Sapphire Ore");
Bname("grinder","Grinder");
