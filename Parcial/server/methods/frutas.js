Meteor.methods({
	'FrutasForm.insert': function(params){
		return FrutasForm.insert(params);
	},
	'FrutasForm.update': function(params){
		return FrutasForm.update({_id: params.id}, params.params);
	},
	'FrutasForm.remove': function(params){
		return FrutasForm.remove(params);
	}
})