var colors = [0xffffff, 0xff8000, 0xff80ff, 0x4040ff, 0xffff00, 0x00ff00, 0xff0080, 0x404040, 0xc4c4c4, 0x0080c8, 0x800080, 0x000080, 0x804000, 0x008000, 0x800000, 0x000000];

Block.defineBlock(89, "Glowstone", ["glowstone", 0], 20, false, 0);
Block.setColor(89, colors);
Block.setDestroyTime(89, 0.3);
Block.setExplosionResistance(89, 1.5);
Block.setLightLevel(89, 15);
Block.setLightOpacity(89, 0);

function useItem(x, y, z, itemId, blockId, side, itemData, blockData) {
	if (itemId == 351 && blockId == 89) {
		preventDefault();
		Level.setTile(x, y, z, 89, 15 - itemData);
		addItemInventory(itemId, - 1, itemData);
	}
}

function destroyBlock(x, y, z, side) {
	if( Level.getTile(x, y, z) == 89 ){
		preventDefault();
		Level.setTile(x, y, z, 0, 0);
		var a = Math.round( Math.random() * 2 );
		if( a == 0 ){
			Level.dropItem( x + 0.5, y, z + 0.5, 0, 348, 2, 0);
		} 
		if( a == 1 ) {
			Level.dropItem( x + 0.5, y, z + 0.5, 0, 348, 3, 0);
		}
		if( a == 2 ) {
			Level.dropItem( x + 0.5, y, z + 0.5, 0, 348, 4, 0);
		}
		
	}
}

