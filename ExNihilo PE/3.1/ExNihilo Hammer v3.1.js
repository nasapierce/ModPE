//hammer damage
var woodham = 60;
var stoneham = 132;
var ironham = 251;
var goldham = 33;
var diaham = 1562;
function newLevel()
{
ModPE.readData("woodham");
ModPE.readData("stoneham");
ModPE.readData("ironham");
ModPE.readData("goldham");
ModPE.readData("diaham");
}
function leaveGame()
{
ModPE.saveData("woodham");
ModPE.saveData("stoneham");
ModPE.saveData("ironham");
ModPE.saveData("goldham");
ModPE.saveData("diaham");
}

function procCmd(cmd)
{
var arg = cmd.split(" ");
if (arg[0] == "damage")
{
clientMessage("Diamond:"+diaham);
clientMessage("Gold:"+goldham);
clientMessage("Iron:"+ironham);
clientMessage("Stone:"+stoneham);
clientMessage("Wood:"+woodham);
}}

function useItem(x, y, z, itemId, blockId, side)
{
if(itemId == 446)
{
woodham --;
if(woodham == 0)
{
clientMessage("broke");
woodham = 60;
Entity.setCarriedItem(Player.getEntity(),parseInt(0),0,0);
}}
if(itemId == 447)
{
stoneham --;
if(stoneham == 0)
{
clientMessage("broke");
stoneham = 132;
Entity.setCarriedItem(Player.getEntity(),parseInt(0),0,0);
}}
if(itemId == 450)
{
goldham --;
if(goldham == 0)
{
clientMessage("broke");
goldham = 33;
Entity.setCarriedItem(Player.getEntity(),parseInt(0),0,0);
}}
if(itemId == 449)
{
diaham --;
if(diaham == 0)
{
clientMessage("broke");
diaham = 1562;
Entity.setCarriedItem(Player.getEntity(),parseInt(0),0,0);
}}
if(itemId == 448)
{
ironham --;
if(ironham == 0)
{
clientMessage("broke");
ironham = 251;
Entity.setCarriedItem(Player.getEntity(),parseInt(0),0,0);
}}
}