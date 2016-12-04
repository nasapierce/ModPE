
var crops = [];
// {x, y, z, id, data} - we will most likley use data to change the crop

Block.defineBlock(200, "crop", [
["stone", 0],["stone", 0],["stone", 0],["stone", 0],["stone", 0],["stone", 0],
["stone", 1],["stone", 1],["stone", 1],["stone", 1],["stone", 1],["stone", 1],
["stone", 2],["stone", 2],["stone", 2],["stone", 2],["stone", 2],["stone", 2],
["stone", 3],["stone", 3],["stone", 3],["stone", 3],["stone", 3],["stone", 3],
], 59, false, 19);

function useItem(x, y, z, itemId, blockId, side){
	//stick to test
	if(itemId == 280 && blockId == 60){
		Level.setTile(x, y+1, z, 200, 0);
		//you'll want to save this, Im too lazy atm.
		crops.push({x: x, y: y, z: z, id: 200, data: 0});
	}
}

function randomTick(){
	growCrop();
}

function growCrop(){
	var i = Math.round(Math.random()*crops.length);
	if(crops.length > 0){
		crops[i].data += 1;
		Level.setTile(crops[i].x, crops[i].y, crops[i].z, crops[i].id, crops[i].data);
	}
}

function modTick(){
	//after a random amount of time...
	if(Math.round(Math.random()*512) == 512){
		randomTick();
	}
	
	//place farmland under our crop
	if(crops.length > 0){
		for(var i in crops){
			Level.setTile(crops[i].x, crops[i].y - 1, crops[i].z, 60, 0);
		}
	}
}
