Template.EditUsuario.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('usuarios_form');
    });
});

Template.EditUsuario.onRendered(function () {
    $('.modal-trigger').leanModal();
});

Template.EditUsuario.helpers({
    usuario: function () {
        var id = FlowRouter.getParam('id');
        return UsuariosForm.findOne({_id: id});
    }
});

Template.EditUsuario.events({
    'submit': function (event) {
        event.preventDefault();
        var id_usuario = event.target.id_usuario.value;
        var nombres = event.target.nombres.value;
        var nickname = event.target.nickname.value;
        var apellidos = event.target.apellidos.value;
        var correo = event.target.correo.value;
		var contraseña = event.target.contraseña.value;

        var usuario_updated = {
            id: FlowRouter.getParam('id'),
            params: {
                $set: {
					id_usuario: id_usuario, 
					nombres: nombres,
                    nickname:nickname,
					apellidos: apellidos,
					correo: correo,
					contraseña: contraseña
                }
            }
        }

        Meteor.call('UsuariosForm.update', usuario_updated);

        event.target.id_usuario.value = "";
		event.target.nombres.value = "";
        event.target.nickname.value = "";
		event.target.apellidos.value = "";
		event.target.correo.value = "";
		event.target.contraseña.value = "";
        FlowRouter.go('usuarios');
    },
    'click .delete': function (event) {
        event.preventDefault();
        Meteor.call('UsuariosForm.remove', {_id:FlowRouter.getParam('id')});
        FlowRouter.go('usuarios');
    }
});