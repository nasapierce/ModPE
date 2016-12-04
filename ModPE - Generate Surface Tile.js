//create a new array to store our surface tile data in
var surfaceTiles = new Array;

/* ModPE.GenerateSurfaceTile 
	## This allows a block to be generated on the surface, like a flower
	parameters:
		blockID {Number} Integer : The ID to generate
		blockData {Number} Integer : The Data to generate
		maxDistanceFromPlayer {Number} Integer : The farthest to generate from the players location (random between 0 and Input)
		maxPatchSize {Number} Integer : The max size of the patch, 5 will be 5x5
		chanceToGeneratePatch {Number} Integer : The chance to generate the patch (random between 0 and Input) - WILL BE RUN IN MODTICK - lower the number, more will generate
		chanceToGenerateInPatch {Number} Integer : The chance to generate in the patch (random between 0 and Input) - lower the number the more will generate
*/
ModPE.GenerateSurfaceTile = function(blockID, blockData, maxDistanceFromPlayer, maxPatchSize, chaceToGeneratePatch, chanceToGenerateInPatch){surfaceTiles.push([blockID, blockData, maxDistanceFromPlayer, maxPatchSize, chaceToGeneratePatch, chanceToGenerateInPatch]);};

/* Obsidian,  data of 0, max distance from player is 64, max patch size is 1, chance to generate patch is 1/512 (0.002% per tick), chance to generate in patch is 0 ~ always */
ModPE.GenerateSurfaceTile(49, 0, 64, 1, 512, 0);

function modTick() {
	//call generateSurfaceBlocks hook every tick
	if(surfaceTiles[0]) generateSurfaceBlocks();
}

/* Do not edit this unless you know what you are doing */
function generateSurfaceBlocks() {
	for(var i in surfaceTiles) {
		var genPatch = Math.round(Math.random()*surfaceTiles[i][4]);
		var directionToGenerate = Math.round(Math.random()*3);
		if(genPatch == surfaceTiles[i][4]){
			if(directionToGenerate == 0) generatePatch(i, Math.round(Player.getX()+Math.round(Math.random()*surfaceTiles[i][2])), Math.round(Player.getZ()+Math.round(Math.random()*surfaceTiles[i][2])));
			if(directionToGenerate == 1) generatePatch(i, Math.round(Player.getX()-Math.round(Math.random()*surfaceTiles[i][2])), Math.round(Player.getZ()+Math.round(Math.random()*surfaceTiles[i][2])));
			if(directionToGenerate == 2) generatePatch(i, Math.round(Player.getX()-Math.round(Math.random()*surfaceTiles[i][2])), Math.round(Player.getZ()-Math.round(Math.random()*surfaceTiles[i][2])));
			if(directionToGenerate == 3) generatePatch(i, Math.round(Player.getX()+Math.round(Math.random()*surfaceTiles[i][2])), Math.round(Player.getZ()-Math.round(Math.random()*surfaceTiles[i][2])));
		}
	}
}

/* Do not edit this unless you know what you are doing */
function generatePatch(index, x0, z0){
	for(var x=0;x<surfaceTiles[index][3];x++){
		for(var z=0;z<surfaceTiles[index][3];z++){
			generateBlock(index, x0+x, z0+z);
		}
	}
}

/* Do not edit this unless you know what you are doing */
function generateBlock(index, x, z){
	var y, rand = Math.round(Math.random()*surfaceTiles[index][5]);
	for(y=0;y<127;y++){
		if(Level.getTile(x, y, z) == 0 && Level.canSeeSky(x, y, z) && rand == surfaceTiles[index][5]){
			Level.setTile(x, y, z, surfaceTiles[index][0], surfaceTiles[index][1]);
			break;
		}
	}
}
