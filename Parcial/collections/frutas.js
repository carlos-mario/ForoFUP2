FrutasForm =new Meteor.Collection('FrutasForm');

FrutasForm.allow({
	insert: function(frutasId, doc){
		return frutasId;
	},
	update: function(frutasId, doc, fields, modifier){
		return frutasId;
	},
	remove: function(frutasId, doc){
		return frutasId;
	}
})