//Animated Held Item
var text = [["axe",0],["axe",0],["axe",0],["axe",1],["axe",1],["axe",1],["axe",2],["axe",2],["axe",2],["axe",3],["axe",3],["axe",3],["axe",4],["axe",4],["axe",4]];
var num = 0;

function modTick(){
	if(Player.getCarriedItem()==500){
		num++;
		if(num==12){
			num=0;
		}
		defineItem();
		Entity.setCarriedItem(Player.getEntity(),parseInt(500), 1, 0);
	}
}

function defineItem(){
	ModPE.setItem(500,text[num][0],text[num][1],"Changing Axe",1);
}

function newLevel(){
	defineItem();
	Entity.setCarriedItem(Player.getEntity(),parseInt(500), 1, 0);
}
