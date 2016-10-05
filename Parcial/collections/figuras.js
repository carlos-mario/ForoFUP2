FigurasForm =new Meteor.Collection('FigurasForm');

FigurasForm.allow({
	insert: function(figurasId, doc){
		return figurasId;
	},
	update: function(figurasId, doc, fields, modifier){
		return figurasId;
	},
	remove: function(figurasId, doc){
		return figurasId;
	}
})