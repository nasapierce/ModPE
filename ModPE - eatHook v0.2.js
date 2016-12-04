//paste in code
var nowAmount;
var nowId;
var nowData;
var lastAmount;
var lastId;
var lastData;
var lastBlock;

//add food item id's here 
var foodItems = [260,282,297,319,320,349,350,357,360,363,364,365,366,367,391,392,393,400];

var invBlocks = [54,58,61,62,60];
//add inventory blocks here - or farming...

function useItem(x,y,z,itemId,blockId){
	lastBlock = blockId;
	if(invBlocks.indexOf(lastBlock)>=0){
		clientMessage("Please tap a normal block before eating any food");
	}
}

var tick = 0;

function modTick(){
	nowId = Player.getCarriedItem();
	nowData = Player.getCarriedItemData();
	nowAmount = Player.getCarriedItemCount();
	if(foodItems.indexOf(nowId)>=0){
		tick++;
		if(tick==20){
			tick=0;
			if(nowId==lastId){
				if(nowData==lastData){
					if(nowAmount!==lastAmount){
						if(invBlocks.indexOf(lastBlock)==-1){
							eatHook(lastId);
						}
					}
				}
			}
			else if(nowId!==lastId){
				if(nowAmount==0&&lastAmount==1){
					eatHook(lastId);
				}
			}
			lastId = Player.getCarriedItem();
			lastData = Player.getCarriedItemData();
			lastAmount = Player.getCarriedItemCount();
		}
	}
}

function eatHook(foodId){
	//now you can do if statements and ooh, do a switch :3
	if(foodId==260){ //if you eat an apple
		//do this...
		clientMessage("Ate An Apple!");
	}
}
