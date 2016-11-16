RespuestasForm = new Meteor.Collection('respuestas_form');

RespuestasForm.allow({
	insert: function(respuestaId, doc){
		return respuestaId;
	},
	update: function(respuestaId, doc, fields, modifier){
		return respuestaId;
	},
	remove: function(respuestaId, doc){
		return respuestaId;
	}
});