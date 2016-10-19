Meteor.publish("vehiculos_form", function(){
	return VehiculosForm.find({});
});