Meteor.publish("temas_form", function(){
	return TemasForm.find({});
});