//Custom Render Type
//create more, just copy and paste

function addMyRenderType(renderer) {
	//the scale of the model, to make it smaller, make it negitive
	var var2 = 0;
	//the model of the render
	var model = renderer.getModel();
	//the part of the model 		clear the part
	var head = model.getPart("head").clear();
	var body = model.getPart("body").clear();
	var rArm = model.getPart("rightArm").clear();
	var lArm = model.getPart("leftArm").clear();
	var rLeg = model.getPart("rightLeg").clear();
	var lLeg = model.getPart("leftLeg").clear();
	
	//to add to our now blank model, we will do
	//part.addBox(x, y, z, width, height, depth, scale);
	head.addBox(-4, -4, -4, 8, 8, 8, var2); //we do -4 to center it
	//to center (mathmatically in your head)
	//x = -(width/2)
	//y = -(height/2)
	//z = -(depth/2)
	
	//now add more boxes
	
	//part.setTextureOffset(u, v);
	//this will allow you to use UVs for texturing
	//if you set u to 32 and v to 0, 
	//the part uses the texture from the u and v
	//to the u and v plus the width|height|depth
	//example- our head is 8*8*8
	head.setTextureOffset(2, 2);
	//now the texture of each face will be from the texture's
	//2,2 coord to it's 10,10 coord, make sense?
	
	//if I did
	body.addBox(0, 0, 0, 5, 10, 4);
	//and
	body.setTextureOffset(2, 2);
	//there are 6 different faces to body now,
	//the top and bottom (5*4)
	//the left and right (4*10)
	//the front and back (5*10)
	//now the texture of each of these faces is the uv offset + the width|height|depth
	//make sense?
	
	//part.setTextureSize(width, height);
	//sets the size of the texture: 64x or 32x64 ya know...
	
	//part.setRotationPoint(x, y, z);
	//last time I checked this didnt work, but that was ages ago.
	//try to give it a try?
}

//create a humanoid model to pass to addMyRenderType();
var MyRenderType = Renderer.createHumanoidRenderer();
addMyRenderType(MyRenderType);

//when the player touches a block
function useItem(x, y, z, itemId, blockId, side, itemData, blockData) {
	if(itemId == 280) { //stick
		//spawn a mob where we tapped, we are spawning a pig to make it look like our model
		//the last parameter is the skin(texture) of the mob
		var test = Level.spawnMob(x, y + 1, z, EntityType.PIG, "mob/pig.png");   
		//set the rendertype of our mob to our rendertype
		Entity.setRenderType(test, MyRenderType.renderType);
	}
}
