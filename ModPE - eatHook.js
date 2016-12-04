/*
This code is under the GNU General Public License - Use at free will
	Credit wanted but not needed - Darkserver -
*/
var nowAmount, nowId, nowData, lastAmount, lastId, lastData, lastBlock, nowSlotId, lastSlotId;

//add food item id's here 
var foodItems = [260,282,297,319,320,349,350,357,360,363,364,365,366,367,391,392,393,400];

//add inventory blocks here - or farming...
var invBlocks = [54,58,60,61,62];

var tick = 0;

function modTick(){
	//DO NOT EDIT BELOW UNLESS YOU KNOW WHAT YOU ARE DOING
	lastBlock = Player.getPointedBlockId();
	nowId = Player.getCarriedItem();
	nowData = Player.getCarriedItemData();
	nowAmount = Player.getCarriedItemCount();
	nowSlotId = Player.getSelectedSlotId();
	if(foodItems.indexOf(nowId)>=0){ //if the carried item is in foodItems array
		tick++; //add to tick
		if(tick==10){ //if tick is 20
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
			lastSlotId = Player.getSelectedSlotId();
		}
	}
	//trying to fix the single item bug...
	if(nowId==0){ //if the player is now holding air
		if(foodItems.indexOf(lastId)>=0){ //if the last item is in foodItems array
			if(lastAmount==1){ //if the last amount is 1
				if(nowSlotId==lastSlotId){
					if(invBlocks.indexOf(lastBlock)==-1){ //if the last block tapped wasn't an inv block
						eatHook(lastId); //call eatHook
						lastId=0; //set last item to 0
					}
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

function eatHook(foodId){ //when the player eats an item
	if(foodId==260){ //if you eat an apple
		clientMessage("Ate An Apple!"); //does this.
	}
}
