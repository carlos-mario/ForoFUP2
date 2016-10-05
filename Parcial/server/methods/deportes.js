Meteor.methods({
	'DeportesForm.insert': function(params){
		return DeportesForm.insert(params);
	},
	'DeportesForm.update': function(params){
		return DeportesForm.update({_id: params.id}, params.params);
	},
	'DeportesForm.remove': function(params){
		return DeportesForm.remove(params);
	}
})