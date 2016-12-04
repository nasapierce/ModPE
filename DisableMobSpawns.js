function entityAddedHook(entity) {
	if(Entity.getEntityTypeId(entity) !== EntityType.PLAYER) {
		Entity.remove(entity);
	}
}
