DeportesForm =new Meteor.Collection('deportes_form');

DeportesForm.allow({
	insert: function(deporteId, doc){
		return deporteId;
	},
	update: function(deporteId, doc, fields, modifier){
		return deporteId;
	},
	remove: function(deporteId, doc){
		return deporteId;
	}
});