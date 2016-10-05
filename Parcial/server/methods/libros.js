Meteor.methods({
	'LibrosForm.insert': function(params){
		return LibrosForm.insert(params);
	},
	'LibrosForm.update': function(params){
		return LibrosForm.update({_id: params.id}, params.params);
	},
	'LibrosForm.remove': function(params){
		return LibrosForm.remove(params);
	}
})