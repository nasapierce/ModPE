
var model;
var finished = false;
var settings = false;
var lastPersent = 0;

function modTick() {
	if(!finished && settings) {
		if(model.getLoaded()) {
			clientMessage("Finished loading cube.obj");
			
			finished = true;
		} else {
			var persent = model.getLoadedPersent();
			
			if(lastPersent != persent && persent % 10 == 0) {
				lastPersent = persent;
				
				clientMessage(persent + "%");
			}
		}
	}
	
	if(finished) {
		//model.setX(model.getX() + 0.1);
	}
}

function selectLevelHook() {
	timer(function() {
        model = new ModPEOpenGLLib.Model();
	
	    model.setX(Player.getX());
	    model.setY(Player.getY());
	    model.setZ(Player.getZ());
	
    	model.setFile("sdcard/cube.obj");
	
	    try {
          model.init();
	
	    ModPEOpenGLLib.addModel(model);
		} catch (e) {
        clientMessage(e);
    }
		settings = true;
		
		clientMessage("Started loading cube.obj!");
	}, 10000);
}

function timer(func, time) {
	new android.os.Handler(android.os.Looper.getMainLooper()).postDelayed(new java.lang.Runnable({run:func}), time);
}
