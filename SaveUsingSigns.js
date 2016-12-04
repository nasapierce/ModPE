
var signString = "";

function newLevel() {
	if(Level.getTile(0, 1, 0) != 63) {
		var bedrock = [ [0, 0, 0], [1, 0, 0], [-1, 0, 0],
			[1, 1, 0], [-1, 1, 0],
			[0, 2, 0], [1, 2, 0], [-1, 2, 0],
			[0, 0, -1], [1, 0, -1], [-1, 0, -1],
			[0, 1, -1], [1, 1, -1], [-1, 1, -1],
			[0, 2, -1], [1, 2, -1], [-1, 2, -1],
			[0, 0, 1], [1, 0, 1], [-1, 0, 1],
			[0, 1, 1], [1, 1, 1], [-1, 1, 1],
			[0, 2, 1], [1, 2, 1], [-1, 2, 1] ];
		bedrock.forEach(function(b) {
			Level.setTile(b[0], b[1], b[2], 7, 0);
		});
	} else {
		signString = Level.getSignText(0, 1, 0, 0);
	}
}

function leaveGame() {
	Level.setSignText(0, 1, 0, 0, signString);
}
