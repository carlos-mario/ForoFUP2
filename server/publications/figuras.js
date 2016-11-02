Meteor.publish("figuras_form", function(){
	return FigurasForm.find({});
});