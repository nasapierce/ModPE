/* This is a mod I made after the ModPE redstone update. It makes the blocks
	I defined "pass through". What I did is when the block recieved a redstone
	signal, I changed its data value, and the data value it changed to had no block
	size */

Player.removeFromCarriedItem = function(amount) {
	if(Level.getGameMode() !== 1) {
		if(Player.getCarriedItemCount()>=2) Entity.setCarriedItem(Player.getEntity(), Player.getCarriedItem(),Player.getCarriedItemCount()-amount,Player.getCarriedItemData());
		if(Player.getCarriedItemCount()<=1) Entity.setCarriedItem(Player.getEntity(), 0, 0, 0);
	}
};

var ACTUATOR_BLOCK_ID = 210;

// here I was "naming" a block based on Data values, ModPE hasn't supported this when I made this.
function modTick() {
	switch(Player.getCarriedItem()) {
		case ACTUATOR_BLOCK_ID: {
			switch(Player.getCarriedItemData()) {
				case 0: ModPE.langEdit("tile.actuator.name", "Stone Actuator"); break;
				case 1: ModPE.langEdit("tile.actuator.name", "Granite Actuator"); break;
				case 2: ModPE.langEdit("tile.actuator.name", "Polished Granite Actuator"); break;
				case 3: ModPE.langEdit("tile.actuator.name", "Diorite Actuator"); break;
				case 4: ModPE.langEdit("tile.actuator.name", "Polished Diorite Actuator"); break;
				case 5: ModPE.langEdit("tile.actuator.name", "Andesite Actuator"); break;
				case 6: ModPE.langEdit("tile.actuator.name", "Polished Andesite Actuator"); break;
				default: ModPE.langEdit("tile.actuator.name", "Actuator");
			}
		} break;
	}
}

Block.defineBlock(ACTUATOR_BLOCK_ID, "actuator", [
["stone", 0],["stone", 0],["stone", 0],["stone", 0],["stone", 0],["stone", 0],
["stone", 1],["stone", 1],["stone", 1],["stone", 1],["stone", 1],["stone", 1],
["stone", 2],["stone", 2],["stone", 2],["stone", 2],["stone", 2],["stone", 2],
["stone", 3],["stone", 3],["stone", 3],["stone", 3],["stone", 3],["stone", 3],
["stone", 4],["stone", 4],["stone", 4],["stone", 4],["stone", 4],["stone", 4],
["stone", 5],["stone", 5],["stone", 5],["stone", 5],["stone", 5],["stone", 5],
["stone", 6],["stone", 6],["stone", 6],["stone", 6],["stone", 6],["stone", 6]
], 1, false, 0);

// the last parameter is the data value
Block.setShape(ACTUATOR_BLOCK_ID, 0, 0, 0, 1, 1, 1, 0);
Block.setShape(ACTUATOR_BLOCK_ID, 0, 0, 0, 1, 1, 1, 1);
Block.setShape(ACTUATOR_BLOCK_ID, 0, 0, 0, 1, 1, 1, 2);
Block.setShape(ACTUATOR_BLOCK_ID, 0, 0, 0, 1, 1, 1, 3);
Block.setShape(ACTUATOR_BLOCK_ID, 0, 0, 0, 1, 1, 1, 4);
Block.setShape(ACTUATOR_BLOCK_ID, 0, 0, 0, 1, 1, 1, 5);
Block.setShape(ACTUATOR_BLOCK_ID, 0, 0, 0, 1, 1, 1, 6);

Block.setShape(ACTUATOR_BLOCK_ID, 0, 0, 0, 0, 0, 0, 7);
Block.setShape(ACTUATOR_BLOCK_ID, 0, 0, 0, 0, 0, 0, 8);
Block.setShape(ACTUATOR_BLOCK_ID, 0, 0, 0, 0, 0, 0, 9);
Block.setShape(ACTUATOR_BLOCK_ID, 0, 0, 0, 0, 0, 0, 10);
Block.setShape(ACTUATOR_BLOCK_ID, 0, 0, 0, 0, 0, 0, 11);
Block.setShape(ACTUATOR_BLOCK_ID, 0, 0, 0, 0, 0, 0, 12);
Block.setShape(ACTUATOR_BLOCK_ID, 0, 0, 0, 0, 0, 0, 13);

Block.setLightOpacity(ACTUATOR_BLOCK_ID, 0);
Block.setRedstoneConsumer(ACTUATOR_BLOCK_ID, true);
Item.setStackedByData(ACTUATOR_BLOCK_ID, true);

Item.addShapedRecipe(ACTUATOR_BLOCK_ID, 4, 0, ["ara","rrr","ara"], ["a", 1, 0, "r", 331, 0]);
Item.addShapedRecipe(ACTUATOR_BLOCK_ID, 4, 1, ["ara","rrr","ara"], ["a", 1, 1, "r", 331, 0]);
Item.addShapedRecipe(ACTUATOR_BLOCK_ID, 4, 2, ["ara","rrr","ara"], ["a", 1, 2, "r", 331, 0]);
Item.addShapedRecipe(ACTUATOR_BLOCK_ID, 4, 3, ["ara","rrr","ara"], ["a", 1, 3, "r", 331, 0]);
Item.addShapedRecipe(ACTUATOR_BLOCK_ID, 4, 4, ["ara","rrr","ara"], ["a", 1, 4, "r", 331, 0]);
Item.addShapedRecipe(ACTUATOR_BLOCK_ID, 4, 5, ["ara","rrr","ara"], ["a", 1, 5, "r", 331, 0]);
Item.addShapedRecipe(ACTUATOR_BLOCK_ID, 4, 6, ["ara","rrr","ara"], ["a", 1, 6, "r", 331, 0]);

function newLevel() {
	Player.addItemCreativeInv(ACTUATOR_BLOCK_ID, 5, 0);
	Player.addItemCreativeInv(ACTUATOR_BLOCK_ID, 5, 1);
	Player.addItemCreativeInv(ACTUATOR_BLOCK_ID, 5, 2);
	Player.addItemCreativeInv(ACTUATOR_BLOCK_ID, 5, 3);
	Player.addItemCreativeInv(ACTUATOR_BLOCK_ID, 5, 4);
	Player.addItemCreativeInv(ACTUATOR_BLOCK_ID, 5, 5);
	Player.addItemCreativeInv(ACTUATOR_BLOCK_ID, 5, 6);
	
}

function redstoneUpdateHook(x, y, z, newCurrent, sbIDK, blockId, blockData) {
	var active = newCurrent != 0;
	if(blockId == ACTUATOR_BLOCK_ID) {
		if(active) {
			switch(blockData) {
				case 0: {
					Level.setTile(x, y, z, ACTUATOR_BLOCK_ID, 7);
				} break;
				case 1: {
					Level.setTile(x, y, z, ACTUATOR_BLOCK_ID, 8);
				} break;
				case 2: {
					Level.setTile(x, y, z, ACTUATOR_BLOCK_ID, 9);
				} break;
				case 3: {
					Level.setTile(x, y, z, ACTUATOR_BLOCK_ID, 10);
				} break;
				case 4: {
					Level.setTile(x, y, z, ACTUATOR_BLOCK_ID, 11);
				} break;
				case 5: {
					Level.setTile(x, y, z, ACTUATOR_BLOCK_ID, 12);
				} break;
				case 6: {
					Level.setTile(x, y, z, ACTUATOR_BLOCK_ID, 13);
				} break;
			}
		} else {
			switch(blockData) {
				case 7: {
					Level.setTile(x, y, z, ACTUATOR_BLOCK_ID, 0);
				} break;
				case 8: {
					Level.setTile(x, y, z, ACTUATOR_BLOCK_ID, 1);
				} break;
				case 9: {
					Level.setTile(x, y, z, ACTUATOR_BLOCK_ID, 2);
				} break;
				case 10: {
					Level.setTile(x, y, z, ACTUATOR_BLOCK_ID, 3);
				} break;
				case 11: {
					Level.setTile(x, y, z, ACTUATOR_BLOCK_ID, 4);
				} break;
				case 12: {
					Level.setTile(x, y, z, ACTUATOR_BLOCK_ID, 5);
				} break;
				case 13: {
					Level.setTile(x, y, z, ACTUATOR_BLOCK_ID, 6);
				} break;
			}
		}
	}
}

