Meteor.publish("usuarios_form", function(){
	return UsuariosForm.find({});
});

Meteor.publish("allUsers", function () {
  return Meteor.users.find({});
});