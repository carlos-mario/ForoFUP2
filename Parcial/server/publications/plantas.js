Meteor.publish("plantas_form", function(){
	return PlantasForm.find({});
});