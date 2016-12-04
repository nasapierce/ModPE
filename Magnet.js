function modTick() {
	var a = Math.sqrt(Math.pow(Player.getX() - Entity.getX(Entity.getAll()[i]), 2) + Math.pow(Player.getZ() - Entity.getZ(Entity.getAll()[i]), 2));
		if(Entity.getAll()[i] !== Player.getEntity() && a < 100) { //100 blocks away...
			Entity.setVelX(Entity.getAll()[i], Player.getX() - Entity.getX(Entity.getAll()[i]));
			Entity.setVelY(Entity.getAll()[i], Player.getY() - Entity.getY(Entity.getAll()[i]) - 1);
			Entity.setVelZ(Entity.getAll()[i], Player.getZ() - Entity.getZ(Entity.getAll()[i]));
		}
	}
}

function modTick() {
	for(var x=-9;x<9;x++) { //not a radius but eh
		for(var y=-9;y<9;y++) {
			for(var z=-9;z<9;z++) { //very laggy
				if(Level.getTile(Player.getX()+x, Player.getY()+y, Player.getZ()+z) == 61) { //burning furnace is 62
					//do something
				}
			}
		}
	}
}
