Meteor.publish("foros_form", function(){
	return ForosForm.find({});
});