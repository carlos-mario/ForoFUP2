Template.Usuarios.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('usuarios_form');
    });
});

Template.Usuarios.helpers({
    usuarios:function () {
        return UsuariosForm.find({},{sort:{createdAt: -1}}).fetch();
    }

});

Template.Usuarios.events({
	'click .add-users': function(event){
		console.log("add usuario");
		FlowRouter.go('usuario');
	}
});
