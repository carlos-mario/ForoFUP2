Meteor.publish("deportes_form", function(){
	return DeportesForm.find({});
});