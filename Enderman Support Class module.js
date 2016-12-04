//Enderman Support Class module for GM4 mod by Trekhit

var enderman = [];
var mobs = [];

function entityAddedHook(entity){
	var e = Entity.getEntityTypeId(entity);
	if(e==38){
		enderman.push(entity);
	}
	if(e==32||e==33||e==34||e==35||e==36||e==38||e==39||e==40){
		mobs.push(entity);
	}
}

function entityRemovedHook(entity){
	for(var i in enderman){
		if(Entity.getEntityTypeId(entity)==enderman[i]){
			enderman.splice(enderman.indexOf(entity), 1);
		}
	}
	for(var i in mobs){
		if(Entity.getEntityTypeId(entity)==mobs[i]){
			mobs.splice(mobs.indexOf(entity), 1);
		}
	}
}


function modTick(){
	for(var s in mobs){
		for(var i in enderman){
			if(Math.sqrt(Math.pow(Entity.getX(enderman[i]) - Entity.getX(mobs[s]), 2) +  Math.pow(Entity.getZ(enderman[i]) - Entity.getZ(mobs[s]), 2)) < 25){
				var e = Entity.getEntityTypeId(mobs[s]);
				if(e==32){
					Entity.addEffect(mobs[s], MobEffect.movementSpeed , 30*20, 1, false, true);
				}
				if(e==33){
					Entity.addEffect(mobs[s], MobEffect.regeneration , 30*20, 1, false, true);
				}
				if(e==34){
					Entity.addEffect( mobs[s], MobEffect.weakness , 30*20, 1, false, true);
				}
				if(e==35){
					Entity.addEffect( mobs[s], MobEffect.jump, 30*20, 1, false, true);
				}
				if(e==39){
					Entity.addEffect( mobs[s], MobEffect.resistance , 30*20, 2, false, true);
				}
				if(e==40){
					Entity.addEffect( mobs[s], MobEffect.jump , 30*20, 1, false, true);
				}
			}
		}
	}
}




