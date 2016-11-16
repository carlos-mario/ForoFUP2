Meteor.methods({
	'UsuariosForm.insert': function(params){
		return UsuariosForm.insert(params);
	},
	'UsuariosForm.update': function(params){
		return UsuariosForm.update({_id: params.id}, params.params);
	},
	'UsuariosForm.remove': function(params){
		UsuariosForm.remove(params);
	},
});