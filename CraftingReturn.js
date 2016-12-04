
var lastTappedBlock = {x: null, y: null, z: null, id: null, data: null, side: null, yaw: null, pitch: null};

ModPE.setItem(500, "apple", 0, "CR", 1);

Item.addShapedRecipe(264, 1, 0, ["   "," a ","   "], ["a", 500, 0]);

function useItem(x, y, z, itemId, blockId, side, itemData, blockData) {
	lastTappedBlock.x = x; // gets the x
	lastTappedBlock.y = y; // y
	lastTappedBlock.z = z; // z
	lastTappedBlock.side = side; // side...
	lastTappedBlock.id = blockId; // id
	lastTappedBlock.data = blockData; // data...
	lastTappedBlock.pitch = Entity.getPitch( Player.getEntity() );
	lastTappedBlock.yaw = Entity.getYaw( Player.getEntity() );
}

var lastAmount;

function modTick() {
	//very specific line, dont want to have cheaters do we?
	if(Player.getPointedBlockId() == 58 && lastTappedBlock.id == 58 && lastTappedBlock.data == Player.getPointedBlockData() && lastTappedBlock.x == Player.getPointedBlockX() && lastTappedBlock.y == Player.getPointedBlockY() && lastTappedBlock.z == Player.getPointedBlockZ() &&lastTappedBlock.side == Player.getPointedBlockSide() && lastTappedBlock.yaw == Entity.getYaw(Player.getEntity()) && lastTappedBlock.pitch == Entity.getPitch(Player.getEntity())) {
		if( Player.checkForInventoryItem(500) ){ //custom function
			lastAmount = Player.checkForInventoryItem(500);
		}
		if( Player.checkForInventoryItem(500) < lastAmount){
			Player.addItemInventory(500, 1, 0);
		}
	}
}

Player.checkForInventoryItem = function(id, amount, damage) {
	if(!amount) amount = 1;
	if(!damage) damage = 0;
	if(!id) id = 0;
	var count = 0;
	for(var i = 0; i < 44; i++) if(Player.getInventorySlot(i) == id && Player.getInventorySlotData(i) == damage) count += Player.getInventorySlotCount(i);
	return count;
};

