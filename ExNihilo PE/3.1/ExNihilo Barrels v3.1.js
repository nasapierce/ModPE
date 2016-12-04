//barrels
var compost = [6,391,392,37,38,360,103,86,18,287,296,297,39,40,260,91,400,81,338,31,319,320,363,364,365,366,344];
function useItem (x, y, z, itemId, blockId, side)
{
var item = getCarriedItem();
if (compost.indexOf(item) >= 0)
{
if (blockId==228)
{
addItemInventory(item,-1,Player.getCarriedItemData());
addItemInventory(3,1);
}}
if (compost.indexOf(item) >= 0)
{
if (blockId==229)
{
addItemInventory(item,-1,Player.getCarriedItemData());
addItemInventory(3,1);
}}
if (compost.indexOf(item) >= 0)
{
if (blockId==230)
{
addItemInventory(item,-1,Player.getCarriedItemData());
addItemInventory(3,1);
}}
if (compost.indexOf(item) >= 0)
{
if (blockId==231)
{
addItemInventory(item,-1,Player.getCarriedItemData());
addItemInventory(3,1);
}}
if (compost.indexOf(item) >= 0)
{
if (blockId==232)
{
addItemInventory(item,-1,Player.getCarriedItemData());
addItemInventory(3,1);
}}

//water...
if (itemId==325&&Player.getCarriedItemData()==8&&blockId==228)
{
preventDefault();
Entity.setCarriedItem(Player.getEntity(),parseInt(325),1,0);
setTile (x, y, z,233,0);
clientMessage(ChatColor.BLUE + "You put water in the barrel");
}
if (itemId==325&&Player.getCarriedItemData()==0&&blockId==233)
{
preventDefault();
Entity.setCarriedItem(Player.getEntity(),parseInt(325),1,8);
setTile (x, y, z,228,0);
clientMessage(ChatColor.BLUE + "You took water out of the barrel");
}
if (itemId==325&&Player.getCarriedItemData()==8&&blockId==229)
{
preventDefault();
Entity.setCarriedItem(Player.getEntity(),parseInt(325),1,0);
setTile (x, y, z,234,0);
clientMessage(ChatColor.BLUE + "You put water in the barrel");
}
if (itemId==325&&Player.getCarriedItemData()==0&&blockId==234)
{
preventDefault();
Entity.setCarriedItem(Player.getEntity(),parseInt(325),1,8);
setTile (x, y, z,229,0);
clientMessage(ChatColor.BLUE + "You took water out of the barrel");
}
if (itemId==325&&Player.getCarriedItemData()==8&&blockId==230)
{
preventDefault();
Entity.setCarriedItem(Player.getEntity(),parseInt(325),1,0);
setTile (x, y, z,235,0);
clientMessage(ChatColor.BLUE + "You put water in the barrel");
}
if (itemId==325&&Player.getCarriedItemData()==0&&blockId==235)
{
preventDefault();
Entity.setCarriedItem(Player.getEntity(),parseInt(325),1,8);
setTile (x, y, z,230,0);
clientMessage(ChatColor.BLUE + "You took water out of the barrel");
}
if (itemId==325&&Player.getCarriedItemData()==8&&blockId==232)
{
preventDefault();
Entity.setCarriedItem(Player.getEntity(),parseInt(325),1,0);
setTile (x, y, z,236,0);
clientMessage(ChatColor.BLUE + "You put water in the barrel");
}
if (itemId==325&&Player.getCarriedItemData()==0&&blockId==236)
{
preventDefault();
Entity.setCarriedItem(Player.getEntity(),parseInt(325),1,8);
setTile (x, y, z,232,0);
clientMessage(ChatColor.BLUE + "You took water out of the barrel");
}
if (itemId==12)
{
if (blockId==233)
{
preventDefault();
addItemInventory(12, -1);
Level.dropItem(x, y+1, z,0,82,1);
setTile(x, y, z, 228);
}}

}
