LibrosForm =new Meteor.Collection('libros_form');

LibrosForm.allow({
	insert: function(libroId, doc){
		return libroId;
	},
	update: function(libroId, doc, fields, modifier){
		return libroId;
	},
	remove: function(libroId, doc){
		return libroId;
	}
})
