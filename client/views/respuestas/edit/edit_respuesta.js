Template.EditRespuesta.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('respuestas_form');
    });
});

Template.EditRespuesta.onRendered(function () {
    $('.modal-trigger').leanModal();
});

Template.EditRespuesta.helpers({
    respuesta: function () {
        var id = FlowRouter.getParam('id');
        return RespuestasForm.findOne({_id: id});
    }
});

Template.EditRespuesta.events({
    'submit': function (event) {
        event.preventDefault();
        // var id_respuesta = event.target.id_respuesta.value;
        var contenido_respuesta = event.target.contenido_respuesta.value;
        // var fecha_respuesta = event.target.fecha_respuesta.value;
 

        var respuesta_updated = {
            id: FlowRouter.getParam('id'),
            params: {
                $set: {
					// id_respuesta: id_respuesta, 
					contenido_respuesta: contenido_respuesta,
                    // fecha_creacion_foro: fecha_creacion_foro,
					createdAt: new Date()
                }
            }
        }

        Meteor.call('RespuestasForm.update', respuesta_updated);

        // event.target.id_respuesta.value = "";
		event.target.contenido_respuesta.value = "";
		// event.target.fecha_respuesta.value = "";
        FlowRouter.go('respuestas');
    },
    'click .delete': function (event) {
        event.preventDefault();
        Meteor.call('RespuestasForm.remove', {_id:FlowRouter.getParam('id')});
        FlowRouter.go('respuestas');
    }
});