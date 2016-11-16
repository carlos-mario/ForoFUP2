ForosForm =new Meteor.Collection('foros_form');

ForosForm.allow({
	insert: function(foroId, doc){
		return foroId;
	},
	update: function(foroId, doc, fields, modifier){
		return foroId;
	},
	remove: function(foroId, doc){
		return foroId;
	}
});