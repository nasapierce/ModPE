
/* author: Manasseh Pierce
Here I was messing around with
the idea of 3D Armor,
I made 4 functions (1 for each armor piece)
and merged them dynamically with others to
try to make this possible.
WARNING NOT FINISHED
*/

var GLOBAL = this;

// this will merge two functions into one, useful for making multiple models with the same bits
function mergeFunctions(funcName, func1, func2, parameterNames) {
	var func1 = func1.toString();
	var func1open = func1.indexOf("{");
	var codeInsideFunc1 = func1.substring(func1open + 1, func1.length - 1);
	var func2 = func2.toString();
	var func2open = func2.indexOf("{");
	var codeInsideFunc2 = func2.substring(func2open + 1, func2.length - 1);
	GLOBAL.eval("function "+funcName+"("+parameterNames.join(",")+") {"+codeInsideFunc1+codeInsideFunc2+"}");
}

//0001 - 1
function addIronBootsRenderType(renderer) {
	var model = renderer.getModel();
	var rLeg = model.getPart("rightLeg");
	var lLeg = model.getPart("leftLeg");
}
var IronBootsRenderType = Renderer.createHumanoidRenderer();
addIronBootsRenderType(IronBootsRenderType);

//0010 - 2
function addIronLeggingsRenderType(renderer) {
	var model = renderer.getModel();
	var rLeg = model.getPart("rightLeg");
	var lLeg = model.getPart("leftLeg");
}
var IronLeggingsRenderType = Renderer.createHumanoidRenderer();
addIronLeggingsRenderType(IronLeggingsRenderType);

//0100 - 4
function addIronBodyRenderType(renderer) {
	var model = renderer.getModel();
	var body = model.getPart("body");
	var rArm = model.getPart("rightArm");
	var lArm = model.getPart("leftArm");
}
var IronBodyRenderType = Renderer.createHumanoidRenderer();
addIronBodyRenderType(IronBodyRenderType);

//1000 - 8
function addIronHelmetRenderType(renderer) {
	var model = renderer.getModel();
	var head = model.getPart("head");
	head.addBox(-4, 0, -4, 10, 1, 10, 0);
}
var IronHelmetRenderType = Renderer.createHumanoidRenderer();
addIronHelmetRenderType(IronHelmetRenderType);

//0011 - 3
mergeFunctions("addIronLeggingsBootsRenderType", addIronLeggingsRenderType, addIronBootsRenderType, ["renderer"]);
var IronLeggingsBootsRenderType = Renderer.createHumanoidRenderer();
addIronLeggingsBootsRenderType(IronLeggingsBootsRenderType);

//0101 - 5
mergeFunctions("addIronBodyBootsRenderType", addIronBodyRenderType, addIronBootsRenderType, ["renderer"]);
var IronBodyBootsRenderType = Renderer.createHumanoidRenderer();
addIronBodyBootsRenderType(IronBodyBootsRenderType);

//1100 - 12
mergeFunctions("addIronHelmetBodyRenderType", addIronHelmetRenderType, addIronBodyRenderType, ["renderer"]);
var IronHelmetBodyRenderType = Renderer.createHumanoidRenderer();
addIronHelmetBodyRenderType(IronHelmetBodyRenderType);

//1010 - 10
mergeFunctions("addIronHelmetLeggingsRenderType", addIronHelmetRenderType, addIronLeggingsRenderType, ["renderer"]);
var IronHelmetLeggingsRenderType = Renderer.createHumanoidRenderer();
addIronHelmetLeggingsRenderType(IronHelmetLeggingsRenderType);

//1001 - 9
mergeFunctions("addIronHelmetBootsRenderType", addIronHelmetRenderType, addIronBootsRenderType, ["renderer"]);
var IronHelmetBootsRenderType = Renderer.createHumanoidRenderer();
addIronHelmetBootsRenderType(IronHelmetBootsRenderType);

//0110 - 6
mergeFunctions("addIronBodyLeggingsRenderType", addIronBodyRenderType, addIronLeggingsRenderType, ["renderer"]);
var IronBodyLeggingsRenderType = Renderer.createHumanoidRenderer();
addIronBodyLeggingsRenderType(IronBodyLeggingsRenderType);

//0111 - 7
mergeFunctions("addIronBodyLeggingsBootsRenderType", addIronBodyLeggingsRenderType, addIronBootsRenderType, ["renderer"]);
var IronBodyLeggingsBootsRenderType = Renderer.createHumanoidRenderer();
addIronBodyLeggingsBootsRenderType(IronBodyLeggingsBootsRenderType);

//1110 - 14
mergeFunctions("addIronHelmetBodyLeggingsRenderType", addIronHelmetBodyRenderType, addIronLeggingsRenderType, ["renderer"]);
var IronHelmetBodyLeggingsRenderType = Renderer.createHumanoidRenderer();
addIronHelmetBodyLeggingsRenderType(IronHelmetBodyLeggingsRenderType);

//1011 - 11
mergeFunctions("addIronHelmetLeggingsBootsRenderType", addIronHelmetLeggingsRenderType, addIronBootsRenderType, ["renderer"]);
var IronHelmetLeggingsBootsRenderType = Renderer.createHumanoidRenderer();
addIronHelmetLeggingsBootsRenderType(IronHelmetLeggingsBootsRenderType);

//1101 - 13
mergeFunctions("addIronHelmetBodyBootsRenderType", addIronHelmetBodyRenderType, addIronBootsRenderType, ["renderer"]);
var IronHelmetBodyBootsRenderType = Renderer.createHumanoidRenderer();
addIronHelmetBodyBootsRenderType(IronHelmetBodyBootsRenderType);

//1111 - 15
mergeFunctions("addIronHelmetBodyLeggingsBootsRenderType", addIronHelmetBodyLeggingsRenderType, addIronBootsRenderType, ["renderer"]);
var IronHelmetBodyLeggingsBootsRenderType = Renderer.createHumanoidRenderer();
addIronHelmetBodyLeggingsBootsRenderType(IronHelmetBodyLeggingsBootsRenderType);

function makeCustomArmorRenderType() {
	var playerIron = [ Player.getArmorSlot(0) == 306, Player.getArmorSlot(1) == 307, Player.getArmorSlot(2) == 308, Player.getArmorSlot(3) == 309 ];
	if(playerIron[0] && !playerIron[1] && !playerIron[2] && !playerIron[3]) Entity.setRenderType(Player.getEntity(), IronHelmetRenderType.renderType);
	else if(!playerIron[0] && playerIron[1] && !playerIron[2] && !playerIron[3]) Entity.setRenderType(Player.getEntity(), IronBodyRenderType.renderType);
	else if(!playerIron[0] && !playerIron[1] && playerIron[2] && !playerIron[3]) Entity.setRenderType(Player.getEntity(), IronLeggingsRenderType.renderType);
	else if(!playerIron[0] && !playerIron[1] && !playerIron[2] && playerIron[3]) Entity.setRenderType(Player.getEntity(), IronBootsRenderType.renderType);
	else if(playerIron[0] && playerIron[1] && !playerIron[2] && !playerIron[3]) Entity.setRenderType(Player.getEntity(), IronHelmetBodyRenderType.renderType);
	else if(playerIron[0] && !playerIron[1] && playerIron[2] && !playerIron[3]) Entity.setRenderType(Player.getEntity(), IronHelmetLeggingsRenderType.renderType);
	else if(playerIron[0] && !playerIron[1] && !playerIron[2] && playerIron[3]) Entity.setRenderType(Player.getEntity(), IronHelmetBootsRenderType.renderType);
	else if(!playerIron[0] && playerIron[1] && playerIron[2] && !playerIron[3]) Entity.setRenderType(Player.getEntity(), IronBodyLeggingsRenderType.renderType);
	else if(!playerIron[0] && playerIron[1] && !playerIron[2] && playerIron[3]) Entity.setRenderType(Player.getEntity(), IronBodyBootsRenderType.renderType);
	else if(!playerIron[0] && !playerIron[1] && playerIron[2] && playerIron[3]) Entity.setRenderType(Player.getEntity(), IronLeggingsBootsRenderType.renderType);
	
	else if(playerIron[0] && playerIron[1] && playerIron[2] && !playerIron[3]) Entity.setRenderType(Player.getEntity(), IronHelmetBodyLeggingsRenderType.renderType);
	else if(playerIron[0] && playerIron[1] && !playerIron[2] && playerIron[3]) Entity.setRenderType(Player.getEntity(), IronHelmetBodyBootsRenderType.renderType);
	else if(playerIron[0] && !playerIron[1] && playerIron[2] && playerIron[3]) Entity.setRenderType(Player.getEntity(), IronHelmetLeggingsBootsRenderType.renderType);
	else if(!playerIron[0] && playerIron[1] && playerIron[2] && playerIron[3]) Entity.setRenderType(Player.getEntity(), IronBodyLeggingsBootsRenderType.renderType);
	
	else if(playerIron[0] && playerIron[1] && playerIron[2] && playerIron[3]) Entity.setRenderType(Player.getEntity(), IronHelmetBodyLeggingsBootsRenderType.renderType);
	else Entity.setRenderType(Player.getEntity(), EntityRenderType.PLAYER);
}

function modTick() {
	
}
