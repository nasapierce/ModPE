
function stoneRender(x, y, z) {
	var test = Level.spawnMob(x + 0.5, y, z + 0.5, EntityType.OCELOT, "mob/dirt.png");
	Level.setTile(x, y, z, 213, 0);
	Entity.setRenderType(test, MyRenderType.renderType);
	Entity.setRot(test, 0, 0);
	Entity.setImmobile(test, true);
	Entity.setExtraData(test, "Darkserver.BlockRenderType.Type", "Block");
	Entity.setExtraData(test, "Darkserver.BlockRenderType.Block", "1");
	Entity.setExtraData(test, "Darkserver.BlockRenderType.Data", "0");
}

function blockTessellator(x, y, z, blockId, blockData) {
	switch(blockId) {
		case 1: {
			switch(blockData) {
				case 0: {
					stoneRender(x,y,z);
				} break;
			}
		} break;
	}
}

var last = {
	x: null,
	y: null,
	z: null
};
function modTick() {
	if(Player.getX() !== last.x && Player.getY() !== last.y && Player.getZ() !== last.z) {
		last.x = Player.getX();
		last.y = Player.getY();
		last.z = Player.getZ();
		getAllInRange();
	}
}

function getAllInRange() {
	for(var x=Math.round(Player.getX())-5;x<Math.round(Player.getX())+5;x++) {
		for(var y=Math.round(Player.getY())-5;y<Math.round(Player.getY())+5;y++) {
			for(var z=Math.round(Player.getZ())-5;z<Math.round(Player.getZ())+5;z++) {
				blockTessellator(x, y, z, Level.getTile(x, y, z), Level.getData(x, y, z));
			}
		}
	}
}

Block.defineBlock(213, "null", ["transparent", 0], 1, false, 0);
Block.setRenderLayer(213, 4);

function addMyRenderType(renderer) {
	var var2 = 0;
	var model = renderer.getModel();
	var head = model.getPart("head").clear();
	var body = model.getPart("body").clear();
	var rArm = model.getPart("rightArm").clear();
	var lArm = model.getPart("leftArm").clear();
	var rLeg = model.getPart("rightLeg").clear();
	var lLeg = model.getPart("leftLeg").clear();
	
	body.setTextureSize(64, 32);
	body.addBox(-8, 8, -8, 16, 16, 16, var2);
	
}

var MyRenderType = Renderer.createHumanoidRenderer();
addMyRenderType(MyRenderType);

function entityAddedHook(entity) {
	if(Entity.getExtraData(entity, "Darkserver.BlockRenderType.Block") == "BLOCKRENDERTYPE") {
		Entity.setMobSkin(entity, "mob/dirt.png");
		Entity.setRenderType(entity, MyRenderType);
		Entity.setRot(entity, 0, 0);
		Entity.setImmobile(entity, true);
	}
}

function attackHook(a, v) {
	if(Entity.getExtraData(v, "Darkserver.BlockRenderType.Block") == "BLOCKRENDERTYPE") {
		preventDefault();
	}
}

function useItem(x, y, z, itemId, blockId, side, itemData, blockData) {
	if(itemId == 280) { //stick
		var test = Level.spawnMob(x + 0.5, y + 1, z + 0.5, EntityType.OCELOT, "mob/dirt.png");
		Level.setTile(x, y+1, z, 213, 0);
		Entity.setRenderType(test, MyRenderType.renderType);
		Entity.setRot(test, 0, 0);
		Entity.setImmobile(test, true);
		Entity.setExtraData(test, "Darkserver.BlockRenderType.Block", "BLOCKRENDERTYPE");
	}
}

