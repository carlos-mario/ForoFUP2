Meteor.methods({
	'FigurasForm.insert': function(params){
		return FigurasForm.insert(params);
	},
	'FigurasForm.update': function(params){
		return FigurasForm.update({_id: params.id}, params.params);
	},
	'FigurasForm.remove': function(params){
		return FigurasForm.remove(params);
	}
})