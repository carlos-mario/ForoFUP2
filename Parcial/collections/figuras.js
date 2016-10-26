FigurasForm =new Meteor.Collection('figuras_form');

FigurasForm.allow({
	insert: function(figuraId, doc){
		return figuraId;
	},
	update: function(figuraId, doc, fields, modifier){
		return figuraId;
	},
	remove: function(figuraId, doc){
		return figuraId;
	}
});