Meteor.publish("libros_form", function(){
	return LibrosForm.find({});
});
