ModPE.setFoodItem(500,"apple_golden",0,8,"Golden Apple");
Player.addItemCreativeInv(500,1,0);

//paste in code
var nowAmount;
var nowId;
var nowData;
var lastAmount;
var lastId;
var lastData;
var lastBlock;

//add food item id's here 
var foodItems = [260,282,297,319,320,349,350,357,360,363,364,365,366,367,391,392,393,400,500];

//add inventory blocks here - or farming...
var invBlocks = [54,58,60,61,62];

function useItem(x,y,z,itemId,blockId){
	lastBlock = blockId; //set the last block the player tapped
	if(invBlocks.indexOf(lastBlock)>=0){
		clientMessage("Please tap a Normal Block before eating.");
	}
}

var tick = 0;

function modTick(){
	//DO NOT EDIT BELOW UNLESS YOU KNOW WHAT YOU ARE DOING
	nowId = Player.getCarriedItem();
	nowData = Player.getCarriedItemData();
	nowAmount = Player.getCarriedItemCount();
	if(foodItems.indexOf(nowId)>=0){ //if the carried item is in foodItems array
		tick++; //add to tick
		if(tick==20){ //if tick is 20
			tick=0; //set tick back to 0
			if(nowId==lastId){ //if the lastId & nowId match
				if(nowData==lastData){ //if the lastData & nowData match
					if((lastAmount-1)==nowAmount){ //if the lastAmount is 1 more than nowAmount
						if(invBlocks.indexOf(lastBlock)==-1){ //if the last block tapped was not an inv block
							eatHook(lastId); //call eatHook
						}
					}
				}
			}
			lastId = Player.getCarriedItem();
			lastData = Player.getCarriedItemData();
			lastAmount = Player.getCarriedItemCount();
		}
	}
	//trying to fix the single item bug...
	if(nowId==0){ //if the player is now holding air
		if(nowSlotId==lastSlotId){ //if the player hasn't changed slots
			if(foodItems.indexOf(lastId)>=0){ //if the last item is in foodItems array
				if(invBlocks.indexOf(lastBlock)==-1){ //if the last block tapped wasn't an inv block
					eatHook(lastId); //call eatHook
					lastId=0; //set last item to 0
				}
			}
		}
	}
	if(foodItems.indexOf(nowId)==-1){ //if the held item is not in the foodItems array
		if(nowId!==0){ //if item is not 0
			lastId=0; //set last item to 0
		}
	}
	//DO NOT EDIT ABOVE THIS UNLESS YOU KNOW WHAT YOU ARE DOING
}

function eatHook(foodId){
	//now you can do if statements and ooh, do a switch :3
	if(foodId==500){ //if you eat an apple
		Entity.addEffect(Player.getEntity(), MobEffect.regeneration, 30*20, 1, false, true);
	}
}
