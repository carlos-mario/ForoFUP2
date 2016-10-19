Meteor.publish("frutas_form", function(){
	return FrutasForm.find({});
});