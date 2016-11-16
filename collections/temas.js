TemasForm = new Meteor.Collection('temas_form');

TemasForm.allow({
	insert: function(temaId, doc){
		return temaId;
	},
	update: function(temaId, doc, fields, modifier){
		return temaId;
	},
	remove: function(temaId, doc){
		return temaId;
	}
});


