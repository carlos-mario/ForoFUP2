Template.Usuario.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('usuarios_form');
    });
});

Template.Usuario.helpers({

});

Template.Usuario.events({
    'submit': function (event){
      event.preventDefault();
      var id_usuario = event.target.id_usuario.value;
      var nombres = event.target.nombres.value;
      var apellidos = event.target.apellidos.value;
      var correo = event.target.correo.value;
      var contraseña = event.target.contraseña.value;

      var usuario = {

        id_usuario: id_usuario, 
        nombres: nombres,
        apellidos: apellidos,
        correo: correo,
        contraseña: contraseña,
        createdAt: new Date()        
      }

      Meteor.call('UsuariosForm.insert', usuario);

  	  event.target.id_usuario.value = "";
      event.target.nombres.value = "";
      event.target.apellidos.value = "";
      event.target.correo.value = "";
      event.target.contraseña.value = "";
      console.log("Usuario: ", usuario); 
      FlowRouter.go('usuarios');         
    }
});