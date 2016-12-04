"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* custom.js
  @author Manasseh Pierce
  @description Adds useful functions
*/

ModPE.saveWorldFile = function (filename, content) {
	java.io.File(android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftWorlds/" + Level.getWorldDir() + "/").mkdirs();
	var newFile = new java.io.File(android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftWorlds/" + Level.getWorldDir() + "/", filename);
	newFile.createNewFile();
	var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
	outWrite.append(content);
	outWrite.close();
};

ModPE.loadWorldFile = function (filename) {
	var content = "";
	if (java.io.File(android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftWorlds/" + Level.getWorldDir() + "/" + filename).exists()) {
		var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftWorlds/" + Level.getWorldDir() + "/" + filename),
		    fos = new java.io.FileInputStream(file),
		    str = new java.lang.StringBuilder(),
		    ch;
		while ((ch = fos.read()) != -1) {
			str.append(java.lang.Character(ch));
		}
		content = String(str.toString());
		fos.close();
	}
	return content;
};

Level.canPlaceBlock = function (x, y, z) {
	if ([0, 8, 9, 10, 11, 31, 51, 59, 90, 104, 105, 106, 141, 142, 175].indexOf(Level.getTile(x, y, z)) > 0) {
		return true;
	}
	return false;
};

/* event.js
  @author Manasseh Pierce
  @description Defines event emitter class
*/

var EventEmitter = function () {
	function EventEmitter() {
		_classCallCheck(this, EventEmitter);

		this.listeners = new Map();
	}

	_createClass(EventEmitter, [{
		key: "addListener",
		value: function addListener(label, callback) {
			this.listeners.has(label) || this.listeners.set(label, []);
			this.listeners.get(label).push(callback);
		}
	}, {
		key: "isFunction",
		value: function isFunction() {
			return typeof obj == 'function' || false;
		}
	}, {
		key: "removeListener",
		value: function removeListener(label, callback) {
			var listeners = this.listeners.get(label),
			    index = void 0;

			if (listeners && listeners.length) {
				index = listeners.reduce(function (i, listener, index) {
					return isFunction(listener) && listener === callback ? i = index : i;
				}, -1);

				if (index > -1) {
					listeners.splice(index, 1);
					this.listeners.set(label, listeners);
					return true;
				}
			}
			return false;
		}
	}, {
		key: "emit",
		value: function emit(label) {
			for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				args[_key - 1] = arguments[_key];
			}

			var listeners = this.listeners.get(label);

			if (listeners && listeners.length) {
				listeners.forEach(function (listener) {
					listener.apply(undefined, args);
				});
				return true;
			}
			return false;
		}
	}]);

	return EventEmitter;
}();

/* main.js
  @author Manasseh Pierce
  @description The main file, contains BL hooks
*/

function useItem(x, y, z, itemID, blockID, side, itemData, blockData) {
	if (itemID < 256) {
		var sides = [[x, y - 1, z], [x, y + 1, z], [x, y, z - 1], [x, y, z + 1], [x - 1, y, z], [x + 1, y, z]];
		if (Level.canPlaceBlock(sides[side][0], sides[side][1], sides[side][2])) {
			placeBlock(sides[side][0], sides[side][1], sides[side][2], itemID, itemData);
		}
	}

	if (blockID === BARREL_BLOCK_ID) {
		var barrel = getBarrel(x, y, z);
		if (barrel) {
			clientMessage("x: " + x + "\ny: " + y + "\nz: " + z + "\nmode: " + barrel.getMode().value);
		}
	}
}

// hook when a block is placed, the parameters are specific to the block that was placed
function placeBlock(x, y, z, blockID, blockData) {
	if (Level.getTile(x, y, z) === blockID && Level.getData(x, y, z) === blockData) {
		if (blockID === BARREL_BLOCK_ID) {
			var barrel = new Barrel(x, y, z, blockData);
		}
	}
	return;
}

function destroyBlock(x, y, z, side) {
	var blockID = Level.getTile(x, y, z);
	var blockData = Level.getData(x, y, z);
	if (blockID === BARREL_BLOCK_ID) {
		preventDefault();
		Level.destroyBlock(x, y, z, false);
		Level.dropItem(x + 0.5, y + 0.5, z + 0.5, 0, BARREL_BLOCK_ID, 1, blockDatax);
		removeBarrel(x, y, z);
	}
}

function modTick() {
	updateBarrels();
}

function newLevel() {
	loadBarrels();
	creativeBlocks();
}

function leaveGame() {
	saveBarrels();
}

/* barrel.js
  @author Manasseh Pierce
  @description defines barrels
*/

// BARRELS!
var BARRELS = [];

var BARREL_MAX_COMPOSTING_TIME = 1000;
var BARREL_MAX_FLUID = 1000;
var BARREL_UPDATE_INTERVAL = 10;

var MOSS_SPREAD_X_POS = 2;
var MOSS_SPREAD_X_NEG = -2;
var MOSS_SPREAD_Y_POS = 2;
var MOSS_SPREAD_Y_NEG = -1;
var MOSS_SPREAD_Z_POS = 2;
var MOSS_SPREAD_Z_NEG = -2;

var updateCounter = 0;

var ExtractMode = { None: 0, Always: 1, PeacfulOnly: 2 };

var BarrelMode = {
	EMPTY: { 'value': 0, 'extract': ExtractMode.None },
	FLUID: { 'value': 1, 'extract': ExtractMode.None },
	COMPOST: { 'value': 2, 'extract': ExtractMode.None },
	DIRT: { 'value': 3, 'extract': ExtractMode.Always },
	CLAY: { 'value': 4, 'extract': ExtractMode.Always },
	SPORED: { 'value': 5, 'extract': ExtractMode.None },
	SLIME: { 'value': 6, 'extract': ExtractMode.Always },
	NETHERRACK: { 'value': 7, 'extract': ExtractMode.Always },
	ENDSTONE: { 'value': 8, 'extract': ExtractMode.Always },
	MILKED: { 'value': 9, 'extract': ExtractMode.None },
	SOULSAND: { 'value': 10, 'extract': ExtractMode.Always },
	BEETRAP: { 'value': 11, 'extract': ExtractMode.Always },
	OBSIDIAN: { 'value': 12, 'extract': ExtractMode.Always },
	COBBLESTONE: { 'value': 13, 'extract': ExtractMode.Always },
	BLAZE_COOKING: { 'value': 14, 'extract': ExtractMode.None },
	BLAZE: { 'value': 15, 'extract': ExtractMode.PeacfulOnly },
	ENDER_COOKING: { 'value': 16, 'extract': ExtractMode.None },
	ENDER: { 'value': 17, 'extract': ExtractMode.PeacfulOnly },
	DARKOAK: { 'value': 18, 'extract': ExtractMode.Always }
};

var Barrel = function (_EventEmitter) {
	_inherits(Barrel, _EventEmitter);

	function Barrel(x, y, z) {
		var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

		_classCallCheck(this, Barrel);

		var _this = _possibleConstructorReturn(this, (Barrel.__proto__ || Object.getPrototypeOf(Barrel)).call(this));

		_this.x = x;
		_this.y = y;
		_this.z = z;
		_this.data = data;
		_this.setMode(BarrelMode.EMPTY);
		_this.volume = 0;
		_this.timer = 0;
		_this.fluid = 'WATER';
		_this.addEventListener('update', _this.update);
		_this.update();
		BARRELS.push(_this);
		return _this;
	}

	_createClass(Barrel, [{
		key: "getMode",
		value: function getMode() {
			return this.mode;
		}
	}, {
		key: "setMode",
		value: function setMode(mode) {
			this.mode = mode;
			this.needsUpdate = true;
		}
	}, {
		key: "update",
		value: function update() {
			this.needsUpdate = false;

			switch (this.getMode()) {
				case BarrelMode.EMPTY:
					// Handle Rain
					if (Level.canSeeSky(this.x, this.y, this.z) && Level.getRainLevel() > 0.0) {
						this.fluid = 'WATER';
						this.setMode(BarrelMode.FLUID);
					}
					break;
				case BarrelMode.FLUID:
					// WATER!
					if (this.fluid == 'WATER') {
						// Handle Rain
						if (Level.canSeeSky(this.x, this.y, this.z) && !this.isFull() && Level.getRainLevel() > 0.0) {
							this.volume += Level.getRainLevel() / 1000;
							if (this.volume > 1) {
								this.volume = 1;
							}
							this.needsUpdate = true;
						}

						// Check for Spores.
						if (this.isFull() && getNearbyBlocks(110, 0) > 0) {
							this.setMode(BarrelMode.SPORED);
							this.needsUpdate = true;
						}

						// Turn into Cobblestone?
						if (this.isFull() && (Level.getTile(this.x, this.y + 1, this.z) === 10 || Level.getTile(this.x, this.y + 1, this.z) === 11)) {
							this.setMode(BarrelMode.COBBLESTONE);
							this.needsUpdate = true;
						}

						// Spread Moss.
						if (this.volume > 0 && Level.getData() === 6 && Math.floor(Math.random() * 500) === 0) {
							var x = this.x + Math.floor(Math.random() * (MOSS_SPREAD_X_POS - MOSS_SPREAD_X_NEG + 1) + MOSS_SPREAD_X_NEG);
							var y = this.y + Math.floor(Math.random() * (MOSS_SPREAD_Y_POS - MOSS_SPREAD_Y_NEG + 1) + MOSS_SPREAD_Y_NEG);
							var z = this.z + Math.floor(Math.random() * (MOSS_SPREAD_Z_POS - MOSS_SPREAD_Z_NEG + 1) + MOSS_SPREAD_Z_NEG);
							var lightLevel = Level.getBrightness(x, y + 1, z);
							if (Level.getTile(x, y, z) !== 0 && !Level.canSeeSky(x, y, z) && lightLevel >= 9 && lightLevel <= 11) {
								var blockID = Level.getTile(x, y, z);
								var blockData = Level.getData(x, y, z);
								if (blockID === 98 && blockData === 0) {
									Level.setTile(x, y, z, 98, 1);
								}

								if (blockID === 4) {
									Level.setTile(x, y, z, 48, 0);
								}
							}
						}
					}

					// LAVA!
					if (this.fluid === 'LAVA') {}
					break;
				case BarrelMode.COMPOST:
					if (this.volume >= 1.0) {}
					break;
				case BarrelMode.MILKED:
					break;
				case BarrelMode.SLIME:
					break;
				case BarrelMode.SPORED:
					break;
				case BarrelMode.BLAZE_COOKING:
					break;
				case BarrelMode.BLAZE:
					break;
				case BarrelMode.ENDER_COOKING:
					break;
				case BarrelMode.ENDER:
					break;
			}
		}
	}, {
		key: "getNearbyBlocks",
		value: function getNearbyBlocks(blockID, blockData) {
			var count = 0;
			for (var x = -1; x <= 1; x++) {
				for (var y = -1; y <= 1; y++) {
					for (var z = -1; z <= 1; z++) {
						if (Level.getTile(this.x + x, this.y + y, this.z + z) == blockID && Level.getData(this.x + x, this.y + y, this.z + z) == blockData) {
							count++;
						}
					}
				}
			}
			return count;
		}
	}, {
		key: "addCompostItem",
		value: function addCompostItem(compostItem) {}
	}, {
		key: "isFull",
		value: function isFull() {
			return volume >= 1.0;
		}
	}, {
		key: "isDone",
		value: function isDone() {
			return timer >= BARREL_MAX_COMPOSTING_TIME;
		}
	}, {
		key: "giveItem",
		value: function giveItem(itemID, itemCount, itemData) {
			Level.dropItem(this.x + 0.5, this.y + 1.5, this.z + 0.5, 0.05, itemID, itemCount, itemData);
			this.resetBarrel();
		}
	}, {
		key: "getExtractItem",
		value: function getExtractItem() {
			switch (this.getMode()) {
				case BarrelMode.CLAY:
					this.giveItem(82, 1, 0);
					break;
				case BarrelMode.DIRT:
					this.giveItem(3, 1, 0);
					break;
				case BarrelMode.ENDSTONE:
					this.giveItem(121, 1, 0);
					break;
				case BarrelMode.NETHERRACK:
					this.giveItem(87, 1, 0);
					break;
				case BarrelMode.SLIME:
					this.giveItem(341, 1 + Math.floor(Math.random() * 4), 0);
					break;
				case BarrelMode.SOULSAND:
					this.giveItem(88, 1, 0);
					break;
				case BarrelMode.OBSIDIAN:
					this.giveItem(49, 1, 0);
					break;
				case BarrelMode.COBBLESTONE:
					this.giveItem(4, 1, 0);
					break;
				case BarrelMode.BLAZE:
					this.giveItem(369, 1, 0);
					break;
				case BarrelMode.ENDER:
					this.giveItem(368, 1, 0);
					break;
				//case BarrelMode.BEETRAP:
				//	this.giveItem(BEETRAP_BLOCK, 1, 0);
				//	break;
				case BarrelMode.DARKOAK:
					this.giveItem(6, 1, 5);
					break;
				default:
					return;

			}
		}
	}, {
		key: "getVolume",
		value: function getVolume() {
			return this.volume;
		}
	}, {
		key: "getTimer",
		value: function getTimer() {
			return this.timer;
		}
	}, {
		key: "resetBarrel",
		value: function resetBarrel() {
			this.fluid = 'WATER';
			this.volume = 0;
			this.setMode(BarrelMode.EMPTY);
			this.needsUpdate = true;
		}
	}, {
		key: "getPosition",
		value: function getPosition() {
			return [this.x, this.y, this.z].join(',');
		}
	}]);

	return Barrel;
}(EventEmitter);

function updateBarrels() {
	if (updateCounter >= BARREL_UPDATE_INTERVAL) {
		updateCounter = 0;
		var updates = BARRELS.filter(function (barrel) {
			return barrel.needsUpdate === true;
		});
		updates.forEach(function (barrel) {
			barrel.emit('update');
		});
	} else {
		updateCounter++;
	}
}

function getBarrel(x, y, z) {
	var xs = BARRELS.filter(function (barrel) {
		return barrel.x === x;
	});
	var ys = xs.filter(function (barrel) {
		return barrel.y === y;
	});
	var zs = ys.filter(function (barrel) {
		return barrel.z === z;
	});
	return zs[0];
}

function saveBarrels() {
	var content = JSON.stringify(BLOCKENTITIES, null, 4);
	ModPE.saveWorldFile('barrels.json', content);
}

function loadBarrels() {
	var content = ModPE.loadWorldFile('barrels.json');
	BARRELS = JSON.parse(content);
}

function removeBarrel(x, y, z) {
	var barrel = getBarrel(x, y, z);
	var index = BARRELS.indexOf(barrel);
	BARRELS.splice(index, 1);
}
/* blocks.js
  @author Manasseh Pierce
  @description defines blocks
*/

function creativeBlocks() {
	for (var i = 0; i < 6; i++) {
		Player.addItemCreativeInv(BARREL_BLOCK_ID, 5, i);
	}
}

var BARREL_BLOCK_ID = 200;
Block.defineBlock(BARREL_BLOCK_ID, 'exnihilope.barrel', ['planks', 0], 5, false);
Block.setDestroyTime(BARREL_BLOCK_ID, 2.0);
Block.setShape(0.1, 0.0, 0.1, 0.9, 1.0, 0.9);
Item.setStackedByData(BARREL_BLOCK_ID, true);