UsuariosForm =new Meteor.Collection('usuarios_form');

UsuariosForm.allow({
	insert: function(usuarioId, doc){
		return usuarioId;
	},
	update: function(usuarioId, doc, fields, modifier){
		return usuarioId;
	},
	remove: function(usuarioId, doc){
		return usuarioId;
	}
});