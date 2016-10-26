PlantasForm =new Meteor.Collection('PlantasForm');

PlantasForm.allow({
	insert: function(plantasId, doc){
		return plantasId;
	},
	update: function(plantasId, doc, fields, modifier){
		return plantasId;
	},
	remove: function(plantasId, doc){
		return plantasId;
	}
})