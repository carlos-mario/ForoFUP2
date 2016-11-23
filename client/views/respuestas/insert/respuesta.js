Template.Respuesta.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('respuestas_form');
    });
});

Template.Respuesta.helpers({

});

Template.Respuesta.events({
    'submit': function (event){
      event.preventDefault();
      // var id_respuesta = event.target.id_respuesta.value;
      var contenido_respuesta = event.target.contenido_respuesta.value;
      // var fecha_respuesta = event.target.fecha_respuesta.value;

      var respuesta = {

        // id_respuesta: id_respuesta, 
        contenido_respuesta: contenido_respuesta,
        // fecha_respuesta: fecha_respuesta,
        createdAt: new Date()        
      }

      Meteor.call('RespuestasForm.insert', respuesta);

  	  // event.target.id_respuesta.value = "";
      event.target.contenido_respuesta.value = "";
      // event.target.fecha_respuesta.value = "";
	    
      console.log("Respuesta: ", respuesta); 
      FlowRouter.go('respuestas');         
    }
});