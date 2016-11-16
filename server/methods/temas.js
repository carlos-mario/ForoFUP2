Meteor.methods({
	
	'TemasForm.insert': function(params){
		return TemasForm.insert(params);
	},
	'TemasForm.update': function(params){
		return TemasForm.update({_id: params.id}, params.params);
	},
	'TemasForm.remove': function (params) {
        TemasForm.remove(params);
    },
});