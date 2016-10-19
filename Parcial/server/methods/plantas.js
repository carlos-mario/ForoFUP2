Meteor.methods({
	'PlantasForm.insert': function(params){
		return PlantasForm.insert(params);
	},
	'PlantasForm.update': function(params){
		return PlantasForm.update({_id: params.id}, params.params);
	},
	'PlantasForm.remove': function(params){
		return PlantasForm.remove(params);
	}
})