FrutasForm =new Meteor.Collection('frutas_form');

FrutasForm.allow({
	insert: function(frutaId, doc){
		return frutaId;
	},
	update: function(frutaId, doc, fields, modifier){
		return frutaId;
	},
	remove: function(frutaId, doc){
		return frutaId;
	}
});