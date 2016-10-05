DeportesForm =new Meteor.Collection('DeportesForm');

DeportesForm.allow({
	insert: function(deportesId, doc){
		return deportesId;
	},
	update: function(deportesId, doc, fields, modifier){
		return deportesId;
	},
	remove: function(deportesId, doc){
		return deportesId;
	}
})