Template.EditForo.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('foros_form');
    });
});

Template.EditForo.onRendered(function () {
   $('.modal-trigger').leanModal();
});

Template.EditForo.helpers({
    foro: function () {
        var id = FlowRouter.getParam('id');
        return ForosForm.findOne({_id: id});
    }
});

Template.EditForo.events({
    'submit': function (event) {
        event.preventDefault();
        // var titulo_foro = event.target.titulo_foro.value;
        var descripcion = event.target.descripcion.value;
        // var fecha_creacion_foro = event.target.fecha_creacion_foro.value;
        	
        var foro_updated = {
            id: FlowRouter.getParam('id'),
            params: {
                $set: {
					  // titulo_foro: titulo_foro,
                      descripcion: descripcion,
                      // fecha_creacion_foro: fecha_creacion_foro,
                }
            }
        }

        Meteor.call('ForosForm.update', foro_updated);

        // event.target.titulo_foro.value = "";
		event.target.descripcion.value = "";
		// event.target.fecha_creacion_foro.value = "";
        FlowRouter.go('foros');
    },
    'click .delete': function (event) {
        event.preventDefault();
        Meteor.call('ForosForm.remove', {_id:FlowRouter.getParam('id')});
        FlowRouter.go('foros');
    }

});