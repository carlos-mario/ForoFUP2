Meteor.methods({
	'ForosForm.insert': function(params){
		return ForosForm.insert(params);
	},
	'ForosForm.update': function(params){
		return ForosForm.update({_id: params.id}, params.params);
	},
	'ForosForm.remove': function(params){
		ForosForm.remove(params);
	}
});