
function deathHook(m,v){
	if(v==Player.getEntity()){
		if(Entity.getHealth(Player.getEntity())==0){ //if player dies
			var up = Entity.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 32, "mob/zombie.png");
			Entity.setNameTag(up,"Undead Player");
		}
	}
}

//enable the script on servers
function newLevel(){
	ModPE.serverScript(true);
}

ModPE.serverScript = function(toggle){ //Enables ModPE on servers
	com.mojang.minecraftpe.MainActivity.currentMainActivity.get().runOnUiThread(new java.lang.Runnable({run: function() {
		net.zhuoweizhang.mcpelauncher.ScriptManager.isRemote = true; //As in Java, 1 isn't true, the variable must be set to true, and 1 isn't an option.
	}}));
	if(toggle){
		Server.sendChat("BlockLauncher, enable scripts, please and thank you");
	}
};
