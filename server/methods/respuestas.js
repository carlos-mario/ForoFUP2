Meteor.methods({
	'RespuestasForm.insert': function(params){
		return RespuestasForm.insert(params);
	},
	'RespuestasForm.update': function(params){
		return RespuestasForm.update({_id: params.id}, params.params);
	},
	'RespuestasForm.remove': function (params) {
        RespuestasForm.remove(params);
    },
});