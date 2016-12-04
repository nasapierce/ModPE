/* author: Manasseh Pierce
Here I was messing around with
redstone. This required a TP, just unpack  "7 Segment Display.modpkg"
its a zip file with the textures and mod in there
*/

var SEGMENT_BLOCK_ID = 211;

// again, readability? I should'a made a function for texture arrays
Block.defineBlock(SEGMENT_BLOCK_ID, "7 Segment Display", [
["seg", 0],["seg", 0],["seg", 0],["seg", 0],["seg", 0],["seg", 0],
["seg", 1],["seg", 1],["seg", 1],["seg", 1],["seg", 1],["seg", 1],
["seg", 2],["seg", 2],["seg", 2],["seg", 2],["seg", 2],["seg", 2],
["seg", 3],["seg", 3],["seg", 3],["seg", 3],["seg", 3],["seg", 3],
["seg", 4],["seg", 4],["seg", 4],["seg", 4],["seg", 4],["seg", 4],
["seg", 5],["seg", 5],["seg", 5],["seg", 5],["seg", 5],["seg", 5],
["seg", 6],["seg", 6],["seg", 6],["seg", 6],["seg", 6],["seg", 6],
["seg", 7],["seg", 7],["seg", 7],["seg", 7],["seg", 7],["seg", 7],
["seg", 8],["seg", 8],["seg", 8],["seg", 8],["seg", 8],["seg", 8],
["seg", 9],["seg", 9],["seg", 9],["seg", 9],["seg", 9],["seg", 9],
["seg", 10],["seg", 10],["seg", 10],["seg", 10],["seg", 10],["seg", 10],
["seg", 11],["seg", 11],["seg", 11],["seg", 11],["seg", 11],["seg", 11],
["seg", 12],["seg", 12],["seg", 12],["seg", 12],["seg", 12],["seg", 12],
["seg", 13],["seg", 13],["seg", 13],["seg", 13],["seg", 13],["seg", 13],
["seg", 14],["seg", 14],["seg", 14],["seg", 14],["seg", 14],["seg", 14],
["seg", 15],["seg", 15],["seg", 15],["seg", 15],["seg", 15],["seg", 15]], 1, true, 0);
Block.setRedstoneConsumer(SEGMENT_BLOCK_ID, true);

function newLevel() {
	Player.addItemCreativeInv(SEGMENT_BLOCK_ID, 5, 0);
}

function redstoneUpdateHook(x, y, z, newCurrent, sbIDK, blockId, blockData) {
	var active = newCurrent != 0;
	if(blockId == SEGMENT_BLOCK_ID) {
		Level.setTile(x, y, z, SEGMENT_BLOCK_ID, newCurrent);
	}
}

